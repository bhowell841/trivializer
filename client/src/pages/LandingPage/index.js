import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pusher from 'pusher-js'

const styles = {
	h1Form: {
    fontFamily: "'Bangers', cursive",
    fontSize: "3em"
	},
};

class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = { game: '' }
  }

  componentWillMount () {
    Pusher.logToConsole = true
    const pusher = new Pusher('e5795cf1dfac2a8aee31', {
      cluster: 'us2',
      forceTLS: true
    })
    const question = pusher.subscribe('game-question')
  }

  handleInputChange = e => {
    console.log(e.target.value)
    this.setState({game: e.target.value})
  }


  render() {
    return (
      <div className="container">

        <div className="row mt-5">
          <div className="col-md-12">
            <a href="/admin" className="btn btn-large btn-block btn-success"><h1>Host a Game</h1></a>
            <h1 className="text-center m-5">- OR -</h1>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                style={styles.h1Form}
                placeholder="Type Username of Host Here"
                aria-label="Host Name"
                aria-describedby="Host Name"
                id="searchBar"
                value={this.state.game}
                onChange={(e) => this.handleInputChange(e)}
              >
              </input>
              <a
                href={`/play/${this.state.game}`}
                className="btn btn-success btn-large"
                type="button"
              ><h1>Play a Game</h1></a>
            </div>

          </div>
        </div>

      </div>
    )
  }

}

export default LandingPage