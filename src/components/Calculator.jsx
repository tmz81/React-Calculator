/* eslint no-eval: 0 */
import { Component } from "react";
import Display from "./Display";
import Buttons from "./Buttons";
import "../styles/Calculator.css";

const initState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class Calculator extends Component{

  state = {...initState}

  constructor(props){
    super(props)

    this.clearMemory = this.clearMemory.bind(this)
    this.setOperation = this.setOperation.bind(this)
    this.addDigit = this.addDigit.bind(this)
  }

  clearMemory(){
    this.setState({...initState})
  }

  setOperation(operation){
    if(this.state.current === 0){
      this.setState({operation, current: 1, clearDisplay: true})
    } else {
      const equals = operation === '='
      const currentOperation = this.state.operation
      const values = [...this.state.values]

      try {
        values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      } catch(e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0

      this.setState({
        displayValue: values[0],
        operation: equals ? null : operation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values
      })
    }
  }

  addDigit(n){
    if(n === '.' && this.state.displayValue.includes('.')){
      return
    }

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({displayValue, clearDisplay: false})

    if(n !== '.'){
      const i = this.state.current
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[i] = newValue
      this.setState({values})
    }
  }

  render(){
    return(
      <div className="calculator">
        <Display value={this.state.displayValue}/>
        <Buttons label="AC" click={this.clearMemory} triple/>
        <Buttons label="/" click={this.setOperation} operation/>
        <Buttons label="7" click={this.addDigit}/>
        <Buttons label="8" click={this.addDigit}/>
        <Buttons label="9" click={this.addDigit}/>
        <Buttons label="*" click={this.setOperation} operation/>
        <Buttons label="4" click={this.addDigit}/>
        <Buttons label="5" click={this.addDigit}/>
        <Buttons label="6" click={this.addDigit}/>
        <Buttons label="-" click={this.setOperation} operation/>
        <Buttons label="1" click={this.addDigit}/>
        <Buttons label="2" click={this.addDigit}/>
        <Buttons label="3" click={this.addDigit}/>
        <Buttons label="+" click={this.setOperation} operation/>
        <Buttons label="0" click={this.addDigit} double/>
        <Buttons label="." click={this.addDigit}/>
        <Buttons label="=" click={this.setOperation} operation/>
      </div>
    )
  }
};
