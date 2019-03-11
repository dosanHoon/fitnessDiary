import React, { Component } from "react"
// import PropTypes from "prop-types"
import TextField from "@material-ui/core/TextField"
import classes from "classnames"
import { observer } from "mobx-react"
import { observable, computed } from "mobx"

@observer
class InputDiaryTableTr extends Component {
  @observable
  종목 = ""

  @observable
  횟수 = 0

  @observable
  무게 = 0

  @observable
  세트수 = 0

  @computed
  get 볼륨() {
    return this.횟수 * this.무게 * this.세트수
  }

  handleChange = name => event => {
    this[name] = event.target.value
  }
  render() {
    return (
      <tr>
        <td>
          <TextField
            label="종목"
            className={classes.textField}
            value={this.종목}
            onChange={this.handleChange("종목")}
            margin="normal"
          />
        </td>
        <td>
          <TextField
            label="세트수"
            className={classes.textField}
            value={this.세트수}
            onChange={this.handleChange("세트수")}
            margin="normal"
          />
        </td>
        <td>
          <TextField
            label="무게"
            className={classes.textField}
            value={this.무게}
            onChange={this.handleChange("무게")}
            margin="normal"
          />
        </td>
        <td>
          <TextField
            label="횟수"
            className={classes.textField}
            value={this.횟수}
            onChange={this.handleChange("횟수")}
            margin="normal"
          />
        </td>
        <td>
          <TextField
            label="볼륨"
            className={classes.textField}
            value={this.볼륨}
            disabled={true}
            margin="normal"
          />
        </td>
      </tr>
    )
  }
}

InputDiaryTableTr.propTypes = {}

export default InputDiaryTableTr
