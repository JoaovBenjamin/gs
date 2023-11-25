//Importando meus componentes e css
import styles from "./Projeto.module.css"
import Nav from "../Navegação/nav"
import Footer from "../Footer/Footer"
import Image from "next/image"

//Criando meu componente
export default function Projeto(){
    return(
        <>
        <Nav></Nav>
        <section className={styles.conteudo}>
            <h1 className={styles.conteudo__titulo}>Como Funciona o Projeto Bay Chronic</h1>
            <article>
                <div className={styles.conteudo__texto}>
                <div className={styles.conteudo__texto__container}>
                    <h2 className={styles.conteudo__texto__titulo}>Qual é objetivo do nosso projeto</h2>
                    <p className={styles.conteudo__texto__paragrafo}>A Bay Chronic quer inovar a telemedica atraves de um acompanhamento 24 horas do paciente, garantido mais conforto, versatilidade e principalmente qualidade de vida.</p>
                </div>
                    <Image src="/assets/hospital.png" width={350} height={200} alt="hospital" ></Image> 
                </div>
            </article>
        </section>
        <section className={styles.conteudo}>
            <aside>
            <div className={styles.conteudo__texto}>
                <div className={styles.conteudo__texto__container}>
                    <h2 className={styles.conteudo__texto__titulo}>Como funciona o projeto</h2>
                    <p className={styles.conteudo__texto__paragrafo}>Os nossos clientes da HapVida terão exclusividade ao aderir o nosso relogio que vai fazer um acompanhamento 24 horas de sua saúde. Caso aconteça alguma alteração indevida, nossos médicos receberam o alerta imediatamente em seu computador.</p>
                </div>    
                    <Image src="/assets/medico.png" width={250} height={120} alt="hospital" className={styles.conteudo__imagem} ></Image> 
                </div>
            </aside>
        </section>
        <Footer></Footer>
        </>
    )
}