import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import Profile from "./components/account/Profile";
import Room from "./components/addpost/Room";
import Messenger from "./components/guest/Mesenger";
import DashboardTabs from "./components/host/Dashboard";
import Listing from "./components/host/Listing";
import RoomPage from "./components/listroom/room/roomPage";
import TripDetail from "./components/trips/TripDetail";
import Trips from "./components/trips/Trips";

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
  },
  {
    path: '/guest/inbox',
    element: <Messenger/>
  },
  {
    path: '/profile',
    element: <Profile/>
  },
  {
    path: '/trips',
    element: <Trips/>
  },
  {
    path: '/trips/detail',
    element: <TripDetail/>
  },
  {
    path: '/host',
    element: <DashboardTabs/>
  },
  {
    path: '/host/listing',
    element: <Listing/>
  }
];

export default AppRoutes;
