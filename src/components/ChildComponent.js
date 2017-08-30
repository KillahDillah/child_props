
import React, {Component} from 'react';


class ChildComponent extends Component {
  render() {
    return (
      <div>
        <div id="submitwrap">
          <input type="submit" onClick={this.props.onClick} className="submit"/>
        </div>
      </div>
    );
  }
}

export default ChildComponent;