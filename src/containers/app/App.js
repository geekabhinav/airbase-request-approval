import React, {Fragment} from 'react'
import '../../assets/styles/App.css'
import Header from "../../shared/header";
import RequestApprovalPage from "../requestApproval";

const App = props => {
  return <Fragment>
    <main className="">
      <Header />
      <RequestApprovalPage />
    </main>
  </Fragment>
}

export default App