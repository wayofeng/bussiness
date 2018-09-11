import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { NavBar, Icon } from 'antd-mobile'
import 'antd-mobile/lib/nav-bar/style'
import 'antd-mobile/lib/icon/style'
import './index'

class MainHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    back: PropTypes.bool,
    link: PropTypes.string,
    isHome: PropTypes.bool
  }
  render() {
    return (
      <NavBar
        className="main-header"
        mode="dark"
        leftContent={this.props.back ? <Icon type="left" /> : ''}
        rightContent={
          this.props.isHome ? (
            <div className="icon-user" />
          ) : (
            <Link to={this.props.link} className="right">
              <i className="icon-add" />
            </Link>
          )
        }
      >
        {this.props.title}
      </NavBar>
    )
  }
}

export default MainHeader
