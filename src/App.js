import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import { productsAndCartLoader } from './loaders/productsAndCartLoader';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import PrivateRoutes from './Router/PrivateRoutes';



function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main></Main>,
      children:[
        {path:'/',
        loader:()=> fetch(`products.json`),
        element:<Shop></Shop>
      },
      {
        path:'orders',
        loader: productsAndCartLoader,
        element:<Orders></Orders>
      },
      {
        path:'inventory',
        element:<Inventory></Inventory>
      },
      {
        path:'shipping',
        element:<PrivateRoutes><Shipping></Shipping></PrivateRoutes>
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'signUp',
        element:<SignUp></SignUp>
      }
      ]
    }
  ])
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
