interface ICardChannelDemo {
  src: string;
  alt: string;
}

function CardChannelDemo({ alt, src }: ICardChannelDemo) {
  return (
    <div className="w-32 bg-white h-32 rounded-xl">
      <div className=" flex w-full h-full bg-gradient-to-t from-gray-500 to-transparent rounded-xl">
        <img
          src={src}
          alt={alt}
          className="rounded-xl w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export default CardChannelDemo;
