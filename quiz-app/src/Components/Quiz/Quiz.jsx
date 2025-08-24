import React from 'react'
import './Quiz.css'

const Quiz = () => {
  return (
    <div className="container">
        <h1>Quiz App</h1>
        <hr />
        <h2>Which City is the capital of India</h2>
        <ul>
            <li>Kolkata</li>
            <li>Mumbai</li>
            <li>Delhi</li>
            <li>Bengaluru</li>
        </ul>
        <button>Next</button>
        <div className="index">1 of 5 questions</div>
    </div>
  )
}

export default Quiz