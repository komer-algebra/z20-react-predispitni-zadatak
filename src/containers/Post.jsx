import { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Button from 'react-bootstrap/Button';

import CommentList from '../components/CommentList';
import { Accordion } from 'react-bootstrap';


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
    <Accordion.Item eventKey={id}>
      <h4 style={{color:'blue'}}>{title}</h4>
      <Accordion.Header>
        {body}
        {/* <Button variant="primary" onClick={()=>getComments(id)}>Show comments</Button>
        <Button variant="danger" onClick={()=>setComments([])}>Clear comments</Button> */}
        <br/>
      </Accordion.Header>
      <Accordion.Body onEnter={()=>getComments(id)} onExited={()=>setComments([])}>
        { comments.length > 0 && <CommentList comments={comments}/>}
      </Accordion.Body>
    </Accordion.Item>
  );
}


Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
