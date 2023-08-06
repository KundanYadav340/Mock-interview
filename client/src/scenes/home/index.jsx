import React from 'react';
import { useGetInterviewQuery } from "state/api";
import { useTheme } from '@mui/material/styles';
import Navbar from 'components/Navbar';
import { Box, Typography, Divider } from '@mui/material';
import InterviewCard from 'components/InterviewCard';
import FlexBetween from 'components/FlexBetween';


const Home = () => {
    const {data, isLoading} = useGetInterviewQuery();
    console.log("data", data);
    const theme = useTheme();

    if(isLoading){
        return(
            <div>
                Loading...
            </div>
        )
    }
  return (
    <Box width="100%">
      <Navbar />
      <Box
        width="100%"
        minHeight="150vh"
        display="flex"
        justifyContent="center"
        sx={{background:theme.palette.background.main}}
      >
        <Box display ="flex" flexDirection="column" justifyContent="start" mt="80px" p="32px 36px" borderRadius="12px" sx={{minWidth:"720px", maxWidth:"800px"}}>
          <Typography variant='subtitle1' fontFamily="sans-serif" sx={{color:theme.palette.grey.main[500]}}>
              Great moves make better future
          </Typography>
          <Typography variant='h5' fontWeight="bold" fontFamily="sans-serif" sx={{color:theme.palette.grey.main[600]}}>
              Select Interview
          </Typography>
          {/* <Divider sx={{color:theme.palette.grey.main[100], mb:"15px", mt:"5px"}} /> */}
          { data || isLoading ? (
            data.map(({
              title,
              duration,
              rating,
              stream,
              tags,
              amount,
              _id
            })=>(
              <InterviewCard 
                key={_id}
                _id = {_id}
                title={title}
                duration={duration}
                rating={rating}
                stream={stream}
                tags={tags}
                amount={amount}
              />
            ))):(<Box>Loading...</Box>)

          }
        </Box>
      </Box>
    </Box>
  )
}

export default Home;