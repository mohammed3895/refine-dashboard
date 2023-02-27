import { Box, Stack, Typography } from '@pankod/refine-mui'
import { ProgressProps } from 'interfaces/progress'
import React from 'react'
import ReactApexChart from 'react-apexcharts'

const Progress = ({ title, category, percentage }: ProgressProps) => {
  return (
    <Box width="100%">
      <Stack py={2} direction="row" justifyContent="space-between" alignItems="center" borderBottom="1px solid #1e1e1e">
        <Typography fontSize={16} fontWeight={600} color="#111026">
          {title}
        </Typography>

        <Stack direction="row" justifyContent="space-between" alignItems="center" gap={5}>
          <Box width="180px" bgcolor="#e4e8ef" height="5px" borderRadius="8px" position="relative">
            <Box 
              position="absolute"
              height="100%"
              left={0}
              width={`${percentage}%`}
              bgcolor={percentage >= 40 ? "#5E81F4" : "#FF808B"}
              borderRadius="8px"
            />
          </Box>

        <Typography fontSize={18} fontWeight={400} color={percentage >= 40 ? "#5E81F4" : "#FF808B"}>
          {percentage}%
        </Typography>
        </Stack>
      </Stack>
    </Box>
  ) 
}

export default Progress