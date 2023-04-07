import React from 'react'
import {Box,Typography,styled} from "@mui/material"

function Footer() {
  return (
    <>
    <Box style={{display:"flex",flexDirection:"row",marginTop:"10px",justifyContent:"space-between",marginBottom:"10px",borderTop:"2px solid Grey",paddingTop:"10px"}}>
    <Box style={{marginLeft:"20px"}}>
        <Typography>©2023 Recruitr</Typography>
    </Box>
    <Box style={{display:"flex",flexDirection:"row"}}>
        <Typography>Help Centre</Typography>
        <Typography style={{marginLeft:"15px",marginRight:"20px",borderLeft:"1px Grey solid",paddingLeft:"10px"}}>Privacy Policy</Typography>
    </Box>
    </Box>
    </>
  )
}

export default Footer;