import React, { Component } from 'react';
import api from '../../services/api';
import './style.css';

export default class Main extends Component {

    state = {
        repos: []
    };

    componentDidMount() {
        const {user} = this.props.match.params;
        this.loadProducts(user);
    }

    loadProducts = async (user) => {
        
        const response = await api.get(`/${user}/repos`);
        this.setState({ repos: response.data });
        
    };

    render() {
        
        const {repos} = this.state;

        return (
            <div className="product-list">
            {
                repos.map(repo => (

                    <article key={repo.id}>

                        <strong>{repo.name}</strong>
                        <p> {repo.description} </p>
                        <a href={repo.html_url}>Acessar</a>

                    </article>

                ))    
            }
            </div>
        );
    }
}