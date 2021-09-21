import './App.css';
import axios from "axios";
import { useRef, useState } from "react";

const instance = axios.create({
  baseURL: 'http://localhost:3001'
});

function App() {
  const inputRef = useRef()
  const [urls, setUrls] = useState([])

  const fetchResourceWithToken = async (path) => {
    const resp = await instance.get(path)
    setUrls((currentUrls) => ([...currentUrls, resp.data.urlWithToken]))
  }

  const create = async () => {
    const val = inputRef.current.value
    inputRef.current.value = ''
    const resp = await instance.post('/items', {url: `www.${val}`})
    fetchResourceWithToken(resp.data.tokenPath)
  }

  return (
    <div className="App">
      <div>
        www.<input className="App-input" ref={inputRef}/>
      </div>
      <button onClick={create}>Create!</button>
      <ul>
        {urls.map((url, index) => (
          <li key={index}>{url}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
