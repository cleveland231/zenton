import React, { useState } from 'react';
import { quoteType } from '../App/App';
import './Form.css';

const Form: React.FC<quoteType> = ({ quotes, setQuotes }) => {

    const [input, setInput] = useState({
        quote: '',
        id: 0
    })

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        })
    }

    const handleClick = (): void => {
        // if (!input.quote) {
        //     return
        // }
        setQuotes([
            ...quotes,
            {
                quote: input.quote,
                id: input.id + 1,
            }
        ])
        setInput({
            quote: '',
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
                value={input.quote}
                onChange={handleChange}
                name='quote'
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