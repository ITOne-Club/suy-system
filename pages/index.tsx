import type { NextPage } from 'next'
import { createTheme, Alert, AlertTitle, Grid, Typography, Card, CardContent, Collapse, IconButton, Box, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { ThemeProvider } from '@emotion/react'
import CssBaseline from "@mui/material/CssBaseline"
import NavBar from '../components/NavBar'
import PersonIcon from '@mui/icons-material/Person';
import CheckIcon from '@mui/icons-material/Check';
import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import Footer from '../components/Footer';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AssignmentIcon from '@mui/icons-material/Assignment';
import Image from 'next/image'

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
})

const Home: NextPage = () => {
  const [alertOpen, setOpen] = React.useState(true);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <NavBar></NavBar>
        <div style={{ paddingLeft: "10px", paddingRight: "10px" }}>
          <Collapse in={alertOpen}>
            <Alert variant='outlined' severity='success' sx={{ margin: "8px 0px 0px 0px" }} action={<IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>}>
              <AlertTitle>Đăng nhập thành công!</AlertTitle>
              Chào mừng quay trở lại, Admin!
            </Alert>
          </Collapse>
          <Grid container spacing={1} sx={{ marginTop: "8px", marginBottom: "8px" }}>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 15, display: "flex", alignItems: "center" }} variant="h5">
                    <PersonIcon /> &nbsp; <span style={{ textAlign: "right" }}>Số người tham gia</span>
                  </Typography>
                  <Typography variant='h5' component="div" sx={{ textAlign: "right", fontSize: 25, fontWeight: 500 }}>
                    NaN
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 15, display: "flex", alignItems: "center" }} variant="h5">
                    <CheckIcon /> &nbsp; Đã hoàn thành
                  </Typography>
                  <Typography variant='h5' component="div" sx={{ textAlign: "right", fontSize: 25, fontWeight: 500 }}>
                    NaN
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 15, display: "flex", alignItems: "center" }} variant="h5">
                    <ArrowForwardIosIcon /> &nbsp; Điểm số TB
                  </Typography>
                  <Typography variant='h5' component="div" sx={{ textAlign: "right", fontSize: 25, fontWeight: 500 }}>
                    NaN
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={3}>
              <Card>
                <CardContent>
                  <Typography sx={{ fontSize: 15, display: "flex", alignItems: "center" }} variant="h5">
                    <AssignmentIcon /> &nbsp; Số Form đã tạo
                  </Typography>
                  <Typography variant='h5' component="div" sx={{ textAlign: "right", fontSize: 25, fontWeight: 500 }}>
                    NaN
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          <Card>
            <CardContent>
              <Typography>Danh sách người đã trả lời</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Form ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Score</TableCell>
                    <TableCell>Passed?</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>SUY-D8192</TableCell>
                    <TableCell>CookieGMVN</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell><CheckIcon /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SUY-D8112</TableCell>
                    <TableCell>Phat&apos;s Dev</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell><CloseIcon /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SUY-D8163</TableCell>
                    <TableCell>Ho Le Ten Lan</TableCell>
                    <TableCell>7</TableCell>
                    <TableCell><CheckIcon /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>SUY-D2718</TableCell>
                    <TableCell>Phai phai song dai la huyen thoai</TableCell>
                    <TableCell>10</TableCell>
                    <TableCell><CheckIcon /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
        <Footer />
      </CssBaseline>
    </ThemeProvider>
  )
}

export default Home
