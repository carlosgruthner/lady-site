import Footer from "./layout/components/Footer";
import Main from "./layout/components/Main";
import Navbar from "./layout/components/Navbar";
import Produtos from "./layout/components/Produtos";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Main />
      <Produtos />
      <Footer />
    </div>
  );
}
