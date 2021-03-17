import React from 'react';

const incomeList = (props) => {
    return (
        <div> 
                    <div className="income__list">
                        <div className="item clearfix">
                            <div className="item__description">{props.desc}</div>
                            <div className="right clearfix">
                                <div className="item__value">+ {props.amount}</div>
                                <div className="item__delete">
                                    <button onClick={(e)=>props.delete(e)} className="item__delete--btn"><i id={props.id} className="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className="item clearfix" id="income-1">
                            <div className="item__description">Sold car</div>
                            <div className="right clearfix">
                                <div className="item__value">+ 1,500.00</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div> */}
                    
                        
                    </div>
        </div>
    );
}

export default incomeList;

