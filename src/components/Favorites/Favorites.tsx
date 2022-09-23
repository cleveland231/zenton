import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import QuotesContainer from '../QuotesContainer/QuotesContainer'
import { quoteType } from '../App/App'
import './Favorites.css'

const Favorites = () => {
  return (
    <div className='favorites'>

      <div className='main'>
        <h2> Favorites </h2>
        {/* <QuotesContainer 
              quotes={quotes}
              apiQuotes={apiQuotes}
              apiPageQuotes={apiPageQuotes}
        /> */}
      </div>

    </div >
  )
}

export default Favorites