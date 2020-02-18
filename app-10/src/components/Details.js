import React, {Component} from 'react'
import axios from 'axios'

export default class Details extends Component {
    constructor(){
        super()
        this.state = {
            details: {}
        }
    }

    componentDidMount(){
        axios.get(`https://practiceapi.devmountain.com/products/${this.props.match.params.id}`).then((response) => {
            this.setState({
                details: response.data
            })
        })
    }

    render(){
        return (<div>
            <h1>Details</h1>
            <img width='200px' src={`${this.state.details.image}`} alt='img' /><br/>{this.state.details.title}
        </div>)
    }
}