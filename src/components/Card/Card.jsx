import { IoMdTime } from "react-icons/io";
import { FaFire } from "react-icons/fa";
const Card = ({card, handleSideBar}) => {
    // console.log(card);
    const {recipe_image, recipe_name, preparing_time, short_description, calories, ingredients} = card;
    return (
        <div className="card w-full lg:w-96 bg-base-100 shadow-xl border">
            <figure className="px-10 pt-10">
                <img src={recipe_image} alt={`The picture of ${recipe_name}`} className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="text-xl font-bold">{recipe_name}</h2>
                <p className="text-sm w-11/12 border-b pb-5">{short_description}</p>
                <h3 className="text-lg font-bold">Ingredients: {ingredients.length}</h3>
                <div className="text-sm py-5 pl-3 space-y-2 border-b">
                    {
                        ingredients.map((element, idx) => <li key={idx}>{element}</li>)
                    }
                    {/* <li>500g ground beef</li>
                    <li>500g ground beef</li>
                    <li>500g ground beef</li> */}
                </div>
                <div className="flex items-center justify-between my-2">
                    <div className="flex items-center gap-2">
                        <IoMdTime className="text-lg" />
                        <p>{preparing_time} minute</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaFire />
                        <p>{calories} calories</p>
                    </div>
                </div>
                <button onClick={() => handleSideBar(card)} className="w-2/4 py-2 px-3 rounded-full bg-[#0BE58A] font-semibold text-black hover:bg-[#0be58a9c]">Want to Cook</button>
            </div>
        </div>
    );
};

export default Card;