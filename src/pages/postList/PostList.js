import React from "react";
import Header from "../../components/header/header";
import PostCard from "../../components/postCard/postCard";
import Footer from "../../components/footer/Footer";

class PostList extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            postList:[]
        }
    }

    componentDidMount() {
        fetch("http://localhost:3001/posts")
            .then(response => {
                if(response.ok){
                    return response.json();
                }else{
                    alert('ошибочка вышла код ошибки:' + response.status)
                }
            })
            .then(data => this.setState( {
                postList:data
            }))
    }

    render() {
        return(
            <>
                <Header/>

                {
                    [<PostCard/>,<PostCard/>,<PostCard/>]
                }

                {
                    this.state.postList.map(data => (
                        <PostCard
                            createName={data.createdUser}
                            createDate={data.createdData}
                            title={data.title}
                        />
                    ))
                }

                <Footer/>
            </>
        )
    }
}

export default PostList;