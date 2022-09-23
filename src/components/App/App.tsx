import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Favorites from '../Favorites/Favorites'
import { fetchRandomQuote, fetchFirstPage, apiSingleData } from '../fetch/fetchApiData'
import Form from '../Form/Form'
import QuotesContainer from '../QuotesContainer/QuotesContainer'
import './App.css'

export type quoteType = {
  quotes: userQuoteType[]
  apiQuotes: {
    apiQuotes: string
    apiAuthor: string
    apiId: string
    isFavorite?: boolean
  }[]
  apiPageQuotes: {
    apiPageQuotes: string
    apiPageAuthor: string
    apiPageId: string
    isFavorite?: boolean
  }[]
}

type userQuoteType = {
  userQuote?: string
  setUserQuote?: any
  isFavorite?: boolean
  apiQuote?: string
  id?: number
}

const App = () => {

  const [quotes, setQuotes] = useState<userQuoteType[]>([
    {
      userQuote: 'user quote test',
      isFavorite: true,
      id: 1
    }
  ])

  const [apiQuotes, setApiQuotes] = useState<quoteType['apiQuotes']>([
    {
      apiId: '222',
      apiQuotes: 'random api test',
      apiAuthor: 'sister beretta',
    }
  ])

  const [apiPageQuotes, setApiPageQuotes] = useState<quoteType['apiPageQuotes']>([
    {
      apiPageId: '333',
      apiPageQuotes: 'page api test',
      apiPageAuthor: 'brother beretta',
    }
  ])

  const formatData = (results: apiSingleData[]): void => {
    const formatted = results.map(result => {
      return {
        apiPageId: result._id,
        apiPageQuotes: result.content,
        apiPageAuthor: result.author
      }
    })
    setApiPageQuotes(formatted)
  }

  useEffect(() => {
    fetchRandomQuote()
      .then(data => {
        setApiQuotes([
          ...apiQuotes,
          {
            apiId: data._id,
            apiQuotes: data.content,
            apiAuthor: data.author
          }
        ])
      })
    // .then(data => console.log('r',data))

    fetchFirstPage()
      .then(data => formatData(data.results))
    // .then(data => console.log('page', data))

  }, [])


  return (
    <div className='app'>

      <div className='navigation'>
        <h1 className='zenTon'> zenton 🌱 </h1>
        <NavLink className='home' to='/'> Home </NavLink>
        {/* <NavLink className='authors' to='/authors'> Authors </NavLink> */}
        <NavLink className='favorites' to='/favorites'> Favorites </NavLink>
      </div>
      {/* <Switch> */}
      <div className='main'>

        <Route exact path='/'>
        <Form
          quotes={quotes}
          setQuotes={setQuotes}
        />
        <QuotesContainer
          quotes={quotes}
          apiQuotes={apiQuotes}
          apiPageQuotes={apiPageQuotes}
        />
        </Route>

        <Route exact path='/favorites'>
          <Favorites />
        </Route>

      </div>
      {/* </Switch> */}
    </div>
  )
}

export default App