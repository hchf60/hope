import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Body from '../components/Body/Body'

export default function Reports() {
    return(
      <div class="h-screen flex flex-col">
        <Navigation/>
        <Header/>
          <Body content="Maecenas porta, turpis vel rhoncus sollicitudin, tortor neque venenatis velit, nec sollicitudin justo nisi ac nulla. Vivamus sagittis pharetra neque vitae accumsan. In hac habitasse platea dictumst. Integer auctor neque sed sodales maximus. Pellentesque metus odio, laoreet quis vestibulum varius, finibus vel augue. Vivamus vulputate libero ut mi hendrerit placerat. Praesent lacinia, purus sit amet blandit sodales, velit odio mattis neque, ut fringilla eros massa vel lorem. Mauris consectetur condimentum arcu vitae sodales. Donec at sem sed risus commodo pulvinar. Sed vitae erat quis turpis lobortis cursus non at arcu. Duis condimentum ante eu nisl bibendum volutpat. Etiam id orci libero. Praesent vulputate leo leo, at aliquet purus feugiat ac."/>
       <Footer/>
       </div>
    )
  }