import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SharedLayout from './components/SharedLayout.js';

const main = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />}>
      <Route index element={<Home />} />

      {/* <Route path="author" element={<Author />} />
      <Route path="sign-up" element={<Register />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} /> */}
      
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
