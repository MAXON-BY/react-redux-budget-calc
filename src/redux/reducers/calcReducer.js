import {CALC_EXPENSES, CALC_HISTORY, CALC_INCOME, CALC_TOTAL} from "../types";

const initialState = {
    history: [],
    total: 0,
    income: 0,
    expenses: 0
}

export const calcReducer = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case CALC_HISTORY:
            return {
                ...state,
                history: payload
            }
        case CALC_TOTAL:
            return {
                ...state,
                total: payload
            }
        case CALC_INCOME:
            return {
                ...state,
                income: payload
            }
        case CALC_EXPENSES:
            return {
                ...state,
                expenses: payload
            }
        default:
            return state
    }
}