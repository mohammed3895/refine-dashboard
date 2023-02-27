import React from 'react'
import { Stack, Typography } from '@pankod/refine-mui'
import LatestResults from 'components/courses/LatestResults'
import LearnTime from '../../courses/LearnTime'


const PieChart = () => {
  return (
    <Stack direction={{ lg:"row", xs:"column" }} width="100%" gap={4}>
      <LatestResults />
      <LearnTime />
    </Stack>
  )
}

export default PieChart