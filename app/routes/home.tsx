import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import { Outlet } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  <>
  <Header />
  <Outlet />
  <Footer />
  </>
}
