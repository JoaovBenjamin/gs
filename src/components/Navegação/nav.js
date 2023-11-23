import styles from "./nav.module.css"
import ButtonNav from "../Button/button1Nav"
import ButtonNav2 from "../Button/button2Nav"
import Image from "next/image"

export default  function Nav(){
    return(
        <>
            <nav className={styles.nav}>
                <span className={styles.nav__item}>Bay Chronic</span>
                <li className={styles.nav__item}><a href="/" className={styles.nav__link}>Home</a></li>
                <li className={styles.nav__item}><a href="/Projeto"className={styles.nav__link}>Projeto</a></li>
                <div className={styles.nav__container}>
                    <ButtonNav></ButtonNav>
                    <ButtonNav2></ButtonNav2>
                </div>
                <div className={styles.nav__perfil}>
                    <Image src="/assets/perfil.png" height={50} width={50}alt="Logo de um usuario"></Image>
                    <p className={styles.nav__perfil__texto}>Perfil</p>
                </div>
            </nav>
        </>
    )
}