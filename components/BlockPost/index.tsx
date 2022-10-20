
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


export default function index(props: props) {

  return (
    <CardMUI sx={{
      maxWidth: '600px',
      height: '90vh',
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.50)), url("https://img.itch.zone/aW1hZ2UvMTcyODM3OC8xMDIzOTM5NC5wbmc=/original/ZrQuyM.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      margin: '12px',
      display: 'flex'
    }}>
      <CardActionArea sx={{display: 'flex', alignItems: 'end'}}>
        <Box component="div" sx={{display: 'flex', flexDirection: 'column', maxWidth: '100%', width: '100%'}}>
            <Box component="div" sx={{flex: '1 0 auto'}}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography gutterBottom component="div" variant="h4">
                  {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                  {props.decription}
                </Typography>
              </CardContent>
              
            </Box>
        </Box>
      </CardActionArea>
    </CardMUI>
  )
}
