const Banner = () => {
    return (
        <div>
            <div className="container mx-auto px-2 lg:px-5 py-5 lg:py-10 hero">
                <img className="w-full h-full rounded-2xl" src={`https://t3.ftcdn.net/jpg/06/23/21/74/360_F_623217422_HPcCM9gelg6Li4xN6Szf6TYdlTajypbT.jpg`} alt="" />
                <div className="hero-overlay bg-opacity-40 rounded-2xl"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="space-y-2 lg:space-y-5">
                        <h1 className="text-xl lg:text-6xl font-bold">Discover an exceptional cooking <br /> class tailored for you!</h1>
                        <p className="my-5 w-11/12 mx-auto text-xs lg:text-xl text-center">Join our vibrant cooking classes and have a blast learning alongside other food enthusiasts! Meet new people, share a delicious meal, and gain valuable kitchen skills.</p>
                        <div className=" flex justify-center gap-5">
                            <button className="bg-[#0BE58A] px-5 text-[#150B2B] font-semibold text-xs lg:text-xl py-1 lg:py-3 rounded-full hover:bg-[#0be58a9e]">Explore Now</button>
                            <button className="border-2 border-white px-5 py-3 rounded-full text-xs lg:text-xl hover:bg-gray-200 hover:text-black">Our Feedback</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;