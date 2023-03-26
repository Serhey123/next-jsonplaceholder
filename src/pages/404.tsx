import { useEffect } from "react"
import { useRouter } from "next/router"

export default function ErrorComp(){
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => { router.push('/')}, 1000)
    }, [])

    return<h1>error!!!!</h1>
}
