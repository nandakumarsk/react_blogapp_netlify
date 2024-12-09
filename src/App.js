import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import About from './About';
import Missing from './Missing';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <Header title="React blog app" />
      <DataProvider>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        </Router>
      </DataProvider> 
      <Footer />
    </div>
  );
}

export default App;
