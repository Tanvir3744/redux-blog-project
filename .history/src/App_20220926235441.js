import './App.css';
import Blog from './component/Blog/Blog';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import SearchBar from './component/SearchBar/SearchBar';
function App() {
  return (
    <div className="App">
      {/* header component */}
      <Header></Header>

      

      {/* main blog page of this website */}
      <Blog></Blog>

      {/* footer section of this website */}
      <Footer />
    </div>
  );
}

export default App;
