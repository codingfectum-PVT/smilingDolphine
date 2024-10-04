import React from 'react'
import { Markee } from '../../Components/Markee'
import { Box, Container, Grid } from '@mui/material'
import cowfin from "../../../assets/cowfin.jpg"
import duulfin from "../../../assets/duulfin.jpg"
import hump from "../../../assets/hump.jpg"
import ride from "../../../assets/ride.jpg"
import weed from "../../../assets/weed.jpg"
import InstagramPost from "../../../assets/InstagramPost.jpg"
import boop from "../../../assets/boop.jpg"
import chutiyaDolphin from "../../../assets/chutiya dolphin.jpg"
import emotionStyled from '@emotion/styled'

const Wrapper = emotionStyled.div`
    padding-bottom: 80px;
    padding-top: 80px;
`
const Gallery = () => {
  return (
    <div style={{overflow: 'hidden'}}>
        <Box borderTop={'3px solid #000'} borderBottom={'3px solid #000'} ><Markee /></Box>
        <Wrapper>
            <Container maxWidth="xl">
                <Grid container spacing={3}>
                    <Grid item xs={6} md={4}>
                        <Box
                            component="img"
                            src={cowfin}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <Box
                            component="img"
                            src={ride}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <Box
                            component="img"
                            src={boop}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} md={4}>
                        <Box
                            component="img"
                            src={duulfin}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <Box
                            component="img"
                            src={weed}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <Box
                            component="img"
                            src={chutiyaDolphin}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Grid>
                    <Grid item xs={6} md={4} display={{xs: 'none', md: 'block'}}>
                        <Box
                            component="img"
                            src={hump}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                        <Box
                            component="img"
                            src={InstagramPost}
                            sx={{
                                marginBottom: '24px',
                                width: '100%',
                                height: 'auto',
                                borderRadius: '10px',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Grid>
                    
                </Grid>
            </Container>
        </Wrapper>
        <Box borderTop={'3px solid #000'} borderBottom={'3px solid #000'} ><Markee /></Box>
    </div>
  )
}

export default Gallery