import React from "react";
import { connect } from "react-redux"; // connect - HOC, функция, которая создает новый компонент 
import { bindActionCreators } from "redux";

import * as actions from '../actions'

const Counter = ({counter, inc, dec, rnd}) => {
    return (    
        <div className="jumbotron">
            <h2>{counter}</h2>
            <button 
                onClick={dec}
                className="btn btn-primary btn-lg">DEC
            </button>
            <button
                onClick={inc} 
                className="btn btn-primary btn-lg">INC
            </button>
            <button
                onClick={rnd}
                className="btn btn-primary btn-lg">RANDOM
            </button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch); // функции inc, dec, rnd внутри
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // вместо mapDispatchToProps можно сразу передать объект actions