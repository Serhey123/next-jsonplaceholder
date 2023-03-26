export const getStaticProps = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await responce.json();

    return{
        props: { contacts: data }
    }
}

interface Contact {
    id: number,
    name: string,
    email: string,
    phone: string,
}

type ContactsArr = {
    contacts: Contact[]
}

export default function Contacts({ contacts }: ContactsArr){    
    return <>
    <h1>Contacts</h1>
    <ul>
    {contacts && contacts.map(({id, name, email, phone }: Contact) => <li key={id}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{phone}</p>
        <br/>
        </li>
    )}
    </ul>
    </>
}