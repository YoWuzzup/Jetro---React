import React from 'react';
import styles from "./contactContent.module.css";
import { MyGoogleMap, AboutJetro, AboutCategories, AboutGallery, MessageForm} from "../";

export default function ContactContent() {
    return(
    <div className={`${styles.ContactContent}`}>

        <div className={`${styles.ContactContent_mainContent}`}>
            <MyGoogleMap />

            <div className={`${styles.ContactContent_infoBlock}`} >
                
                <div className={`${styles.ContactContent_ourInfo}`}>
                    <p className={`${styles.ContactContent_ourInfoPara}`}>
                        Lorem ipsum dolor sit amet, in consectetur adipiscing elit. 
                        Siri Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. 
                        Nulla quis sem at nibh elementum.
                    </p>
                    <div className={`${styles.ContactContent_ourInfoAddress}`}>
                        <span className={`${styles.ContactContent_street}`}>328 Ave C</span>
                        <span className={`${styles.ContactContent_city}`}>Saskatoon, SK</span>
                        <span className={`${styles.ContactContent_home}`}>S7R 2V9</span>
                    </div>
                    <div className={`${styles.ContactContent_ourInfoNumbers}`}>
                        <div className={`${styles.FooterContactUs_Phone}`}>t: (888) 842 - 8356</div>
                        <div className={`${styles.FooterContactUs_fax}`}>f: (888) 452 - 9257</div>
                        <div className={`${styles.FooterContactUs_Email}`}>e: info@psdfreebies.com</div>
                    </div>
                </div>

                <div className={`${styles.ContactContent_yourInfoForm}`}>
                    <MessageForm />
                </div>

            </div>

        </div>

        
        <div className={`${styles.ContactContent_sideContent}`}>
                    <AboutJetro />
                    <AboutCategories />
                    <AboutGallery />
        </div>

    </div>
    )
};