import Header from "app/components/ui/Header/Header";
import Footer from "app/components/ui/Footer/Footer";
import NewsCard from "~/components/News/NewsCard";
const Noticias = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4 pt-10 pb-10 text-white">Noticias destacadas</h2>
      <NewsCard /> {}
    </div>
  );
};

export default Noticias;