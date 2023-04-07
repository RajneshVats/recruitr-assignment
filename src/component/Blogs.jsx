import React from 'react'
import { AppBar,Toolbar,Box,styled,Typography } from "@mui/material";
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const image="https://images.pexels.com/photos/265152/pexels-photo-265152.jpeg?auto=compress&cs=tinysrgb&w=800"
const array2=[1,2,3,4,5]

function Blogs() {
  return (
    <>
    <Box style={{display:"flex",marginTop:"70px",marginLeft:"20px"}}>
        <Box style={{width:"50%",height:"auto"}}>
           <h2 style={{}}>Unlocking Success: Proven Strategies to Boost Your Chances of Landing an Application Engineeer Role.</h2>
           <Typography>Dashboard {">"} Blogs {">"} Unlocking Success Pro..</Typography>
           <img src={image} style={{borderRadius:"5px",width:"100%",height:"250px"}}></img>
           <Typography style={{color:"grey"}}>Attorney, executed by the owners in favour of the seller.</Typography>
           <Typography style={{color:"grey"}}>All title documents being duly stamped and registered at the office of the jurisdictional sub-registrar of assurances.
                        Khata registered in the name of the seller. Information on pending or past litigation. Availability of original title
                        documents with the seller.</Typography>
           <Typography style={{color:"grey"}}>Title documents of the property: Government order for grant, succession certificate, sale deed, gift deed, will,
                       partition deed, etc., evidencing the transfer of title over the years, culminating in the vesting of property with the
                    seller.</Typography>
           <Typography style={{color:"grey"}}>Nature of title: Leasehold, freehold, or development right.</Typography>
           <Typography style={{color:"grey"}}>In case of the seller claiming development rights to the property, the development agreement and power of attorney,
                executed by the owners in favour of the seller.</Typography>
          <Typography style={{color:"grey"}}>All title documents being duly stamped and registered at the office of the jurisdictional sub-registrar of assurances.</Typography>
          <Typography style={{color:"grey"}}>Khata registered in the name of seller.</Typography>
          <Typography style={{color:"grey"}}>Information on pending or past litigation.</Typography>
          <Typography style={{color:"grey"}}>Availability of original title documents with the seller.</Typography>
          <Typography>20 Oct 22 , 12:00 pm</Typography>
        </Box>
        <Box style={{marginLeft:"20px"}}>
        <h1>Recommended Blogs</h1>
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
        </Box>
    </Box>
    </>
  )
}

export default Blogs