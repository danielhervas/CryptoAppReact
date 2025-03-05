import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import { Outlet } from "react-router";


export default function Home() {
  return(
    <>
  <Header />
  <h1 className="text-2xl font-bold">Home</h1>
 
  </>
  )
}
