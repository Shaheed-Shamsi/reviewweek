import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Users from './Users.js'
import { fetchAllUsers } from '../reducers/user.js'
import { fetchAllInfo } from '../reducers/cards.js'
import UserProfile from './UserProfile.js'
import history from '../history.js'

class Main extends Component {

  async componentDidMount() {
      await this.props.fetchAllUsersMethod();
      await this.props.fetchCardInfoMethod();
  }

  render() {

    return (
      <Router history={history}>
      <div>
      <Route exact path='/' component={Users} />
      <Route exact path='/user/:id' component={UserProfile} />
      </div>
      </Router>
    )
  }
}

const mapStateToProps = null

const mapDispatchToProps = dispatch => ({
    fetchAllUsersMethod: () => {
    dispatch(fetchAllUsers());
  },
    fetchCardInfoMethod: () => {
      dispatch(fetchAllInfo())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
