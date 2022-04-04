import React from 'react';
import silvers from'./silver_donators.json'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

export default function SilverDonators() {
  const xs = 12;
  const sm = 6;
  return (
    <div className='silver-container'>
      <Grid container direction='row'>
        <Grid item xs={xs} sm={sm}>
          <img src='./Silver.png' alt='silver sponsor'/>
        </Grid>
        <Grid item xs={xs} sm={sm}>
          <Typography variant='h5'>SILVER DONATORS</Typography>
            {
              silvers.map((sponsor, index)=>{
                return <p>{sponsor}</p>
              })
            }
        </Grid>
      </Grid>
    </div>
  )
}
