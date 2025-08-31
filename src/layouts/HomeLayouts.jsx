import Header from "../components/Header";
import Latests from "../components/Latests";

const HomeLayouts = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto">
                    <Latests></Latests>
                </section>
            </header>
            <nav></nav>
            <main></main>
        </div>
    );
};

export default HomeLayouts;