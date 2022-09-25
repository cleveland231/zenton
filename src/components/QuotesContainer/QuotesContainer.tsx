import React, { useState } from 'react'
import { quoteType } from '../App/App'
import './QuotesContainer.css'

const QuotesContainer: React.FC<quoteType> = ({ quotes, apiQuotes, apiPageQuotes, clickFavorite }) => {

  const renderUserQuotes = (): JSX.Element[] => {
    return quotes.map(quote => {
      return (
        <li>
          <div className='user-quote'> " {quote.quote} " - You </div>
          <button className='favorite-button' onClick={() => clickFavorite(quote)}> 💚 </button>
        </li>
      )
    })
  }

  const renderApiQuotes = (): JSX.Element[] => {
    return apiQuotes.map(apiQuote => {
      return (
        <li>
          <div className='user-quote'> " {apiQuote.quote} " - {apiQuote.author} </div>
          <button className='favorite-button' onClick={() => clickFavorite(apiQuote)}> 💚 </button>
        </li>
      )
    })
  }

  const renderPageApiQuotes = (): JSX.Element[] => {
    return apiPageQuotes.map(apiPageQuote => {
      return (
        <li>
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