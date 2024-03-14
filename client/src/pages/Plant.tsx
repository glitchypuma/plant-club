import { useParams } from "react-router-dom"

export function Plant(){
    const { id } = useParams<string>()
    return(
        <main>
            <h1>Plant {id}</h1>
        </main>
       
    )
}