import moment from "moment";
import logo from "../assets/logo.png"
const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-3 py-3">
            <div className="logo">
                <img className="w-[300px]" src={logo} alt="Logo is coming soon" />
            </div>
            <h2 className="text-gray-400"> <b>Journalism Without Fear or Favour</b></h2>
            <p>{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
    );
};

export default Header;