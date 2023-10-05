import { PropTypes } from 'prop-types';

export default function CommentList({ comments }) {
  return (
    <div className='card'>
      {comments.map((comment) => (
        <div key={comment.id}>
          <h4 style={{color:'blue'}}>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired
}
