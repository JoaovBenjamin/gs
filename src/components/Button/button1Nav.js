//importando meus estilos
import styles from "./button.module.css"

//Criando Componente
export default  function ButtonNav(){
    return(
        <>
         <button className={styles.button_nav}><a className={styles.link} href="/Login">Login</a></button>
        </>
    )
}