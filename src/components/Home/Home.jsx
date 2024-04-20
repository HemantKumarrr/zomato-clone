import Navbar from "./Navbar/Navbar"
import OrderMode from "./OrderMode/OrderMode"
import Collections from "./Collections/Collections"
import Places from "./Places/Places"
import Explore from "./Explore/Explore"
import Footer from '../Footer/Footer'


const Home = () => {
  return (
    <>
      <Navbar />
      <div className="px-[0.8rem] sm:px-[8rem]">
        <OrderMode />
        <Collections />
        <Places />
        <Explore />
      </div>
      <Footer />
    </>
  )
}

export default Home
