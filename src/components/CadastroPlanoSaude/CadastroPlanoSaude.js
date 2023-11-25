//Importando meus arquivos e o use client

"use client"
import styles from "../../styles/cadastros.module.css"
import handleCadastroPlanoDeSaude from "@/services/CadastroPlanoDeSaude/CadastroPlanoDeSaude";
import { useState } from "react";
import Footer from "../Footer/Footer";

const CadastroPlanoSaude = () => {
        //Armazenando estado e criando const

    const [nome, setNome] = useState("");
    const [nivel, setNivel] = useState("")
    const [mensagem, setMsg] = useState("");

    const handleClick = async () =>{
        //Exportando minha api e invocando os objetos

        const nomePlano = nome;
        const nivelPlano = nivel
        await handleCadastroPlanoDeSaude(nomePlano,nivelPlano)
                      //Mensagem de acerto

        setMsg("Plano Registrado com Sucesso")
                //Deixando vazios os inputs

        setNome('')
        setNivel('')
    }
    return(
                //Criando meu componente

        <>
            <section className={styles.container}>
              <h1 className={styles.container__titulo}>Cadastro de Contato com o Plano de Saude</h1>
              <label>
              <p className={styles.container__texto}>Nome: </p>
                <input className={styles.container__input} type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
              </label>
              <br />
              <label>
              <p className={styles.container__texto}>Nivel: </p>:
                <input className={styles.container__input} type="text" value={nivel} onChange={(e) => setNivel(e.target.value)} />
              </label>
              <br />
              <button className={styles.container__button} onClick={handleClick}>Cadastrar Plano de Saude</button>
              {mensagem && <p className={styles.mensagem}>{mensagem} <br></br> <a className={styles.mensagem__link} href="/CadastroCredencial">Clique aqui para continar</a></p>
                        
                      }

        </section>
        <Footer></Footer>
        </>
        
    )
}

export default CadastroPlanoSaude