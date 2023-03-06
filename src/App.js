import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Parent from './Components/Parent';
import AllinOnePage from './Components/AllinOnePage';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import SearchPage from './Components/SearchPage/SearchPage';
function App() {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Parent />,
      children:[
        {path:'page/:pageTitle',element: <AllinOnePage/>},
        {path:'/',element:<AllinOnePage />},
        {path:'video/:videoID',element: <VideoPlayer/>},
        {path:'searchPage/:searchQuery',element: <SearchPage />},
      ]
    },
    
   

  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
