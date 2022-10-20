import {useState} from 'react'
import {createCss} from '../lib/createCss'
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Fab from '@mui/material/Fab';


type props = {
  background: boolean
}

export default function MenuBar(props: props) {
  const [hover, setHover] = useState(false);
  
  const appBarStyle = createCss({
    boxShadow: 'none',
    transition: '0.5s',
    background: props.background ? 'transparent' : '#12121266',
    backdropFilter: props.background ? 'blur(0px)' : 'blur(10px)',
    borderBottom: props.background ? 'none' : '1px solid #1d1d1d'
    
  })
  return (<AppBar position="fixed" sx={appBarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Logo
          {props.background ? (<Fab variant="extended" size="small"  color='default' sx={{
            marginLeft: '19px'
          }} onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}>Thoát</Fab>) : (<></>)}
        </Typography>
        
        <Button color="secondary" component="label" onMouseOver={() => {
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
  )
}
