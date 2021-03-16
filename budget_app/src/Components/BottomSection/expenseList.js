import React from 'react';

const expenseList = (props) => {
    return (
        <div>
                    
                    <div className="expenses__list">
                       
                        <div className="item clearfix" id="expense-0">
                            <div className="item__description">{props.desc}</div>
                            <div className="right clearfix">
                                <div className="item__value">- {props.amount}</div>
                                <div className="item__percentage">21%</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div>

                        {/* <div className="item clearfix" id="expense-1">
                            <div className="item__description">Grocery shopping</div>
                            <div className="right clearfix">
                                <div className="item__value">- 435.28</div>
                                <div className="item__percentage">10%</div>
                                <div className="item__delete">
                                    <button className="item__delete--btn"><i className="ion-ios-close-outline"></i></button>
                                </div>
                            </div>
                        </div> */}
                    </div>
        </div>
    );
}

export default expenseList;
