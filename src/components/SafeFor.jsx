import React from 'react'
import '../styles/SafeFor.css'
import SafeLeaf from '../assets/svg/Safe.svg';
import SafeLeaf2 from '../assets/svg/Safe2.svg';
import SafeLeaf3 from '../assets/svg/Safe3.svg';
import SafeLeaf4 from '../assets/svg/Safe4.svg';

function SafeFor({theme}) {

    const containerTextStyle = {
        color:  theme === 'dark' ? 'white' : 'black'
    };

  return (
    <div className='safe-for'>

        <div className='safe-for__title'>
            <div className="safe-for__title_info">
                <h2 className={`safe-for__title-text`} style={containerTextStyle}>Safe for you, safe for the earth.</h2>
            </div>
            <div className='safe-for__title-flex'>

                    <div className='safe-for__title-cards1'>
                        <div className='safe-for__title-cards'>
                            <div className='safe-for__title-card__img'>
                                <img src={SafeLeaf} alt="" />
                            </div>
                            <div className="safe-for__card-main">
                                <p className={`safe-for__card-main__text`} style={containerTextStyle}>
                                    Sustainable Sourcing
                                </p>
                            </div>
                            <div className="safe-for__card-text">
                                <p className={`safe-for__card-info__text`} style={containerTextStyle}>
                                    We meticulously source our ingredients from sustainable and eco-friendly suppliers, ensuring that the delicate balance of nature is preserved.
                                </p>
                            </div> 
                        </div>
    
                        <div className='safe-for__title-cards'>
                            <div className='safe-for__title-card__img'>
                                <img src={SafeLeaf2} alt="" />
                            </div>
                            <div className="safe-for__card-main">
                                <p className={`safe-for__card-main__text`} style={containerTextStyle}>
                                    Minimalist Packaging
                                </p>
                            </div>
                            <div className="safe-for__card-text">
                                <p className={`safe-for__card-info__text`} style={containerTextStyle}>
                                    Our bottles and boxes are thoughtfully designed to minimize waste, using eco-friendly materials that are both beautiful and sustainable.
                                </p>
                            </div> 
                        </div>
                    </div>



                    <div className='safe-for__title-cards2'>
                        <div className='safe-for__title-cards'>
                            <div className='safe-for__title-card__img'>
                                <img src={SafeLeaf3} alt="" />
                            </div>
                            <div className="safe-for__card-main">
                                <p className={`safe-for__card-main__text2`} style={containerTextStyle}>
                                    Clean Formulations
                                </p>
                            </div>
                            <div className="safe-for__card-text">
                                <p className={`safe-for__card-info__text`} style={containerTextStyle}>
                                    Our perfumes are crafted using clean and non-toxic ingredients, free from harmful chemicals that could compromise your health or the environment.
                                </p>
                            </div> 
                        </div>
    
                        <div className='safe-for__title-cards'>
                            <div className='safe-for__title-card__img'>
                                <img src={SafeLeaf4} alt="" />
                            </div>
                            <div className="safe-for__card-main">
                                <p className={`safe-for__card-main__text`} style={containerTextStyle}>
                                    Cruelty-Free Practices
                                </p>
                            </div>
                            <div className="safe-for__card-text">
                                <p className={`safe-for__card-info__text`} style={containerTextStyle}>
                                    We are proud to be a cruelty-free brand, never testing our products on animals.Our dedication to safety extends to our furry friends.
                                </p>
                            </div> 
                        </div>
                    </div>

            </div>
        </div>
    </div>
  )
}

export default SafeFor