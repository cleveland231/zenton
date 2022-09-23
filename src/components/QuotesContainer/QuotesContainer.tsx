import React, { useState } from 'react'
import { quoteType } from '../App/App'
import './QuotesContainer.css'

const QuotesContainer: React.FC<quoteType> = ({ quotes, apiQuotes, apiPageQuotes }) => {

  const renderUserQuotes = (): JSX.Element[] => {
    console.log(quotes)
    return quotes.map(quote => {
      return (
        <li key={quote.id}>
          <div className='user-quote'> " {quote.userQuote} " - You </div>
          <button className='favorite-button'> 💚 </button>
        </li>
      )
    })
  }

  const renderApiQuotes = (): JSX.Element[] => {
    console.log('api', apiQuotes)
      return apiQuotes.map(apiQuote => {
        return (
          <li key={apiQuote.apiId}>
            <div className='user-quote'> " {apiQuote.apiQuotes} " - {apiQuote.apiAuthor} </div>
            <button className='favorite-button'> 💚 </button>
          </li>
        )
      })
    }

  const renderPageApiQuotes = (): JSX.Element[] => {
    console.log('apiPage', apiPageQuotes)
    return apiPageQuotes.map(apiPageQuote => {
      return (
        <li key={apiPageQuote.apiPageId}>
          <div className='user-quote'> " {apiPageQuote.apiPageQuotes} " - {apiPageQuote.apiPageAuthor} </div>
          <button className='favorite-button'> 💚 </button>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderApiQuotes()}
      {renderUserQuotes()}
      {renderPageApiQuotes()}
    </ul>
  )
}

export default QuotesContainer