import React, { Component } from 'react';
import styles from './app.scss';
import RomanNumerals from './helper';


export class AppContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      convertedValue: '',
      inputError: ''
    }
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  getConvertedValue = (event) => {
    event.preventDefault();

    const { inputValue } = this.state;
    const numberRegex = /^\d+$/;

    if(numberRegex.test(inputValue)) {
      this.setState({ 
        convertedValue: RomanNumerals.toRoman(inputValue),
        inputError: '' 
      });
    } else if(RomanNumerals.checkIfRomanNumeral(inputValue)) {
      this.setState({ 
        convertedValue: RomanNumerals.fromRoman(inputValue), 
        inputError: ''
      });
    } else {
      this.setState({ inputError: 'Please a valid input' })
    }
  }

  render() {
    const { convertedValue, inputError } = this.state;

    return (
      <div className={`container ${styles.container}`}>
        <form className={styles.convertorForm} onSubmit={this.getConvertedValue}>
          <div className={styles.formGroup}>
            <label className={styles.formLabel}>Enter either a whole numeric value or a set of roman numerals below.</label>
            <input
              type="text"
              className={styles.formInput}
              onChange={this.handleChange}
              placeholder="eg. 2018 or MMXVIII"
              required
            />
            <p className={styles.errorMsg}>{inputError}</p>
          </div>    
          <button className={styles.submitBtn} type="submit">Convert</button>
        </form>

        <div className={styles.resultBox}>
          <h2>Translation Result</h2>
          <h1>{convertedValue}</h1>
        </div>
      </div>
    );
  }
}

export default AppContainer;
