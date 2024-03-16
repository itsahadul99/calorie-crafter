const CurrentlyCooking = ({ sideProduct }) => {
    console.log(sideProduct);
    return (
        <div>
            <h1 className="text-2xl font-bold py-5  text-center  ">Currently Cooking: {sideProduct.length}</h1>
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
                    {
                        sideProduct.map((item, idx) => {
                            return (
                                <tbody key={idx}>
                                    <tr>
                                        <td>{idx + 1}</td>
                                        <td>{item.recipe_name}</td>
                                        <td>{item.preparing_time} minute</td>
                                        <td>{item.calories} calories</td>
                                    </tr>
                                </tbody>

                            )
                        })
                    }
                </table>
            </div>
        </div>
    );
};

export default CurrentlyCooking;