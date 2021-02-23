import styles from '../styles/pages/Home.module.css';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/CountDown';
import Head from 'next/head';


export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>
          <ExperienceBar />

          <section>
            <div>
              <Profile />
              <CompleteChallenges />
              <Countdown />
            </div>

            <div>
              
            </div>
          </section>
      </div>
    </div>
  )
}
