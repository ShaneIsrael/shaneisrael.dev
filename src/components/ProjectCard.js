import React from 'react'
import { Box, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import NewspaperIcon from '@mui/icons-material/Newspaper'

const ProjectCard = ({ imageSrc, title, body, projectLink, site, article }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <Grid container direction="column" height="100%">
        <Grid item xs>
          <CardMedia
            component="img"
            height="120"
            image={imageSrc}
            alt="project logo"
            sx={{ padding: 1, pt: 1.5, objectFit: 'contain', cursor: 'pointer' }}
            onClick={() => window.open(site ? site : projectLink, '_blank')}
          />
          <CardContent sx={{ pt: 0.5 }}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {body}
            </Typography>
          </CardContent>
        </Grid>
        <Grid item>
          <CardActions sx={{ px: 2, pt: 0 }}>
            <Box sx={{ cursor: 'pointer' }} onClick={() => window.open(projectLink, '_blank')}>
              <GitHubIcon fontSize="medium" sx={{ mr: 0.5 }} />
            </Box>
            {site && (
              <Box sx={{ cursor: 'pointer' }} onClick={() => window.open(site, '_blank')}>
                <LaunchIcon fontSize="medium" sx={{ mr: 0.5 }} />
              </Box>
            )}
            {article && (
              <Box sx={{ cursor: 'pointer' }} onClick={() => window.open(article, '_blank')}>
                <NewspaperIcon fontSize="medium" sx={{ mr: 0.5 }} />
              </Box>
            )}
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}

ProjectCard.propTypes = {}

export default ProjectCard
