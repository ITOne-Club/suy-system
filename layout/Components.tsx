// Copyright true 2022. All Rights Reserved.
// Node module: suy-frontend
// This file is licensed under the Creative Commons Attribution Non Commercial No Derivatives 2.0

import $ from 'jquery'
import {useState, useEffect} from 'react';
import {createCss} from '../lib/createCss';
import styles from '../styles/Home.module.css';
import Typography from '@mui/material/Typography';
import Card from '../components/Card';
import BlockPost from '../components/BlockPost';
import MenuBar from '../components/MenuBar';
import Fab from '@mui/material/Fab';
import { useRouter } from "next/router";
import { v4 } from 'uuid'

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import {responsive} from '../other/responsive'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const data = [
  {title: 'Flappy bird 3d', description: 'FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'},
  {title: 'Flappy bird 3d', description: 'FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'}
]


const mainStyle = createCss({
  opacity: 1,
  backgroundImage:  'linear-gradient(rgba(46, 46, 46, 0.4) 1px, transparent 1px), linear-gradient(to right, rgba(46, 46, 46, 0.4) 1px, rgb(0, 0, 0, 0) 1px)',
  backgroundSize: '72px 72px'
})

function Components() { 

  const [background, setBackground] = useState(false);

  var scroll = true;
  var number = 0;

  useEffect(() => {
    window.addEventListener('scroll', function() {
      const offetY = window.pageYOffset
      const el = (document.getElementById('card_content_9w34') as HTMLElement)
      const documentHeight = document.body.offsetHeight-offetY-82
      if(el){
        const height = el.offsetHeight
        if (documentHeight <= height) {
          document.body.style.overflow = 'hidden'
          setBackground(true)
        } else {
          document.body.style.overflow = 'overlay'
          setBackground(false)
        }
      }
    })

   
    
  }, [])
  useEffect(() => {
    $(window).scroll(function () {

      var position = $(document).scrollTop();
      console.log(scroll);
      if(position) {
        
        if(position > 300 && position < 400 && scroll==true ) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            scroll = false;

            $('html,body').animate({
                scrollTop: $("#0"+'-post-block')?.offset()?.top-5
            },1000);

        }
        if (position >= 0 && position < 300 && scroll==false) { 
          scroll = true;
        }
      }
      
   })
  }, [scroll])
  return (
    <div> 
      <main className={styles.main} style={mainStyle}> 
        <MenuBar background={background}/>
         {background ? (<>
          <Fab variant="extended" size="medium"  color='default' sx={{
            marginLeft: '19px',
            position: 'fixed',
            top: '84px',
            right: '20px'
          }} onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}><ArrowDropUpIcon/></Fab>
          <Fab variant="extended" size="medium"  color='default' sx={{
            marginLeft: '19px',
            position: 'fixed',
            bottom: '20px',
            right: '20px'
          }} onClick={() => {
            number += 1
            $('html,body').animate({
              scrollTop: $(`#${number}`+'-post-block')?.offset()?.top-8
            },1000);
          }}><ArrowDropDownIcon/></Fab>
        </>) : (<></>)}
        <div style={{
          padding:'30px',
        }}>
          <Typography variant="h5" component={`h2` as any} color='GrayText'>Mới nhất</Typography>
          <Carousel responsive={responsive}>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
          </Carousel>
        </div>
        <div style={{
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }} id={'card_content_9w34'}>
          {
            data.map((item, index) => {
              return (
                <div key={index} style={{
                  padding: '10px 0'
                }} id={String(index)+'-post-block'}>
                  <BlockPost title={item.title} decription={item.description}/>
                </div>
              )
            })
          }

        </div>
        
      </main>

    </div>
  )
}

export default Components