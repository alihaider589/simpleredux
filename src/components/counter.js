import React, { Component } from 'react'
import {connect} from 'react-redux'

 class counter extends React.Component {

    increment =()=>{
        this.props.dispatch({type:"INCREMENT"})
    }
    decrement =()=>{
        this.props.dispatch({type:"DECREMENT"})
    }
    render() {
        return (
            <div style={{backgroundColor:'red',height:500,width:500,alignItems:"center",justifyContent:"center",alignContent:"center",alignSelf:"center",flex:1}}>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
        <span className="count"> {this.props.count}</span>
        <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    count:state.count
})

export default connect(mapStateToProps)(counter);