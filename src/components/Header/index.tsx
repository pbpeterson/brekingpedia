import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import Head  from 'next/head'

import styles from './Header.module.scss'

export function Header(){

  return(
    <header className={`${styles.header} ${styles.container}`}>
      <Head>
        <title>Breakingpedia</title>
      </Head>
      <Link href='/'>
        <a className={styles.link}><span className={styles.element}>Br<span>35</span></span>pedia </a>
        </Link>
        <nav>
          <Link href='/personagem'>
            <a>Personagem</a>
          </Link>
          <Link href='/buscar'>
            <a>Pesquisar</a>
          </Link>
        </nav>
    </header>
  )
}