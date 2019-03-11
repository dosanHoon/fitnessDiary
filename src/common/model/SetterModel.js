import { set, action } from "mobx"

export default class SetterModel {
  constructor(param) {
    set(this, param)
  }
  @action
  setInfo = (elementName, value) => {
    this[elementName] = value
  }
}
