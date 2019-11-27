import React from "react"
import PropTypes from "prop-types"
class ShowStatement extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ListGroup horizontal>
          <ListGroup.Item>Title</ListGroup.Item>
          <ListGroup.Item>Amount</ListGroup.Item>
          <ListGroup.Item>Date</ListGroup.Item>
          <ListGroup.Item>Account</ListGroup.Item>
        </ListGroup>
      </React.Fragment>
    );
  }
}

export default ShowStatement
