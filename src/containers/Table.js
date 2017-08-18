import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../reducers/";

import "../styles/table.css";
import NumPad from "../components/NumPad";
import * as actionTypes from "../constants/actionTypes";
import { tableApi } from "../api/table.js";

class Table extends Component {
  clickCell(e) {
    const currentCell = this.props.currentTable[e.target.id[0]][e.target.id[1]];
    const apiCell = tableApi.table()[e.target.id[0]][e.target.id[1]];
    const value = this.props.currentNumber;

    if (this.props.currentNumber === "DEL") {
      if (currentCell !== apiCell) {
        store.dispatch({
          type: actionTypes.DEL_NUMBER,
          position: e.target.id
        });
      }
    } else {
      if (currentCell === "" && value !== "") {
        store.dispatch({
          type: actionTypes.SET_NUMBER,
          position: e.target.id,
          number: value
        });
      }
    }
  }
  render() {
    var styles = {};
    return (
      <div>
        <table
          onClick={e => {
            this.clickCell(e);
          }}>
          <tbody>
            {this.props.currentTable.map((tr, index) => {
              return (
                <tr key={index}>
                  {tr.map((item, index2) => {
                    if (
                      item === tableApi.table()[index][index2] &&
                      item !== ""
                    ) {
                      styles = {
                        fontWeight: "bold"
                      };
                    } else {
                      styles = {
                        fontWeight: "normal"
                      };
                    }

                    return (
                      <td key={index2} id={`${index}${index2}`} style={styles}>
                        {item}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <NumPad />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTable: state.tableReducer,
    currentNumber: state.numPadReducer
  };
}

export default connect(mapStateToProps)(Table);
