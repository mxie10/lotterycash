import React, { useState } from 'react';
import Header from './components/Header';
import NumericButton from './components/NumericButton';
import MoneyValueButton from './components/MoneyValueButton';
import styles from './App.module.css';

const numeric_value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const money_value = [1, 5, 10, 20];

function App() {

  const [selectedValue, setSelectedValue] = useState([]);
  const [moneyValue, setMoneyValue] = useState(0);
  const [ifCashed, setIfCahsed] = useState(false);

  const selectNumber = (value) => {
    if (selectedValue.length === 5 && !selectedValue.includes(value)) {
      alert('Only allow selecting  up to 5 numbers!');
      return;
    }
    if (!selectedValue.includes(value)) {
      setSelectedValue([...selectedValue, value]);
    } else {
      setSelectedValue(selectedValue.filter((item) => {
        return item !== value;
      }))
    }
  }

  const addMoneyValue = (value) => {
    if (selectedValue.length !== 5) {
      alert('You must select 5 different numbers before move forward!');
      return;
    }
    setMoneyValue(moneyValue + Number(value));
  }

  const cash = () => {
    if (selectedValue.length !== 5) {
      alert('Please select 5 numbers first!');
      return;
    } else if (moneyValue === 0) {
      alert('Please add some money value!');
      return;
    }
    setIfCahsed(true);
  }

  const clear = () => {
    setIfCahsed(false);
    setSelectedValue([]);
    setMoneyValue(0);
  }

  const generateRandomNumber = () => {
    if (selectedValue.length > 0) {
      alert('Please clear out the current result first!');
      return;
    }
    const numbers = [];
    while (numbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setSelectedValue(numbers);
  }

  const LeftSection = () => {
    return (
      <div className={styles.container_left_area}>
        <div className={styles.container_money_value_button}>
          {money_value.map((value, index) => (
            <MoneyValueButton amount={value} key={index} onClick={() => addMoneyValue(value)} />
          ))}
        </div>
      </div>
    )
  }

  const MiddleSection = () => {
    return (
      <div className={styles.container_middle_area}>
        <div className={styles.container_numeric_buttons}>
          {numeric_value.map((value, index) => (
            <NumericButton
              number={value}
              key={index}
              onClick={() => selectNumber(value)}
              selectedValue={selectedValue}
            />
          ))}
        </div>
        <div className={styles.container_operation_button}>
          <div className={styles.operation_button} onClick={cash}>
            Cash
          </div>
          <div className={styles.operation_button} onClick={clear}>
            Clear
          </div>
        </div>
        <div className={styles.container_generate_random_number} onClick={generateRandomNumber}>
          Generate Random Number
        </div>
      </div>
    )
  }

  const RightSection = () => {
    return (
      <div className={styles.container_right_area}>
        <div className={styles.container_right_area_content}>
          <div style={{ height: '10%' }}>Number selected:</div>
          <div style={{ height: '80%' }}>
            {selectedValue && selectedValue?.map((value, index) => {
              return (
                <div key={index}>
                  Mark: {value}
                </div>
              )
            })}
          </div>
          <div style={{ height: '10%' }}>
            {ifCashed && <div>Total:${moneyValue}</div>}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.App}>
      <Header />
      <div className={styles.container}>
        <LeftSection />
        <MiddleSection />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
