import { observable, action } from "mobx"

class DiaryStore {
  @observable
  diaryInfo = {}

  @observable
  diaryList = [{}]

  @action
  addDiary = () => {
    console.log("tihs", this)
    console.log("this.diaryList", this.diaryList)
    this.diaryList.push({})
  }

  @action
  getDiary = date => {}
}

export default new DiaryStore()
