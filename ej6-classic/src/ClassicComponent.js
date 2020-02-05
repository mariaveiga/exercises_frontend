import React from 'react'

class ClassicComponent extends React.Component {

  constructor (props) {
    super(props)
    this.state = { counter: 10 }
  }

  componentDidMount () {
    this.timer = setInterval(() => {
      this.setState({ counter: this.state.counter - 1 })
    }, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <p>Cuenta atrás: {this.state.counter}</p>
      </div>
    )
  }

}

export default ClassicComponent
