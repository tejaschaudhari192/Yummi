import ExpandableText from "./Expandable";

const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"


const DishCard = ({ data }) => {

  const { name, price, defaultPrice, offerTags, imageId, description } = data.card.info;
  return (
    <div className="bg-white border-b-2 p-4  max-w-2xl mx-auto flex items-start">
      <div className="flex-grow">
        <div className="flex items-center mb-2">
          <span className="inline-block w-4 h-4 border border-green-500 rounded-full mr-2"></span>
          <h2 className="text-lg font-bold">{name}</h2>
        </div>
        <div className="flex items-center text-gray-700 mb-2">
          <span className="text-xl font-semibold">₹{JSON.stringify(price || defaultPrice).slice(0, -2)}</span>

          {offerTags &&
            <>
              <span className="ml-2 text-green-600">{offerTags[0].title}</span>
              <span className="ml-2 text-gray-500">{offerTags[0].subTitle}</span>
            </>

          }
        </div>
        <p className="text-gray-700 mb-4">
          <ExpandableText text={description} />
        </p>
      </div>

      <div className="flex flex-col items-center relative">
        <div
          style={{
            backgroundImage: `url(${IMG_URL + imageId})`
          }}
          className="w-36 h-36  rounded-lg mb-2 bg-cover"
        >
        </div>

        <button className="bg-white text-green-600 border-[1px] min-w-24 shadow-md px-4 py-2 rounded-lg font-semibold absolute -bottom-2">
          ADD
        </button>
      </div>
    </div >
  );
};

export default DishCard;
