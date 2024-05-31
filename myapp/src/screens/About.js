
import React from 'react'
import Title from '../components/Title';
import UnorderedList from '../components/UnorderedList';

function About() {
    return(
        <>
            <Title name="NodeJS Guide" collegeName={"Amity"} rollNo={123} schoolName={"KV Raiwala"} />
            <UnorderedList/>
            <Title name="General"/>
            <Title name="NodeJS Core concepts"/>
        </>
    )
}


export default About ; 