import React from 'react'
import UpvoteList from './components/UpvoteList'

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <UpvoteList initialCount={0} />
      <UpvoteList initialCount={0} />
      <UpvoteList initialCount={0} />
    </div>
  )
}

export default App