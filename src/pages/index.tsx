import { useRouter } from 'next/dist/client/router'
import styles from './Home.module.scss'

export default function Home() {

  const router = useRouter()

  return (
   <div className={styles.container}>
     <main className={styles.main}>
        <h1>A Melhor wikipédia sobre <span>Breaking Bad</span> do mundo todo.</h1>
        <button onClick={()=>router.push('/personagem')}>Descobrir</button>
     </main>
   </div>
  )
}
