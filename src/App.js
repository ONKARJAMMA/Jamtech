import Pagination from './components/Pagination';
import Search from './components/Search';
import Stories from './components/Stories';
import Footer from './components/Footer';
import "./App.css";
const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
      <Footer/>
    </>
  );
};

export default App;
