import * as React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import DownloadIcon from '@mui/icons-material/Download'

import Profile from './components/Profile'
import { CssBaseline, Divider, Typography } from '@mui/material'
import ProjectCard from './components/ProjectCard'

const cards = [
  {
    imageSrc: 'https://github.com/ShaneIsrael/fireshare/raw/main/app/client/src/assets/logo.png',
    title: 'Fireshare',
    body: 'Self-host and share your game clips, videos, or other media via unique links. Currently sitting at 62,000+ installs.',
    projectLink: 'https://github.com/ShaneIsrael/fireshare#readme',
    site: 'https://v.fireshare.net',
  },
  {
    imageSrc:
      'https://github.com/ShaneIsrael/word-game-site/blob/main/client/public/android-chrome-192x192.png?raw=true',
    title: 'Words But With Letters',
    body: ' A unique take on a daily 5 letter word game complete with daily and weekly leaderboards. Supports ranked and casual play with ranked requiring an email verified account.',
    projectLink: 'https://github.com/ShaneIsrael/word-game-site',
    site: 'https://wordsbutwithletters.com',
  },
  {
    imageSrc: 'https://github.com/ShaneIsrael/Apollo/raw/master/images/logo.png',
    title: 'Apollo',
    body: 'A desktop companion app for your HTPC media libraries. Fetched metadata for your media from TVDB and generated various statistics against your mounted libraries.',
    projectLink: 'https://github.com/ShaneIsrael/Apollo#readme',
  },
  {
    imageSrc:
      'https://github.com/ShaneIsrael/animetrics/blob/master/ui/public/images/logos/logo_full_light_blue.png?raw=true',
    title: 'Animetrics',
    body: 'Animetrics was a fully automated website that ranked currently airing anime series by their Reddit discussion data harvested from the /r/anime subreddit.',
    projectLink: 'https://github.com/ShaneIsrael/animetrics#readme',
  },
  {
    imageSrc:
      'https://raw.githubusercontent.com/ShaneIsrael/coop-friend-finder/master/public/images/coopff_logo_min.svg',
    title: 'Co-op Friend Finder',
    body: ' A website I designed with the idea of bringing people together who were looking for friends to play games with. Users could create a listing for a game or "request to play" with someone. Supported sms/email/push notifications.',
    projectLink: 'https://github.com/ShaneIsrael/coop-friend-finder#readme',
  },
  {
    imageSrc: 'https://avatars.githubusercontent.com/u/7954436?s=400&u=4ba58a603f845c88b5d2f3477232408c88b86954&v=4',
    title: 'Snipping Tool Plus Plus',
    body: 'Screen snip upload and sharing tool that I built while in college. Included an image editor and allowed saving across multiple devices. Featured on LifeHacker.',
    projectLink: 'https://avatars.githubusercontent.com/u/7954436?s=400&u=4ba58a603f845c88b5d2f3477232408c88b86954&v=4',
    article: 'https://lifehacker.com/snipping-tool-easily-sends-windows-screenshot-snippet-30775430',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    title: 'Plex Auto Genres',
    body: 'A simple, robust and configurable Python script that runs nightly and adds genre collection tags to your Plex media library. 144,000+ downloads.',
    projectLink: 'https://github.com/ShaneIsrael/plex-auto-genres#readme',
  },
  {
    imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg',
    title: 'Nvidia Highlight Stitcher',
    body: 'Python command line utility that uses ffmpeg to stitch your .mp4 clips created by Nvidia Shadowplay into a single combined video with added transitions between each clip.',
    projectLink: 'https://github.com/ShaneIsrael/nvidia-highlight-stitcher#readme',
  },
]

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 5,
            pb: 6,
          }}
        >
          <Container maxWidth="md">
            <Profile />
            <Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
              <Button
                color="info"
                variant="outlined"
                startIcon={<DownloadIcon />}
                onClick={() => {
                  window.open('/resume.pdf', '_blank')
                }}
              >
                View Professional Resume
              </Button>
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="md">
          <Stack spacing={1} mb={2}>
            <Divider />
            <Typography component="h1" variant="h4" align="center" color="text.primary">
              Personal Projects
              <Typography
                component="p"
                align="center"
                color="text.secondary"
                fontStyle="italic"
                fontWeight={400}
                fontSize={14}
              >
                Just the ones that I have open sourced.
              </Typography>
            </Typography>
            <Divider />
          </Stack>
          <Grid container spacing={2}>
            {cards.map((card) => (
              <Grid item key={card.title} xs={12} sm={12} md={6}>
                <ProjectCard {...card} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 5 }} component="footer">
        {/* <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
          not sure if I even need a footer yet
        </Typography> */}
      </Box>
      {/* End footer */}
    </ThemeProvider>
  )
}
