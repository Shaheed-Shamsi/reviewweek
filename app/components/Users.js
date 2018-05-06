import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Users extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {

        const { users } = this.props

      return (
        <div className="largestDiv">
            <h1 className="theh1">Collectors</h1>
            <div className="buttonHolder">
            <button type="button" className="btn btn-primary">Toggle Battle Mode</button>
            </div>
            <ul className="userList">
            {
                users.length > 1 && users.map(user => {
                    return (
                        <Link className="eachUser" key={user.id} to={`/user/${user.id}`}>
                        <div className="nameStyle">{user.username}</div>
                        <div className="userDescription">{user.description}</div>
                        <div className="imageStyle">
                        <img src={`${user.avatar}`}/>
                        </div>
                        </Link>
                    )
                })
            }
            </ul>
        </div>
      )
    }
}

const mapStateToProps = function(state) {

    return {
        users: state.users
    }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Users)

