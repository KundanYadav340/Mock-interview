import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import SelectDropDown from 'components/SelectDropDown';
import FlexBetween from 'components/FlexBetween';

const StatusBox = ({answers, isChanging}) => {
    useEffect(()=>{
        console.log("reached here");
    },[isChanging])
  return (
    <Box sx={{border:"1px solid #cdcdcd", m:"15px 15px",borderRadius:"10px", overflow:"hidden"}}>
        <Box display="flex" justifyContent="center" sx={{width:"94%", gap:"10px", p:"10px"}}>
            <Box sx={{background:"#ddddff", p:"2px 6px", borderRadius:"4px"}}>
                <Typography>
                    Seen: 21
                </Typography>
            </Box>
            <Box sx={{background:"#ddffdd", p:"2px 6px", borderRadius:"4px"}}>
                <Typography>
                    Attempted: 16
                </Typography>
            </Box>
            <Box sx={{background:"#ffddff", p:"2px 6px", borderRadius:"4px"}}>
                <Typography>
                    Revision: 04
                </Typography>
            </Box>
        </Box>
        <Box sx={{m:"10px 15px",borderRadius:"10px",minHeight:"180px", maxHeight:"480px", overflowY:"auto", display:"flex"}}>
            { answers.map((val,key)=>(
                <Box key={key} sx={{borderRadius:"6px", width:"36px", height:"36px", 
                background:(val.status==="notSeen")?"#cccccc":(val.status==="seen")?"#6060aa":"#60aa60",
                display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", m:"4px",
                color:"white", fontWeight:"bold"}}>
                    {key+1}
                </Box>
            ))}
        </Box>
    </Box>
  )
}

export default StatusBox;