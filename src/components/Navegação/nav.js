import styles from "./nav.module.css"
import ButtonNav from "../Button/button1Nav"
import ButtonNav2 from "../Button/button2Nav"

export default async function Nav(){
    return(
        <>
            <nav className={styles.nav}>
                <span className={styles.nav__item}>Bay Chronic</span>
                <li className={styles.nav__item}><a className={styles.nav__link}>Home</a></li>
                <li className={styles.nav__item}><a className={styles.nav__link}>Projeto</a></li>
                <div className={styles.nav__container}>
                    <ButtonNav></ButtonNav>
                    <ButtonNav2></ButtonNav2>
                </div>
            </nav>
        </>
    )
}