import emotionStyled from '@emotion/styled'
import React from 'react'
import bg from "../../../assets/header-bj.jpg"
import tg from "../../../assets/tg.png"
import x from "../../../assets/x.png"
import uni from "../../../assets/uni.png"
import dt from "../../../assets/dt.png"
import ds from "../../../assets/ds.png"
import es from "../../../assets/es.png"
import fishTail from "../../../assets/fishTail.png"
import barchart from "../../../assets/barchart.png"
import SmilingDolphinBuyVideo from "../../../assets/Smiling-Dolphin-Buy-Video.mp4"
import smilingdolfhine from "../../../assets/smiling-dolfhine.png"
import { Box, Typography } from '@mui/material'
import { MenuLink } from '../../Components/LockerMenu/styles'
import { SectionHeading, SocilLinks } from '../../Styles/style'
import { dexScreenerLink, dexToolsLink, ethScanLink, tgLink, uniSwapLink, xLink } from '../../../links'


const Wrapper = emotionStyled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    position: relative;
    z-index: 1
`

const BackGroundVideo = emotionStyled(Box)`
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: -1;
    object-fit: cover;
    object-position: center;
`
const Header = () => {
  return (
    <Wrapper>
        <BackGroundVideo component="video" autoPlay muted loop controls={false}>
            <source src={SmilingDolphinBuyVideo} type="video/mp4" />
            Your browser does not support the video tag.
        </BackGroundVideo>
        <Box textAlign={'center'} padding={'80px 0'}>
            <SectionHeading className='heading' variant='h1' fontFamily="" >Smiling<br/>Dolphin</SectionHeading>
            <Box marginY={4} textAlign='center'>
                <MenuLink href={uniSwapLink} style={{backgroundColor: '#878C95', marginRight: 20}} target='_blank'><img src={fishTail} style={{marginRight: 10}}/>Buy Now</MenuLink>
                <MenuLink href={dexToolsLink} target='_blank'><img src={barchart} style={{marginRight: 10}}/>Chart</MenuLink>
            </Box>
            <Box textAlign='center'>
                <SocilLinks href={tgLink} target='_blank' p="0"><img src={tg} /></SocilLinks>
                <SocilLinks href={xLink} target='_blank' p="0"><img src={x} /></SocilLinks>
                <SocilLinks href={uniSwapLink} target='_blank' p="0"><img src={uni} /></SocilLinks>
                <SocilLinks href={dexToolsLink} target='_blank' p="0"><img src={dt} /></SocilLinks>
                <SocilLinks href={dexScreenerLink} target='_blank' p="0"><img src={ds} /></SocilLinks>
                <SocilLinks href={ethScanLink} target='_blank' p="0"><img src={es} /></SocilLinks>
            </Box>
        </Box>
    </Wrapper>
  )
}

export default Header