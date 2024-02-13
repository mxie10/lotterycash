import React from 'react'
import styles from './styles/NumericButton.module.css';

const NumericButton = ({number,onClick,selectedValue}) => {
  return (
    <div className={selectedValue.includes(number) ? styles.container_numeric_button_selected : styles.container_numeric_button} onClick={onClick}>
        {number}
    </div>
  )
}

export default NumericButton;
