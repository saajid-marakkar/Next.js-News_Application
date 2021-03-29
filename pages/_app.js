import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Toolbar from "../components/toolbar"
import Footer from "../components/footer"
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Toolbar />
    <Component {...pageProps} />
    <Footer />
    </>
    );
}

export default MyApp
