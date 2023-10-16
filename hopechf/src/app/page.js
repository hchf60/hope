import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

export default function Home() {
  return (
  <div class="h-screen flex flex-col">
  <Navigation/>
  <Header/>
  <div class="flex justify-start px-4 py-6 sm:px-6 lg:px-8">
  <main >
      Home
  </main>
  </div>
  <Footer/>
  </div>
  )
}
