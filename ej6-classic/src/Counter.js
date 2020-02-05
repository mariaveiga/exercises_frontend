import React/*, { useState }*/ from 'react'

class Counter extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      counter: 10,
      color: 'red'
    }
  }

  handleClick = () => this.setState({ counter: this.state.counter + 1} )

  render () {

    // const [counter, setCounter] = useState(10)
    // const [color, setColor] = useState('red')
    // --- equivale a ---
    /*
    const counter = this.state.counter
    const color = this.state.color
    const setCounter = v => this.setState({ counter: v })
    const setColor = v => this.setState({ color: v })
    */    

    return (
      <div className="App">
        Valor: {this.state.counter}
        <button onClick={this.handleClick}>Sumar</button>
      </div>
    )
  }

}

export default Counter
