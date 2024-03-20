import React, { Component } from 'react';
import Clothes from './Clothes';

export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { index: 1 };

    }

  render() {
      return (
        <div>
            <p>Gia tri {this.state.index} </p>
            <button className="btn btn-primary" onClick={() => this.setState({ index: this.state.index + 1 })}>Up</button>
            <br></br>
            <br></br>
              <button className="btn btn-primary" onClick={() => this.setState({ index: this.state.index - 1 })}>Down</button>
              <br></br>

              <div>
                  <Clothes name="Jeans" type="Skinny" color="Black" >Quan jeans</Clothes>
              </div>
        </div>
    );
  }
}
