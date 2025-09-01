import { BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";


const FindUs = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Find Us On.</h2>
            <div className="flex join-vertical *:bg-base-100">
                <button className="btn join-item justify-start">
                    <FaFacebook></FaFacebook>Facebook
                </button>
                <button className="btn join- justify-start">
                    <BsTwitter></BsTwitter>Twiter
                </button>
                <button className="btn join-item justify-start">
                    <ImInstagram></ImInstagram>Instragram
                </button>
            </div>
        </div>
    );
};

export default FindUs;