import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MainHeader from '@/components/header/index';
class Home extends Component {
  render () {
    return (
      <section className="page">
        <MainHeader isHome title='商户平台' link='' />
      </section>
    )
  }
}

export default Home