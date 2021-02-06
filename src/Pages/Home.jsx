import React from 'react';
import MainSlider from "../Components/MainSlider/MainSlider";
import PostsSection from "../Components/Posts/PostsSection";
import WorksSection from "../Components/WorksSection/WorksSection";

export default function Home() {
    return(
    <>
        <MainSlider />
        <PostsSection />
        <WorksSection />
    </>
    )
};