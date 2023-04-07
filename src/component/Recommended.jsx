import React from 'react'
import { Box, Typography, styled } from "@mui/material"
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import JobDetails from './header/JobDetails';

function Recommended() {
    return (
        <>
            <Box style={{ marginTop: "80px", marginLeft: "20px", height: "auto", }}>
                <Box style={{ display: "flex", marginTop: "100px" }}>
                    <Typography style={{ color: "Grey" }}>Recommeded Jobs {">"} </Typography>
                    <Typography style={{ marginLeft: "10px" }}> Project Manager</Typography>
                </Box>
                <Box style={{ display: "flex", height: "auto" }} >
                    <Box >
                        <Box style={{ display: "flex", width: "440px", marginTop: "20px" }}>
                            <Box style={{ width: "100%", border: "1px solid Grey", borderRadius: "10px 0px 0px 10px", textAlign: "center" }}>
                                <h3 style={{ textAlign: "center", marginRight: "0px" }}>Buy Subscription Plan to Apply</h3>
                                <Box style={{ border: "1px solid #fbc21f", height: "200px", borderRadius: "5px", margin: "15px", backgroundColor: "#fef9eb", textAlign: "center", width: "400px" }}>
                                    <img src={require("./images/career.jpg")} alt="" style={{ height: "80px", width: "200px", marginTop: "10px" }} />
                                    <Typography>Get a Chance to Apply Jobs which asking Experience</Typography>
                                    <Typography style={{ color: "Grey" }}>Using our Gold subscription package,one can also Apply to the jobs which asking Experienced Candidates.</Typography>
                                </Box>
                                <h3 style={{ marginLeft: "20px", marginTop: "40px" }}>Plan Details</h3>
                                <Box style={{ border: "1px solid #fbc21f", height: "150px", borderRadius: "5px", margin: "15px", backgroundColor: "white", textAlign: "center", width: "auto" }} >
                                    <Box style={{ display: "flex" }}>
                                        <Box style={{}}>
                                            <h2 style={{ marginRight: "60px", marginLeft: "10px" }}>Recruitr Gold Candidate</h2>
                                            <Box style={{ display: "flex", paddingLeft: "10px" }}>
                                                <RadioButtonCheckedIcon style={{ color: "#3873f2", marginLeft: "10px", fontSize: "30px" }}></RadioButtonCheckedIcon>
                                                <Typography style={{ color: "#3873f2", marginLeft: "10px", fontSize: "18px", fontWeight: "600" }}>₹200</Typography>
                                                <Typography style={{ color: "Grey", marginLeft: "10px" }}>₹400</Typography>
                                                <Typography style={{ marginLeft: "10px", borderRadius: "10px", backgroundColor: "#3873f2", fontSize: "15px", color: "white", padding: "0px 5px 0px 5px" }}>50% OFF</Typography>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <AutoAwesomeIcon style={{ color: "#fbc21f", fontSize: "80px", marginTop: "30px" }}></AutoAwesomeIcon>
                                        </Box>
                                    </Box>
                                    <Box style={{ display: "flex", textAlign: "center", justifyContent: "space-evenly" }}>
                                        <Typography style={{ color: "#fbc21f", borderRight: "1px solid #fbc21f", paddingRight: "5px" }}>3 Months Plan</Typography>
                                        <Typography style={{ color: "#fbc21f", borderRight: "1px solid #fbc21f", paddingRight: "5px" }}>Only Fresher Candidate</Typography>
                                        <Typography style={{ color: "#fbc21f" }}>Unlimited Job...</Typography>
                                    </Box>
                                </Box>
                                <Box style={{ marginTop: "70px", marginLeft: "20px", marginBottom: "20px", backgroundColor: "Black", color: "white", textAlign: "center", height: "40px", borderRadius: "10px", marginRight: "20px" }} >
                                    <Typography style={{ paddingTop: "5px" }}>Buy Plan Now</Typography>
                                </Box>
                            </Box>

                        </Box>

                    </Box>
                    <Box style={{ border: "1px solid Grey", width: "90%", marginTop: "20px", borderRadius: "0px 10px 10px 0px", marginRight: "10px", height: "624px", overflow: "auto" }}>
                        <JobDetails />
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Recommended;