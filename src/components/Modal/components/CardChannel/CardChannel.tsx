interface ICardChannel {
  numberChannel: string;
  channelImageUrl: string;
  altImage: string;
  index?: number;
}

const CardChannel = ({
  channelImageUrl,
  numberChannel,
  altImage,
}: ICardChannel) => {
  return (
    <div className="w-full min-h-24 bg-gray-900 relative flex flex-row">
      <p className="text-white absolute top-1 right-2 text-xs sm:text-xl">
        {numberChannel}
      </p>
      <img
        src={channelImageUrl}
        alt={altImage}
        className="w-full h-full object-contain"
      />
    </div>
  );
};

export default CardChannel;
