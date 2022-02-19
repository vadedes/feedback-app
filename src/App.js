import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
   return (
      <>
         <Header text='Navbar goes here' />
         <Content />
         <Footer text='Footer goes here' />
      </>
   );
}

export default App;
