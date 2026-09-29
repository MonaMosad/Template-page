export default function ImageGrid({ images }) {
  return (
    <div className="grid grid-cols-4 gap-8 mt-8">
      {images.map((src, i) => (
        <div
          key={i}
          className="aspect-square rounded-2xl bg-gray-100 justify-center items-center flex overflow-hidden"
        >
          <img
            src={src}
            alt=""
            className="w-[84px] h-[150px] object-cover"
          />
        </div>
      ))}
    </div>
  );
}