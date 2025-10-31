import Header from './components/Header';
import Greeting from './components/Greeting';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b10] text-white">
      <Header />
      <main>
        <Greeting />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
