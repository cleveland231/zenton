import React from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import QuotesContainer from '../QuotesContainer/QuotesContainer'
import { quoteType } from '../App/App'
import './Favorites.css'

const Favorites: React.FC<quoteType> = ({ favorited }) => {

  const renderfavQuotes = (): JSX.Element[] => {
    console.log('favorite page', favorited)
    return favorited.map((favorite:any) => {
      return (
        <li key={favorite.id ?? Date.now()}> 
          <div className='user-quote'> " {favorite.favQuote} " - {favorite.favAuthor} </div>
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