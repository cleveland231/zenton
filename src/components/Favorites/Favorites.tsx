import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import QuotesContainer from '../QuotesContainer/QuotesContainer'
import { quoteType } from '../App/App'
import './Favorites.css'

const Favorites: any  = ({favorited}) => {

  const renderfavQuotes = (): JSX.Element[] => {
    // console.log(quotes)
    return favorited.map(favorite => {
      return (
        <li key={favorite.id}> 
          <div className='user-quote'> " {favorite.favQuote} " - {favorite.favAuthoer} </div>
        </li>
      )
    })
  }
  
  return (
    <div className='favorites'>

      <div className='main'>
        <h2> Favorites </h2>
        {renderfavQuotes()}
      </div>

    </div >
  )
}

export default Favorites