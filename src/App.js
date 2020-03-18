import React, { Component } from 'react';
import Header from './Contents/Header';
import DivSect from './Contents/DivSect';
import anime from 'animejs/lib/anime.es.js';

import './Css/Background.css';
import './index.css';
import './App.css';

export default class App extends Component {
  state = {
    index: 0,
  };
  render() {
    return (
      <div id="wrapper">
        <Background current={this.state.index} />
        <Skipmenu />
        <Wrapper current={this.state} />
      </div>
    );
  }

  componentDidMount() {
    const lists = document.querySelectorAll('.lists');
    let num = 0;

    setInterval(() => {
      // console.log(this.state.index);

      num += 1;

      this._removeClass(lists);
      lists[num].classList.add('on');

      this.setState({
        index: num,
      });

      if (num >= 2) {
        num = -1;
      }
    }, 8000);
  }

  _removeClass(lists) {
    for (var i = 0; i < lists.length; i++) {
      lists[i].classList.remove('on');
    }
  }
}

// skip menu
function Skipmenu() {
  return (
    <div id="skipmenu">
      <a href="#nav">Go to Main Menu</a>
      <a href="/">Go to Products</a>
    </div>
  );
}

class Wrapper extends Component {
  render() {
    return (
      <div id="container">
        <Header />
        <DivSect current={this.props.current} />
      </div>
    );
  }
}

class Background extends Component {
  render() {
    this._animation(this.props.current);
    return (
      <div className="backgroundWrapper">
        <ul className="backgroundColor">
          <li className="back0 on">
            <div className="back_division cf">
              <i></i>
              <span></span>
            </div>
          </li>
          <li className="back1 ">
            <div className="back_division cf">
              <i></i>
              <span></span>
            </div>
          </li>
          <li className="back2 ">
            <div className="back_division cf">
              <i></i>
              <span></span>
            </div>
          </li>
        </ul>
      </div>
    );
  }

  _animation(crrt) {
    const backColor = ['#cce1e8', '#fbf9c0', '#a2bff0'];

    let backNum = '.back' + crrt;
    let backClass = '.back' + crrt + '.on';
    let backOn = document.querySelector(backNum);
    const backImgs = document.querySelectorAll('.backgroundColor li');
    const lft_back = document.createElement('p');
    lft_back.classList.add('beforeBack');

    if (backImgs.length !== 0) {
      for (let i = 0; i < backImgs.length; i++) {
        backImgs[i].classList.remove('on');

        const bkImgLast = backImgs[i].lastChild;
        bkImgLast.firstChild.style.width = '0';
        bkImgLast.lastChild.style.opacity = 0;

        const bkImgfirstLength = backImgs[i].firstChild.childNodes;
        if (bkImgfirstLength.length >= 3) {
          bkImgfirstLength[0].remove();
        }
      }
    }

    if (backOn !== null) {
      const backOnClass = backOn.classList;
      backOnClass.add('on');
      backOn.lastChild.querySelector('i').style.backgroundColor =
        backColor[crrt];
      

      if (backOnClass[1] === 'on') {
        const backMoving = document.querySelector(backClass + ' i')
        
        switch (backClass) {
          case '.back0.on':
            backMoving.style.transition = '0.7s cubic-bezier(0.76, 0, 0.24, 1)';
            break;
        
          default:
            backMoving.style.transition = '';
        }
        
        anime({
          targets: backClass + ' i',
          width: '40%',
          duration: 1000,
          easing: 'easeInOutQuart',
        });

        if (backOnClass[1] !== null) {
          backOn.firstChild.insertBefore(
            lft_back,
            backOn.firstChild.querySelector('i'),
          );

          let count = crrt - 1;
          if (count === -1) {
            count = 2;
          }
          backOn.firstChild.querySelector('p').style.backgroundColor =
            backColor[count];
          backOn.firstChild.querySelector('span').style.opacity = 1;
        }
      }

      
    }
  }
}
