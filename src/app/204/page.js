//Importando arquivos necessarios
import styles from "../../styles/error.module.css"
import Image from "next/image"

//Criando meus componestes
export default function error204(){
    return(
        <>
            <section className={styles.container}>
                <h1 className={styles.container__h1}>Erro 204</h1>
                <p className={styles.container__p}>O erro veio por um motivo de falha na comunicação da API, por isso não consegue fazer o post</p>
                <Image src="/assets/error.png" width={300} height={200} alt="erro"></Image>
                <a className={styles.container__link} href="/">Volte para Home</a>    
            </section>        
        </>
    )
}