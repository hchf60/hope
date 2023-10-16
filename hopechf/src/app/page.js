import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Body from './components/Body/Body'

export default function Home() {
  return (
  <div class="h-screen flex flex-col">
    <Navigation/>
    <Header/>
      <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin odio est, interdum ut viverra ut, facilisis nec nulla. Fusce id leo magna. Aliquam hendrerit tincidunt sem non auctor. Ut augue mauris, hendrerit ac libero commodo, dictum egestas odio. Donec finibus justo nec velit imperdiet malesuada. In maximus sit amet neque ut volutpat. Duis vehicula urna in dolor malesuada, auctor malesuada dolor ornare. Cras bibendum ipsum sed interdum iaculis. Nullam a lacinia lectus. Integer dictum erat ex, eu facilisis nibh vehicula imperdiet. Donec in aliquam metus. Phasellus et gravida dui."/>
    <Footer/>
  </div>
  )
}
