import React from 'react'
import './Topbar.css'

export default function Topbar(props) {
    return (
        
        <div className="top">
            <div className="budget">
                <div className="budget__title">
                    Available Budget in <span className="budget__title--month">{props.month}</span>:
                </div>
                
                <div className="budget__value">{props.profit}</div>
                
                <div className="budget__income clearfix">
                    <div className="budget__income--text">Income</div>
                    <div className="right">
                        <div className="budget__income--value">+ {props.total_inc}</div>
                        <div className="budget__income--percentage">&nbsp;</div>
                    </div>
                </div>
                
                <div className="budget__expenses clearfix">
                    <div className="budget__expenses--text">Expenses</div>
                    <div className="right clearfix">
                        <div className="budget__expenses--value">- {props.total_exp}</div>
                        <div className="budget__expenses--percentage">{props.total_per}%</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}
