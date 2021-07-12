import Link from 'next/link'

import styles from './Header.module.scss'

export function Header(){
  return(
    <header className={`${styles.header}`}>
      <Link href='/'>
        <a className={styles.link}><span className={styles.element}>Br<span>35</span></span>pedia </a>
        </Link>
        <nav>
          <Link href='/personagem'>
            <a>Personagem</a>
          </Link>
        </nav>
    </header>
  )
}