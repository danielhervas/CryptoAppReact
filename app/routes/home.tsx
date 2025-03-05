import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import { Outlet } from "react-router";


export default function Home() {
  return(
    <>
  <Header />
  <Outlet />
 
  </>
  )
}
