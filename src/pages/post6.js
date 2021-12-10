import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "../styles/posts.css";

export default class post6 extends Component {
    render() {
        return (
            <main>
                <article className="centreblog">

                <h1>Digital Divide widens</h1>

                    <p> In the wake of Covid 19, access to the internet has become a lifeline for millions of people. The digital divide reflects the gap in internet and technology access
                        that prohibits people from participating in vital parts of society. This led to economic and social inequality which has an impact on the spread of information and 
                        communication technologies. It is historically recognized that the integration of digitalization seeks to rectify the imbalance caused by the inability of low 
                        socio-economic groups to be granted access to technology and its affordances. This is not helped by the manner in which Covid-19 has influenced the lives and opportunities 
                        of individuals globally. “More than 1.5 billion students have been affected by school closures due to the Covid-19 pandemic” (Tataki & Glynos, 2020). As a result, the 
                        most suitable and perhaps only solution for students to continue their academic curriculum came in the form of e-learning. This disruption has caused major disparities 
                        in how educational resources are allocated and communicated to students who are expected to fulfil specific assessment standards. 
                    </p>    

                    <p> The pandemic has changed our awareness of the digital divide. This issue is emphasized through the fact that Covid-19 has widened the gap between those that have access to 
                        modern technology versus those that do not. In a society where we are increasingly defined by our access to information, many are excluded and left in the digital dark age 
                        because they are technologically illiterate or simply cannot afford to access internet services. According to The United Nations Educational, Scientific and Cultural 
                        Organization (UNESCO), 40% of students are unable to access the internet from home and only 50% of students have access to a computer while the other 830 million are left 
                        disadvantaged with only a few possible solutions (Tataki & Glynos, 2020). These include making the internet accessible to places it’s never been before, and making the 
                        service more accessible where it already exists. 
                    </p>

                    <p> With much of daily life moved online, the coronavirus pandemic dramatically exposed the digital divide and our continuous struggle to overcome it. While there are global 
                        containment strategies to prevent further spreading of the virus, these should under no circumstances leave members of marginalized communities vulnerable. This is because
                        neglect leaves these communities further seperated from bridging the digital divide while strategies to provide assistance is often overshadowed by the sheer scale of the gap 
                        that already exists between communities.
                    </p>

                    <p> Amidst the pandemic, academic institutions face the challenges of transitioning to an unfamiliar online teaching environment. While the adaption to these new circumstances 
                        might hinder the quality of education, teachers maintain their integrity to accommodate students who are vulnerable to unforeseen events such as the stability and 
                        availability of technology in an online teaching space. Many strategies have been put in place to ensure students are given the best opportunities to succeed. According 
                        to Correia (2020), clarity and open communication between instructors and learners are essential to ensure the success of support strategies such as access to free 
                        resources and tools. The use of non-data related technologies is also encouraged since the majority has limited bandwidth and data as their disposal. While Covid invades 
                        nearly every aspect of our world, it has forced us to reappropriate our response to the ever-present technological barrier of the digital divide.
                    </p>

                    <aside className="reference">
                        <p><strong>References</strong><br></br>Correia, A.P. (2020).<i>Healing the Digital Divide During the COVID 19-Pandemic.</i>The Ohio State University.<br></br>
                        Tataki, M. Glynos, D. (2020).<i>Digital Divide Widens.</i>Institute for Internet and the Just Society.<br></br>
                        </p>
                    </aside>

                    <section className="next">
                        <Link to="/post5">
                        <button><strong>Previous Blog</strong></button>
                        </Link>

                        <Link to="/blogs">
                        <button><strong>View Blogs</strong></button>
                        </Link>

                        <Link to="/post7">
                        <button><strong>Next Blog</strong></button>
                        </Link>
                    </section>

                </article>
            </main>
        )
    }
}
