//importando bibliotecas next e estilos
import styles from "../Home/Home.module.css"
import Image from "next/image"
import Footer from "../Footer/Footer"

//Montando meu componente
export default function LoginEfetuado(){
    return(
        <>
         <section className={styles.conteudo}>
            <h1 className={styles.conteudo__titulo}>Bem-Vindo ao Futuro</h1>
            <article>
                <div className={styles.conteudo__texto}>
                <div className={styles.conteudo__texto__container}>
                    <h2 className={styles.conteudo__texto__titulo}>Como adquirir o seu WeArable ?</h2>
                    <p className={styles.conteudo__texto__paragrafo}>Entre em contato com nossa equipe de vendedores e se identifique, ele cuidaram do resto, é rápido. Leva em média 5 minutos.</p>
                </div>
                    <Image src="/assets/relogio.png" width={350} height={200} alt="relogio" ></Image> 
                </div>
            </article>
        </section>
        <section className={styles.conteudo}>
            <aside>
            <div className={styles.conteudo__texto}>
                <div className={styles.conteudo__texto__container}>
                    <h2 className={styles.conteudo__texto__titulo}>Quais São os Beneficios</h2>
                    <p className={styles.conteudo__texto__paragrafo}>Dependendo do seu plano você pode concorrer varios beneficios e descontos exclusivos. Caso você queira fazer um combo, você terá mais desconto ainda. Entre em contato com a nossa equipe.</p>
                </div>    
                    <Image src="/assets/beneficios.png" width={250} height={110} alt="beneficios" className={styles.conteudo__imagem} ></Image> 
                </div>
            </aside>
        </section>
        <Footer></Footer>
        </>
    )
}