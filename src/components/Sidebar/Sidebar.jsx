import { useState } from "react";
import CurrentlyCooking from "../CurrentlyCooking/CurrentlyCooking";
const Sidebar = ({ product, handleDelete }) => {
    const [sideProduct, setSideProduct] = useState([]);
    const handlePreparing = (item) => {
        setSideProduct([...sideProduct, item]);
    }
    return (
        <div className="flex-1 border rounded-lg w-full">
            <h1 className="text-2xl font-bold py-5  text-center  ">Want to Cook table: {product.length} </h1>
            <hr className="w-3/5 mx-auto" />
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="*:text-sm">
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            product.map((item, idx) => {
                                return (
                                    <tr key={idx}>
                                        <th>{idx + 1}</th>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time} <br /> minute</td>
                                        <td>{item.calories} <br /> calories</td>
                                        <td><button onClick={() => { handlePreparing(item); handleDelete(item.recipe_id) }} className="mt-3 py-2 px-2 rounded-full bg-[#0BE58A] font-semibold text-black hover:bg-[#0be58a9c]">Preparing</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <CurrentlyCooking
                sideProduct={sideProduct}
            />
        </div>
    );
};

export default Sidebar;