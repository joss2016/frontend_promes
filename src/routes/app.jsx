import DashboardPage from "views/Dashboard/Dashboard.jsx";
import LoginPage from "views/Login/Login.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import TableList from "views/TableList/TableList.jsx";
import Typography from "views/Typography/Typography.jsx";
import Icons from "views/Icons/Icons.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";

import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  VerifiedUser
} from "material-ui-icons";

const appRoutes = [
    {
    path: "/login",//crear ruta
    sidebarName: "Login", //nombre del menú
    navbarName: "Login",
    icon: VerifiedUser,
    component: LoginPage
  },
  {
    path: "/dashboard",
    sidebarName: "Panel", //nombre del menú
    navbarName: "Panel de control",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "Pacientes",
    navbarName: "Pacientes",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Derivación",
    navbarName: "Derivación",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Pago",
    navbarName: "Pago",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Inventario",
    navbarName: "Inventario",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Informes",
    navbarName: "Informes",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notificaciones",
    navbarName: "Notificaciones",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default appRoutes;
