import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/customers"
function App() {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customer.customers)

    console.log('customers', customers)

    const addCash = () => {
        dispatch(addCashAction(2))
    }

    const getCash = () => {
        dispatch(getCashAction(2))
    }

    const addCustomer = () => {
        const id = Date.now()
        dispatch(
            addCustomerAction({
                id: Date.now(),
                name: "name" + id
            })
        )
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return (
        <div className="App">
            <div>customer: {customers.length}
            </div>
            <div>
                {customers.map(customer => <div onClick={() => removeCustomer(customer)}
                                                key={customer.id}>{customer.name}</div>)}
            </div>
            <div>cash: {cash}</div>
            <button onClick={addCash}>cash +</button>
            <button onClick={getCash}>cash -</button>
            <button onClick={addCustomer}>customer +</button>
            <button onClick={() => dispatch(fetchCustomers())}>fetch</button>
            {/*<button onClick={getCustomer}>customer -</button>*/}
        </div>
    );
}

export default App;
