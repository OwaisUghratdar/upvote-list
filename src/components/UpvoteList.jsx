import React, { useState } from 'react'
import Upvote from './Upvote'

const UpvoteList = ({ initialCount = 3 }) => {
  const [isSelected, setIsSelected] = useState(false)
  const [upvoteCount, setUpvoteCount] = useState(initialCount)

  const toggleUpvotes = () => {
    setIsSelected(!isSelected)
  }

  const addUpvote = () => {
    setUpvoteCount(upvoteCount + 1)
  }

  const removeUpvote = () => {
    if (upvoteCount > 0) {
      setUpvoteCount(upvoteCount - 1)
    }
  }

  return (
    <div className="upvote-list-container">
      <div className="upvote-list">
        <div className="upvotes-container">
          {[...Array(upvoteCount)].map((_, index) => (
            <Upvote 
              key={index}
              isSelected={isSelected}
              onClick={toggleUpvotes}
            />
          ))}
        </div>
      </div>
      <div className="list-controls">
        <button className="control-button add-button" onClick={addUpvote}>
          +
        </button>
        <button className="control-button remove-button" onClick={removeUpvote}>
          -
        </button>
      </div>
    </div>
  )
}

export default UpvoteList