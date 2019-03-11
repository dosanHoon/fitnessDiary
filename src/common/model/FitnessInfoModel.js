import { observable } from "mobx"
import SetterModel from "./SetterModel"

export default class FitnessInfoModel extends SetterModel {
  @observable
  name = ""

  @observable
  count = ""

  @observable
  weigth = 0

  @observable
  setCount = 0
}
