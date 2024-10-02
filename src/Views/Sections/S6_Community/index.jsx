import emotionStyled from '@emotion/styled'
import React from 'react'
import bg from "../../../assets/random.jpg"
import tg from "../../../assets/tg.png"
import x from "../../../assets/x.png"
import uni from "../../../assets/uni.png"
import dt from "../../../assets/dt.png"
import ds from "../../../assets/ds.png"
import es from "../../../assets/es.png"
import tableLegs from "../../../assets/tableLegs.png"
import logo from "../../../assets/text-logo.png"
import communityMob from "../../../assets/community-mob.png"
import community from "../../../assets/community.png"
import smilingdolfhine from "../../../assets/smiling-dolfhine.png"
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { MenuLink } from '../../Components/LockerMenu/styles'
import { tgLink, xLink, uniSwapLink, dexToolsLink, dexScreenerLink, ethScanLink } from '../../../links'
import { ButtonLink, SectionHeading, SocilLinks } from '../../Styles/style'

const Wrapper = emotionStyled.div`
    background: url(${bg});
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding-top: 80px;
`

const TelegramSystem = emotionStyled.div`
    img{
        width: 100%;
        height: auto;
    }

    .desktop{

        @media(max-width: 899px){
            display: none;
        }
    }

    .mobile{
        display: none;

        @media(max-width: 899px){
            display: block;
        }
    }
`

const Community = () => {
  return (
    <>
        <Wrapper>
            <Container maxWidth="xl">
                <Grid container justifyContent={'center'}>
                    <Box paddingBottom={'20px'}>
                        <SectionHeading>Smiling<br />Dolphin</SectionHeading>
                    </Box>
                    <TelegramSystem>
                        <img src={community} className='desktop' />
                        <img src={communityMob} className='mobile' />
                    </TelegramSystem>
                    <ButtonLink href={tgLink} target='_blank' style={{justifyContent:"center", marginTop: '-10px'}} >
                        <Typography variant='h4' textAlign={'left'}>Join our tG community</Typography>
                    </ButtonLink>
                    <img src={tableLegs} style={{width: '100%', height: 'auto'}} />
                </Grid>
            </Container>
        </Wrapper>
        <Container maxWidth="xl">
            <Grid container justifyContent={'space-between'} paddingTop="30px" paddingBottom="30px">
                <img src={logo} style={{width: 'auto', height: '60px'}} />
                <Box textAlign={{xs:'center', md:'right'}} marginTop={{xs: '20px', md: '0'}}>
                    <SocilLinks href={tgLink} target='_blank' p="0"><img src={tg} /></SocilLinks>
                    <SocilLinks href={xLink} target='_blank' p="0"><img src={x} /></SocilLinks>
                    <SocilLinks href={uniSwapLink} target='_blank' p="0"><img src={uni} /></SocilLinks>
                    <SocilLinks href={dexToolsLink} target='_blank' p="0"><img src={dt} /></SocilLinks>
                    <SocilLinks href={dexScreenerLink} target='_blank' p="0"><img src={ds} /></SocilLinks>
                    <SocilLinks href={ethScanLink} target='_blank' p="0"><img src={es} /></SocilLinks>
                </Box>
            </Grid>
        </Container>
    </>
  )
}

export default Community