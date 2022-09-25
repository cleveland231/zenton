import React, { useState, useEffect } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'
import Favorites from '../Favorites/Favorites'
import { fetchRandomQuote, fetchFirstPage, apiSingleData } from '../fetch/fetchApiData'
import Form from '../Form/Form'
import QuotesContainer from '../QuotesContainer/QuotesContainer'
import './App.css'
import emptyHeart from '../../assets/empty-heart.svg'
import greenHeart from '../../assets/green-heart.svg'

export type quoteType = {
  quotes: userQuoteType[]
  apiQuotes: apiQuotes[]
  apiPageQuotes: apiPageQuotes[]
  favorited: favorited[]
  clickFavorite?: any
  setQuotes?: any
  setHeartColor?: any
  heartColor?: any
}

type favorited = {
  quote: string
  author: string
  id: string
}

type apiPageQuotes = {
  quote: string
  author: string
  id: string
}

type apiQuotes = {
  quote: string
  author: string
  id: string
}

type userQuoteType = {
  quote: string
  author: string
  id?: string
}

const App = () => {

  const [quotes, setQuotes] = useState<userQuoteType[]>([])

  const [apiQuotes, setApiQuotes] = useState<apiQuotes[]>([])

  const [apiPageQuotes, setApiPageQuotes] = useState<apiPageQuotes[]>([])

  const [favorited, setFavorited] = useState<favorited[]>([])

  const [heartColor, setHeartColor] = useState<string>(emptyHeart)

  const formatData = (results: apiSingleData[]): void => {
    const formatted = results.map(result => {
      return {
        id: result._id,
        quote: result.content,
        author: result.author
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
            id: data._id,
            quote: data.content,
            author: data.author
          }
        ])
      })
    fetchFirstPage()
      .then(data => formatData(data.results))
  }, [])

  const clickFavorite = ( favQuote: any ) => {
    if (!favorited.includes(favQuote)) {
      setFavorited([...favorited, favQuote])
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
              apiQuotes={apiQuotes} 
              apiPageQuotes={apiPageQuotes} 
              favorited={favorited}            
            />

            <QuotesContainer
              quotes={quotes}
              apiQuotes={apiQuotes}
              apiPageQuotes={apiPageQuotes}
              clickFavorite={clickFavorite}
              favorited={favorited}
              setHeartColor={setHeartColor}
              heartColor={heartColor}
            />
          </Route>

          <Route exact path='/favorites'>
            <Favorites
              favorited={favorited}
              quotes={quotes}
              apiQuotes={apiQuotes}
              apiPageQuotes={apiPageQuotes} 
            />
          </Route>

          <Route render={() => <h2>This Path Does Not Exist!</h2>} />

        </Switch>
      </div>
    </div>
  )
}

export default App


