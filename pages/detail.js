import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";

DetailPage.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      `http://localhost:5050/detail/${ctx.query.part_no}`
    );
    const obj = res.data;
    return { obj };
  } catch (error) {
    return { error };
  }
};

export default function DetailPage({ obj, error }) {
  const router = useRouter();
  const { part_no } = router.query;
  return (
    <div className={styles.container}>
      <Head>
        <title>Part FIFO</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>
                  <Link href="/">
                    <a className="btn btn-sm">ย้อนกลับ</a>
                  </Link>
                </th>
                <th>Part No</th>
                <th>LOTNO</th>
                <td>SERIAL NO</td>
                <th>CTN</th>
                <th>Shelve</th>
              </tr>
            </thead>
            <tbody>
              {obj.map((x, i) => (
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
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
