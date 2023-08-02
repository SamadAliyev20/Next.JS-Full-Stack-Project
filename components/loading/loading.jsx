import { Skeleton } from "@mui/material";
export default function Loading() {
  return (
    <div className="flex-1 mt-4 ">
      {[...new Array(5)].map((index) => (
        <div
          key={index}
          className="flex justify-between items-center   "
        >
          <Skeleton
            width={300}
            height={100}
            variant="text"
            className="dark:bg-gray-600"
          />
          <Skeleton
            width={200}
            height={20}
            variant="rectangular"
            className="dark:bg-gray-600"
          />
        </div>
      ))}
    </div>
  );
}
