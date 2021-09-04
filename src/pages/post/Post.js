import React from "react";
import styles from './Post.module.css'

class Post extends  React.Component{
    render(){
        return (
            <div className={styles.block}>
                <div className={styles.flex}>
                    <p className={styles.colorBlack}>fiobond</p>
                    <p className={styles.colorGrey}>
                        сегодня в 28.08.2021 18:50
                    </p>
                </div>
                <h1 className={styles.displayInline}>Python: конфигурация проекта без боли</h1>
                <p className={styles.colorGrey}>
                    Python*
                    Совершенный код*
                </p>

                <button className={styles.colorGrey}>
                    из песочницы
                </button>

                <p className={styles.margin}>
                    Расскажу о проделанном пути, чтобы найти идеальный, для моих целей, инструмент конфигурирования проекта и о создании легковесной библиотеки bestconfig, впитавшей в себя преимущества изложенных подходов. <br/> <br/>

                    В статье речь пойдет только о локальных способах хранения настроек, здесь не разбираются случаи загрузки из сети. <br/> <br/>

                    После создания проекта рано или поздно возникает вопрос: куда записывать номер версии, где хранить токены, пароли, настройки, каким форматом файлов конфигурации воспользоваться: .json, .yaml, .env, .cfg, .ini или просто создатьconfig.pyи записывать туда переменные? <br/> <br/>

                    Для каждого из перечисленных вариантов есть библиотека на python, приведу примеры самых популярных форматов. <br/> <br/>
                </p>
            </div>
        )
    }
}

export default Post