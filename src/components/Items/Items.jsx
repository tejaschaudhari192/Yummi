import './items.css';

// import Pizza from './../../assets/images/Items/Pizza.png';
// import Burger from './../../assets/images/Items/Burger.png';
// import Chinese from './../../assets/images/Items/Chinese.png';
// import Dosa from './../../assets/images/Items/Dosa.avif';
// import Momos from './../../assets/images/Items/Momos.png';
// import Noodles from './../../assets/images/Items/Noodles.png';
// import Biryani from './../../assets/images/Items/Biryani.png';
import { useEffect, useState } from 'react';

const IMG_URL = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/';

// const itemsArray = [
//     Burger,
//     Chinese,
//     Noodles,
//     Momos,
//     Biryani,
//     Dosa,
//     Pizza,
// ];

var items;
// function Item(){

// }

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
        <div className='items'>
            <h1>
                What in your mind ?
            </h1>
            <div className='items-array'>

                {items.map((item, index) => {
                    return <img key={index} width={144} height={180} src={IMG_URL + item.imageId} />
                })}

            </div>
        </div>
    ) : (
        <div className='items-loader-bg'>
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