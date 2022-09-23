import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import { fetchRandomQuote, fetchFirstPage, apiSingleData, apiPageData } from '../fetch/fetchApiData'
import Form from '../Form/Form'
import QuotesContainer from '../QuotesContainer/QuotesContainer'
import './App.css'

export type quoteType = {
  quotes: quotesType[]
  apiQuotes: {
    apiQuotes: string
    apiAuthor: string
    apiId: string
  }[]
  apiPageQuotes: {
    apiPageQuotes: string
    apiPageAuthor: string
    apiPageId: string
  }[]
}

type quotesType = {
  userQuote: string
  setUserQuote?: any
  isFavorite?: boolean
  apiQuote?: string
  id?: number
}

const App = () => {

  const [quotes, setQuotes] = useState<quotesType[]>([
    {
      userQuote: 'yolo',
      isFavorite: true,
      id: 1
    }
  ])

  const [apiQuotes, setApiQuotes] = useState<quoteType['apiQuotes']>([
    {
      apiId: '222',
      apiQuotes: 'api yolo',
      apiAuthor: 'sister beretta',
    }
  ])

  const [apiPageQuotes, setApiPageQuotes] = useState<quoteType['apiPageQuotes']>([
    {
      apiPageId: '111',
      apiPageQuotes: 'page api yolo',
      apiPageAuthor: 'brother beretta',
    }
  ])

  const [isLoading, setIsLoading] = useState<boolean>(true)

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

      setIsLoading(false)
  }, [])

  if (isLoading) {
    return <p> is loading... </p>
  }

  return (
    <div className='app'>

      <div className='navigation'>
        <h1 className='zenTon'> zenTon 🌱 </h1>
        <NavLink className='home' to='/'> Home </NavLink>
        {/* <NavLink className='authors' to='/authors'> Authors </NavLink> */}
        <NavLink className='favorites' to='/authors'> Favorites </NavLink>
      </div>
      {/* <Switch> */}
      <div className='main'>
        <Form
          quotes={quotes}
          setQuotes={setQuotes}
        />
        <QuotesContainer
          quotes={quotes}
          apiQuotes={apiQuotes}
          apiPageQuotes={apiPageQuotes}
        />
      </div>
      {/* </Switch> */}
    </div>
  )
}

export default App