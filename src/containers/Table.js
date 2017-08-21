import React, { Component } from "react";
import { connect } from "react-redux";

import "../styles/table.css";
import NumPad from "../components/NumPad";
import * as actionTypes from "../constants/actionTypes";
import * as styles from "../constants/styles.js";
import { tableApi } from "../api/table.js";

class Table extends Component {
  clickCell(e) {
    if (e.target.tagName === "TD") {
      const currentCell = this.props.currentTable[e.target.id[0]][
        e.target.id[1]
      ];
      const apiCell = tableApi.table()[e.target.id[0]][e.target.id[1]];
      const value = this.props.currentNumber;

      if (this.props.currentNumber === "DEL") {
        if (currentCell !== apiCell) {
          this.props.dispatch({
            type: actionTypes.DEL_NUMBER,
            position: e.target.id
          });
        }
      } else {
        if (currentCell === "" && value !== "") {
          this.props.dispatch({
            type: actionTypes.SET_NUMBER,
            position: e.target.id,
            number: value
          });
        }
      }
    }
  }
  render() {
    var cellStyle = {};
    return (
      <div>
        <table
          className="mainTable"
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
                      cellStyle = styles.boldNumbers;
                    } else {
                      cellStyle = styles.normalNumbers;
                    }
                    if (item === parseInt(this.props.currentNumber, 10)) {
                      cellStyle = { ...cellStyle, ...styles.heighlightNumber };
                    }

                    return (
                      <td
                        key={index2}
                        id={`${index}${index2}`}
                        style={cellStyle}>
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
    currentTable: state.table,
    currentNumber: state.numPad
  };
}

export default connect(mapStateToProps)(Table);
