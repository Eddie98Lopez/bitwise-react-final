import {useEffect} from 'react'
import './App.css';
import axios from 'axios'

function App() {

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
      .then(res=> console.log(res))
      .catch(err => console.log(err))
  },[])
  return (
    <div className="App">


    </div>
  );
}

export default App;
