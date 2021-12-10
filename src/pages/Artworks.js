import React, { Component } from 'react'
import "../styles/Artwork.css";
import Art from '../components/project.js';


export default class About extends Component {
    render() {
        return (
<main>
    <article class="centre">

        <h1 class="titlemid">Artwork Proposal</h1>

        <div class="artworks">
            
            <p> This website focusses on art creation which takes form from the visual effects created by gradation. The technique uses a spectrum of colour volumes, space and 
                atmosphere to illustrate gradual transitions of one or more colours to another set of colour hues. The tools to create these effects are extremely powerful and 
                versatile when it comes to methods of manipulating properties such as blending or shading. The creation and dissemination of these artworks shares knowledge about 
                the theories discussed in ‘The Work of Art in the Age of the Internet’. The unique aura that is now replaced and embodied by its reproductions will be highlighted 
                in terms of how modern tools are used to create a completely unique feel to designs. A Combination of subtle and bold designs will be used as a focal point to 
                express depth to an otherwise flat design. The use gradients with any other artwork creates endless possibilities to the emphasize colours, textures and shapes 
                of the original artwork. This exposes audiences to alternative modern art that feels fresh or possibly visually overwhelming. </p>
        
                <div class="contain2">
                    <div class="art2"></div>
                </div>

                <h1 class="titlemid">Updated Artwork Proposal</h1>

            <p>As mentioned in the technical reflection blog post, the artwork proposal has changed considerably since its first iteration. It has changed from being a customizable 
                colour gradient selector due to the technical difficulty of implementing such an interface. The current version of the proposed artwork is focused more on the ability 
                of AI and the internet to create generative artworks. This proposal maintains the vision of the website and the theoretical frameworks discussed in the blog section. 
                The use of AI generated artworks emphasises a few important notions raised in the work of art in the age of the internet as well as code criticality and literacy. This 
                proposal invites users to experience and judge the effects of artworks which are created by computer AI. It offers a newfound perspective about the creation of art whose 
                artist does not even exist. The artwork is also temporary and can never be viewed again once the webpage is refreshed. This makes for a unique experience between the user 
                and the few moments they have to appreciate data driven artworks. </p>
                <Art/>

                <h1 class="titlemid">Exam Artwork rationale and reflection</h1>

            <p>My final internet artwork displays a randomly generated AI Artwork using a website link known as thisxdoesnotexist.com. I decided to create this kind of artwork because it
                it illustrates the power of art on the internet through how technology can be used to effortlessly image that has no true origin or creator. This artwork is also exemplifies 
                some of the theories discussed in blog posts like ‘art in the age of the internet’ as well as the reproductive qualities of internet artworks.    </p>    

            <p>The also chose this type of internet artwork since it is slightly more appealing than my previous proposal which would only generate color gradients based on the users input. 
                These Ai artworks might only be viewed for a moment; however, I came to the realization that once it disappears, it will be gone forever. This gives the user only a brief 
                opportunity to see and experience something as if it were only once in a lifetime. The power of such technologies cannot go unappreciated. Any of the displayed images can 
                also be saved and copied, should the user intend to do so. Images like these might even be claimed and used by people without any strict terms or conditions, which opens 
                the door to many other opportunities. This just goes to show how endless the possibilities sometimes are when it when advanced technologies are made easy to use.</p> 
        </div>

    </article> 

</main>
        )
    }
}
