import React, { Component } from 'react';

import CardResults from '../../components/CardResults';

class Calendar extends Component {
    render() {
        return (
            <div className='main'>
                <div className='card'>
                    <div className="card-input">
                        <form>
                            <input type="text" placeholder=' Symbol search...' onChange={this.props.handleTickerInput} value={this.props.ticker} />
                            <input type="button" value="Analyze" onClick={this.props.handleSearch} />
                        </form>
                    </div>
                    <CardResults
                        dailyAvg={this.props.dailyAvg}
                        errMessage={this.props.errMessage}
                    />
                    <div className="timeframes">
                        <button>D</button>
                        <button>W</button>
                        <button>M</button>
                        <button>Q</button>
                    </div>
                </div>
                <button className="add-card-btn">
                    <span>+ Add Card</span>
                </button>
            </div>
        );
    }
}

export default Calendar;