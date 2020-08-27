import React from 'react'

export default class Post extends React.Component {

    constructor (props) {
        super(props)

        this.state = {
            title: ""
        }
        // this.submitHandler = this.submitHandler.bind(this) 
        // this.changeSubmitHandler = this.changeSubmitHandler.bind(this)
    }

    submitHandler = (event) => {
        event.preventDefault()

        const {title} = this.state
        const newObj = {
            title, id: Date.now().toString()
        }
        console.log(newObj) 
        this.setState({title:""})
    }

    changeSubmitHandler = (e) => {
        e.persist() 
        this.setState(prev => ({...prev, ...{[e.target.name]:e.target.value }}))

    }

    render () {
        const {value} = this.state
        return (
            <form onSubmit={this.submitHandler}>  
            <div className="form-group">
                <label htmlFor="title">Post name</label>
                <input 
                 type="text"
                 className="form-control"
                 id="title"
                 value={value} 
                 name="title"
                 onChange={this.changeSubmitHandler}
                 />
            </div>
             <button className="btn btn-success" type="submit">Make post</button>
            </form>
        )
    }
}