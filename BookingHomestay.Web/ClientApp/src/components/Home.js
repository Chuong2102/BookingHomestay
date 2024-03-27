import React, { Component } from 'react';
import Clothes from './Clothes';

const USDtoVND = function (props) {
    const convert = function (usd) {
        return usd * 23632;
    };

    return (
        <div>
            <span>
                USD
            </span>
            <input
                onChange={(e) => {
                    const usd = e.target.value;
                    const vnd = convert(usd);
                    props.onHandleChange({
                        usd,
                        vnd
                    });

                }}
                value={props.value}
            />
        </div>
    );
};

const VNDtoUSD = function (props) {
    const convert = function (vnd) {
        return vnd / 23632;
    };

    return (
        <div>
            <span> VND </span>
            <input onChange={(e) => {
                const vnd = e.target.value;
                const usd = convert(vnd);
                props.onHandleChange({
                    usd,
                    vnd
                });
            }}

            value={props.value}
            />
        </div>
    )
}


export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { index: 1, usd: 0, vnd: 0};

    }

    handleChange = (data) => {
        this.setState(data);
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
                
              </div>

              <div>
                  <Clothes name="Jeans" type="Skinny" color="Black" >Quan jeans</Clothes>
              </div>

              <div style={{ margin: "3%" }}>
                  <USDtoVND onHandleChange={this.handleChange} value={this.state.usd} />
                  <VNDtoUSD onHandleChange={this.handleChange} value={this.state.vnd} />
              </div>
        </div>
    );
  }
}
