import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
const About = () => {
 
    return (
      <>
        <Header />
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">About</h1>
          <p className="text-lg">This is the about page</p>
        </div>
        <Footer />
      </>
    )
  };
  
  export default About;