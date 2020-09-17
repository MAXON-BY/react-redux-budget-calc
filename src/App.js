import React, {useEffect, useState} from 'react';
import Total from "./components/Total";
import History from "./components/History";
import Operation from "./components/Operation";
import uuid from 'react-uuid'

function App() {

    const [total, setTotal] = useState(0)
    const [income, setIncome] = useState(0)
    const [expenses, setExpenses] = useState(0)

    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')

    const [history, setHistory] = useState([])

    const changeName = (e) => {
        setName(e.target.value)
    }

    const changeAmount = (e) => {
        setAmount(e.target.value)
    }

    const totalSum = history.reduce((t, a) => (t + a.sum), 0)
    const totalIncome = history.filter(item => item.sum > 0).reduce((t, a) => (t + a.sum), 0)
    const totalExpenses = history.filter(item => item.sum < 0).reduce((t, a) => (t + a.sum), 0)

    const formSubmit = (e) => {
        e.preventDefault()

        setName('')
        setAmount('')

        const newHistory = [...history, {id: uuid(), title: name, sum: +amount}]
        setHistory(newHistory)
    }

    useEffect(() => {
        setTotal(totalSum)
        setIncome(totalIncome)
        setExpenses(totalExpenses)
    }, [history, totalExpenses, totalIncome, totalSum])

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
