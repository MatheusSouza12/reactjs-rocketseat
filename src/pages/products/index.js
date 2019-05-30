import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Products extends Component {
  state = {
    Products: {},
  }
  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get (`/products/${id}`);

    this.setState({ Products: response.data})
  }
  render() {
    const { Products } = this.state;
    return(
      <div className="product-info">
         <h1>{Products.title}</h1>
         <p>{Products.description}</p>
         <p>
           URL: <a href={Products.url}>{Products.url}</a>
         </p>
      </div>
    );
  }
}
