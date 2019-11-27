import React from "react"
import PropTypes from "prop-types"
class AddStatement extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div style = {{maxWidth: '50em', marginLeft: '29em', marginTop: '3em'}}>

          <form>
            <div class="row">

              <div class="col">
                <input type="text" class="form-control" placeholder="Title" />
              </div>

              <div class="col">
                <input type="text" class="form-control" placeholder='Amount' />
              </div>

              <div class="col">
                <input type="text" class="form-control" placeholder="Date" />
              </div>

            </div>
          </form>
          <br />

          <select class="custom-select custom-select-sm">
            <option selected>Account</option>
            <option value="1">Checking</option>
            <option value="2">Savings</option>
          </select>
          <br />
          <br />

          <button type="submit" class="btn btn-primary" >Submit</button>

        </div>
      </React.Fragment>
    );
  }
}

export default AddStatement
