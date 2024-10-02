import emotionStyled from '@emotion/styled'
import React, { useState } from 'react'
import bgtextlogo from "../../../assets/text-logo.png"
import bg from "../../../assets/tokenomics.jpg"
import copyimg from "../../../assets/copy.png"
import fishing from "../../../assets/tokenomics-img.png"
import headerclose from "../../../assets/header-close.png"
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { MenuLink } from '../../Components/LockerMenu/styles'
import { buySellTax, CA, supply } from '../../../links'
import { ButtonLink, SectionHeading } from '../../Styles/style'

const Wrapper = emotionStyled.div`
    background-color: #359FC8;
    background: url(${bg});
    padding: 80px 0;

`

const AlertText = emotionStyled(Grid)`
    background-color: #E3E3E3;
    padding: 90px 20px 25px;
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

        img{
            height: 20px;
            width: auto;
        }
    }
`

const CopyImage = emotionStyled.img`
    margin-left: 10px;
    margin-top: 5px;
    width: 22px;
    height: 25px;
`

const Tokenomics = () => {

    const [copiedText, setCopiedText] = useState('');
    // Function to copy text from a <p> element
  const copyText = () => {
    const textToCopy = document.getElementById('textToCopy').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopiedText(textToCopy);
    //   alert('Text copied: ' + textToCopy);
    }).catch((err) => {
      alert('Failed to copy: ' + err);
    });
  };

  return (
    <Wrapper>
        <Container maxWidth="xl">
            <Grid container>
                <Grid xs={12}>
                    <SectionHeading style={{color:"#ffffff"}}>Tokenomics</SectionHeading>
                </Grid>
                <Grid xs={12} md={6}>
                    <AlertText textAlign={'center'}>
                        <div className='header'>
                            <img src={headerclose} />
                        </div>
                        <Grid container>
                            <Grid xs={6}>
                                <Typography variant='h4' textAlign={'left'} color="#000">Name</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='body2' textAlign={'right'} color="#000">Smiling Dolphin</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='h4' textAlign={'left'} color="#000">Symbol</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='body2' textAlign={'right'} color="#000">$dolphin</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='h4' textAlign={'left'} color="#000">Supply</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='body2' textAlign={'right'} color="#000">{supply}</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='h4' textAlign={'left'} color="#000">Tax</Typography>
                            </Grid>
                            <Grid xs={6}>
                                <Typography variant='body2' textAlign={'right'} color="#000">{buySellTax}</Typography>
                            </Grid>
                        </Grid>
                    </AlertText>
                    <ButtonLink onClick={copyText} >
                        <Typography variant='h4' textAlign={'left'}>CA</Typography>
                        <Typography variant='body2' id="textToCopy" display={'flex'} justifyContent={'center'} textAlign={'right'}>{CA}<CopyImage src={copyimg} /></Typography>
                    </ButtonLink>
                </Grid>
                <Grid xs={12} md={6} textAlign={'right'} alignContent={'center'}>
                    <img src={fishing} style={{height:'auto', maxWidth: 520, width: '100%'}} />
                </Grid>
            </Grid>
        </Container>
    </Wrapper>
  )
}

export default Tokenomics