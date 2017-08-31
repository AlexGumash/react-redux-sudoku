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

      if (
        (currentCell === "" && this.props.currentNumber) ||
        (this.props.currentNumber === "DEL" && currentCell !== apiCell)
      ) {
        this.props.dispatch({
          type: actionTypes.ADD_TO_HISTORY,
          item: this.props.currentTable
        });
      }

      if (this.props.currentNumber === "DEL") {
        if (currentCell !== apiCell) {
          this.props.dispatch({
            type: actionTypes.DEL_NUMBER,
            position: e.target.id
          });
        }
      } else {
        if (currentCell === "" && this.props.currentNumber) {
          this.props.dispatch({
            type: actionTypes.SET_NUMBER,
            position: e.target.id,
            number: value
          });
        }
      }

      if (this.props.currentNumber !== "DEL" && currentCell !== "") {
        this.props.dispatch({
          type: actionTypes.CHANGE_CURRENT_NUMBER,
          newSelectedNumber:
            currentCell || parseInt(this.props.currentNumber, 10),
          position: e.target.id
        });
      } else if (this.props.currentNumber !== "DEL" && currentCell === "") {
        this.props.dispatch({
          type: actionTypes.CHANGE_CURRENT_NUMBER,
          newNumber: parseInt(this.props.currentNumber, 10),
          position: e.target.id
        });
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
            {this.props.history.present.map((tr, index) => {
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

                    if (
                      item === parseInt(this.props.currentNumber, 10) ||
                      item === this.props.selectedNumber
                    ) {
                      cellStyle = { ...cellStyle, ...styles.heighlightNumber };
                    }
                    if (
                      this.props.position &&
                      index === parseInt(this.props.position[0], 10) &&
                      index2 === parseInt(this.props.position[1], 10)
                    ) {
                      cellStyle = {
                        ...cellStyle,
                        ...styles.heighlightSelectedNumber
                      };
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
    currentNumber: state.numPad.numPadNumber,
    selectedNumber: state.numPad.selectedNumber,
    position: state.numPad.position,
    history: state.history
  };
}

export default connect(mapStateToProps)(Table);
