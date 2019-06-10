import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './style.css';

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
      }
    
    state = {
        text: ''
    }

    render() {
        return (
            <div className="product-info">

                <form>
                    <label>
                        Digite o usuário:
                    </label><br/>
                    <input onChange={this.handleChange} value={this.state.text} />
                    <Link to={"/repos/"+this.state.text}>Find</Link>
                </form>

            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value});
    }

   
}