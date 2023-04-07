import React from 'react'
import { Box, styled, Typography, Button } from '@mui/material';
//icons
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import ContentPasteSearchOutlinedIcon from '@mui/icons-material/ContentPasteSearchOutlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import UpdateOutlinedIcon from '@mui/icons-material/UpdateOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import BrowseGalleryOutlinedIcon from '@mui/icons-material/BrowseGalleryOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Container = styled(Box)`
margin: 15px;
font-family: Poppins;
`
const JobTitle = styled(Box)`
display: flex;
margin-top: 15px;
`

const Heading = styled(Box)`
display: flex;
flex-direction: column;
margin-left: 20px;
`
const Props = styled(Box)`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
justify-content: space-between;
margin-top: 10px;
`
const PropUnit = styled(Box)`
display: flex;
`

const JobDetails = () => {

    const logoURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png';
    return (
        <Container style={{ overflow: "auto" }}>
            <Typography style={{ color: '#3873f2', fontSize: 22, fontWeight: 500 }}>Job Details</Typography>
            <JobTitle>
                <img style={{ width: 50, height: 50, backgroundColor: '#f2f2f2', borderRadius: 3 }} src={logoURL} alt="Google Logo" />
                <Heading>
                    <Typography style={{ color: 'black', fontSize: 18, fontWeight: 500 }}>Project Manager</Typography>
                    <Typography style={{ color: 'grey', fontSize: 16, fontWeight: 500 }}>Google</Typography>
                </Heading>
                <ShareOutlinedIcon style={{ marginLeft: '70%' }} />
            </JobTitle>
            <Props>
                <PropUnit>
                    <GroupsOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>200 Applicants</Typography>
                </PropUnit>
                <PropUnit>
                    <ContentPasteSearchOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>3 vacancy</Typography>
                </PropUnit>
                <PropUnit>
                    <UpdateOutlinedIcon style={{ width: 28, height: 28, color: 'red' }} />
                    <Typography style={{ marginLeft: 5, color: 'red', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Urgent Requirement</Typography>
                </PropUnit>
                <PropUnit>
                    <HistoryToggleOffOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Apply by 23rd Jan 23</Typography>
                </PropUnit>
                <PropUnit>
                    <PaymentsOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>₹5 - ₹7 Lakh/annum</Typography>
                </PropUnit>
            </Props>
            <hr style={{
                color: 'black',
                backgroundColor: 'black',
                height: 0.1,
                borderColor: 'white'
            }} />
            <Heading>
                <Typography style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: -20 }}>Experience Requirements:</Typography>
            </Heading>
            <Props>
                <PropUnit>
                    <BusinessCenterOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Full-Time</Typography>
                </PropUnit>
                <PropUnit>
                    <AccountBoxOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Fresher</Typography>
                </PropUnit>
                <PropUnit>
                    <BrowseGalleryOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>3-5 Yrs of Experience</Typography>
                </PropUnit>

            </Props>

            <hr style={{
                color: 'black',
                backgroundColor: 'black',
                height: 0.1,
                borderColor: 'white'
            }} />

            <Heading>
                <Typography style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: -20 }}>Working Location:</Typography>
            </Heading>
            <Props>
                <PropUnit>
                    <LocationOnOutlinedIcon style={{ width: 28, height: 28, color: 'black' }} />
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>New York, USA</Typography>
                </PropUnit>
            </Props>
            <Box style={{ display: 'flex', marginTop: 10 }}>
                <>
                    <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Work from Home/Hybrid: <span style={{ color: '#3873f2' }}>No</span></Typography>
                    <Typography style={{ marginLeft: 130, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>|</Typography>


                </>
                <>
                    <Typography style={{ marginLeft: 130, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Required Travelling While Working: <span style={{ color: '#3873f2' }}>No</span></Typography>
                </>
            </Box>

            <hr style={{
                color: 'black',
                backgroundColor: 'black',
                height: 0.1,
                borderColor: 'white'
            }} />

            <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Require <span style={{ color: 'black' }}>Graduation</span> in <span style={{ color: 'black' }}>B.Tech(Civil)</span></Typography>
            <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Require Skills: <span style={{ color: 'black' }}>Figma, UX Research, Analysis</span></Typography>
            <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Assesment Phase: <span style={{ color: '#3873f2' }}>included</span></Typography>


            <hr style={{
                color: 'black',
                backgroundColor: 'black',
                height: 0.1,
                borderColor: 'white'
            }} />

            <Box style={{ display: 'flex' }}>
                <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Benefits: </Typography>
                <Typography style={{ border: "1px solid #3873f2", borderRadius: "30px", padding: "0px 15px 0px 15px", backgroundColor: '#c6d5f5', marginLeft: 20, marginRight: 10 }}>EPF <span style={{ color: 'green' }}>✓</span></Typography>
                <Typography style={{ border: "1px solid #3873f2", borderRadius: "30px", padding: "0px 15px 0px 15px", backgroundColor: '#c6d5f5', marginLeft: 10, marginRight: 10 }}>Insurance <span style={{ color: 'green' }}>✓</span></Typography>
                <Typography style={{ border: "1px solid #3873f2", borderRadius: "30px", padding: "0px 15px 0px 15px", backgroundColor: '#c6d5f5', marginLeft: 10, marginRight: 10 }}>ESI <span style={{ color: 'red', fontWeight: 600 }}>X</span></Typography>

            </Box>

            <Box style={{ display: 'flex', marginTop: 8 }}>
                <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 16, marginTop: 'auto', marginBottom: 'auto' }}>Perks: </Typography>
                <Typography style={{ border: "1px solid #3873f2", borderRadius: "30px", padding: "0px 15px 0px 15px", backgroundColor: '#c6d5f5', marginLeft: 20, marginRight: 10 }}>Canteen</Typography>
                <Typography style={{ border: "1px solid #3873f2", borderRadius: "30px", padding: "0px 15px 0px 15px", backgroundColor: '#c6d5f5', marginLeft: 10, marginRight: 10 }}>No-Bond</Typography>
            </Box>

            <hr style={{
                color: 'black',
                backgroundColor: 'black',
                height: 0.1,
                borderColor: 'white'
            }} />

            <Heading>
                <Typography style={{ color: 'black', fontSize: 18, fontWeight: 500, marginLeft: -20 }}>About Google</Typography>
            </Heading>

            <Typography style={{ marginLeft: 5, color: 'grey', fontSize: 14, marginTop: 'auto', marginBottom: 'auto' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>





        </Container>
    );
}
export default JobDetails;
