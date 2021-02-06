import React from 'react';
import styles from './footer.module.css';


import facebookIcon from '../../img/facebook.png';
import emailIcon from '../../img/email.png';
import rssIcon from '../../img/rss.png';
import twitterIcon from '../../img/twitter.png';
import vimeoIcon from '../../img/vimeo.png';

export default function Footer() {
    return( 
        <div className={`${styles.Footer}`}>
            <div className={`${styles.FooterWrapper} wrapper`}>

                <div className={`${styles.FooterAbout} ${styles.FooterColumn}`}>
                    <h4 className={`${styles.FooterAbout_Header}`}>About Jetro</h4>
                    <p className={`${styles.FooterAbout_FirstPara}`}>
                        Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. 
                        Urbanitas adolescens vim te, per at tritani aperiri. Adhuc invenire convenire his ea. 
                        Id mei vitae denique, 
                        in eam commodo veritus disputando. 
                    </p>
                    <p className={`${styles.FooterAbout_SecondPara}`}>
                        Pro et erant delicata, eu vim essent imperdiet accommodare, 
                        dictas deseruisse ius an. Solet everti definitionem id ius, 
                        sonet oporteat cu vim.
                    </p>
                </div>

                <div className={`${styles.FooterWidget} ${styles.FooterColumn}`}>
                    <h4 className={`${styles.FooterWidget_Header}`}>Twitter Widget</h4>
                    <div className={`${styles.FooterWidget_post}`}>
                        @pixelmater What an awesome design with great functionality :)
                    </div>
                    <div className={`${styles.FooterWidget_post}`}>
                        @pixelmater What an awesome design with great functionality :)
                    </div>
                    <div className={`${styles.FooterWidget_post}`}>
                        @pixelmater What an awesome design with great functionality :)
                    </div>
                </div>

                <div className={`${styles.FooterContactUs} ${styles.FooterColumn}`}>
                    <h4 className={`${styles.FooterContactUs_Header}`}>Contact Us</h4>
                    <p className={`${styles.FooterContactUs_Para}`}>
                        Lorem ipsum dolor sit amet, malorum recteque reprehendunt ea vel. 
                        Urbanitas adolescens vim te, 
                        per at tritani aperiri. 
                    </p>

                    <div className={`${styles.FooterContactUs_Email}`}>information@jetro.com</div>
                    <div className={`${styles.FooterContactUs_Phone}`}>1.222.333.4444</div>
                    
                    <div className={`${styles.FooterContactUs_Links}`}>
                        <img alt='Link' src={facebookIcon} className={`${styles.FooterContactUs_Link}` }></img>
                        <img alt='Link' src={emailIcon} className={`${styles.FooterContactUs_Link}`}></img>
                        <img alt='Link' src={rssIcon} className={`${styles.FooterContactUs_Link}`}></img>
                        <img alt='Link' src={twitterIcon} className={`${styles.FooterContactUs_Link}`}></img>
                        <img alt='Link' src={vimeoIcon} className={`${styles.FooterContactUs_Link}`}></img>
                    </div>
                </div>

            </div>
        </div>
    )
};
