import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-amber-50">
      <div className='container mx-auto px-12 py-4'>
        <HeroSection />
      </div>
    </main>
  );
}
