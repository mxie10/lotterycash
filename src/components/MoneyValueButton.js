import React from 'react'
import styles from './styles/MoneyValueButton.module.css';

const MoneyValueButton = ({amount,onClick}) => {
  return (
    <div className={styles.money_value_button} onClick={onClick}>
        ${amount}
    </div>
  )
}

export default MoneyValueButton;
