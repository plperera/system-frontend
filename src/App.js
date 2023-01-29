import { BrowserRouter, Routes, Route } from "react-router-dom";
import Teste from "./Teste";
import Authentication from "./pages/Auth/Auth-Page";

export default function App (){
 
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Teste/>} />
                    <Route path="/login" element={<Authentication/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

