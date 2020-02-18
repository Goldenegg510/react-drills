import React, {Component} from 'react'

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            login: '',
            password: ''
        }
    }

    handleChange = (e) => {
        let name = e.target.name
        this.setState({[name]: e.target.value})
        
    }
    handleSubmit = (e) => {
        e.preventDefault()
        alert(`Username: ${this.state.login} Password: ${this.state.password}`)
    }

    render(){
        return(<div>
            <input name='login' onChange={e => {this.handleChange(e)}} />
            <input name='password' onChange={e => {this.handleChange(e)}} />
            <button onClick={e => {this.handleSubmit(e)}}>Submit</button>
        </div>)
    }
}