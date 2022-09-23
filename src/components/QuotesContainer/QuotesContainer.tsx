import React, { useState } from 'react'
import { quoteType } from '../App/App'
import Favorites from '../Favorites/Favorites'
import './QuotesContainer.css'

const QuotesContainer: React.FC<quoteType> = ({ quotes, apiQuotes, apiPageQuotes }) => {

  let favorited:any = []

  const handleClick = (favQuote: any): void => {
    // console.log('handleClick')
    // console.log('quotes', quotes)
    // console.log('apiPage', apiPageQuotes)
    // setFavorite(true)
    favQuote.isFavorite = true
    if (favQuote.isFavorite) {
      favorited.push(favQuote)
      console.log('favs!!!', favorited);
    }
  }

  const renderUserQuotes = (): JSX.Element[] => {
    // console.log(quotes)
    return quotes.map(quote => {
      return (
        <li key={quote.id}> 
          <div className='user-quote'> " {quote.userQuote} " - You </div>
          <button className='favorite-button' onClick={() => handleClick(quote)}> 💚  </button>
        </li>
      )
    })
  }

  const renderApiQuotes = (): JSX.Element[] => {
    // console.log('api', apiQuotes)
    return apiQuotes.map(apiQuote => {
      return (
        <li key={apiQuote.apiId}>
          <div className='user-quote'> " {apiQuote.apiQuotes} " - {apiQuote.apiAuthor} </div>
          <button className='favorite-button' onClick={() => handleClick(apiQuote)}> 💚 </button>
        </li>
      )
    })
  }

  const renderPageApiQuotes = (): JSX.Element[] => {
    // console.log('apiPage', apiPageQuotes)
    return apiPageQuotes.map(apiPageQuote => {
      return (
        <li key={apiPageQuote.apiPageId}>
          <div className='user-quote'> " {apiPageQuote.apiPageQuotes} " - {apiPageQuote.apiPageAuthor} </div>
          <button className='favorite-button' onClick={() => handleClick(apiPageQuote)} > 💚 </button>
        </li>
      )
    })
  }

  return (
    <ul>
      {renderUserQuotes()}
      {renderApiQuotes()}
      {renderPageApiQuotes()}
      <Favorites favorited={favorited} />
    </ul>
  )
}

export default QuotesContainer