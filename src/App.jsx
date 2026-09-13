import Header from './components/Header'
import Hero from './components/Hero'
import Competences from './components/Competences'
import Projets from './components/Projets'
import Parcours from './components/Parcours'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-1">
        <Hero />
        <Competences />
        <Projets />
        <Parcours />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
