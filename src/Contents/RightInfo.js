import React, { Component } from 'react';

// right info
export default class RightInfo extends Component {
  render() {
    return (
      <div className="rightInfo flt_right">
        <div className="currentPage cf">
          <CurrentPageUl currList={this.props.currpage} />
        </div>

        <div className="socialM cf">
          <ul className="cf">
            <li>
              <a href="/">
                <span className="_skip">instagram</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="_skip">Call</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

class CurrentPageUl extends Component {
  state = {
    index: this.props.currList,
  };

  render() {
    return (
      <ul className="cf">
        <li className="lists on" onClick={this._newCom.bind(this)}></li>
        {/*  onClick={this._newCom.bind(this)} */}
        <li className="lists" onClick={this._newCom.bind(this)}></li>
        <li className="lists" onClick={this._newCom.bind(this)}></li>
      </ul>
    );
  }

  _newCom(e) {
    const lists = document.querySelectorAll('.lists'); // li lists
    let i = 0;
    let j = 0;
    while (i < lists.length) {
      lists[i].classList.remove('on');
      i = i + 1;
    }

    e.target.classList.add('on'); // addclass 'on'

    while (j < lists.length) {
      if (lists[j].classList.length === 2) {
        this.setState({
          index: j,
        });
      }
      j = j + 1;
    }
  }
}
