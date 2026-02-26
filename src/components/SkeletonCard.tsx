const SkeletonCard = ({
  headline,
  show,
  room,
}: {
  headline: string;
  show: boolean;
  room: string;
}) => {
  return (
    <div>
      {" "}
      <div className="container-section">
        <h5 className="headline animate-pulse rounded-md shrink-0  ">
          {headline}
        </h5>

        {/* Top skeleton row */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto pt-1 px-1 scrollbar-hide">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className={`bg-gray-300 animate-pulse rounded-md shrink-0 ${room}`}
            />
          ))}
        </div>

        {/* More skeleton row */}
        {show && (
          <div className="flex gap-4 md:gap-6 overflow-x-auto pt-4 px-1 scrollbar-hide">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className={`bg-gray-300 animate-pulse rounded-md shrink-0 ${room}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkeletonCard;
