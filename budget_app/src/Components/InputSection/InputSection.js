import React from 'react'
import './InputSection.css'

export default function InputSection(props) {
    return (
            <div className="add">
                <div className="add__container">
                <select className="add__type" defaultValue='inc' onChange={props.changeType}>
                        <option value="inc">Income</option>
                        <option value="exp">Expense</option>
                </select>
                <input type="text" className="add__description" ref={props.domDesc} placeholder="Add description" />
                <input type="number" className="add__value" ref={props.domAmount} placeholder="Value" />
                <button className="add__btn" onClick = {props.submit}><i className="ion-ios-checkmark-outline"></i></button>
                </div>
            </div>

    )
}
