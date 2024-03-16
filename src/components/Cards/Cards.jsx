// import { useEffect } from "react";

import Card from "../Card/Card";

const Cards = ({cards}) => {
    // console.log(cards);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            {
                cards.map(card => <Card
                    card = {card}
                ></Card>)
            }
            {/* <Card />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/> */}
        </div>
    );
};

export default Cards;