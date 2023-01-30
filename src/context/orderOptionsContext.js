import { createContext, useContext, useReducer } from "react";
import EndPointOrder from "../components/Order/EndPointOrder";
import NewAddress from "../components/Order/NewAddress";
import NewClient from "../components/Order/NewClientIcon";
import NewOrder from "../components/Order/NewOrder";
import SearchAddress from "../components/Order/SearchAddress";
import SearchClient from "../components/Order/SearchClient";
import SecondOptions from "../components/Order/secondOptions";
import ThirdOptions from "../components/Order/thirdOption";
import NewProduct from "../components/Products/NewProduct";

const OrderOptionsContext = createContext()

function reducer(state, action){
    const newOrderHash = {
        secondOptions: <SecondOptions/>,
        newClient: <NewClient/>,
        searchClient: <SearchClient/>,
        thirdOptions: <ThirdOptions/>,
        hasAdress: <SearchAddress/>,
        newAdress: <NewAddress/>,
        newOrdder: <NewOrder/>,
        newProduct: <NewProduct/>,
        end: <EndPointOrder/>,
    }
    return newOrderHash[action]
}

function OrderOptionsProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, {})

    return (
        <OrderOptionsContext value={{state, dispatch}}> 
            { children }
        </OrderOptionsContext>
    )
}
function useOrderOptions() {
    const context = useContext(OrderOptionsProvider)
    if( !context ){
        throw new Error("Não existe o contexto orderOptions")
    }
    return context
}

export { OrderOptionsProvider, useOrderOptions }