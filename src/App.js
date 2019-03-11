import React, { Component } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { InputDiary, Main } from "./pages"
import { Provider } from "mobx-react"
import DiaryStore from "./common/store/DiaryStore"

class App extends Component {
  render() {
    return (
      <Provider DiaryStore={DiaryStore}>
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Main} />
            <Route path={"/inputdiary"} component={InputDiary} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App
