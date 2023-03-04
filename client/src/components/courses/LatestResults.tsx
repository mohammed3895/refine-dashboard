import { Box, Stack, Typography } from '@pankod/refine-mui'
import { BiChevronRight } from 'react-icons/bi'
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
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Stack direction="column">
          <Typography fontSize={16} fontWeight={600} color="#111026">Recent Progress</Typography>
          <Typography fontSize={14} fontWeight={400} my={1} color="#72717C">Keep on going</Typography>
        </Stack>
        <Stack direction="row" display="flex" alignItems="center" justifyContent="space-between">
          <Typography fontSize={16} fontWeight={400} color="#111026">more</Typography> 
          <BiChevronRight 
            fontSize={18}
            color='#111026'
          />
        </Stack>
      </Stack>

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