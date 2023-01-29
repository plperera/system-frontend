import { BrowserRouter, Routes, Route } from "react-router-dom";

import Authentication from "./pages/Auth/Auth-Page";
import Delivery from "./pages/Dashboard/Delivey/Delivery";
import Dashboard from "./pages/Dashboard/indexDashboard";
import Order from "./pages/Dashboard/Order/Order";
import Payment from "./pages/Dashboard/Payment/Payment";
import Stock from "./pages/Dashboard/Stock/Stock";

export default function App (){
 
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Authentication/>} />
                    <Route path="/dashboard" element={<Dashboard/>}>
                        <Route path="/dashboard/pedido" element={<Order/>} />
                        <Route path="/dashboard/estoque" element={<Stock/>} />
                        <Route path="/dashboard/pagamento" element={<Payment/>} />
                        <Route path="/dashboard/entrega" element={<Delivery/>} />
                    </Route>
                </Routes>
            </BrowserRouter>

        </>
    )
}

