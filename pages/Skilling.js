import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Head from 'next/head'
export default function Skilling() {
  return (
    <div>
       <Head>
        <title>Bolster Skilling</title>

        <meta
          name="description"
          content="     Technology, migration, climate change, and conflict are reshaping
          society, forcing people across the globe to adapt to unexpected
          changes in their lives and work (UNICEF). To keep up, adolescents
          must seize opportunities and confront challenges. They need
          education and skills to become lifelong learners, secure, productive
          work, make informed decisions, and positively engage in their
          communities. It is the most significant global challenge to
          preparing adolescents for the modern employment market. UNICEF
          understands that concerted investment and coordination to strengthen
          education systems are needed. All adolescents, especially the most
          marginalized, can acquire skills that help them fulfill their
          potential. Transferable skills are one of such significant areas to
          be focused on.

          "
        />
        <meta property="og:title" content="Home" key="title" />
        <link rel="canonical" href="https://www.bolsterfoundation.in/Skilling" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="skill" style={{ scrollBehavior: "smooth" }}>
        <div className="skill__main">
          <div className="about__main__head">
            <h1>Bolster skilling</h1>
          </div>
        </div>

        <div className="skill__content">
          <p>
            Adolescents (children aged 10–19) grow up in a transforming world.
            Technology, migration, climate change, and conflict are reshaping
            society, forcing people across the globe to adapt to unexpected
            changes in their lives and work (UNICEF). To keep up, adolescents
            must seize opportunities and confront challenges. They need
            education and skills to become lifelong learners, secure, productive
            work, make informed decisions, and positively engage in their
            communities. It is the most significant global challenge to
            preparing adolescents for the modern employment market. UNICEF
            understands that concerted investment and coordination to strengthen
            education systems are needed. All adolescents, especially the most
            marginalized, can acquire skills that help them fulfill their
            potential. Transferable skills are one of such significant areas to
            be focused on.
          </p>

          <p className="lg:pt-5">
            <b>Transferable skills: </b> Also called &quot;life skills,&quot;
            &quot;twenty-first-century skills,&quot; &quot;soft skills,&quot; or
            &quot;socio-emotional skills,&quot; these allow young people to
            become agile learners and global citizens equipped to navigate
            personal, social, academic, and economic challenges. Transferable
            skills also help young people affected by crisis cope with trauma
            and build resilience. They include problem-solving, negotiation,
            managing emotions, empathy, and communication.
          </p>
          <p className="lg:pt-3">
            The 21st century is often described as an age of uncertainty and
            ambiguity with unprecedented challenges. New technologies and
            digital media are facilitating imagination and inventiveness.
            However, there are also challenges such as rapid urbanization,
            significant disruptions in employment opportunities, and lack of
            quality education. Contrary to the pessimistic views of youth being
            unmotivated, feeling entitled, and disruptive, we need to see the
            tremendous potential in flourishing our youth. Adolescence is a
            crucial phase of life to be relished. It is a time of discovery,
            finding meaning, and developing independence. Youth everywhere seek
            relevance and the right and space to discover, fail, and be
            respected. They want their voices to be heard and desire to
            contribute. The youths are valuable people and outstanding citizens
            who bring fresh ideas, knowledge, and learning. However, they often
            lack opportunities and are given more of the same. How can we create
            more space, time, pathways, and positive learning experiences for
            them? The present camp proposes to address this concern. <br />
            Bolster Foundation understands that we need an approach
            characterized by big picture thinking, fostering imagination and
            inquiry, and building grit through social-emotional learning and
            cultivating resilience. We need to prepare adolescents with ways of
            thinking beyond analytical thinking. It implies the design of tasks
            where education has purposeful connections to the world beyond the
            classroom and provides for different needs and interests of the
            learners. We advocate the use of real-world problems. Wherein
            solving a problem, students need to get the facts of the bigger
            picture and inter-related issues before going into the analytical
            and logical reasoning.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
