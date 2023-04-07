import React from 'react'
import {Box,styled,Typography} from "@mui/material"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SellSharpIcon from '@mui/icons-material/SellSharp';

let array=[1,2,3,4,5,6,7,8,9,10]
const logo="https://st2.depositphotos.com/1718940/10376/i/950/depositphotos_103765976-stock-photo-starbucks-logo-in-detail.jpg"
const logo2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z5goNsjAThM-2lUoVDwOVvd__FIo8boLspJLzb5o4A&s"


function AppliedJobs() {
  return (
    <>
    <h1 style={{marginLeft:"20px",marginTop:"100px"}}>Dashboard</h1>
    <Box style={{marginLeft:"20px",display:"flex"}}>
        <Box style={{width:"50%"}}>
            <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                <Typography style={{fontWeight:"600"}}>Applied Jobs</Typography>
                <Typography style={{color:"Grey"}}>View all</Typography>
            </Box>
            <Box style={{height:"300px",border:"2px solid Grey",borderRadius:"7px",marginTop:"5px",overflow:'auto'}}>
                {array.map(()=>{
                    return <Box style={{height:"100px",borderBottom:"1px solid Grey",display:"flex",justifyContent:"space-between"}}>
                        <Box style={{display:"flex"}}>
                        <img src={logo} style={{height:"70px",marginTop:"10px",borderRadius:"5px",marginLeft:"5px"}}></img>
                        <Box style={{height:"70px",marginTop:"10px",borderRadius:"5px",marginLeft:"5px"}}>
                            <Typography>Application Engineer</Typography>
                            <Typography style={{fontSize:"12px",Color:"Grey"}}>Starbucks Corporation</Typography>
                            <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"90px",padding:"2px"}}>Assesment Phase</Typography>
                        </Box>
                        </Box>
                        <ArrowForwardIosIcon style={{margin:"30px"}}></ArrowForwardIosIcon>
                    </Box>
                })}
            </Box>

        </Box>
        <Box style={{marginLeft:"20px",width:"40%"}}>
            <Box>
                <Typography>Application Stats</Typography>
            </Box>
            <Box style={{border:"2px solid Grey",height:"300px",marginTop:"5px",borderRadius:"7px",display:"grid",gridTemplateRows:" repeat(2,1fr)",gridTemplateColumns:"repeat(2,1fr)"}}>
                <Box style={{display:"flex",border:"1px solid Grey",padding:"10px"}}>
                    <Box style={{widht:"25%",height:"25%"}}>
                        <Typography style={{height:"200%",fontSize:"50px",color:"#3873f2"}}>23</Typography>
                        <Typography style={{color:"Grey"}}>Total jobs Applied</Typography>
                    </Box>
                    <Box>
                        <BusinessCenterIcon style={{fontSize:"40",marginLeft:"60px"}}></BusinessCenterIcon>
                    </Box>
                </Box>
                <Box style={{display:"flex",border:"1px solid Grey",padding:"10px"}}>
                    <Box style={{widht:"25%",height:"25%"}} >
                        <Typography style={{height:"200%",fontSize:"50px",color:"#3873f2"}}>12</Typography>
                        <Typography style={{color:"Grey"}}>Applied under Review</Typography>
                    </Box>
                    <Box>
                        <PersonPinOutlinedIcon style={{fontSize:"40",marginLeft:"60px"}}></PersonPinOutlinedIcon>
                    </Box>
                </Box>
                <Box style={{display:"flex",border:"1px solid Grey",padding:"10px"}}>
                    <Box style={{widht:"25%",height:"25%"}}>
                        <Typography style={{height:"200%",fontSize:"50px",color:"#3873f2"}}>09</Typography>
                        <Typography style={{color:"Grey"}}>Total Application Accepted</Typography>
                    </Box>
                    <Box>
                       <PersonAddAltOutlinedIcon style={{fontSize:"40",marginLeft:"60px"}}></PersonAddAltOutlinedIcon>
                    </Box>
                </Box>
                <Box style={{display:"flex",border:"1px solid Grey",padding:"10px"}}>
                    <Box style={{widht:"25%",height:"25%"}}>
                        <Typography style={{height:"200%",fontSize:"50px",color:"#3873f2"}}>09</Typography>
                        <Typography style={{color:"Grey"}}>Total Application Rejeceted</Typography>
                    </Box>
                    <Box>
                    <PersonRemoveOutlinedIcon style={{fontSize:"40",marginLeft:"60px"}}></PersonRemoveOutlinedIcon>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
    <Box style={{margin:"20px",marginRight:"80px"}}>
        <Box style={{display:"flex",justifyContent:"space-between"}}>
            <Typography>Job Recommendations</Typography>
            <Typography>View all</Typography>
        </Box>
        <Box style={{height:"100px",borderBottom:"1px solid Grey",display:"flex",justifyContent:"space-between"}}>
                        <Box style={{display:"flex"}}>
                        <img src={logo2} style={{height:"70px",marginTop:"10px",borderRadius:"5px",marginLeft:"5px"}}></img>
                        <Box style={{height:"70px",marginTop:"10px",borderRadius:"5px",marginLeft:"5px"}}>
                            <Typography>Product Designer</Typography>
                            <Typography style={{fontSize:"12px",Color:"Grey"}}>Webztechie</Typography>
                            <Box style={{display:"flex"}}>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Remote</Typography>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Full-Time</Typography>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Perks</Typography>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Canteen</Typography>
                            </Box>
                        </Box>
                        </Box>
                        <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"5px 7px 5px 7px",height:"20px",marginTop:"20px"}}>View Job Details</Typography>
     </Box>
     <Box style={{height:"100px",borderBottom:"1px solid Grey",display:"flex",justifyContent:"space-between"}}>
                        <Box style={{display:"flex"}}>
                        <img src={logo2} style={{height:"70px",marginTop:"10px",borderRadius:"5px",marginLeft:"5px"}}></img>
                        <Box style={{height:"70px",marginTop:"10px",borderRadius:"5px",marginLeft:"5px"}}>
                            <Typography>Product Designer</Typography>
                            <Typography style={{fontSize:"12px",Color:"Grey"}}>Webztechie</Typography>
                            <Box style={{display:"flex"}}>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Remote</Typography>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Full-Time</Typography>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Perks</Typography>
                                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"2px"}}>Canteen</Typography>
                            </Box>
                        </Box>
                        </Box>
                        <Box>
                            <Box style={{display:"flex",margin:"10px"}}>
                              <FmdGoodOutlinedIcon style={{fontSize:"15px",marginTop:"5px"}}></FmdGoodOutlinedIcon>
                              <Typography style={{marginLeft:"5px"}}>Work From Home</Typography>
                            </Box>
                            <Box style={{display:"flex",margin:"10px"}}>
                              <SellSharpIcon style={{fontSize:"15px",marginTop:"5px"}}></SellSharpIcon>
                              <Typography style={{marginLeft:"5px"}}>₹5-₹7 L.P.A</Typography>
                            </Box>
                        </Box>
                    </Box>


    </Box>
    </>
  )
}

export default AppliedJobs