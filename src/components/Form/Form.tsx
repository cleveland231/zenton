import React, { useState } from 'react';
import './Form.css';

type quoteType = {
    quotes: {
      userQuote: string
      setUserQuote?: any
      isFavorite?: boolean
      apiQuote?: string
      id?: number
    }[]
    apiQuotes: {
      apiQuotes: string
      apiAuthor?: string
      apiId?: string
    }[]
  }

type formProps = {
    quotes: quoteType['quotes']
    setQuotes: React.Dispatch<React.SetStateAction<quoteType['quotes']>>
}

const Form: React.FC<formProps> = ({ quotes, setQuotes }) => {

    const [input, setInput] = useState({
        userQuote: '',
        isFavorite: false,
        id: 0
    })


    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (): void => {
        if (!input.userQuote) {
            return
        }
        setQuotes([
            ...quotes,
            {
                userQuote: input.userQuote,
                id: input.id + 1 
            }
        ])
        setInput({
            userQuote: '',
            isFavorite: false,
            id: 0
        })
    }


    return (
        <div className='form'>
            <h2>Home</h2>
            <div className='form-style'>
            <textarea
                className='form-input'
                placeholder='Write a Quote?'
                value={input.userQuote}
                onChange={handleChange}
                name='userQuote'
            />
            <button 
                className='quote-button'
                onClick={handleClick}>
                Quote
            </button>
            </div>
        </div>

    )
}


export default Form