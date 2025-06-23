import { useState } from 'react'
import './App.css'

function App() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const handleShorten = () => {

    if (url.trim() !== '') {
      const fakeShort = 'short.ify/' + Math.random().toString(36).substring(6)
      setShortUrl(fakeShort)
    }
  }

  return (
    <div className='container'>
      <h1>Simple URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter a long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={handleShorten}>
        Shorten
      </button>

      {shortUrl && (
        <div className='short-url'>
          <strong>Short URL:</strong> <a href={url} target="_blank" rel="noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  )
}

export default App
