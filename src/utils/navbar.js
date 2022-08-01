import Generic from "../pages/Generic";
import Home from "../components/Home";
import Proporties from "../components/Proporties";
export const navbar = [
  { id: 1, element: <Home />, title: "Home", path: "/home", hidden: false },
  {
    id: 2,
    element: <Proporties/>,
    title: "Properties",
    path: "/properties",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    element: <Generic />,
    title: "Contacts",
    path: "/contacts",
    hidden: false,
  },
  {
    id: 4,
    element: <Generic />,
    title: "Singin",
    path: "/singin",
    hidden: true,
  },
  {
    id: 5,
    element: <Generic />,
    title: "Sing Up",
    path: "/singup",
    hidden: true,
  },
];
