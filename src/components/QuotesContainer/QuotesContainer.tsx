import React, { useState } from 'react'
import { quoteType } from '../App/App'
import './QuotesContainer.css'
import emptyHeart from '../../assets/empty-heart.svg'
import greenHeart from '../../assets/green-heart.svg'

const QuotesContainer: React.FC<quoteType> = ({ quotes, apiQuotes, apiPageQuotes, clickFavorite, heartColor }) => {

  // const changeHeart = (favQuote: any) => {
  //   if (favQuote.isFavorite) {
  //   setHeartColor(emptyHeart)
  //   }
  // }

  // disable button

  // if clicked again, unfavorite it by taking out (splice/filter)

  // event.target

  const renderUserQuotes = (event:any): JSX.Element[] => {
    // console.log(quotes)
    return quotes.map(quote => {
      return (
        <li key={quote.id}> 
          <div className='user-quote'> " {quote.quote} " - You </div>
          <button className='favorite-button' onClick={() => clickFavorite(quote)}> 💚 </button>
        </li>
      )
    })
  }

  const renderApiQuotes = (event:any): JSX.Element[] => {
    // console.log('api', apiQuotes)
    return apiQuotes.map(apiQuote => {
      return (
        <li key={apiQuote.id}>
          <div className='user-quote'> " {apiQuote.quote} " - {apiQuote.author} </div>
          <img className='favorite-button' src={heartColor} onClick={() => clickFavorite(apiQuote)}/>
        </li>
      )
    })
  }

  const renderPageApiQuotes = (event:any): JSX.Element[] => {
    // console.log('apiPage', apiPageQuotes)
    return apiPageQuotes.map(apiPageQuote => {
      return (
        <li key={apiPageQuote.id}>
          <div className='user-quote'> " {apiPageQuote.quote} " - {apiPageQuote.author} </div>
          <img className='favorite-button' src={heartColor} onClick={() => clickFavorite(apiPageQuote)}/>
        </li>
      )
    })
  }

  return (
    <div>
    <ul>
      {renderUserQuotes(event)}
      {renderApiQuotes(event)}
      {renderPageApiQuotes(event)}
    </ul>
    </div>
  )
}

export default QuotesContainer