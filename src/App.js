import React, {Component} from 'react';
import {connect} from 'react-redux'
import './App.css';
import ModelDetails from './components/ModelDetails';

class App extends Component {
  data = [
    {
      id: 1,
      name: "Ivel Z3",
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    {
      id: 2,
      name: "Bally Astrocade",
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    {
      id: 3,
      name: "Sord M200 Smart Home Computer",
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    {
      id: 4,
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
    this.setState({selectedModel:''})
    // console.log('click')
  }
  render(){
    return (
      <div className="App">
        {this.props.selectedModels.map(
          model => <ModelDetails
          key={model.id}
          name={model.name}
          manufacturer={model.manufacturer}
          year={model.year}
          origin={model.origin}
          />
        )}
        <select onChange={this.updateSelection} value={this.state.selectedModel}>
          <option value=''>-- pick a model --</option>
          {this.data.map(
            model => <option key={model.id} value={model.name}>
              {model.name}({model.year})
            </option>
          )}
        </select>
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {selectedModels: state}
}

export default connect(mapStateToProps)(App);
