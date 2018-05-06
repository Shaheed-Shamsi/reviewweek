import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserProfile extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {

        let { users, cards } = this.props
        console.log('cards', cards)
        let propsId = this.props.match.params.id
        let cardHolder = cards.filter(card => {
            console.log(+propsId === card.user.id)
            return card.user.id === +propsId
        })
        let currentUser = users.filter(user => {
            if (user.id === +propsId) {
                return true
            }
        })
        console.log('here', currentUser.length && cardHolder)


        return (
            <div>
            <div className="profileWrapper">
                <h1 className="singleUserTitle">{currentUser.length && currentUser[0].username}</h1>
                <div className="singleUserDescription">{currentUser[0].description}</div>
                <img className="singleUserAvatar" src={`${currentUser[0].avatar}`} />
            </div>
            <div className="userCards">
            <div>{
                cardHolder.map(card => {
                    return (
                        <div key={card.id}>
                        <div>{card.cardname}</div>
                        <div>{card.power}</div>
                        <div>{card.rarity}</div>
                        </div>
                    )
                })
            }</div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = function(state) {    
    return {
        users: state.users,
        cards: state.cards
    }
}

const mapDispatchToProps = null

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
