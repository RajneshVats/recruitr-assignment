
import { Search } from "@mui/icons-material";
import { AppBar, Toolbar, Box, styled, Typography } from "@mui/material";
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Searchbar from './ Searchbar';
import GridViewIcon from '@mui/icons-material/GridView';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom';
import Recommended from "../Recommended";
import AppliedJobs from "../AppliedJobs";
import ExploreJobs from "../ExploreJobs";
import Blogs from "../Blogs"


const ProfileImage = styled('img')`

border-radius: 50%;
width: 30px;
height: 30px;
`
const StyledHeader = styled(AppBar)`
background: #f2f2f2;
`



const Header = () => {

    const imageURL = 'https://image.shutterstock.com/mosaic_250/2780032/1854697390/stock-photo-head-shot-young-attractive-businessman-in-glasses-standing-in-modern-office-pose-for-camera-1854697390.jpg';
    return (
        <>
            <Main>
                <StyledHeader elevation={5} style={{ height: "70px", display: "flex", flexDirection: "row" }}>
                    <Toolbar>
                        <Box style={{ display: "flex", flexDirection: "column" }}>
                            <Typography style={{ fontSize: "32px", color: "#3873f2", fontFamily: 'Poppins', fontWeight: 600 }}>Recruitr</Typography>
                            <Typography style={{ fontSize: "9px", color: "grey", fontFamily: 'Poppins', fontWeight: 600 }}>Your Gateway to success!</Typography>
                        </Box>
                        <Searchbar />
                        <Box style={{ display: "flex", flexDirection: "row", margin: "15px", marginLeft: 220 }}>
                            <a style={{ display: "flex", textDecoration: "none" }} href="dashboard"><GridViewIcon style={{ color: "#3873f2" }}></GridViewIcon>
                                <Typography style={{ marginLeft: "10px", color: "#3873f2" }}>Dashboard</Typography></a>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", margin: "15px" }}>
                            <a style={{ display: "flex", textDecoration: "none" }} href="findjobs"><BusinessCenterIcon style={{ color: 'grey' }}></BusinessCenterIcon>
                                <Typography style={{ marginLeft: "10px", color: 'grey' }}>Find jobs</Typography></a>
                        </Box>
                        <Box style={{ display: "flex", flexDirection: "row", margin: "15px" }}>
                            <a style={{ display: "flex", textDecoration: "none" }} href="appliedjobs"><TaskAltIcon style={{ color: 'grey' }}></TaskAltIcon>
                                <Typography style={{ marginLeft: "10px", color: 'grey' }}>Applied jobs</Typography></a>
                        </Box>
                        <Box style={{ borderRight: "1px Grey solid", borderLeft: "1px Grey solid" }}>
                            <MessageIcon style={{ marginLeft: "20px", color: 'black' }}></MessageIcon>
                            <NotificationsNoneIcon style={{ marginLeft: "20px", marginRight: "20px", color: 'black' }}></NotificationsNoneIcon>
                        </Box>
                        <Box style={{ marginLeft: "20px", display: "flex", flexDirection: "row" }}>
                            <ProfileImage src={imageURL} alt="profile" />
                            <a style={{ display: "flex", textDecoration: "none" }}> <Typography style={{ marginLeft: "10px", color: "black" }}>Robin</Typography>
                                <ArrowDropDownIcon style={{ color: 'black' }}></ArrowDropDownIcon></a>
                        </Box>
                    </Toolbar>
                </StyledHeader>
                <Routes>
                    <Route exact path="/" element={<Recommended />}></Route>
                    <Route exact path="/dashboard" element={<Blogs />}></Route>
                    <Route exact path="/appliedjobs" element={<AppliedJobs />}></Route>
                    <Route exact path="/findjobs" element={<ExploreJobs />}></Route>
                </Routes>
            </Main>
        </>
    )
}

export default Header;