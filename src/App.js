import React, {useEffect, useState} from 'react';
import Total from "./components/Total";
import History from "./components/History";
import Operation from "./components/Operation";
import uuid from 'react-uuid'
import {useDispatch, useSelector} from "react-redux";
import {calcExpensesAction, calcHistoryActions, calcIncomeAction, calcTotalActions} from "./redux/actions/calcActions";

function App() {

    const {history,total, income, expenses } = useSelector(store => store.calc)

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeAmount = (e) => {
        setAmount(e.target.value)
    }

    const totalSum = history.reduce((t, a) => (t + a.sum), 0)
    const totalIncome = history.filter(item => item.sum > 0).reduce((t, a) => (t + a.sum), 0)
    const totalExpenses = history.filter(item => item.sum < 0).reduce((t, a) => (t + a.sum), 0)
    const newHistory = [...history, {id: uuid(), title: name, sum: +amount}]

    const formSubmit = (e) => {
        e.preventDefault()

        setName('')
        setAmount('')

        dispatch(calcHistoryActions(newHistory))
    }

    useEffect(() => {
        dispatch(calcTotalActions(totalSum))
        dispatch(calcIncomeAction(totalIncome))
        dispatch(calcExpensesAction(totalExpenses))
    }, [dispatch, totalExpenses, totalIncome, totalSum])

    return (
        <div className="App">
            <header>
                <h1>Кошелек</h1>
                <h2>Калькулятор расходов</h2>
            </header>

            <main>
                <div className="container">
                    <Total expenses={expenses} income={income} total={total} />

                    <History history={history} />

                    <Operation
                        formSubmit={formSubmit}
                        changeName={changeName}
                        changeAmount={changeAmount}
                        name={name}
                        amount={amount}
                    />
                </div>
            </main>
        </div>
    );
}

export default App;
