const defaultStore = {
    customer: 1
}

export const customerReducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "ADD_CUSTOMER":
            return {...state, customer: state.customer + action.payload}
        case "GET_CUSTOMER":
            return {...state, customer: state.customer - action.payload}
        default:
            return state
    }
}
