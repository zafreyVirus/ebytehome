// import About from "./components/About/page";
// import Contact from "./components/contact/page";
// import Services from "./components/Services/Services";
import About from "./About/page";
import Contact from "./Contact/page";
import Services from "./Services/page";

export default function Home() {
  return (
    <div>
      <div
        className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('/images/background2.jpg')",
        }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Towards a Digital Future</h1>
        <p className="text-lg md:text-2xl text-center">
          eByte - Changing a dream to reality with cutting-edge technologies.
        </p>
      </div>

      {/* Services Section */}
      <Services/>
      <Contact/>
      <About/>
    </div>
  );
}
