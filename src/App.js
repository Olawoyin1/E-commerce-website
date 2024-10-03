import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SharedLayout from './components/SharedLayout.js';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';
import Contact from './Pages/Contact.jsx';


const main = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />

      {/* <Route path="author" element={<Author />} /> */}
      <Route path="contact" element={<Contact />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      
      {/* <Route path="posts" element={<BlogLayout />}>
        <Route
          index
          element={
            <Blog  />
          }
        />
        <Route path=":id" element={<SinglePost />} />
      </Route> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={main} />;
}

export default App;
