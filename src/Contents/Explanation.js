import React, { Component } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default class Explanation extends Component {
  state = {
    expl: [
      {
        text: (
          <span>
            A course program that organizes all the cleanser programs of Mercy
            Juice, which are specialized in excellent cleansing effects and
            balanced nutritional supply, in a step-by-step manner to achieve a
            more balanced and effective process.
          </span>
        ),
        tit1: <a href="/">TOTAL CLEANSER</a>,
        tit2: (
          <span style={{ textAlign: 'right' }}>
            <a href="/">3DAYS</a>
          </span>
        ),
      },
      {
        text: (
          <span>
            plant nectar, Cleanspaulder, <br />
            which will make a heavy day vibrant and light.
          </span>
        ),
        tit1: <a href="/">CLEANSE</a>,
        tit2: (
          <span style={{ paddingLeft: '110px' }}>
            <a href="/">POWDER</a>
          </span>
        ),
      },
      {
        text: (
          <span>
            A plant nectar, Cleanspaulder, <br />
            which will make a heavy day vibrant and light.
          </span>
        ),
        tit1: <a href="/">AFTER CLEANSE</a>,
        tit2: (
          <span style={{ paddingLeft: '155px' }}>
            <a href="/">SMOOTHIE</a>
          </span>
        ),
      },
    ],
  };

  render() {
    // console.log(this.props.currPage + ' expl');
    this._animationTitle(this.props.currPage);
    return (
      <article>
        <p className="explnationWrap">
          <span className="explnation">
            {this.state.expl[this.props.currPage].text}
          </span>
        </p>
        <h3 className="productName">
          <p>{this.state.expl[this.props.currPage].tit1}</p>
          <p>{this.state.expl[this.props.currPage].tit2}</p>
        </h3>
      </article>
    );
  }

  componentDidMount() {
    const pdName = document.querySelector('.productName');
    pdName.style.width = '100%';
    // const productName = document.querySelector('.productName');
    
    // productName.style.opacity = 1;
    // anime({
    //   targets: '.productName',
    //   width: '0%',
    //   duration: 1000,
    //   delay: 7000,
    // });
  }

  _animationTitle(page) {
    let curr = page;
    let changePage = page + 1;
    if (changePage === 3) {
      changePage = 0;
    }

    const pdName = document.querySelector('.productName');

    if (pdName !== null) {
      // console.log(page, changePage);
      const productName = document.querySelector('.productName');

      const _changePage = changePage + 1
      if (changePage !== page) {
        anime({
          targets: '.productName',
          duration: 1000,
          width: '100%'
        });
      }
      
    }
  }
}
