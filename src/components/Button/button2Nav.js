// Importando os estilos
import styles from "./button.module.css"

//Criando componente
export default  function ButtonNav2(){
    return(
        <>
            <button className={styles.button_nav2}><a className={styles.link} href="/Cadastro">Cadastro</a></button>
        </>
    )
}