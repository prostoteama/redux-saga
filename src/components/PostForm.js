import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actionPost';

class PostForm extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            title: ""
        }
        // this.submitHandler = this.submitHandler.bind(this) 
        // this.changeSubmitHandler = this.changeSubmitHandler.bind(this)
    }

    submitHandler = (event) => {
        const {_title} = this.refs
        event.preventDefault()
        const {title} = this.state

        if (!title.trim()) {
            return
        }

        const newObj = {
            title, id: Date.now().toString()
        }
        this.props.createPost(newObj)

        this.setState({title: ""})
        _title.focus()
    }

    changeSubmitHandler = (e) => {
        e.persist() 
        this.setState(prev => ({...prev, ...{[e.target.name]:e.target.value }}))

    }

    render () {
        const {title} = this.state
        return (
            <form onSubmit={this.submitHandler}>  
            <div className="form-group">
                <label htmlFor="title">Post name</label>
                <input 
                 ref="_title"
                 type="text"
                 className="form-control"
                 id="title"
                 value={title} 
                 name="title"
                 onChange={this.changeSubmitHandler}
                 
                 />
            </div>
             <button className="btn btn-success" type="submit">Make post</button>
            </form>
        )
    }
}

export default connect(null, {createPost})(PostForm)