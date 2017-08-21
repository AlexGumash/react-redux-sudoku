import React, { Component } from "react";
import { connect } from "react-redux";

import * as actionTypes from "../constants/actionTypes";
import * as styles from "../constants/styles.js";
import { numPadTable } from "../api/numPadTable.js";

class NumPad extends Component {
  clickCell(e) {
    this.props.dispatch({
      type: actionTypes.CHANGE_CURRENT_NUMBER,
      newNumber: e.target.id
    });
  }
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
                        this.props.currentNumber === "DEL")
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentNumber: state.numPad,
    selectedNumber: state.selectedNumber
  };
}

export default connect(mapStateToProps)(NumPad);
