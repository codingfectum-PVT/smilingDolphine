import emotionStyled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

const PageWrapper = emotionStyled.div`
    background-color: #4DB3DB;
    min-height: 100vh;
`

const SectionHeading = emotionStyled(Typography)`
    color: #878C95;
    -webkit-text-stroke: 3px #000000;
    font-size: 146px;
    line-height: 125px;
    text-transform: uppercase;
    position: relative;
    z-index: 0;
    text-shadow: 
        3px 3px 0px black, /* First outer border */
        -3px -3px 0px black, 
        -3px 3px 0px black, 
        3px -3px 0px black,
        6px 6px 0px #ffffff, /* Second outer border */
        -6px -6px 0px #ffffff, 
        -6px 6px 0px #ffffff, 
        6px -6px 0px #ffffff;
    
    @media(max-width: 1600px){
        font-size: 110px;
        line-height: 100px;
    }
    @media(max-width: 999px){
        font-size: 100px;
        line-height: 100px;
    }
    @media(max-width: 599px){
        font-size: 50px;
        line-height: 50px;

        &.heading{
        
            font-size: 100px;
            line-height: 85px;  
        }
    }
`

const ButtonLink = emotionStyled(Button)`
    background: #4DB3DB;
    width: 100%;
    margin-top: 25px;
    border-radius: 8px;
    border: 5px solid #000;
    padding: 10px 25px;
    display: flex;
    justify-content: space-between;
    box-shadow: 0 5px 0 #000000;
    
    &:hover{
        background: #878c95;
        box-shadow: 0 5px 0 #000000a2;
        border: 5px solid #000000a2;
    }
`


const SocilLinks = emotionStyled.a`
    display: inline-block;
    margin-right: 10px;

    img{
        width: 71px;
        height: 79px;

        
        @media(max-width: 1600px){
            width: 53px;
            height: 55px;
        }
        
        @media(max-width: 599px){
            width: 40px;
            height: 43px;
        }
    }
    
    &:last-child {
        margin-right: unset;
    }
`
export { PageWrapper, SectionHeading, ButtonLink, SocilLinks }