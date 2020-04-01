import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';


function AboutPage(props) {
    return(
        <div className="red">
            <Hero title={props.title} />

            <Content>
                <p>I'm a software engineer. I specialize in Front-end development which is building out the visual components of a website.</p> 

                <p>I build interactive, responsive and beautiful websites through carefully crafted code and user-centric design.</p> 
                
                <p>I work with technologies like HTML5, CSS3 and Javascript.</p> 
                
                <p>I'm currently a freelancer and available to work.</p>
            </Content>
        </div>
    );

}

export default AboutPage;