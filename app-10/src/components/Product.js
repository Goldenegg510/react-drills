import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Product extends Component {
    constructor(){
        super()
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        axios.get("https://practiceapi.devmountain.com/products").then((response) => {
            this.setState({
                products: response.data
            })
            console.log(this.state.products[1].image)
        })
    }

    render(){
        return(<div>
            <h1>Products</h1>
            {this.state.products.map((element) => {
                return(<Link to={`/details/${element.id}`}><img width='200px'  src={`${element.image}`} alt='image' /></Link>)
            })}
        </div>)
    }
}