import React from 'react';
import Upvote from './Upvote';
import { useUpvote } from '../context/UpvoteContext';

const UpvoteList = ({ id }) => {
  const { upvoteCounts, selectedLists, addUpvote, removeUpvote, toggleSelection } = useUpvote();
  const count = upvoteCounts[id] || 0;
  const isSelected = selectedLists[id] || false;

  return (
    <div className="upvote-list-container">
      <button className="control-button remove-button" onClick={() => removeUpvote(id)}>
        -
      </button>
      <div className="upvote-list">
        <div className="upvotes-container">
          {[...Array(count)].map((_, index) => (
            <Upvote 
              key={index}
              isSelected={isSelected}
              onClick={() => toggleSelection(id)}
            />
          ))}
        </div>
      </div>
      <button className="control-button add-button" onClick={() => addUpvote(id)}>
        +
      </button>
    </div>
  );
};

export default UpvoteList;