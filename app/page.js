import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import HeaderSection from './components/HeaderSection';
import Footer from './components/Footer';



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-amber-50">
      <Navbar />
      <HeaderSection />
      <div className='container mt-28 mx-auto px-12 py-4'>
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
}
