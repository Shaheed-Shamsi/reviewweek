import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'


class Users extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        const { users } = this.props

      return (
        <div>

        </div>
      )
    }
}

const mapStateToProps = function(state) {
    console.log('blah', state)
    console.log('users', state.users)
    return {
        users: state.users
    }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Users)