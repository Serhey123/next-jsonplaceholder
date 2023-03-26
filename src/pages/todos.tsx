export const getStaticProps = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await responce.json();

    return{
        props: { todos: data }
    }
}

interface Todo {
    id: number,
    completed: boolean,
    title: string,
}

type TodosArr = {
    todos: Todo[]
}

export default function Todos({ todos }: TodosArr){
    
    return <>
    <h1>Todos</h1>
    <ul>
    {todos && todos.map(({id, completed, title }: Todo) => <li key={id}>
        <h3>{title}</h3>
        <p>{completed ? 'done!!!' : 'incompete!!!'}</p>
        <br/>
        </li>
    )}
    </ul>
    </>
}