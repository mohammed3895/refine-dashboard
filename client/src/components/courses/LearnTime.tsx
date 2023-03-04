import { Box, Stack, Typography } from '@pankod/refine-mui'
import ReactApexChart from 'react-apexcharts'
import { TotalRevenueOptions, TotalRevenueSeries } from 'components/layout/charts/chart.config'
import { BiChevronDown } from 'react-icons/bi'


const LearnTime = () => {
  return (
    <Box  
      p={4}
      my={2}
      width="100%"
      bgcolor="#FDFDFE"
      borderRadius="17px"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Stack direction="column">
          <Typography fontSize={16} fontWeight={600} color="#111026">Latest Results</Typography>
          <Typography fontSize={14} fontWeight={400} my={1} color="#72717C">Time Spent on Learning</Typography>
        </Stack>
        <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontSize={16} fontWeight={400} color="#111026">Last Year</Typography> 
          <BiChevronDown
            fontSize={18}
            color='#111026'
          />
        </Stack>
      </Stack>

      <Stack
        mt={5}
      >
        <ReactApexChart 
          series={TotalRevenueSeries}
          type='bar'
          options={TotalRevenueOptions}
          width="100%"
        />
      </Stack>
    </Box>
  )
}

export default LearnTime