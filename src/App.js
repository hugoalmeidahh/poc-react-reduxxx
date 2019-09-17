import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from './actions';
import User from './User'
import './App.css';

class App extends Component {
  state = { ...this.props.newValue}

  inputChange = ev => {
    this.setState({[ev.target.name]: ev.target.value })
  }

  render() {
    const {
      clickButton,
      newValue
    } = this.props;

    return (
      <div className="App" style={{ paddingTop: '10px' }}>
        <input name="user" onChange={this.inputChange} type='text' value={this.state.user} />
        <input name="pass" onChange={this.inputChange} type='text' value={this.state.pass} />
        <button onClick={() => clickButton({user: this.state.user, pass:this.state.pass})}>
          Click me!
        </button>
        <h1>{newValue.inputName}</h1>
        <User />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  newValue: store.clickReducer
});


const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
