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
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Simple URL Shortener</h1>
      <input
        type="text"
        placeholder="Enter a long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: '0.5rem', width: '300px' }}
      />
      <button onClick={handleShorten} style={{ marginLeft: '1rem', padding: '0.5rem' }}>
        Shorten
      </button>

      {shortUrl && (
        <div style={{ marginTop: '1rem' }}>
          <strong>Short URL:</strong> <a href={url} target="_blank" rel="noreferrer">{shortUrl}</a>
        </div>
      )}
    </div>
  )
}

export default App
