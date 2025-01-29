import React from 'react';
import { styled } from '@mui/material/styles';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import { NewYorkTimesTopStories } from '../NewYorkTimesTopStories'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  margin: 4
}));

export const Articles = () => {
  return(
    <React.Fragment>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} rowSpacing={1} sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid size={8} spacing={2}>
            <Item>size=8</Item>
          </Grid>
        </Grid>

        <Grid container spacing={2} rowSpacing={1} sx={{
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Grid size={8} spacing={2}>
            <Item>
              <NewYorkTimesTopStories/>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  )
};
