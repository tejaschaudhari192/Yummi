
import { useEffect, useState } from 'react';

const IMG_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';

function Items() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        if (items.length == 0) {
            getItems();
        }
    }, [items])

    async function getItems() {
        const uri = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
        const response = await fetch(uri);
        const json = await response.json();

        if (items.length == 0) {
            setItems(json.data.cards[0].card.card.imageGridCards.info);
            // console.log(items); 
        }
        // console.log('effect rendered');

    }
    return items.length > 1 ? (
        <div className='mt-24'>
            <h1 className='text-2xl'>
                What's in your mind ?
            </h1>
            <div className='items-array flex gap-[2.46%] my-[1%] overflow-x-scroll overflow-y-hidden '>

                {items.map((item, index) => {
                    return <img
                        className='hover:scale-125 transition-all ease duration-200'
                        key={index} width={144} height={180} src={IMG_URL + item.imageId}
                    />
                })}

            </div>
        </div>
    ) : (
        <div className='my-24 flex justify-center flex-col items-center bg-black h-[300px]'>
            <div className="lds-ripple">
                <div>
                </div>
                <div>
                </div>
            </div>
            <h1 className='items-loader-text'>Looking food near you...</h1>

        </div>
    )
}

export default Items;