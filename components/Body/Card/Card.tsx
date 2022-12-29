import * as React from 'react';
import { Avatar, Tooltip} from '@mui/material';
import {Container, ImageScud} from './style'
import Image from 'next/image.js';

export default function ActionAreaCard() {
  return (
    <Container>
      <h1> Microsoft Certified: Azure Data Fundamentals</h1>  
      
      <Tooltip title="Azure Data Fundamentals | DP-900">
        <ImageScud>
          <Image
              alt="dp-900"
              src="/images/dp-scud2.png"
              width={78}
              height={78}
            />
        </ImageScud>
        
      </Tooltip>
                
    </Container>
  );
}
