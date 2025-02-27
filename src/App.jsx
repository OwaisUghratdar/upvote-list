import React from 'react';
import UpvoteList from './components/UpvoteList';
import { UpvoteProvider, useUpvote } from './context/UpvoteContext';
import './App.css';

const ClearButton = () => {
  const { clearAll } = useUpvote();
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
      <button className="clearButton" onClick={clearAll}>
        Clear All Upvotes
      </button>
    </div>
  );
};

function App() {
  return (
    <UpvoteProvider>
      <div style={{ margin: '2rem auto', padding: '1rem' }}>
        <UpvoteList id="list-1" />
        <UpvoteList id="list-2" />
        <UpvoteList id="list-3" />
        <ClearButton />
      </div>
    </UpvoteProvider>
  );
}

export default App;