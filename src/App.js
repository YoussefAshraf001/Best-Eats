import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCards from './components/HeadlineCards';
import Food from './components/Food';
// import LineBreak from './components/LineBreak';
import Category from './components/Category';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      {/* <LineBreak /> */}
      <Food />
      <Category />
    </div>
  );
}
