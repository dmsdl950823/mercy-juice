import React, { Component } from 'react';
import './../Css/Product.css';

class Products extends Component {
  render() {
    return (
      <section className="sect cf">
        <h2 className="flt_left SectTit">Product</h2>
        <ProductsSmall />
        <ProductBig />
        <ProductsSmall />
      </section>
    );
  }
}

class ProductBig extends Component {
  render() {
    return (
      <div className="flt_left">
        <div className="bProduct">
          <div>big product img</div>
        </div>
      </div>
    );
  }
}

class ProductsSmall extends Component {
  render() {
    return (
      <div className="flt_left sProductWrap">
        <div className="sProduct">small product1 img</div>
        <div className="sProduct">small product2</div>
      </div>
    );
  }
}

export default Products;
