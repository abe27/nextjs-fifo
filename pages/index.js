import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoadingElement from "../components/loading";
import StatElement from "../components/stat";
import SearchElement from "../components/search";
import { Box } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";

Home.getInitialProps = async (ctx) => {
  try {
    const obj = [];
    return { obj };
  } catch (error) {
    return { error };
  }
};

export default function Home({ obj, error }) {
  const [txtShelve, setTxtShelve] = useState("Action");
  const [txtPartNo, setPartNo] = useState(null);
  const [data, setData] = useState(obj);

  const onHandleChange = async (e) => {
    setTxtShelve(`Action ${e.target.value}`);
    setData([]);
    setPartNo(e.target.value);
    if (e.target.value.length > 0 && e.target.value.length < 8) {
      setData(null);
    }

    if (e.target.value.length > 8) {
      try {
        const res = await axios.get(
          `http://851e0741942a.sn.mynetname.net:5050/detail/${e.target.value}`
        );
        const obj = res.data;
        setData(obj);
        setTxtShelve(`Action ${e.target.value}(${obj.length})`);
      } catch (error) {
        console.dir(error);
      }
    }
  };

  const handleShelveChange = async (txt) => {
    setPartNo(null);
    setData([]);
    let lnk = `http://851e0741942a.sn.mynetname.net:5050/shelve/${txt}`;
    try {
      const res = await axios.get(lnk);
      const obj = res.data;
      setData(obj);
      setTxtShelve(`${txt}(${obj.length})`);
    } catch (error) {
      console.dir(error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Part FIFO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box padding={4}>
          <SearchElement txtAction={txtShelve} handleChange={onHandleChange} handleShelve={handleShelveChange}/>
          {data == null && <LoadingElement />}
          {data != null && <StatElement objData={data}/>}
        </Box>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );

  // return <h4>Loading Data!</h4>;
}
