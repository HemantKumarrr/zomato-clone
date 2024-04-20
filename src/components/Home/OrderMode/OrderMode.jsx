import Card from "./Card";

const OrderModeData = [
  {
    modeTitle: "Order Online",
    modeDesc: "Stay home and order to your doorstep",
    modeImage:
      "https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around|402:360&crop=402:360",
  },
  {
    modeTitle: "Dining",
    modeDesc: "view the city's favourite dining venues",
    modeImage:
      "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg",
  },
  {
    modeTitle: "Nightlife and Clubs",
    modeDesc: "Explore the city's top nightlife outlets",
    modeImage:
      "https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg",
  },
];

const OrderMode = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center py-10">
        {OrderModeData.map((item, index) => {
          return (
            <Card
              key={index}
              modeTitle={item.modeTitle}
              modeDesc={item.modeDesc}
              modeImage={item.modeImage}
            />
          );
        })}
      </div>
    </>
  );
};

export default OrderMode;
