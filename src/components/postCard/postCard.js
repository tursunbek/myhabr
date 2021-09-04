import React from "react";
import styles from './postCard.module.css'

class PostCard extends React.Component{
    constructor(props) {
        super(props);

        console.log(this.props)
    }




    render(){
        return(
            <div>
                <div className={styles.postcardBlocks}>
                    <div className={styles.postcard}>
                        <div className={styles.postcard_authors}>
                            <span className={styles.create_name}>{this.props.createName}</span>
                            <span className={styles.create_date}>{this.props.createDate}</span>
                        </div>
                        <div className={styles.postcard_img}>
                            <img className={styles.postcard_img} src="https://picsum.photos/1200/200" alt=""/>
                        </div>
                        <div className={styles.postcard_title}>
                            <a href="#">{this.props.title}</a>
                        </div>
                    </div>
                </div>

                <div className={styles.postcardBlocks}>
                    <div className={styles.postcard}>
                        <div className={styles.postcard_authors}>
                            <span className={styles.create_name}>{this.props.createName}</span>
                            <span className={styles.create_date}>{this.props.createDate}</span>
                        </div>
                        <div className={styles.postcard_img}>
                            <img className={styles.postcard_img} src="https://picsum.photos/1200/200" alt=""/>
                        </div>
                        <div className={styles.postcard_title}>
                            <a href="#">{this.props.title}</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default PostCard;