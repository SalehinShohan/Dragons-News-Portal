import Header from "../components/Header";
import Latests from "../components/Latests";
import LeftNavbar from "../components/layouts-components/LeftNavbar";
import RightNavbar from "../components/layouts-components/RightNavbar";
import Navbar from "../components/Navbar";

const HomeLayouts = () => {
    return (
        <div className="font-poppins">
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <Latests></Latests>
                </section>
            </header>
            <nav className="w-11/12 mx-auto py-2">
                <Navbar></Navbar>
            </nav>
            <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 gap-3">
                <aside className="left col-span-3">
                    <LeftNavbar></LeftNavbar>
                </aside>
                <section className="col-span-6">Main Content</section>
                <aside className="col-span-3">
                    <RightNavbar></RightNavbar>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;