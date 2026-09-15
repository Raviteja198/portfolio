import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RecruiterSnapshot from '../components/RecruiterSnapshot';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import SecurityCaseStudy from '../components/SecurityCaseStudy';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 py-10">
        <Hero />
        <RecruiterSnapshot />
        <About />
        <Skills />
        <Projects />
        <SecurityCaseStudy />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
