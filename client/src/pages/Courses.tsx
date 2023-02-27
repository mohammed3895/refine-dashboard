import { Box, Typography, Stack } from '@pankod/refine-mui'
import CourseCard from 'components/courses/CourseCard'


const Courses = () => {
  return (
    <Box px={4}>
      <Typography fontSize={18} fontWeight={600} color="#11142d">Courses</Typography>

      <Stack>
        <CourseCard 
          title=""
          type=""
          category=""
          bgColor=""
        />
      </Stack>
    </Box>
  )
}

export default Courses