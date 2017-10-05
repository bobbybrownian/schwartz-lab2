import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LinkTabs from '../components/LinkTabs'

class Layout extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render(){

    let tabTypes = [{label:"Research", link:'/', id:1},
                    {label:"Methods", link:'/methods', id:2},
                    {label:"Lab History", link:'/history', id:3},
                    {label:"Contacts", link:'/Contacts', id:4}]
    let tabList = tabTypes.map(tab => {
      let tabClassName = "columns small-2 linkslayer"

      if (tab.id === 1){
        tabClassName = tabClassName.concat(" small-offset-2")
      }
      return (
        <LinkTabs
          key={tab.id}
          name={tab.label}
          link={tab.link}
          className={tabClassName}
        />
      )
    })
    return (
      <div>
        <div className="linksHeader text-center rows">
          {tabList}
          <div className="columns small-2">
          </div>
          <div className="row">
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
