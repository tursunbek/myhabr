import React from "react";
import Header from "../../components/header/header";
import PostCard from "../../components/postCard/postCard";
import Footer from "../../components/footer/Footer";

class PostList extends React.Component{
    render() {
        return(
            <>
                <Header/>
                <PostCard
                    createName="Тестов тест"
                    createDate="12.02.2021 15:45"
                    title="У вас нет интересных проектов, а мне нечем гордиться. Но мы поладим"
                />
                <PostCard
                    createName="good"
                    createDate="12.02.2021 19:27"
                    title="Хакеров (внезапно) пустили в ДЭГ: объявлен специальный тест электронного голосования"
                />
                <Footer/>
            </>
        )
    }
}

export default PostList;