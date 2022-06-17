import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
import { useState } from "react";

// Home.getInitialProps = async (ctx) => {
//   try {
//     const res = await axios.get("http://localhost:5050/part");
//     const obj = res.data;
//     return { obj };
//   } catch (error) {
//     return { error };
//   }
// };

export default function Home({ obj, error }) {
  const [txtPartNo, setPartNo] = useState(null);
  const [data, setData] = useState(obj);
  const handleChange = async (e) => {
    // console.dir(e.target.value)
    setData([])
    // setPartNo(e.target.value)
    try {
      const res = await axios.get(`http://localhost:5050/detail/${e.target.value}`);
      const obj = res.data;
      setData(obj)
      console.dir(obj)
    } catch (error) {
      console.dir(error)
    }
  }

  const handleClick = async (e) => {
    console.log(txtPartNo)
    try {
      const res = await axios.get(`http://localhost:5050/detail/${txtPartNo}`);
      const obj = res.data;
      setData(obj)
      console.dir(obj)
    } catch (error) {
      console.dir(error)
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Part FIFO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.container}>
        <br />
        <div>
          <div className="form-control">
            <div className="input-group input-group-sm">
              <input
                type="text"
                placeholder="Search…"
                className="input input-bordered"
                onChange={handleChange}
              />
              <button className="btn btn-square" onClick={handleClick}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <br />
        <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Part No</th>
              <th>LOTNO</th>
              <td>SERIAL NO</td>
              <th>CTN</th>
              <th>Shelve</th>
            </tr>
          </thead>
          <tbody>
            {data != null && data.map((x, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{x.part_no}</td>
                <td>{x.lotno}</td>
                <td>{x.serial_no}</td>
                <td>{x.qty}</td>
                <td>{x.shelve}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              width={72}
              height={16}
            />
          </span>
        </a>
      </footer>
    </div>
  );

  // return <h4>Loading Data!</h4>;
}
