import { createContext, useReducer } from "react";
const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A pair of shoes',
        amount: 129.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e2',
        description: 'An apple watch',
        amount: 429.99,
        date: new Date('2022-12-31')
    },
    {
        id: 'e3',
        description: 'Gas',
        amount: 32.12,
        date: new Date('2023-01-01')
    },
    {
        id: 'e4',
        description: 'A new grill',
        amount: 199.99,
        date: new Date('2021-01-09')
    },
    {
        id: 'e5',
        description: 'Gas',
        amount: 32.12,
        date: new Date('2023-01-01')
    },
    {
        id: 'e6',
        description: 'Food',
        amount: 22.62,
        date: new Date('2023-01-08')
    },
    {
        id: 'e7',
        description: 'Groceries',
        amount: 132.12,
        date: new Date('2023-01-09')
    },
    {
        id: 'e8',
        description: 'Gas',
        amount: 20.00,
        date: new Date('2021-01-10')
    },
    {
        id: 'e9',
        description: 'New Hard Drive',
        amount: 199.99,
        date: new Date('2023-01-10')
    },
    {
        id: 'e10',
        description: 'Computer Parts',
        amount: 200.55,
        date: new Date('2023-01-12')
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpense: ({description, amount, date}) => {},
    deleteExpense: (id) => {},
    updateExpense: (id, {description, amount, date}) => {},
});

function expensesReducer(state, action) {
    switch(action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state];
        case 'UPDATE':
            const updatableExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
            const updatableExpense = state[updatableExpenseIndex];
            const updatedItem = {...updatableExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatableExpenseIndex] = updatedItem;
            return updatedExpenses;
        case 'DELETE':
            return state.filter((expense) => expense.id !== action.payload);
        default:
            return state;
    }
}

function ExpensesContextProvider({children}) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
    function addExpense(expenseData) {
        dispatch({type: 'ADD', payload: expenseData});
    }
    function deleteExpense(id) {
        dispatch({type: 'DELETE', payload: id});
    }
    function updateExpense(id, expenseData) {
        dispatch({type: 'UPDATE', payload: {id: id, data: expenseData}});
    }
    const value = {
        expenses: expensesState,
        addExpense, addExpense,
        deleteExpense: deleteExpense,
        updateExpense: updateExpense
    };
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}


export default ExpensesContextProvider;