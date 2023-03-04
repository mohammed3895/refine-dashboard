import { Box, Typography, Stack, IconButton } from '@pankod/refine-mui'
import CourseCard from 'components/courses/CourseCard'
import AddIcon from '@mui/icons-material/Add';
import CustomButton from 'components/CustomButton';
import { useNavigate } from '@pankod/refine-react-router-v6';
import { useTable } from '@pankod/refine-core';

const Courses = () => {

  const navigate = useNavigate()
  const { tableQueryResult: {
    data,
    isLoading,
    isError
  }} = useTable()

  const courses = data?.data ?? []
  if(isLoading) return <Typography>Loading...</Typography>
  if(isError) return <Typography>Error...</Typography>


  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={4}
      >
        <Typography 
          fontSize={20} 
          fontWeight={400} 
          color="#1e1e1e"
        >
          Courses
        </Typography>
        <CustomButton 
          title='Add Course'
          icon={<AddIcon />} 
          backgroundColor="#1e1e1e" 
          color="#fff"
          handleClick={() => navigate('/courses/create')}     
        />
      </Stack>
      
      <Box
        mt="20px"
        sx={{
          dispaly: "flex",
          flexWrap: "wrap",
          gap: 1
        }}
      >
        {courses.map((course) => (
          <CourseCard 
            key={course._id}
            id={course._id}
            title={course.title}
            category={course.category}
            level={course.level}
            photo={course.photo} 
          />
        ))}
      </Box>
    </Box>
  )
}

export default Courses