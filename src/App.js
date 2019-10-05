import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  data = [
    {
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      name: "Commodore 64",
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  ]
  state = {selectedModel:''}
  updateSelection = (event) => {
    // console.log(event.target.value)
    this.setState({selectedModel:event.target.value})
  }
  handleClick = () => {
    if (this.state.selectedModel) {
      this.props.dispatch({
        type:'ADD_MODEL',
        payload:this.data.find(
          model => model.name === this.state.selectedModel)
      })
    }
    // console.log('click')
  }
  render(){
    return (
      <div className="App">
        <select onChange={this.updateSelection} value={this.state.selectedModel}>
          <option value=''>-- pick a model --</option>
          {this.data.map(
            (model,index) => <option key={index} value={model.name}>
              {model.name}({model.year})
            </option>
          )}
        </select>
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}

export default connect()(App);
