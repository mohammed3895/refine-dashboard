import { ChevronRight } from '@mui/icons-material'
import { Box, Card, CardContent, CardMedia, Stack, Typography } from '@pankod/refine-mui'
import { Link } from '@pankod/refine-react-router-v6'
import { CourseCardProps } from 'interfaces/home'
import React from 'react'

const CourseCard = ({ id, title, category, level, photo }: CourseCardProps) => {
  return (
    <Card
      component={Link}
      to={`/courses/${id}`}
      sx={{
        maxWidth: "330px",
        padding: "10px",
        cursor: "pointer"
      }}
      elevation={0}
    >
      <CardMedia 
        component="img"
        width="100%"
        height={210}
        image={photo}
        alt={title}
        sx={{
          borderRadius: 4
        }}
      />

      <CardContent>
        <Stack direction="column">
          <Stack direction="row" justifyContent="space-between">
            <Typography>
              {title}
            </Typography>
            <Typography>
              {level}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CourseCard