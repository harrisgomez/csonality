import React from 'react';

const CardResults = props => {
    const results = props.errMessage ? props.errMessage : props.dailyAvg;
    
    return (
        <div className="card-results">{results}</div>
    );
}

export default CardResults;