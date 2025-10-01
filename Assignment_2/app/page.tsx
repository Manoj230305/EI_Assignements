import Banner from './components/Banner/index';
import Aboutus from './components/Aboutus/index';
import Digital from './components/Digital/index';
import Testimonials from './components/Testimonials/index';
import Joinus from './components/Joinus/index';


export default function Home() {
  return (
    <main>
      <Banner />
      <Joinus />
      <Aboutus />
      <Digital />
      <Testimonials />
    </main>
  )
}
