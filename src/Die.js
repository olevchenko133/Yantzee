import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  static defaultProps={
    val: 5
  }
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    this.props.handleClick(this.props.idx);
  }
  render() {
    let icons = ["one", "two", "three", "four", "five", "six"]
    return (

        <i className={`Die fas fa-dice-${icons[this.props.val - 1]} ${this.props.locked && 'Die-locked'} ${this.props.rolling && 'Die-rolling'}`} onClick={this.handleClick} disabled={this.props.disabled}></i>
  
    );
  }
}

export default Die;
