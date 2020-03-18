import React, { Component } from 'react';

import './../Css/DivSect.css';
import LeftInformations from './LeftInformations';
import RightInfo from './RightInfo';

class DivSect extends Component {
  state = {
    explanation: [{ id: 'detox' }, { id: 'powder' }, { id: 'other' }],
  };

  render() {
    // red
    return (
      <section className="sect cf">
        <LeftInformations
          idx={this.props.current.index}
        />
        <RightInfo />
      </section>
    );
  }

  _explanation() {
    if (this.props.current.index === 0) {
      return this.state.explanation[0];
    } else if (this.props.current.index === 1) {
      return this.state.explanation[1];
    } else {
      return this.state.explanation[2];
    }
  }
}

export default DivSect;
