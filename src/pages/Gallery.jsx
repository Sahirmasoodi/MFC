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
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">

      <h2 className="text-4xl font-heading font-bold text-center mb-8">
        Gallery
      </h2>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">

        {photoList.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={img}
              className="w-full rounded-lg hover:scale-105 transition duration-300"
              alt={`gallery-${index}`}
            />
          </div>
        ))}

      </div>
    </div>
  );
};

export default Gallery;
