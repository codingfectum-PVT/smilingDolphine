import emotionStyled from '@emotion/styled'
import React from 'react'
import bg from "../../../assets/waves.png"
import abouttopimage from "../../../assets/about-top-image.jpg"
import fishing from "../../../assets/fishing.png"
import phishingMobTweet from "../../../assets/phishing-mob-tweet.png"
import phishingMob from "../../../assets/phishing-Mob.png"
import headerclose from "../../../assets/header-close.png"
import { Box, Container, Grid, Typography } from '@mui/material'
import { MenuLink } from '../../Components/LockerMenu/styles'
import { Markee } from '../../Components/Markee'
import { SectionHeading } from '../../Styles/style'
import { tgLink } from '../../../links'

const Wrapper = emotionStyled.div`
    background: url(${bg});
    padding-bottom: 80px;
`


const AlertText = emotionStyled(Grid)`
    background-color: #E3E3E3;
    padding: 90px 70px 40px;
    margin-top: 50px;
    border-radius: 8px;
    position: relative;
    border: 5px solid #000;

    .header{
        background: #C5C5C5;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        text-align: left;
        border-radius: 8px;
        padding: 15px 25px;
        border-bottom: 5px solid #000; 
    }
    
    @media(max-width: 899px){
        padding: 90px 20px 40px;
    }
`

const AboutImageWrapper = emotionStyled.div`
    padding: 20px;
    .desktopImage,
    .mobileImage{
        width: 100%;
        height: auto;
        margin-top: 20px;
    }
        
    .mobileImage{
        display: none;
    }
    @media(max-width: 899px){
        .desktopImage{
            display: none;
        }
        .mobileImage{
            display: block;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
        }
    }
`

const About = () => {
  return (
    <Wrapper>
        <Markee />
        <img src={abouttopimage} style={{width: '100%'}} />
        <AboutImageWrapper>
            <img src={fishing} className='desktopImage' />
            <img src={phishingMob} className='mobileImage' />
            <img src={phishingMobTweet} className='mobileImage' style={{width: '100%', marginTop: "60px"}} />
        </AboutImageWrapper>
        <Container maxWidth="xl">
            <AlertText textAlign={'center'}>
                <div className='header'>
                    <img src={headerclose} />
                </div>
                <SectionHeading style={{color:"#4DB3DB"}}>Who am i?</SectionHeading>
                <Typography variant='h2'></Typography>
                <Typography variant='body2' color="#000" margin={{xs:"3.5vh 0"}}>The Smiling Dolphin meme coin is inspired by the viral "Smiling Dolphin" meme that took the internet by storm on X. The meme originated from a photo of Miharu, a Yangtze Finless Porpoise, first shared on ZooChat in 2023. Miharu, who resides at the Miyajima Public Aquarium in Japan, quickly became a beloved reaction meme, thanks to the photo's resurfacing and widespread use online. Our coin celebrates this iconic meme, capturing the joy and positivity that Miharu's smiling image brought to the world.</Typography>
                <MenuLink href={tgLink} target='_blank'>Join community</MenuLink>
            </AlertText>
        </Container>
    </Wrapper>
  )
}

export default About