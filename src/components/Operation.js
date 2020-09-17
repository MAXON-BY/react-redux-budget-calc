import React from 'react';

const Operation = ({formSubmit, amount, name, changeName, changeAmount}) => {

    return (
        <section className="operation">
            <h3>Новая операция</h3>
            <form id="form" onSubmit={formSubmit}>
                <label>
                    <input type="text" name="operation" className="operation__fields operation__name"
                           placeholder="Наименование операции" required value={name} onChange={changeName}/>
                </label>
                <label>
                    <input type="number" name="amount" className="operation__fields operation__amount"
                           placeholder="Введите сумму" required value={amount} onChange={changeAmount}/>
                </label>
                <button type="submit" className="operation__add">Добавить операцию</button>
            </form>
        </section>
    );
};

export default Operation;