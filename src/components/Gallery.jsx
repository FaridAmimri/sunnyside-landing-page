/** @format */

import React from 'react'
import styled from 'styled-components'
import TransformImg from '../assets/desktop/image-transform.jpg'
import StandoutImg from '../assets/desktop/image-stand-out.jpg'

function Gallery() {
  return (
    <Container>
      <div className='gallery'>
        <article>
          <div className='content'>
            <h1>Transform your brand</h1>
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
            <div className='wrapper'>
              <span>Learn more</span>
              <div className='underline yellow'></div>
            </div>
          </div>
        </article>
        <aside className='transform'></aside>
      </div>

      <div className='gallery'>
        <aside className='standout'></aside>
        <article>
          <div className='content'>
            <h1> Stand out to the right audience</h1>
            <p>
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we’ll build and
              extend your brand in digital places.
            </p>
            <div className='wrapper'>
              <span>Learn more</span>
              <div className='underline pink'></div>
            </div>
          </div>
        </article>
      </div>
    </Container>
  )
}

export default Gallery

const Container = styled.main`
  .gallery {
    display: flex;
    article {
      width: 50%;
      height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .content {
        width: 55%;
        h1 {
          font-family: 'Fraunces 9pt Soft';
          font-size: 40px;
          color: #24303e;
        }
        p {
          font-family: 'Barlow';
          font-size: 18px;
          color: #808397;
          line-height: 30px;
        }
        .wrapper {
          width: 130px;
          position: relative;
          :hover {
            cursor: pointer;
          }
          span {
            font-size: 15px;
            text-transform: uppercase;
            font-weight: 900;
            letter-spacing: 1px;
            margin-top: 20px;
            padding-left: 10px;
          }
          .underline {
            width: 100%;
            height: 10px;
            position: absolute;
            top: 14px;
            opacity: 0.25;
            border-radius: 28px;
            :hover {
              opacity: 1;
              z-index: -1
            }
          }
          .yellow {
            background: #fad400;
          }
          .pink {
            background: #fe7766;
          }
        }
      }
    }
    aside {
      width: 50%;
      height: 600px;
    }
    .transform {
      background: url(${TransformImg});
    }
    .standout {
      background: url(${StandoutImg});
    }
  }
`
