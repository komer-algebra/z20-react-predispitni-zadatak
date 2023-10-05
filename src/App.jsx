import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Post from './containers/Post';
import React from './assets/react.svg';
import Accordion from 'react-bootstrap/Accordion';


function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response.data)
        setCount(response.data.length)
        setPosts(response.data)
      }).catch((error) => { console.log(error) });
  }
    , [])

  return (
    <>

      <nav className="navbar navbar-dark bg-dark">
      <h1 className='navbar-text'>
        <img src={React} style={{height:'2em'}}/>
        {' '} Post list
      </h1>
      <h6>There are {count} posts</h6>
      </nav>

      <Accordion defaultActiveKey="0">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} title={post.title} body={post.body}/>
        ))}
      </Accordion>
    </>
  )
}

export default App
