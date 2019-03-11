import React from "react"
import PropTypes from "prop-types"
import InputDiaryTableTr from "./InputDiaryTableTr"
import { observer } from "mobx-react"

const InputDiaryTable = ({ list }) => {
  return (
    <table>
      {list.map(() => (
        <InputDiaryTableTr />
      ))}
    </table>
  )
}

InputDiaryTable.propTypes = {}

export default observer(InputDiaryTable)
