

export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(tran => tran.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            const newId = state.transactions.length + 1;
            const newTransaction = { id: newId, text: action.payload.text, amount: action.payload.amount };
            return {
                ...state,
                transactions: [ ...state.transactions, newTransaction ]
            }
        default: return state;
    }
}