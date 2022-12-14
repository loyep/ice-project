import { useState } from 'react';
import logo from '@/assets/logo.png';
import styles from './index.module.css';
import { useData } from 'ice';

// Server 端专用的数据请求
export async function getServerData() {
  const date = Date.now()

  return { date };
}

export default function Home() {
  const data = useData();
  console.log(data)

  const [count, setCount] = useState(1);
  const updateCount = () => setCount((c) => c + 1);

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} alt="logo" className={styles.logo} />
        <p className={styles.title}>
          Hello ICE 3

          Date: {data?.date}
        </p>
      </header>
      <div className={styles.body}>
        <button type="button" onClick={updateCount}>
          👍🏻 {count}
        </button>
        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://v3.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn ICE
          </a>
        </p>
      </div>
    </div>
  );
}
