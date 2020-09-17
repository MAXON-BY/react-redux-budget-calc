import {CALC_EXPENSES, CALC_HISTORY, CALC_INCOME, CALC_TOTAL} from "../types";

export const calcHistoryActions = (payload) => {
    return{
        type: CALC_HISTORY,
        payload
    }
}

export const calcTotalActions = (payload) => {
    return{
        type: CALC_TOTAL,
        payload
    }
}

export const calcIncomeAction = (payload) => {
    return{
        type: CALC_INCOME,
        payload
    }
}

export const calcExpensesAction = (payload) => {
    return{
        type: CALC_EXPENSES,
        payload
    }
}
