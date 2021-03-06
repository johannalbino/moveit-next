import styles from '../styles/pages/Home.module.css';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/CountDown';
import Head from 'next/head';
import { ChallengeBox } from '../components/ChallengeBox';
import { CountdownContext, CountdownProvider } from '../contexts/CountdownContext';


export default function Home() {
  return (
    <div>
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>
          <ExperienceBar />
          <CountdownProvider>
            <section>
              <div>
                <Profile />
                <CompleteChallenges />
                <Countdown />
              </div>
                <ChallengeBox />
              <div>
                
              </div>
            </section>
          </CountdownProvider>
      </div>
    </div>
  )
}
