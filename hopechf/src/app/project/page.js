import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Body from '../components/Body/Body'

export default function Project() {
    return(
      <div class="h-screen flex flex-col">
        <Navigation/>
        <Header/>
        <Body 
        content="Praesent nec sapien tempor, cursus metus nec, laoreet nisi.
         Aliquam sit amet sagittis nibh, vitae vestibulum arcu. Nullam non euismod arcu. Sed molestie leo enim, eget commodo mauris 
         consequat et. Pellentesque dapibus efficitur pretium. Maecenas ut 
        neque vel felis ornare laoreet. Nam commodo justo sed dui semper convallis. In non sapien 
        porta, placerat erat vel, bibendum nisi." />
       <Footer/>
       </div>
    )
  }