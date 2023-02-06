import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Authentication from './pages/Auth/Auth-Page';
import Delivery from './pages/Dashboard/Delivey/Delivery';
import Dashboard from './pages/Dashboard/indexDashboard';
import Order from './pages/Dashboard/Order/Order';
import Payment from './pages/Dashboard/Payment/Payment';
import Products from './pages/Dashboard/Products/Products';
import Stock from './pages/Dashboard/Stock/Stock';
import { UserProvider } from './context/UserContext';
import useToken from './hooks/useToken';

export default function App() {
  return(
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Authentication/>} />

            <Route path="/dashboard" element={

              <ProtectedRouteGuard>
                <Dashboard/>
              </ProtectedRouteGuard>
                        
            }>
                        
              <Route path="/dashboard/pedido" element={<Order/>}/>

              <Route path="/dashboard/estoque" element={<Stock/>} />
              <Route path="/dashboard/pagamento" element={<Payment/>} />
              <Route path="/dashboard/entrega" element={<Delivery/>} />
              <Route path="/dashboard/produtos" element={< Products />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();
  
  if (!token) {
    return <Navigate to="/sign-in" />;
  }
  
  return <>{children}</>;
}

