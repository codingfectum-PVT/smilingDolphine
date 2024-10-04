import emotionStyled from '@emotion/styled'
import React from 'react'
import bg from "../../../assets/waves.png"
import t1 from "../../../assets/tweet-1.png"
import t2 from "../../../assets/tweet-2.png"
import t3 from "../../../assets/tweet-3.png"
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
import TweetSlider from '../../Components/Slider'

const Wrapper = emotionStyled.div`
    background: url(${bg});
    padding-bottom: 80px;
    overflow: hidden;
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
const Slider = emotionStyled.div`
    .slider-container {
  position: relative;
  width: 400px;
  height: 427px;
  margin: 50px auto;
  perspective: 1000px;
}

.slider-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  transition: transform 0.8s ease, z-index 0.8s ease;

  img{
    width: 100%;
    height: auto;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    border-radius: 15px;
  }
}

.slider-card:nth-child(1) {
  transform: translate(0, 0);
  z-index: 3; /* The top card */
}

.slider-card:nth-child(2) {
  transform: translate(-20px, -20px);
  z-index: 2; /* The middle card */
}

.slider-card:nth-child(3) {
  transform: translate(-40px, -40px);
  z-index: 1; /* The back card */
}

@keyframes slideCards {
  0%, 33.33% {
    /* First card at the front */
    transform: translate(0, 0);
    z-index: 3;
  }
  33.34%, 66.66% {
    /* Second card moves to the front */
    transform: translate(20px, -20px);
    z-index: 2;
  }
  66.67%, 100% {
    /* Third card moves to the front */
    transform: translate(40px, -40px);
    z-index: 1;
  }
}
  


.slider-card {
  animation: slideCards 6s infinite ease-in-out;
}

/* Adjusting each card's animation */
.slider-card:nth-child(1) {
  animation-delay: 0s;
}
.slider-card:nth-child(2) {
  animation-delay: 1s;
}
.slider-card:nth-child(3) {
  animation-delay: 2s;
}


`

const About = () => {
  return (
    <Wrapper>
        <Markee />
        <img src={abouttopimage} style={{width: '100%'}} />
        {/* <AboutImageWrapper>
            <img src={fishing} className='desktopImage' />
            <img src={phishingMob} className='mobileImage' />
            <img src={phishingMobTweet} className='mobileImage' style={{width: '100%', marginTop: "60px"}} />
        </AboutImageWrapper> */}
        <Grid container paddingTop={6}>
            <Grid xs={12} md={6} textAlign={{xs:'center', md: 'left'}}>
                <img src={phishingMob} style={{maxWidth: 700, width: '100%', height: 'auto', margin:'auto'}} />
            </Grid>
            <Grid xs={12} md={6} marginTop={'-30px'}>
                <TweetSlider />
            </Grid>
        </Grid>
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