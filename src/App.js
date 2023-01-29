import { BrowserRouter, Routes, Route } from "react-router-dom"
import Teste from "./Teste"

export default function App (){
 
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Teste/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

