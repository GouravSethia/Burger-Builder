import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    let inputElement=null;
    switch(props.elementType){
        case('textarea'):
            inputElement=<textarea className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case('select'):
            inputElement =<select
                    className={classes.InputElement}
                    value={props.value} onChange={props.changed}>
                    {
                        props.elementConfig.options.map(option=>{
                            return(
                            <option key={option.value} value={option.value}>
                                {option.displayValue}
                            </option>
                            );
                        })
                    }
                </select>
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed} />
            break;
        
    }
    return(
        <div className={classes.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default Input;