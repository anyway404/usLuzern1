import "../App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CategoryCards from "../components/CategoryCards";
import RecentReviews from "../components/RecentReviews";
import SplitFrontpage from "../components/SplitFrontpage";

function App() {
  return (
    <div>
      <Header />
      <SplitFrontpage />
      <CategoryCards />
      <RecentReviews />
      <Footer />
    </div>
  );
}

export default App;
