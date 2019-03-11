import React, { Component } from "react"
import { observer, inject } from "mobx-react"
import InputDiaryTable from "./templates/InputDiaryTable/InputDiaryTable"
import { Button } from "@material-ui/core"

@inject(({ DiaryStore }) => ({
  addDiary: DiaryStore.addDiary,
  diaryList: DiaryStore.diaryList
}))
// @inject("DiaryStore")
@observer
class InputDiary extends Component {
  render() {
    const { diaryList, addDiary } = this.props
    return (
      <div>
        <Button variant="contained" color="secondary" onClick={addDiary}>
          추가
        </Button>
        <InputDiaryTable list={diaryList} />
      </div>
    )
  }
}

InputDiary.propTypes = {}

export default InputDiary
