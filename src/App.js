import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"

function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customer = useSelector(state => state.customer.customer)

    const addCash = () => {
        dispatch({type: "ADD_CASH", payload: 2})
    }

    const getCahs = () => {
        dispatch({type: "GET_CASH", payload: 2})
    }

    const addCustomer = () => {
        dispatch({type: "ADD_CUSTOMER", payload: 2})
    }

    const getCustomer = () => {
        dispatch({type: "GET_CUSTOMER", payload: 2})
    }

    return (
        <div className="App">
            <div>customer: {customer}</div>
            <div>cash: {cash}</div>
            <button onClick={addCash}>cash +</button>
            <button onClick={getCahs}>cash -</button>
            <button onClick={addCustomer}>customer +</button>
            <button onClick={getCustomer}>customer -</button>
        </div>
    );
}

export default App;
