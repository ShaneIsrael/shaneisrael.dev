import React from 'react'

import { Stack, Box, Avatar, Typography } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'

import ProfilePicture from '../assets/profile_picture.jpg'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Profile = (props) => {
  return (
    <Box>
      <Stack alignItems="center">
        <Avatar alt="Shane Israel" src={ProfilePicture} sx={{ width: 200, height: 200 }} />
        <Typography component="h1" variant="h3" align="center" color="text.primary" gutterBottom>
          Shane Israel
        </Typography>

        <Stack direction="row" gap={2} mb={1}>
          <Box sx={{ cursor: 'pointer' }} onClick={() => window.open('mailto:shanemisrael@gmail.com')}>
            <EmailIcon fontSize="medium" sx={{ mr: 0.5 }} />
          </Box>
          <Box sx={{ cursor: 'pointer' }} onClick={() => window.open('https://github.com/ShaneIsrael', '_blank')}>
            <GitHubIcon fontSize="medium" sx={{ mr: 0.5 }} />
          </Box>
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => window.open('https://www.linkedin.com/in/shane-israel-3a685ba1/', '_blank')}
          >
            <LinkedInIcon fontSize="medium" sx={{ mr: 0.5 }} />
          </Box>
        </Stack>

        <Typography variant="h5" align="center" color="text.secondary" paragraph fontFamily="monospace" fontSize={18}>
          Software Engineer with a passion for developing full stack web applications primarily in NodeJS & React. I
          love learning new technologies and integrating them into my creations. Check out some of my open source
          personal projects!
        </Typography>
      </Stack>
    </Box>
  )
}

Profile.propTypes = {}

export default Profile
