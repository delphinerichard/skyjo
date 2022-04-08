import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem';

function ShoppingList(){
    const list = [];
    plantList.forEach(({id, cover, name, water, light, isSpecialOffer, isBestSale}) => {
        list.push(<PlantItem 
            key = {id}
            id={id}
            cover={cover}
            name = {name}
            water = {water}
            light = {light}
            isSpecialOffer = {isSpecialOffer}
            isBestSale = {isBestSale}
            />);
    });
    return(<div><ul className='lmj-plant-list'>{list}</ul></div>)
    
}

export default ShoppingList

