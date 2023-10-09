import React, { useState } from 'react';
import classes from './userInput.module.css';

const UserInput = (props) => {

    const initialUserInput = {
        'current-savings': 10000,
        'yearly-contribution': 1200,
        'expected-return': 7,
        duration: 10
    }

    const [inputs, setInputs] = useState(initialUserInput);

    const submitHandler = (event) => {

        event.preventDefault();
       props.onCalculate(inputs)
        

        

        // Should be triggered when form is submitted
        // You might not directly want to bind it to the submit event on the form though...
    
        /*
        
       
    
        // do something with yearlyData ...

       */  
      };

      const resetHandler = () => {
        setInputs(initialUserInput);
      }
           
      const inputHandler = (event) => {
        const id = event.target.id;
        const value = event.target.value;
        setInputs(prev => ({...prev, [id]: value}))
      }
   
    
     return(
        <form onSubmit={submitHandler} className={classes.form}>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number"
                     id="current-savings"
                     value={ inputs['current-savings'] || ''} 
                     onChange={inputHandler}
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input 
                type="number"
                id="yearly-contribution"
                value={inputs['yearly-contribution'] || ''} 
                onChange={inputHandler} 
            />
          </p>
        </div>
        <div className={classes['input-group']}>
          <p>
            <label htmlFor="expected-return">Expected Interest (%, per year)</label>
            <input 
                type="number"
                id="expected-return"
                value={inputs['expected-return'] || '' }
                onChange={inputHandler} />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input 
                type="number"
                id="duration"
                value={inputs.duration || '' }
                onChange={inputHandler}
            />
          </p>
        </div>
        <p className={classes.actions}>
          <button type="reset" onClick={resetHandler} className={classes.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={classes.button}>
            Calculate
          </button>
        </p>
      </form>
    );

}

export default UserInput;