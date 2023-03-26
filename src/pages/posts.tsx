export const getStaticProps = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await responce.json();

    return{
        props: { posts: data }
    }
}

interface Post {
    id: number,
    body: string,
    title: string,
}

type PostsArr = {
    posts: Post[]
}

export default function Posts({ posts }: PostsArr){
    
    return <>
    <h1>Posts</h1>
    <ul>
    {posts && posts.map(({id, body, title }: Post) => <li key={id}>
        <h3>{title}</h3>
        <p>{body}</p>
        <br/>
        </li>
    )}
    </ul>
    </>
}