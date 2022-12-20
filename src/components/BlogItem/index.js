import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <Link className="link-style" to={`/blogs/${id}`}>
      <li className="each-course-container">
        <img src={imageUrl} alt="course" className="course-size" />
        <div className="details-container">
          <p className="paragraph">{topic}</p>
          <h1 className="heading">{title}</h1>
          <div>
            <img src={avatarUrl} alt="avatar" className="person-image" />
            <p className="paragraph">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
