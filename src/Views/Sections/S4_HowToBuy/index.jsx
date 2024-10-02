import emotionStyled from '@emotion/styled'
import React, { useState } from 'react'
import bg from "../../../assets/random.jpg"
import swaptoken from "../../../assets/swaptoken.png"
import uniswap from "../../../assets/uniswap.png"
import geteth from "../../../assets/geteth.png"
import creatwallet from "../../../assets/creatwallet.png"
import logoimg from "../../../assets/logo.png"
import { Container, Grid, } from '@mui/material'
import BuyingCard from '../../Components/BuyingCards'
import { SectionHeading } from '../../Styles/style'




const Wrapper = emotionStyled.div`
    background-color: #359FC8;
    background: url(${bg});
    background-size: cover;
    padding: 80px 0;

`
const FloadImage = emotionStyled.img`
    width: 570px;
    height: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;

    @media(max-width: 1536px){
        width: 36vw;
    }
    @media(max-width: 900px){
        display: none;
    }
`


const HowToBuy = () => {
  return (
    <Wrapper>
        <Container maxWidth="xl">
            <SectionHeading style={{color:"#ffffff", textAlign: 'center'}}>Tokenomics</SectionHeading>
            <Grid container position={'relative'} justifyContent={'center'} >
                <BuyingCard 
                    title="Create Wallet"
                    discription="Grab your digital wallet and get ready to dive in!"
                    imgLink={creatwallet}
                />
                <Grid items xs={12} md={2} lg={4}></Grid>
                <BuyingCard 
                    title="Go to UniSwap"
                    discription="Head to UniSwap, connect your wallet and get ready for the ride."
                    imgLink={uniswap}
                />
                <BuyingCard 
                    title="Get some $ETH"
                    discription="Grab some $ETH—it's your rocket fuel to make waves in the crypto world."
                    imgLink={geteth}
                />
                <Grid items xs={12} md={2} lg={4}></Grid>
                <BuyingCard 
                    title="SWAP $ETH FOR $DOLPHIN"
                    discription="Swap that $ETH for $DOLPHIN, and join Miharu’s joyful pod today!"
                    imgLink={swaptoken}
                />
                <FloadImage src={logoimg} />
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default HowToBuy