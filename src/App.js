import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { appBrowserRouter } from './router';

function App() {
  return (
    <RouterProvider router={appBrowserRouter}>

    </RouterProvider>
  );
}

export default App;
