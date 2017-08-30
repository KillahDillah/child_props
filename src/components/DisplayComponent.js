import React, {Component} from 'react'

class DisplayComponent extends Component {
  render() {
    return (
      <div id="display">
        <h3> States, props, children, and fun!</h3>
        {this.props.sayWhat}
      </div>
    );
  }
}

export default DisplayComponent;