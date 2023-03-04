import { Box, Stack, Typography } from '@pankod/refine-mui'
import ComunityCard from 'components/ComunityCard'
import React from 'react'

const Comunity = () => {
    return (
        <Box
            width="90%"
            margin="10px auto"
            px={2}
            py={1}
        >
            <Typography
                fontSize={20}
                fontWeight={600}
                color="#1e1e1e"
                textAlign="center"
                mb={2}
            >
                Share Your Mindset With Others
            </Typography>

            <Stack
                direction="column"
                gap={2}
                p={1.5}
            >
                {/* <ComunityCard /> */}
            </Stack>
        </Box>
    )
}

export default Comunity