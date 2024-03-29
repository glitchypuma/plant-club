import { Route, Routes} from "react-router-dom"
import { Home } from "./pages/Home"
import { Account } from "./pages/Account"
import { About } from "./pages/About"
import {NotFound} from "./pages/NotFound"
import NavBar from "./components/NavBar"
import { PlantRoutes } from "./PlantRoutes"


function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/account" element={<Account />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/plants/*" element={<PlantRoutes />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
    </>
  )
}

export default App
