import React from 'react'
import UpvoteList from './components/UpvoteList'

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <UpvoteList initialCount={3} />
      <UpvoteList initialCount={2} />
      <UpvoteList initialCount={5} />
    </div>
  )
}

export default App