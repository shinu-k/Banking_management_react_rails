import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';
import Account from './pages/Account'
import AddStatement from './pages/AddStatement'


class Main extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render () {


    return (
      <React.Fragment>

        <Account />
        <AddStatement />

      </React.Fragment>
    );
  }
}

export default Main
