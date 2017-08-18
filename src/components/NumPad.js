import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../reducers/";

import * as actionTypes from "../constants/actionTypes";

class NumPad extends Component {
  clickCell(e) {
    store.dispatch({
      type: actionTypes.CHANGE_CURRENT_NUMBER,
      newNumber: e.target.id
    });
  }
  render() {
    return (
      <div>
        <table
          onClick={e => {
            this.clickCell(e);
          }}>
          <tbody>
            <tr>
              <td id="1">1</td>
              <td id="2">2</td>
              <td id="3">3</td>
              <td id="4">4</td>
              <td id="5">5</td>
            </tr>
            <tr>
              <td id="6">6</td>
              <td id="7">7</td>
              <td id="8">8</td>
              <td id="9">9</td>
              <td id="DEL">DEL</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTable: state.numPadReducer
  };
}

export default connect(mapStateToProps)(NumPad);
