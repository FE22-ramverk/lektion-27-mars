import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState('');
  const API_URL = "https://randomfox.ca/floof/?ref=apilist.fun";
  const [fox, setFox] = useState({});

  useEffect(() => {
    // fetcha räv
    fetch(API_URL)
    .then(response => response.json())
    .then(data => setFox(data))
    .catch((err) => console.log(err))
  }, []);

  return (
    <div className="App">
      <h1>{greeting}</h1>
      <input type="text" onChange={(e) => {setGreeting(e.target.value)}}></input>
      <article>
        <h2>Random Räv</h2>
        <img src={fox.image} />
      </article>
    </div>
  )
}

export default App
