import Link from 'next/link'

import styles from './Header.module.scss'

export function Header(){
  return(
    <header className={`${styles.header} ${styles.container}`}>
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