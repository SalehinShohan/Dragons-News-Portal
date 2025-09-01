import Marquee from "react-fast-marquee";
import { Link } from "react-router";


const Latests = () => {
    return (
        <div className="flex gap-2 items-center bg-base-200 p-2">
            <p className="bg-red-600 px-3 py-1">Latest</p>
            <Marquee pauseOnHover={true} speed={100} className="space-x-10">
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis minima, adipisci aut nihil dolor?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis minima, adipisci aut nihil dolor?</Link>
                <Link to="/news">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corporis minima, adipisci aut nihil dolor?</Link>
            </Marquee>
        </div>
    );
};

export default Latests;