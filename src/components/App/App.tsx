import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Favorites from '../Favorites/Favorites'
import { fetchRandomQuote, fetchFirstPage, apiSingleData } from '../fetch/fetchApiData'
import Form from '../Form/Form'
import QuotesContainer from '../QuotesContainer/QuotesContainer'
import './App.css'

export type quoteType = {
  quotes: userQuoteType[]
  apiQuotes: apiQuotes[]
  apiPageQuotes: apiPageQuotes[]
  favorited: favorited[]
  clickFavorite?: any
}

type favorited = {
  favQuote: string
  favAuthor: string
  id: number
  isFavorite?: boolean
}

type apiPageQuotes = {
  apiPageQuotes: string
  apiPageAuthor: string
  apiPageId: string
  isFavorite?: boolean
}

type apiQuotes = {
  apiQuotes: string
  apiAuthor: string
  apiId: string
  isFavorite?: boolean
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
      isFavorite: false,
      id: 1
    }
  ])

  const [apiQuotes, setApiQuotes] = useState<apiQuotes[]>([
    {
      apiId: '222',
      apiQuotes: 'random api test',
      apiAuthor: 'sister beretta',
    }
  ])

  const [apiPageQuotes, setApiPageQuotes] = useState<apiPageQuotes[]>([
    {
      apiPageId: '333',
      apiPageQuotes: 'page api test',
      apiPageAuthor: 'brother beretta',
    }
  ])

  const [favorited, setFavorited] = useState<favorited[]>([
    {
      favQuote: 'favoriteQuote',
      favAuthor: 'fav author',
      id: 444
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

  const clickFavorite = (favQuote: any) => {
    // console.log('handleClick')
    // console.log('quotes', quotes)
    // console.log('apiPage', apiPageQuotes)
    // setHeartColor(emptyHeart)
    favQuote.isFavorite = true
    if (favQuote.isFavorite) {
      setFavorited([...favorited, favQuote])
      console.log('favs!!!', favorited);
    }
  }

  return (
    <div className='app'>

      <div className='navigation'>
        <h1 className='zenTon'> zenton 🌱 </h1>
        <NavLink className='home' to='/'> Home </NavLink>
        <NavLink className='favorites' to='/favorites'> Favorites </NavLink>
      </div>

      <div className='main'>
        <Switch>

          <Route exact path='/'>
            <Form
              quotes={quotes}
              setQuotes={setQuotes}
            />

            <QuotesContainer
              quotes={quotes}
              apiQuotes={apiQuotes}
              apiPageQuotes={apiPageQuotes}
              clickFavorite={clickFavorite}
              favorited={favorited}
            />
          </Route>

          <Route exact path='/favorites'>
            <Favorites
              favorited={favorited}
              quotes={quotes}
              apiQuotes={apiQuotes}
              apiPageQuotes={apiPageQuotes} />
          </Route>

          <Route render={() => <h2>This Path Does Not Exist!</h2>} />

        </Switch>
      </div>
    </div>
  )
}

export default App

