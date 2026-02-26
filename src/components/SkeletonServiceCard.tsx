const SkeletonServiceCard = () => {
  return (
    <div className=" flex flex-col h-40 gap-2 animate-pulse rounded-b-sm">
      <div className="bg-orange-400 h-20 w-full rounded-md"></div>
      <div className="flex gap-2">
        <div className=" bg-orange-400 h-20 w-full rounded-md"></div>
        <div className="bg-orange-400 h-20 w-full rounded-md"></div>
      </div>
    </div>
  );
};

export default SkeletonServiceCard;
