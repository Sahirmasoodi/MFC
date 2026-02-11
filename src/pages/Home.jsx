import { images } from "../assets/assests";

const Home = () => {
  return (
    <div>
      {/* HERO TEXT */}
      {/* <div className="py-10 flex flex-col items-center justify-center text-center bg-gray-100">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to Mustafaabad Football Club
        </h1>
        <p className="text-lg text-gray-700">
          Passion • Teamwork • Victory
        </p>
      </div> */}

      {/* RESPONSIVE HERO IMAGE */}

      <div className="w-full">
        {/* Desktop Image */}
        <img
          src={images.desktopHome}
          className="hidden md:block w-full object-contain"
          alt="MFC Desktop Hero"
        />

        {/* Mobile Image */}
        <img
          src={images.mobileHome}
          className="block md:hidden w-full h-full object-contain"
          alt="MFC Mobile Hero"
        />
      </div>

      {/* Optional Section */}
    </div>
  );
};

export default Home;
