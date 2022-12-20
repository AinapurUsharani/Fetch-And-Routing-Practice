import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const Response = await fetch('https://apis.ccbp.in/blogs')
    const data = await Response.json()

    const UpdatedList = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({blogList: UpdatedList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state

    return (
      <div className="response-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogList.map(each => <BlogItem details={each} key={each.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
