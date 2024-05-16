import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import Room from "./components/addpost/Room";
import RoomPage from "./components/listroom/room/roomPage";

const AppRoutes = [
  {
    path: '/',
    element: <Home />
  },
  {
    index: true,
    path: '/home',
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/detail/:id',
    element: <RoomPage/>
  },
  {
    path: '/addRoom',
    element: <Room/>
  }
];

export default AppRoutes;
