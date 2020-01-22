import React, { Component } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/App.css';

import Calendar from '../CalendarContainer/Calendar';

class App extends Component {
  state = {
    ticker: '',
    dailyAvg: 0,
    errMessage: ''
  }

  getAvg() {
    const quotesArr = [];
    let avg = 0;

    axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${this.state.ticker}&outputsize=full&apikey=${process.env.REACT_APP_SECRET_KEY}`)
    .then(res => {
        const quotes = res.data['Time Series (Daily)'];
        let sum = 0,
          i = 0;

        // Arrange JSON data of quotes in [date, price] pair
        Object.keys(quotes).forEach(key => {
          quotesArr.push([
            key,
            parseFloat(quotes[key]['4. close'])
          ]);
        });

        // Get sum of prices
        for (i; i < quotesArr.length; i++) {
          sum += parseInt(quotesArr[i][1], 10);
        }
          
        // Get average
        avg = (sum / quotesArr.length).toFixed(2);
          
        this.setState({
          dailyAvg: avg,
          errMessage: ''
        })

        this.calculateAvgPerYear(quotesArr);
    })
    .catch(err => {
        console.log('Error:', err);

        this.setState((state, props) => ({
          errMessage: "Ticker symbol not found."
        }));
    });
    
  }

  calculateAvgPerYear = quotesArr => {
    const years = [];
    let yearlyAvgs = [];

    for (let i = 0; i < quotesArr.length; i++) {
      let date = quotesArr[i][0];
      let year = date.substring(0, 4);

      if (!years.includes(year)) {
        years.push(year);
      }
    }

    // averagePrice()

    for (let i = 0; i < years.length; i++) {
      let avg = 0;
      let sumQuotes = 0;
      let numQuotes = 0;
      for (let j = 0; j < quotesArr.length; j++) {
        let date = quotesArr[j][0];
        let price = quotesArr[j][1];
        // console.log(date.substring(0, 4) == years[i])
        if (date.substring(0, 4) == years[i]) {
          sumQuotes += price;
          numQuotes++;
        }
      }
      avg = sumQuotes / numQuotes;
      // yearlyAvgs.push(JSON.parse(`{ ${years[i]}: ${avg}}`));      
      console.log(JSON.parse(`{ "${years[i]}": "${avg.toFixed(2)}"}`));      
    }

    console.log(yearlyAvgs);
  }

  handleTickerInput = e => {
    e.preventDefault();

    this.setState({
      ticker: e.target.value
    });
  }
  
  handleSearch = () => {
    this.getAvg();
  };

  render() {    
    return (
      <div className="App">
        <div className='header'>
          <h1>CSONALITY</h1>
          <p>Csonality is a study that attempts to capture trending periods in the stock market and offers a simple probability analysis based on historical data.</p>
          <p>Traders can combine this with their favorite trading strategy to ideally profit through informed decisions.</p>
        </div>
        <Calendar
          handleTickerInput={this.handleTickerInput}
          ticker={this.state.ticker}
          handleSearch={this.handleSearch}
          dailyAvg={this.state.dailyAvg}
          errMessage={this.state.errMessage}
        />
      </div>
    );
  }
}

export default App;
