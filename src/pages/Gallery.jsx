import { images } from "../assets/assests";

const Gallery = () => {
  const photoList = [
    images.img1,
    images.img2,
    images.img7,
    images.img3,
    images.img4,
    images.img5,
    images.img6,
    images.img8,
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 md:p-12">

      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Gallery
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">

        {photoList.map((img, index) => (
          <div
            key={index}
            className="group relative break-inside-avoid overflow-hidden 
              rounded-2xl shadow-xl transition-all duration-500 
              hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full object-cover rounded-2xl 
                transition-transform duration-700 
                group-hover:scale-110 brightness-90 group-hover:brightness-100"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Subtle Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-white/5 rounded-2xl"></div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;
