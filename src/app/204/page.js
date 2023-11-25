import styles from "../../styles/error.module.css"
export default function error204(){
    return(
        <>
            <section className={styles.container}>
                <h1 className={styles.container__h1}>Erro 204</h1>
                <a className={styles.container__link} href="/">Volte para Home</a>    
            </section>        
        </>
    )
}