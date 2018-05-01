import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
    constructor(props) {
        super(props);

    }



    render() {

        console.log('this.props', this.props)
        console.log('this.props.match', this.props.match.params.id)
        console.log('this.props.users', this.props.users)
        let users = this.props.users
        let propsId = this.props.match.params.id
        let currentUser = users.filter(user => {
            if (user.id === +propsId) {
                return true
            }
        })

        console.log('current user', currentUser.length && currentUser[0])

        return (
            <div className="profileWrapper">
                <h1 className="userTitle">{currentUser.length && currentUser[0].username}</h1>
                <div>{currentUser.description}</div>
                <div>{currentUser.av}</div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {    
    return {
        users: state.users
    }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)