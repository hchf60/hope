import Navigation from '../components/Navigation/Navigation'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Body from '../components/Body/Body'

export default function Team() {
    return(
      <div class="h-screen flex flex-col">
        <Navigation/>
        <Header/>
          <Body content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lacinia non urna at rhoncus. Vestibulum tempus dui eu tincidunt fringilla. Pellentesque hendrerit orci massa, quis maximus orci pretium sit amet. Phasellus vel blandit quam. Praesent varius sodales facilisis. Ut sagittis pellentesque velit sit amet varius. Curabitur nisl augue, aliquam at dapibus sed, convallis a nisl. Mauris varius interdum arcu, at euismod nibh feugiat in. In in risus in ante euismod tristique. Quisque nec dictum ante, vel rutrum nulla. Integer id justo at tortor consectetur vehicula sed at lacus. Donec non arcu in risus bibendum facilisis euismod sed libero. Curabitur sodales porta lacus vitae varius."/>
       <Footer/>
       </div>
    )
  }