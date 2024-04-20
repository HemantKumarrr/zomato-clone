import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom"

const cardData = [
  {
    title: "Top Trending Spots",
    places: 17
  },
  {
    title: "Best of live screenings",
    places: 38
  },
  {
    title: "New in Town",
    places: 18
  },
  {
    title: "Dine For the Gram",
    places: 23
  }
]

const Collections = () => {
  return (
    <>
      <div className="w-full pt-[3rem]">
        <div className="pb-[1.8rem]"> 
            <h1 className="text-4xl" >Collections</h1>
            <div className="flex justify-between pt-3 pb-5">
                <p className="text-xl text-gray-700 font-normal" >Explore curated lists of top restaurat, cafe, pubs, and bars in Delhi NCR, based on trends</p>
                <Link to='all-collections' className="flex items-center justify-center text-[1.2rem] text-red-400 gap-1" >
                    All collections in Delhi NCR
                    <IoMdArrowDropright className="text-2xl" />
                </Link>
            </div>
        </div>
        <div className="w-full flex justify-between items-center gap-10 h-[20rem] mb-10 ">
          {
            cardData.map((item, index)=> {
              return (
                <div key={index} className="text-white w-full h-full bg-[url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')] bg-cover bg-center cursor-pointer rounded-lg flex flex-col justify-end px-6 py-4">
                  <h1 className="text-xl" >{item.title}</h1>
                  <div className="flex items-center">
                    <p>{item.places} plcaes</p>
                    <IoMdArrowDropright className="text-2xl" />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Collections
