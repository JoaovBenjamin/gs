//importando css, bibliotecas next e componentes
import styles from "./Home.module.css"
import Nav from "../Navegação/nav"
import Image from "next/image"
import Footer from "../Footer/Footer"

//Montando meu componente
export default function HomePage(){
 return(
    <>
        <Nav></Nav>
        <section className={styles.conteudo}>
            <h1 className={styles.conteudo__titulo}>Bem-Vindo ao Bay Chronic</h1>
            <article>
                <div className={styles.conteudo__texto}>
                <div className={styles.conteudo__texto__container}>
                    <h2 className={styles.conteudo__texto__titulo}>O que é a Bay Chronic ?</h2>
                    <p className={styles.conteudo__texto__paragrafo}>A Bay Chronic surgiu para inovar a telemedicina trazendo mais velocidade e confiabilidade no atendimento.</p>
                </div>
                    <Image src="/assets/hospital.png" width={350} height={200} alt="hospital" ></Image> 
                </div>
            </article>
        </section>
        <section className={styles.conteudo}>
            <aside>
            <div className={styles.conteudo__texto}>
                <div className={styles.conteudo__texto__container}>
                    <h2 className={styles.conteudo__texto__titulo}>Qual é o nosso objetivo ?</h2>
                    <p className={styles.conteudo__texto__paragrafo}>Com um objetivo de melhorar a qualidade de vida do nosso cliente, a Bay Chronic, acredita em melhorar a aproximação entre paciente e médico</p>
                </div>    
                    <Image src="/assets/medico.png" width={250} height={120} alt="hospital" className={styles.conteudo__imagem} ></Image> 
                </div>
            </aside>
        </section>
        <Footer></Footer>
        </>
 )
}