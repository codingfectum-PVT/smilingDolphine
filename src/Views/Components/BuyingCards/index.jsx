import emotionStyled from '@emotion/styled'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import headerclose from "../../../assets/header-close.png"


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

const BuyingCard = ({title, discription, imgLink}) => {
    return (
        <Grid items xs={12} sm={8} md={5} lg={4}>
            <AlertText textAlign={'center'}>
                <div className='header'>
                    <img src={headerclose} />
                </div>
                <Grid container>
                    <Grid xs={12}>
                        <Typography variant='h4' paddingLeft={0} textAlign={'left'} color="#000">{title}</Typography>
                    </Grid>
                    <Grid xs={12}>
                        <Typography variant='body2' maxWidth={380} marginTop={'20px'} className="cardsText" textAlign={'left'} color="#000">{discription}</Typography>
                    </Grid>
                    <Grid xs={12} textAlign={'right'}>
                        <img src={imgLink} style={{width:'auto', height: '120px'}}/>
                    </Grid>
                </Grid>
            </AlertText>
        </Grid>
    )
}

export default BuyingCard