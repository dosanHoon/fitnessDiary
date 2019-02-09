import React, { Component } from "react"
import PropTypes from "prop-types"
import { InputText } from "../components"

class InputDiary extends Component {
  render() {
    return (
      <div>
        <h1>InputDiary</h1>
        <div>
          <InputText name="종류" />
          <InputText name="세트" />
          <InputText name="횟수" />
        </div>
      </div>
    )
  }
}

InputDiary.propTypes = {}

export default InputDiary
