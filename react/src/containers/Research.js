import React, { Component } from 'react';

class Research extends Component {
  constructor(props){
    super(props)
    this.state ={}
  }
  render(){
    return(
      <div>
        <div className="row top-interest">
          <div className="small-5 columns small-offset-1">
            <h5 className="interest-content1 text-center">Interest 1</h5>
            <img className="hoverImages" src={assetHelper["purple.jpg"]}></img>
            <span className="interest-content">
              <span className="interest-content2">
                <ul className="topic-lists">
                  <li>Topic 1</li>
                  <li>Topic 2</li>
                  <li>Topic 3</li>
                </ul>
              </span>
            </span>
          </div>
          <div className="small-5 columns right-interest">
            <h5 className="interest-content1 text-center">Interest 2</h5>
            <img className="hoverImages" src={assetHelper["purple.jpg"]}></img>
            <span className="interest-content"><span className="interest-content2">
              <ul className="topic-lists">
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
              </ul>
            </span></span>
          </div>
        </div>
        <div className="row top-interest">
          <div className="small-5 columns small-offset-1">
            <h5 className="interest-content1 text-center">Interest 3</h5>
            <img className="hoverImages" src={assetHelper["purple.jpg"]}></img>
            <span className="interest-content">
              <span className="interest-content2">
                <ul className="topic-lists">
                  <li>Topic 1</li>
                  <li>Topic 2</li>
                  <li>Topic 3</li>
                </ul>
              </span>
            </span>
          </div>
          <div className="small-5 columns right-interest">
            <h5 className="interest-content1 text-center">Interest 4</h5>
            <img className="hoverImages" src={assetHelper["purple.jpg"]}></img>
            <span className="interest-content"><span className="interest-content2">
              <ul className="topic-lists">
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
              </ul>
            </span></span>
          </div>
        </div>
      </div>
    )
  }
}

export default Research;
