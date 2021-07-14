import { GetServerSideProps } from "next"
import Link from "next/link"
import styles from './Personagem.module.scss'

interface charsProps{
  chars: Char[]
}

type Char = {
  id: string,
  name: string,
  birthday: string,
  status: string,
  img: string
}

interface charResponseProps{
  char_id: string,
  name: string,
  birthday: string,
  status: string[],
  occupation: string,
  appearance: string,
  img: string
}

export default function Personagens( {chars} : charsProps){
  return(
    <div className={styles.container}>
      <div>
        {chars.map(char =>(
          <Link key={char.id} href={`personagem/${char.id}`}>
            <a>
              <img src={char.img} alt={char.name} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () =>{

  const param = Math.round(Math.random()*49) 
  const res = await fetch(`https://breakingbadapi.com/api/characters?limit=9&offset=${param}`)
  const data = await res.json()
  const chars = data.map((char: charResponseProps) =>{
    return{
      id: char.char_id,
      name: char.name,
      birthday: char.birthday,
      status: char.status,
      occupation: char.occupation,
      season: char.appearance,
      img: char.img
    }
  })

  return{
    props:{
      chars
    }
  }
}