import React from "react"
import PropTypes from "prop-types"
import 'bootstrap/dist/css/bootstrap.min.css';

class Account extends React.Component {
  constructor(props) {
    super(props)

      this.state = {
        account: []
      }
    }

  render() {
    return (
      <React.Fragment>

        <div style = {{maxWidth: '50em', marginLeft: '29em', marginTop: '3em', flexDirection: 'row'}} >

            <div className="card">
              <div className="card-body" style = {{display: 'inline-block'}}>
                <h5 className="card-title">Checking: <b>$5000</b> </h5>
                <h6 className="card-subtitle mb-2 text-muted">Account holder name</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Account Statement</a>
                <a href="#" className="card-link">Add New Statement</a>
              </div>
            </div>

            <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Savings: <b>$10000</b></h5>
                <h6 className="card-subtitle mb-2 text-muted">Account holder name</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Account Statement</a>
                <a href="#" className="card-link">Add New Statement</a>
              </div>
            </div>


          </div>
      </React.Fragment>
    )
  }
}

export default Account
