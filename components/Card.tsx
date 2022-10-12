import { useState } from 'react'
import CardMUI from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

type props = {
  title?: string;
  decription?: string;
  up?: number;
  down?: number;
}

function Card(props: props) {
  return (
    <CardMUI sx={{
      maxWidth: 450,
      margin: '12px',
      display: 'flex'
    }}>
      <CardActionArea sx={{display: 'flex'}}>
        <Box component="div" sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '100%'}}>
            <Box component="div" sx={{flex: '1 0 auto'}}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom component="div" variant="h5">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                  {props.decription}
                </Typography>
              </CardContent>
              
            </Box>
        </Box>
        <CardMedia 
          component="img"
          sx={{ width: 185, height: '100%' }}
          image="https://img.itch.zone/aW1hZ2UvMTcyODM3OC8xMDIzOTM5NC5wbmc=/original/ZrQuyM.png"
          alt="Live from space album cover"
        />
      </CardActionArea>
    </CardMUI>
  )
}

export default Card