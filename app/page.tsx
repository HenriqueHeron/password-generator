import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0f0f13]">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
