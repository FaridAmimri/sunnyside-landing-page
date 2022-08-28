/** @format */

import React from 'react'
import styled from 'styled-components'
import HeaderBackground from '../assets/desktop/image-header.jpg'
import Logo from '../assets/logo.svg'
import Arrow from '../assets/icon-arrow-down.svg'

function Header() {
  return (
    <Container>
      <div className='header-navigation'>
        <img src={Logo} alt='logo'></img>
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>contact</li>
          </ul>
        </nav>
      </div>
      <div className='header-content'>
        <p>We are creatives</p>
        <img src={Arrow} alt='Arrow-down'></img>
      </div>
    </Container>
  )
}

export default Header

const Container = styled.header`
  width: 100%;
  height: 800px;
  background: url(${HeaderBackground});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  .header-navigation {
    height: 56px;
    padding: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 170px;
      height: 33px;
    }
    nav ul {
      height: 56px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-family: 'Barlow';
      font-weight: 600;
      font-size: 18px;
      list-style-type: none;
      li {
        padding-right: 50px;
      }
      li:last-child {
        width: 78px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ffffff;
        border-radius: 28px;
        color: #24303e;
        font-weight: 700;
        font-size: 15px;
        text-transform: uppercase;
        padding: 15px 30px;
        :hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }
      }
    }
  }
  .header-content {
    p {
      font-family: 'Fraunces 9pt Soft';
      font-style: normal;
      font-weight: 900;
      font-size: 56px;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 8.75px;
      padding-top: 30px;
    }
    img {
      position: absolute;
      left: 50%;
      top: 360px;
    }
  }
`
