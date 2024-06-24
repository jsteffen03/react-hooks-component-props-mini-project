import Article from "./Article"

function ArticleList({posts}){
    console.log(posts)
    const article = posts.map((post)=>{
        return <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
    })

    return(
        <div>
            <main>
                {article}
            </main>
        </div>
    )
}

export default ArticleList;