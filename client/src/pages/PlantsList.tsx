import { Link } from "react-router-dom"
export function PlantsList(){
    return(
        <main>
            <>
            <h1>Plants List</h1>
            <Link to="/plants/1">Plant 1</Link>
            <Link to="/plants/2">Plant 2</Link>
            </>
            
        </main>
       
    )
}