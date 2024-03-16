import Card from "../Card/Card";

const Cards = ({ cards, handleSideBar, notify }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10">
            {
                cards.map((card, idx) => <Card
                    key={idx}
                    card={card}
                    handleSideBar={handleSideBar}
                    notify={notify}
                ></Card>)
            }
        </div>
    );
};

export default Cards;