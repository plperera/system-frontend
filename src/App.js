import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Auth/Auth-Page";
import Dashboard from "./pages/Dashboard/index";

export default function App (){
 
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/login" element={<Authentication/>} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

