import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Home from './Home';
import NoRoute404 from './components/NoRoute404';
import Settings from './components/Settings';
import CreateBlog from './components/CreateBlog';
import BlogList from './components/BlogList';
import MyBlogs from './components/MyBlogs';
import ReadBlog from './components/ReadBlog';
import Feed from './components/Feed';
import RegisteredSuccess from './components/RegisteredSuccess';

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path='/read/:blog_id' element={<ReadBlog />} />
          <Route path="/registered" element={<RegisteredSuccess />} />
          <Route path="/feed" element={<Feed />} />
          {/* BlogList */}
          <Route path='*' exact={true} element={<NoRoute404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
