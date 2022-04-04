import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import CorpCard from './corporatesponsors.js';


let companies = [
  {
    name: 'Nvidia',
    image: './CompanyLogos/Nvidia.png'
  },
  {
    name: 'Pepsi',
    image: './CompanyLogos/Pepsi.png'
  },
]


export default function CorporateSponsors() {
  const xs = 12;
  const sm = 6;
  return (
    <div className='corp-sponsor-container'>
        <Grid container>
          {companies.map((company) => (
            <Grid item xs={xs} sm={sm} align='center'>
              <img src={company.image} alt='Logo'/>
            </Grid>
          ))}
        </Grid>
    </div>
  )
}
