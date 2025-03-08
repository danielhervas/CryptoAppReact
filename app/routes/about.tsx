import React from 'react';
import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import ContactPage from "app/components/contact/contactpage";

const Contacto = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <ContactPage />
      </div>
      <Footer />
    </>
  );
};

export default Contacto;