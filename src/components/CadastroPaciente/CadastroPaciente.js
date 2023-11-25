"use client"
import styles from "../../styles/cadastros.module.css"
import handleCadastroPaciente from "@/services/Cadastro/CadastroPaciente";
import { useState } from "react";
import Footer from "../Footer/Footer";



const CadastroPaciente = () => {
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [idade, setIdade] = useState('');
    const [mensagem, setMensagem] = useState('');

   
  
    const handleClick = async () => {
        const nomePaciente = nome;
        const telefonePaciente = telefone;
        const idadePaciente = idade;
        await handleCadastroPaciente(nomePaciente, telefonePaciente, idadePaciente);

        setMensagem('Cliente cadastrado com sucesso!');


        setNome('');
        setTelefone('');
        setIdade('');
        
      };
      
    return (
       <>
           <section className={styles.container}>
          <h1 className={styles.container__titulo}>Cadastro de Paciente</h1>
          <label>
           <p className={styles.container__texto}>Nome: </p>
            <input className={styles.container__input} type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <br />
          <label>
            <p className={styles.container__texto}>Numero: </p>
            <input className={styles.container__input}type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </label>
          <br />
          <label>
            <p className={styles.container__texto}>Idade: </p>
            <input className={styles.container__input} type="text" value={idade} onChange={(e) => setIdade(e.target.value)} />
          </label>
          <br />
          <button className={styles.container__button}  onClick={handleClick}>Cadastrar Paciente</button>
          {mensagem && <p className={styles.mensagem}>{mensagem} <br></br> <a className={styles.mensagem__link} href="/CadastroContato">Clique aqui para continar</a></p>
                        
          }
        </section>    
        <Footer></Footer>
       </>
      )

}

export default CadastroPaciente;