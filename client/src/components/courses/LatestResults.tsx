import { Box, Stack, Typography, margin } from '@pankod/refine-mui'
import React from 'react'
import Progress from './Progress'

const LatestResults = () => {
  return (
    <Box 
      my={2} 
      p={4}
      width="100%"
      bgcolor="#FDFDFE"
      borderRadius="17px"
    >

        <Stack
          mt={5}
          direction="column"
          gap="16px"
        >
          <Progress 
            title="Android"
            category="Gradle"
            percentage={45}
          />
          <Progress 
            title="MERN Stack"
            category="MongoDB"
            percentage={35}
          />
          <Progress 
            title="DevOps"
            category="AWS Console"
            percentage={65}
          />
          <Progress 
            title="PHP"
            category="Rest API"
            percentage={25}
          />
      </Stack>
    </Box>
  )
}

export default LatestResults