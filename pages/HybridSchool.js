import React from "react";
import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function HybridSchool() {
  return (
    <div>
      <Head>
        <title>Bolster Hybrid School</title>
        <meta
          name="description"
          content="Bolster Hybrid School - A New Way to Learn Humanities! Our Hybrid Higher Secondary Humanities Program is designed for students who want to explore society, culture, politics, and the economy."
        />
        <meta property="og:title" content="Bolster Hybrid School" key="title" />
        <link rel="canonical" href="https://www.bolsterfoundation.in/HybridSchool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="bg-gray-50 min-h-screen pb-20" style={{ scrollBehavior: "smooth" }}>

        {/* Hero Section */}
        <section className="relative w-full h-[60vh] lg:h-[70vh] flex items-center justify-center bg-black overflow-hidden pt-20">
          <div className="absolute inset-0 z-0">
            <Image
              src="/assets/images/campus.jpg"
              alt="Bolster Hybrid School Campus"
              layout="fill"
              objectFit="cover"
              className="opacity-40"
              priority
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
              Bolster Hybrid School
            </h1>
            <p className="text-xl md:text-3xl text-gray-200 font-light mb-8 italic">
              A New Way to Learn Humanities!
            </p>
            <p className="text-lg md:text-xl text-white font-medium max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              At Bolster Hybrid School, we believe that understanding the world requires more than memorizing facts. It requires curiosity, critical thinking, and the ability to ask meaningful questions.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Bolster Hybrid School is an innovative educational initiative based in Kerala, India, focused on transforming humanities education for the twenty-first century.
              Our aim is simple: to create <span className="font-semibold text-[#94028d]">thoughtful learners, independent thinkers, and future leaders.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 text-center">
            {['Academic depth', 'Digital learning', 'Research-based education', 'Global academic exposure'].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border-t-4 border-site hover:-translate-y-2 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{item}</h3>
              </div>
            ))}
          </div>
        </section>

        {/* Our Program */}
        <section className="bg-white py-16 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Hybrid Higher Secondary Humanities Program</h2>
              <p className="text-lg text-gray-600">A unique two-phase learning model that blends flexibility with immersive academic experience.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#e78d18] text-white py-1 px-4 rounded-bl-xl font-bold">Phase 1</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-2 group-hover:text-[#e78d18] transition">Online Learning (8 Months)</h3>
                <p className="text-gray-600 mb-6 font-medium">Students engage in an interactive digital academic environment.</p>
                <ul className="space-y-3 mb-6 text-gray-600">
                  {['Live lectures and seminars', 'Reading and discussion sessions', 'Academic writing workshops', 'Digital humanities training', 'Research mentoring', 'Collaborative projects'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#e78d18] mr-2">✔</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-lg border border-[#e78d18] bg-[#e78d18]/10">
                  <p className="text-[#e78d18] text-sm font-semibold italic">Builds independent learning skills, digital fluency, and intellectual discipline.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300 border border-gray-100 relative overflow-hidden group">
                <div className="absolute top-0 right-0 bg-[#94028d] text-white py-1 px-4 rounded-bl-xl font-bold">Phase 2</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 mt-2 group-hover:text-[#94028d] transition">Residential Campus (2 Months)</h3>
                <p className="text-gray-600 mb-6 font-medium">An intensive on-campus experience at Kottakkal, Kerala.</p>
                <ul className="space-y-3 mb-6 text-gray-600">
                  {['Workshops and seminars', 'Research presentations', 'Field visits and case studies', 'Debate and discussion sessions', 'One-on-one mentorship', 'University preparation guidance'].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#94028d] mr-2">✔</span> {item}
                    </li>
                  ))}
                </ul>
                <div className="p-4 rounded-lg border border-[#94028d] bg-[#94028d]/10">
                  <p className="text-[#94028d] text-sm font-semibold italic">Fosters community, confidence, and deeper academic engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Humanities & Advanced Curriculum */}
        <section className="py-16 px-6 lg:px-20 max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Humanities?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Humanities help us understand how the world works—from societies and cultures to economies and political systems. At Bolster, students develop:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {['Critical thinking and analysis', 'Communication and argumentation skills', 'Ethical awareness', 'Creativity and curiosity', 'Global perspective'].map((skill, index) => (
                <span key={index} className="bg-site text-black px-4 py-2 rounded-full text-sm font-bold shadow-sm">{skill}</span>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Advanced Curriculum Includes</h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-site">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Digital Humanities</h3>
              <p className="text-site font-bold mb-4 drop-shadow-sm">Where Humanities Meet Technology</p>
              <p className="text-gray-600 mb-4">Our program introduces students to Digital Humanities, an emerging field that combines social inquiry with digital tools. Students learn to:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 marker:text-site">
                <li>Map social and historical data</li>
                <li>Analyze digital cultures and media</li>
                <li>Work with online archives</li>
                <li>Visualize social trends</li>
                <li>Create multimedia research projects</li>
              </ul>
              <p className="text-gray-800 font-semibold text-sm bg-site/20 p-3 rounded-lg">This equips them with future-ready skills for research, media, policy, and beyond.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-[#e78d18]">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Research-Based Learning</h3>
              <p className="text-[#e78d18] font-bold mb-4">Learn by Exploring, Not Memorizing</p>
              <p className="text-gray-600 mb-4">Students are trained to think like researchers:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6 marker:text-[#e78d18]">
                <li>Reading and interpreting academic texts</li>
                <li>Framing research questions</li>
                <li>Conducting interviews and fieldwork</li>
                <li>Writing structured research essays</li>
                <li>Presenting findings</li>
              </ul>
              <p className="text-gray-800 font-semibold text-sm bg-[#e78d18]/10 p-3 rounded-lg">Each student completes a guided research project, building a strong academic foundation for university.</p>
            </div>
          </div>
        </section>

        {/* Global Pathways & Outcomes */}
        <section className="bg-gray-100 py-16 px-6 lg:px-20">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Global Pathways</h2>
              <p className="text-gray-600 mb-6">We prepare students for higher education in leading institutions worldwide.</p>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">The program supports:</h4>
                <ul className="space-y-2 text-gray-600">
                  {['Academic writing and portfolio development', 'Research supervision', 'Exposure to global academic debates', 'Guidance for university applications'].map((item, index) => (
                    <li key={index} className="flex items-center"><span className="w-2 h-2 bg-[#94028d] rounded-full mr-3"></span> {item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Students can pursue fields such as:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Social sciences', 'Economics and development studies', 'International relations', 'Media and cultural studies', 'Law and public policy', 'Liberal arts and humanities'].map((field, index) => (
                    <span key={index} className="bg-white border text-gray-700 px-3 py-1 rounded-md text-sm border-gray-300">{field}</span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Outcomes & Career Tracks</h2>
              <p className="text-gray-600 mb-6">The school is designed for students aspiring to diverse academic and professional pathways in the humanities and social sciences.</p>

              <div className="space-y-4">
                {[
                  { title: "Social Entrepreneurship", desc: "Building innovative solutions to address social and economic challenges." },
                  { title: "Research and Development", desc: "Pursuing academic research and knowledge creation in the social sciences and humanities." },
                  { title: "Policy Professional", desc: "Engaging in public policy, governance, and institutional decision-making." },
                  { title: "Social Enterprises / Development Sector", desc: "Working with NGOs, development organisations, and community-based initiatives." },
                  { title: "Media and Journalism", desc: "Exploring careers in media, storytelling, and public communication." }
                ].map((track, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-site">
                    <h4 className="font-bold text-gray-800">{track.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{track.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-12 bg-gray-900 mt-10">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Join Bolster Hybrid School</h2>
            <p className="text-site text-lg mb-8">Take the first step towards a transformative humanities education.</p>
            <div className="bg-gray-800 inline-block p-6 rounded-xl border border-site shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Bolster Hybrid School</h3>
              <p className="text-gray-300 flex items-center justify-center">
                <svg className="w-5 h-5 mr-2 text-site" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                Kottakkal, Kerala, India
              </p>
              <Link href="/Contact" >
                <div className="inline-block mt-4 bg-site text-black font-bold px-6 py-2 rounded-full hover:bg-white transition duration-300">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
