import '../styles/PlantItem.css'
import CareScale from './CareScale';


function handleClick(plantName) {
    console.log('✨ Ceci est un clic ✨')
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}

export default function PlantItem({name, cover, id, light, water, isBestSale, isSpecialOffer}){

    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            { name }
            { isBestSale && <span>🔥</span> }
            { isSpecialOffer && <div className='lmj-sales'>Soldes</div>} 
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    );

}