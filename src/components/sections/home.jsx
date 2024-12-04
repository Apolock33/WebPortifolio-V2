import React, { useContext } from 'react'
import { GlobalContext } from '../../contexts/globalContext';
import ProfileImage from '../../assets/imgs/ProfileImage.png';
import HomeTexts from '../elements/sectionElements/homeTexts';

const Home = () => {
  const {
    isMobile
  } = useContext(GlobalContext);

  return (
    <section id="home" className={`sections flex align-items-center justify-content-center ${isMobile ? 'flex-column': 'gap-8'}`}>
      {!isMobile ?
        <>
          <HomeTexts />
          <div>
            <img src={ProfileImage} alt="Carlos A. Gomes" width={isMobile ? 200 : 280} />
          </div>
        </>
        :
        <>
          <div>
            <img src={ProfileImage} alt="Carlos A. Gomes" width={isMobile ? 200 : 280} />
          </div>
          <HomeTexts />
        </>
      }
    </section >
  )
}

export default Home;