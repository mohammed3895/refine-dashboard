import { Box, Stack, Typography } from '@pankod/refine-mui'
import { TimeLineProps } from 'interfaces/progress'
import React from 'react'

const TimeLine = ({ time, day }: TimeLineProps) => {
  return (
    <Box>
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
        >
            <Typography fontSize="14px" fontWeight="400" lineHeight="21px" color="#A2A2C2">{day}</Typography>

            <Box
                position="relative"
                width="5px"
                height="200px"
                bgcolor="#DCDCE5"
                borderRadius="8px"
            >

            </Box>
        </Stack>
    </Box>
  )
}

export default TimeLine