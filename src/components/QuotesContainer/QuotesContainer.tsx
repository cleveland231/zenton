import React, { useState } from 'react'
import { quoteType } from '../App/App'
import './QuotesContainer.css'
import emptyHeart from '../../assets/empty-heart.svg'
import greenHeart from '../../assets/green-heart.svg'

const QuotesContainer: React.FC<quoteType> = ({ quotes, apiQuotes, apiPageQuotes, clickFavorite }) => {

  const renderUserQuotes = (): JSX.Element[] => {
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

  const renderApiQuotes = (): JSX.Element[] => {
    // console.log('api', apiQuotes)
    return apiQuotes.map(apiQuote => {
      return (
        <li key={apiQuote.id}>
          <div className='user-quote'> " {apiQuote.quote} " - {apiQuote.author} </div>
          <button className='favorite-button' onClick={() => clickFavorite(apiQuote)}> 💚 </button>
        </li>
      )
    })
  }

  const renderPageApiQuotes = (): JSX.Element[] => {
    // console.log('apiPage', apiPageQuotes)
    return apiPageQuotes.map(apiPageQuote => {
      return (
        <li key={apiPageQuote.id}>
          <div className='user-quote'> " {apiPageQuote.quote} " - {apiPageQuote.author} </div>
          <button className='favorite-button' onClick={() => clickFavorite(apiPageQuote)}> 💚 </button>
        </li>
      )
    })
  }

  return (
    <div>
    <ul>
      {renderUserQuotes()}
      {renderApiQuotes()}
      {renderPageApiQuotes()}
    </ul>
    </div>
  )
}

export default QuotesContainer