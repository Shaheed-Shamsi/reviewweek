import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Users from './Users.js'
import { fetchAllUsers } from '../reducers/user.js'
import history from '../history';


class Main extends Component {
    componentDidMount() {
        this.props.fetchAllUsersMethod();
    }
  
    render() {
        
      return (
        <Router history={history}>
        <div>
        <Route exact path='/' component={Users} />
        </div>
        </Router>
      )
    }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    fetchAllUsersMethod: () => {
    dispatch(fetchAllUsers());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
