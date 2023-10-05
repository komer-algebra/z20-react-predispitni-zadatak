import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

import CommentList from '../components/CommentList';


export default function Post({id, title, body}) {

  const [comments, setComments] = useState([]);

  const getComments = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        console.log(response.data)
        setComments(response.data)
      })
  }

  return (
    <li key={id} className="card">
      <h4 style={{color:'blue'}}>{title}</h4>
      <div>
        <p>{body}</p>
        <Button variant="primary" onClick={()=>getComments(id)}>Show comments</Button>
        <Button variant="danger" onClick={()=>setComments([])}>Clear comments</Button>
        <br/>

      </div>
      { comments.length > 0 && <CommentList comments={comments}/>}
    </li>
  );
}


Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
