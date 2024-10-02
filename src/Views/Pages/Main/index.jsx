import React from 'react'
import LockerMenu from '../../Components/LockerMenu'
import { PageWrapper } from '../../Styles/style'
import Header from '../../Sections/S1_Header'
import About from '../../Sections/S2_About'
import Tokenomics from '../../Sections/S3_Tokenomics'
import Gallery from '../../Sections/S5_Gallary'
import Community from '../../Sections/S6_Community'
import HowToBuy from '../../Sections/S4_HowToBuy'

const MainPage = (props) => {
  return (
    <PageWrapper>
        {/* <LockerMenu /> */}
        <Header />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Gallery />
        <Community />
    </PageWrapper>
  )
}

export default MainPage