import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class User extends Component {
    render() { 
        const { user, pass } = this.props.newValue
        return ( 
            <div>
                <h1>{user}</h1>
                <h1>{pass}</h1>
            </div>
         );
    }
}
const mapStateToProps = store => ({
    newValue: store.clickReducer
});
  
export default connect(mapStateToProps)(User);