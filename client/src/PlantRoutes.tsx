import { Routes, Route } from "react-router-dom"
import { PlantsList } from "./pages/PlantsList"
import { Plant } from "./pages/Plant"
export function PlantRoutes() {
    return(
        <Routes>
            <Route index element={<PlantsList />}/>
            <Route path=":id" element={<Plant />}/>
        </Routes>
    )
}