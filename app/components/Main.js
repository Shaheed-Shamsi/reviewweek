import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { Switch, withRouter } from 'react-router'
import { connect } from 'react-redux'
import Users from './Users.js'
import { fetchAllUsers } from '../reducers/user.js'
import UserProfile from './UserProfile.js'

class Main extends Component {
    componentDidMount() {
        this.props.fetchAllUsersMethod();
    }
  
    render() {

      return (
        <Switch>
        <Route exact path='/' component={Users} />
        <Route exact path='/user/:id' component={UserProfile} />
        </Switch>
      )
    }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    fetchAllUsersMethod: () => {
    dispatch(fetchAllUsers());
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
