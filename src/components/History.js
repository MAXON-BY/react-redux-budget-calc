import React from 'react';
import HistoryItem from "./HistoryItem";

const History = ({history}) => {
    return (
        <section className="history">
            <h3>История расходов</h3>
            <ul className="history__list">
                {history.length === 0 && <p>Нет записей</p>}
                {history.map(item => (<HistoryItem key={item.id} item={item}/>))}
            </ul>
        </section>
    );
};

export default History;