import { Box, Stack, Typography } from '@pankod/refine-mui'
import { useParams } from '@pankod/refine-react-router-v6'
import React from 'react'

const ComunityCard = () => {

    const { data: user } = useParams()

  return (
    <Box
        width="100%"
        p={2}
        my={1}
        borderRadius="12px"
        bgcolor="#fff"
    >
        <Stack
            direction="column"
            gap={4}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography>
                User Name
                </Typography>
                <Typography>
                    22/11/2022
                </Typography>
            </Stack>
            <Typography>
                jsut dummy Q to test UI
            </Typography>
        </Stack>
    </Box>
  )
}

export default ComunityCard