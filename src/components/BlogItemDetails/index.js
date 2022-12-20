import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getTheDetailsFrom()
  }

  getTheDetailsFrom = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const Response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await Response.json()
    console.log(data)
    const upDatedItem = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }

    this.setState({blogDetails: upDatedItem, isLoading: false})
  }

  renderItem = () => {
    const {blogDetails} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails
    return (
      <div>
        <h1 className="heading">{title}</h1>
        <div className="person-image-container">
          <img src={avatarUrl} alt={author} className="personImage" />
          <p className="paragraph">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blogImage" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          this.renderItem()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
