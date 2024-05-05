import { ShoppingItem, useItems } from "../items-hook/item-context"
import './index.css';

const Items: ShoppingItem[] = [
    {
        id: 1,
        name: "Broccoli",
        desc: "Broccoli is rich in vitamins K and C, a good source of folate (folic acid) and also provides potassium, fiber.",
        imageUrl: "/img/broccoli.png",
        price: 10,
    }, {
        id: 2,
        name: "Carrot",
        desc: "Carrots are a particularly good source of beta carotene, fiber, vitamin K1, potassium, and antioxidants.",
        imageUrl: "/img/carrot.png",
        price: 100,
    }, {
        id: 3,
        name: "Cucumber",
        desc: "Cucumbers are low in calories but high in many important vitamins and minerals, as well as high water content.",
        imageUrl: "/img/cucumber.png",
        price: 2
    },
    {
        id: 4,
        name: "Pumpkin",
        desc: "Pumpkins contain a wealth of nutrients including vitamin A, vitamin C, vitamin E, fiber, and potassium.",
        imageUrl: "/img/pumpkin.png",
        price: 2
    }, {
        id: 5,
        name: "Tomato",
        desc: "Tomatoes are the major dietary source of the antioxidant lycopene, which has been linked to many health benefits.",
        imageUrl: "/img/tomato.png",
        price: 20
    },
    {
        id: 6,
        name: "Spinach",
        desc: "Spinach is low in carbs but high in insoluble fiber. This type of fiber may benefit your digestion.",
        imageUrl: "/img/spinach.svg",
        price: 5
    },
    {
        id: 7,
        name: "Bell Pepper",
        desc: "Bell peppers are rich in many vitamins and antioxidants, especially vitamin C and various carotenoids.",
        imageUrl: "/img/bellpepper.png",
        price: 4
    },
    {
        id: 8,
        name: "Garlic",
        desc: "Garlic is highly nutritious but has very few calories. It is known to boost the function of the immune system.",
        imageUrl: "/img/garlic.png",
        price: 2
    },
    {
        id: 9,
        name: "Onion",
        desc: "Onions are low in calories yet high in nutrients, including vitamin C, B vitamins, and potassium.",
        imageUrl: "/img/onion.png",
        price: 1
    },
    {
        id: 10,
        name: "Mushroom",
        desc: "Mushrooms are rich in selenium, copper and all of the B vitamins, they also provide protein, vitamin C and iron.",
        imageUrl: "/img/mushroom.png",
        price: 8
    }
];


const Item = ({ item }: { item: ShoppingItem }) => {
    const { addItem, removeItem, items } = useItems();
    const count = items.filter((i) => i.id === item.id).length;

    return <div className="shopping-item">
        <img className="image" src={item.imageUrl} alt="" />
        <h3>{item.name} - ${item.price}</h3>
        <p>{item.desc}</p>

        <div className="item-buttons">
            <button className="button" onClick={() => {
                addItem(item)
            }}>Add</button>

            <p>{count}</p>

            <button className="button" onClick={() => {
                removeItem(item)
            }}>Remove</button>
        </div>
    </div>
}

export const ShopingList = () => {
    return <div className="shopping-list">
        {Items.map((item) => <Item item={item} />)}
    </div>
}