import React from "react";
import styles from './Header.module.css'

class Header extends React.Component{
    render(){
        return(
            <div className={styles.header}>
                <a href="#" className={styles.logo}>HABR</a>
                <div className={styles.headerRight}>
                    <a className={styles.active} href="#home">Все</a>
                    <a href="#">Новости</a>
                    <a href="#">Статьи</a>
                </div>
            </div>
        )
    }
}

export default Header;