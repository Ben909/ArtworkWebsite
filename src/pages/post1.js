import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post1 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>What is Decolonisation?</h1>

                    <p> There is much debate on how decolonisation of knowledge has established hierarchies of difference in contemporary society. The aim of decolonisation is to undo 
                        mentalities that permeate government, education and media policies to purposefully regenerate native knowledge, epistemologies and ways of life (Keet, 2014). 
                        History recognizes that Western ideologies or the Global North holds superiority over Southern powers concerning the development, production and dissemination of 
                        knowledge. 
                    </p>

                    <p> Mbembe (2015) exemplifies how the process of ‘demythologizing whiteness’ in universities restructures and reconciles the accumulation of knowledge, creativity 
                        and the free will of individuals to perform within educational frameworks. Based on contextual evidence of the Cecil Rhodes statue, the practise of newly formulated 
                        educational frameworks raises issues which relates to the disregard of original traditions and thoughts that created a functional system in the first place. Balance 
                        is therefore crucial and offers the key to justify implementing strategies of decolonising knowledge.
                    </p>

                    <p> The representation of politics in geo-political locations offer divisions between belonging to a nation fortified through the creation of a ‘nation-state’ and the 
                        laws that govern the reproduction of knowledge. This refers to how the ‘colonized’ translates historical discourse and the legitimization of Western and European 
                        thoughts and research practises. The decolonisation of knowledge seeks to eradicate these assumptions through the addition of new means and approaches to legitimize 
                        knowledge. Mignolo emphasizes that the philosophy of decolonisation should encourage the addition of knowledge frameworks rather than removing the epistemic privilege 
                        of the First World (Mignolo, 2009). Thereby we extend and repurpose that knowledge with the goal to gain more insight about it. We conduct research and measure outcomes 
                        through the accumulation of information and data that is available to us. In terms of research output, science, mathematics and biology are perceived as the most legitimate 
                        forms of knowledge in contemporary society because they aim to find universal laws and absolute truths that apply in all circumstances.
                    </p>

                    <p> The way we operate in these research fields often provides an historical, value free and objective understanding of society. Psychological research in neuroscience 
                        for example, looks at differences in brain types of men and woman and how those types of ideas are reproduced and translated into different hierarchies which are 
                        imbedded in society. It is important to challenge this idea of knowledge and to extend our own perspectives surrounding the development of new theories and approaches 
                        on how knowledge is attained. 
                    </p>

                    <p> Within technology lies the power and the will to construct complex ideologies which reinforces certain cultural values and beliefs. These digital philosophies 
                        often blur the lines of truth for the sake of other goals which leads to the spread of misguided information and the misrepresentation of certain social structures. 
                        For example, games have a significant influence on the minds of players, both in young and old to associate serious topics such as criminality and violence with the 
                        behaviour of certain cultural groups. This translation reveals the identities of stereotyped groups through how games communicate as a medium. While this may not be 
                        the intended purpose of the game, it is the medium and provided technology that emphasizes and constructs these narratives into reality. 
                    </p>

                    <aside className="reference">
                        <p><strong>References</strong><br></br>Keet, A. (2014).<i>Epistemic ‘Othering’ and the Decolonisation of Knowledge.</i>University of the Free State, vol 44 (1).<br></br>
                        Mbembe, A. (2015). <i>Decolonising knowledge and the question of the archive.</i><br></br>
                        Mignolo, W. (2009).<i>Epistemic disobedience, independent thought and decolonial freedom.</i>Theory, Culture and Society 2009, vol 26 no. 7-8.
                        </p>
                    </aside>

                    <section className="next">
                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post2">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
