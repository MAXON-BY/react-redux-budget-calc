import React from 'react';
import cn from "classnames";

const HistoryItem = ({item: {title, sum}}) => {

    return (
        <li className={cn("history__item" ,
            {"history__item-plus" : sum > 0},
            {"history__item-minus" : sum <= 0})}
        >{title}
            <span className="history__money">{sum} Br</span>
            <button className="history_delete">x</button>
        </li>
    );
};

export default HistoryItem;