import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../constants/actionTypes";
import * as styles from "../constants/styles.js";
import { numPadTable } from "../api/numPadTable.js";

class NumPad extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     historyCounter: 0
  //   };
  // }
  clickCell(e) {
    this.props.dispatch({
      type: actionTypes.CHANGE_CURRENT_NUMBER,
      newNumber: e.target.id
    });
  }
  // clickHistoryButton(e) {
  //   const historyItem = this.props.history[this.state.historyCounter];
  //
  //   if (this.props.history.length > 0 && historyItem.value) {
  //     this.props.dispatch({
  //       type: actionTypes.ADD_TO_HISTORY,
  //       prevNumber: this.props.currentTable[historyItem.position[0]][
  //         historyItem.position[1]
  //       ],
  //       position: historyItem.position
  //     });
  //     this.props.dispatch({
  //       type: actionTypes.SET_NUMBER,
  //       number: historyItem.value,
  //       position: historyItem.position
  //     });
  //   } else if (this.props.history.length > 0) {
  //     this.props.dispatch({
  //       type: actionTypes.DEL_NUMBER,
  //       position: historyItem.position
  //     });
  //   }
  //   if (
  //     e.target.id === "prev" &&
  //     this.state.historyCounter < this.props.history.length - 1
  //   ) {
  //     this.setState({
  //       historyCounter: this.state.historyCounter + 1
  //     });
  //   } else if (e.target.id === "next" && this.state.historyCounter > 0) {
  //     this.setState({
  //       historyCounter: this.state.historyCounter - 1
  //     });
  //   }
  // }
  render() {
    var cellStyle = {};
    return (
      <div>
        <table
          className="numPad"
          onClick={e => {
            this.clickCell(e);
          }}>
          <tbody>
            {numPadTable.table().map((tableRow, indexRow) => {
              return (
                <tr key={indexRow}>
                  {tableRow.map((tableCell, indexCell) => {
                    if (
                      tableCell === parseInt(this.props.currentNumber, 10) ||
                      (tableCell === this.props.currentNumber &&
                        this.props.currentNumber === "DEL") ||
                      tableCell === this.props.selectedNumber
                    ) {
                      cellStyle = styles.numPadHeighlight;
                    } else {
                      cellStyle = styles.normalNumPad;
                    }
                    return (
                      <td id={`${tableCell}`} key={indexCell} style={cellStyle}>
                        {tableCell}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          id="prev"
          onClick={e => {
            this.clickHistoryButton(e);
          }}>
          prev
        </button>
        <button
          type="button"
          id="next"
          onClick={e => {
            this.clickHistoryButton(e);
          }}>
          next
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentTable: state.table,
    currentNumber: state.numPad.numPadNumber,
    selectedNumber: state.numPad.selectedNumber,
    history: state.history
  };
}

export default connect(mapStateToProps)(NumPad);
