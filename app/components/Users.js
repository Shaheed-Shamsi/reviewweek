import React, { Component } from 'react'
import { connect } from 'react-redux'


class Users extends Component {
    constructor(props) {
        super(props);

    }
  
    render() {
        const { users } = this.props
        console.log('FINAL USERS', users)
      return (
        <div>
            <h1>Collectors</h1>
            <div>
            {
                users.length > 1 && users.map(user => {
                    return (
                        <div key={user.id}>
                        <div>gewrwer</div>
                        </div>
                    )
                })
            }
            </div>
        </div>
      )
    }
}

const mapStateToProps = function(state) {
    console.log('blah', state)
    console.log('users', state.users)
    return {
        users: state
    }
}

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Users)


// {
//     users.map(user => {
//         return (
//             <div>dfs</div>
//         )
//     })
// }