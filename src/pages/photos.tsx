import Image from "next/image";

export const getStaticProps = async () => {
    const responce = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await responce.json();

    return{
        props: { photos: data }
    }
}

interface Photo {
    id: number,
    thumbnailUrl: string,
    title: string,
}

type PhotosArr = {
    photos: Photo[]
}

export default function Photos({ photos }: PhotosArr){
    const photosToRender = photos && photos.slice(0, 10)
    return <>
    <h1>Photos</h1>
    <ul>
    {photosToRender && photosToRender.map(({id, thumbnailUrl, title }: Photo) => <li key={id}>
        <h3>{title}</h3>
        <Image src={thumbnailUrl} alt={title} width={150} height={150}/>
        <br/>
        </li>
    )}
    </ul>
    </>
}