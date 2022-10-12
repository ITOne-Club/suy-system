import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Card from '../components/Card';
import {  useState  } from 'react';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

const Home: NextPage = () => {
  const [hover, setHover] = useState(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main} style={{
        opacity: 1,
        backgroundImage:  'linear-gradient(rgba(46, 46, 46, 0.4) 1px, transparent 1px), linear-gradient(to right, rgba(46, 46, 46, 0.4) 1px, rgb(0, 0, 0, 0) 1px)',
        backgroundSize: '72px 72px'
      }}>
        <AppBar position="fixed" sx={{
          boxShadow: 'none',
          transition: '0.5s',
          background: '#12121266',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid #1d1d1d'
          
        }}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Logo
            </Typography>
            <Button color="secondary" aria-label="upload picture" component="label" onMouseOver={() => {
              setHover(true)
            }} onMouseLeave={() => {
              setHover(false)
            }} sx={{
              transition: 'all 0.4s ease-in-out',
              width: 'auto',
              display: 'contents'
            }}>
              <AddIcon />
              <Typography component="span" sx={{ 
                display: 'inline-flex',
                whiteSpace: 'nowrap',
                verticalAlign: 'top',
                visibility: hover ? 'visible' : 'collapse',
                maxWidth: hover ? '100%' : '0%',
                transition: 'max-width 1s ease-in-out',
                padding: '0 5px'
              }}>
                Submit your project
              </Typography>
            </Button>
          </Toolbar>
          
        </AppBar>
        <div style={{
          padding:'30px',
        }}>
          <Typography variant="h5" component={`h2` as any} color='GrayText'>Mới nhất</Typography>
          <div style={{
            padding:'5px',
            display: 'flex'
          }}>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
            <Card title='Flappy bird 3d' decription='FlappyBird3D is a game made by a Vietnamese student-developer for learning Unity, which is a 3D replica of the original Flappy Bird. In this game, all...'/>
          </div>
        </div>
        
      </main>

    </div>
  )
}

export default Home
