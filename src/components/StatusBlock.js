import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../reducers/";

import * as actionTypes from "../constants/actionTypes";

class StatusBlock extends Component {
  checkStatus() {
    var checkArr = [];
    var flag = false;
    // check rows
    this.props.table.map(tableRow => {
      checkArr = [];
      tableRow.map(tableCell => {
        if (checkArr.indexOf(tableCell) !== -1 || tableCell === "") {
          checkArr.push(tableCell);
          flag = true;
        } else {
          checkArr.push(tableCell);
        }
        return flag;
      });
      return flag;
    });
    // check cols
    this.props.table.map((tableRow, index) => {
      checkArr = [];
      for (let i = 0; i < this.props.table.length; i++) {
        if (
          checkArr.indexOf(this.props.table[i][index]) !== -1 ||
          this.props.table[i][index] === ""
        ) {
          checkArr.push(this.props.table[i][index]);
          flag = true;
        } else {
          checkArr.push(this.props.table[i][index]);
        }
      }
      return flag;
    });
    // check 3x3
    checkArr = [];
    var i = 0;
    var k = 0;
    while (i < 9) {
      k = 0;
      while (k < 9) {
        checkArr = [];
        for (let kek = k; kek < k + 3; kek++) {
          for (let kek2 = i; kek2 < i + 3; kek2++) {
            if (
              checkArr.indexOf(this.props.table[kek][kek2]) !== -1 ||
              this.props.table[kek][kek2] === ""
            ) {
              checkArr.push(this.props.table[kek][kek2]);
              flag = true;
            } else {
              checkArr.push(this.props.table[kek][kek2]);
            }
          }
        }
        k += 3;
      }
      i += 3;
    }
    if (flag === false) {
      store.dispatch({ type: actionTypes.CHANGE_STATUS });
    }
  }

  render() {
    return (
      <div>
        {this.props.status ? <div>Completed</div> : <div>In progress</div>}
        <button
          type="button"
          onClick={() => {
            this.checkStatus();
          }}>
          Check
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    status: state.statusReducer,
    table: state.tableReducer
  };
}

export default connect(mapStateToProps)(StatusBlock);
