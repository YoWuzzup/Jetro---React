import React from 'react';
import styles from './aboutContent.module.css';
import { AboutJetro, AboutCategories, AboutGallery } from '../';


export default function AboutContent() {
    return(
    <div className={`${styles.AboutContent}`}>
        <div className={`${styles.AboutContentWrapper} wrapper`}>

            <div className={`${styles.AboutContent_mainContent}`}>
                <p className={`${styles.AboutContent_para}`}>
                    Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, 
                    id tristique risus ante at est. 
                    Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas. 
                    Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. 
                    Maecenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. 
                    Duis tristique porta aliquam. Curabitur sagittis tincidunt erat, 
                    quis hendrerit nibh iaculis vitae. 
                </p>

                <q cite='google.com'>
                    Quisque mollis, sem id laoreet pretium, lectus elit molestie urna, 
                    id tristique risus ante at est. 
                    Sed pretium metus sit amet erat blandit vitae pulvinar lorem egestas. 
                    Sed lectus nulla, bibendum at vulputate sit amet, tincidunt volutpat lorem. 
                    Mae trenas in magna mollis lectus lacinia mollis. Donec sit amet volutpat lorem. 
                    Du tristique porta aliquam. Curabitur sagittis tincidunt erat, 
                    quis hendrerit nibh iaculis vitae. 
                    Pellentesque ultric nisl quis odio posuere facilisis. In ut felis erat, 
                    ac laoreet orci donec sed nulla at sit amet.
                </q>
            </div>
            

            <div className={`${styles.AboutContent_sideContent}`}>
                <AboutJetro />
                <AboutCategories />
                <AboutGallery />
            </div>

        </div>
    </div>
    )
};