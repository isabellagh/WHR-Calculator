import React from 'react'
import ClientCard from './ClientCard'
import { connect } from 'react-redux'

const MyClients = props => {
    const clientCards = props.clients.length > 0 ? props.clients.map(c => <ClientCard client={c} key={c.attributes.id} />) : null
    return (
        clientCards
    )
}

const mapStateToProps = state => {
    return {
        clients: state.myClients
    }
}

export default connect(mapStateToProps)(MyClients)