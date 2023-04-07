import React from 'react'
import {Box,styled,Typography} from "@mui/material"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import SellSharpIcon from '@mui/icons-material/SellSharp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';


const array=[1,2,3,4,5,6,7,8,9];
const array2=[1,2,3];
const logo2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3z5goNsjAThM-2lUoVDwOVvd__FIo8boLspJLzb5o4A&s"
const image="data:image/jpeg;base64,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"

function ExploreJobs() {
  return (
    <>
    <h1 style={{marginLeft:"20px",marginTop:"100px"}}>Dashboard</h1>
    <Box style={{marginLeft:"20px",display:"flex",height:"80%"}}>
    <Box style={{width:"50%"}}>
        <Box style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <Typography style={{fontWeight:"600"}}>Explore Jobs</Typography>
            <Typography style={{color:"Grey"}}>View all</Typography>
        </Box>
        <Box style={{display:"flex",justifyContent:"space-between",marginTop:"5px",marginBottom:"4px"}}>
            <a href="#" style={{textDecoration:"none",color:"grey",border:"1px solid grey",borderRadius:"5px",fontSize:"15px"}}>Industry or field of interest▾</a>
            <a href="#" style={{textDecoration:"none",color:"grey",border:"1px solid grey",borderRadius:"5px",fontSize:"15px"}}>Experience Status▾</a>
            <a href="#" style={{textDecoration:"none",color:"grey",border:"1px solid grey",borderRadius:"5px",fontSize:"15px"}}>Skills▾</a>
            <a href="#" style={{textDecoration:"none",color:"grey",border:"1px solid grey",borderRadius:"5px",fontSize:"15px"}}>Employment Type▾</a>
            <a href="#" style={{textDecoration:"none",color:"grey",border:"1px solid grey",borderRadius:"5px",fontSize:"15px"}}>Location▾</a>
            <a href="#" style={{textDecoration:"none",color:"grey",border:"1px solid grey",borderRadius:"5px",fontSize:"15px"}}>Salary▾</a>
        </Box>
        <Box style={{border:"1px solid grey",borderRadius:"5px",overflow:"auto",height:"500px",marginTop:"10px",marginBottom:"50px"}}>
           {array.map((a)=>{
            if(a===1){
                return <>
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
                <Typography style={{color:"#3873f2",fontSize:"10px",border:"1px solid blue",borderRadius:"10px",width:"auto",marginLeft:"5px",padding:"5px 7px 5px 7px",height:"20px",marginTop:"40px",marginRight:"20px"}}>View Job Details</Typography>
</Box>
                </>
            }
            else return <Box style={{height:"100px",borderBottom:"1px solid Grey",display:"flex",justifyContent:"space-between"}}>
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

           })}
        </Box>
    </Box>
    <Box style={{display:"flex",flexDirection:"column",marginLeft:"40px",marginRight:"20px"}}>
    <Typography style={{fontWeight:"600"}}>Recommended Subscription Plan</Typography>
            <Typography style={{color:"Grey",fontSize:"15px"}}>Hey Robin, we would like to Recommend you a plan so that you can also get on the way of Suceess...</Typography>

            <Box style={{border:"1px solid #3873f2",borderRadius:"10px",height:"100px",marginTop:"10px",marginRight:"30px",display:"flex"}}>
                <Box style={{height:"100px",width:"auto"}}>
                    <Typography style={{writingMode:"vertical-lr",transform:"rotate(180deg)",backgroundColor:"#3873f2",borderRadius:"0px 10px 10px 0px",padding:"5px",fontSize:"13px",color:"white"}}>Recommneded</Typography>
                </Box>
                <Box style={{marginLeft:"10px"}}>
                 <Box style={{display:"flex",justifyContent:"space-between"}}>
                 <Box>
                 <Typography>Recruitr Fresher Candidate</Typography>
                 <Box style={{display:"flex",flexDirection:"row"}}>
                 <Typography style={{marginLeft:"0px",color:"#3873f2"}}>Free</Typography>
                 <Typography style={{marginLeft:"10px",color:"Grey"}}>₹200</Typography>
                 <Typography style={{marginLeft:"10px",color:"white",backgroundColor:"#3873f2",borderRadius:"10px",paddingLeft:"3px",paddingRight:"3px"}}>Coupon Applied</Typography> 
                 </Box>
                 </Box>
                 <AutoAwesomeIcon style={{color:"#3873f2",fontSize:"50px",marginTop:"5px"}}></AutoAwesomeIcon>
                 </Box>
                 <Box style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
                 <Typography style={{marginLeft:"0px",color:"#3873f2",borderRight:"1px solid #3873f2",paddingRight:"5px"}}>3 Month Plan</Typography>
                 <Typography style={{marginLeft:"10px",color:"#3873f2",borderRight:"1px solid #3873f2",paddingRight:"5px"}}>Only Fresher Candidate</Typography>
                 <Typography style={{marginLeft:"10px",color:"#3873f2",borderRight:"1px solid #3873f2",paddingRight:"5px"}}>Unlimieted Job Applying...</Typography> 
                 </Box>
                </Box>
            </Box>
            <h1>Recruitr Blogs</h1>
            <Box>
                {array2.map(()=>{
                    return <>
                              <Box style={{height:"80px",display:"flex",border:"1px solid Grey",marginTop:"10px",marginBottom:"10px",borderRadius:"5px"}}>
                                <img src={image} style={{height:"70px",borderRadius:"5px",margin:"5px",width:"auto"}}></img>
                                <Box style={{display:'flex',flexDirection:"column",height:"70px"}}>
                                    <h4 style={{marginTop:"5px",paddingTop:"5px",height:"20"}}>Unlocking Success: Proven Strategies to Boost Your Chances of...</h4>
                                    <Typography style={{marginBottom:"30px",paddingBottom:"30px",height:"30px"}}>4 Days ago</Typography>
                                </Box>
                              </Box>
                            </>
                })}
            </Box>
    </Box>
    </Box>
    </>
  )
}

export default ExploreJobs