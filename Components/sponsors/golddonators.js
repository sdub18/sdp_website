import React from 'react';
import golds from './data/gold_donators.json'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

export default function GoldSponsors() {
  const xs = 12;
  const sm = 6;
  return (
    <div className='gold-container'>
      <Grid container>
        <Grid item xs={xs} sm={sm}>
          <img src='./Gold.png' alt='gold sponsor'/>
        </Grid>
        <Grid item xs={xs} sm={sm}>
          <Typography variant='h5'>GOLD DONATORS</Typography>
            {
              golds.map((sponsor, index)=>{
                return <p>{sponsor}</p>
              })
            }
        </Grid>
      </Grid>
    </div>
  )
}
