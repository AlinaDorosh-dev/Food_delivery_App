type Props = {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
};

export default function UserDrawer({ selectedTab, setSelectedTab }: Props) {
  return (
    <div
      className={
        " flex flex-row sm:flex-col items-center justify-evenly mt-14 sm:fixed sm:left-0 sm:top-0 sm:justify-start  text-slate-600  sm:py-4 text-base sm:text-lg font-semibold sm:h-screen w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-white shadow-md "
      }
    >
      <h2
        className={
          selectedTab === 0
            ? "bg-orange-400 sm:mt-24 md:mt-28 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-white"
            : "sm:mt-24 md:mt-28 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-orange-400"
        }
        onClick={() => setSelectedTab(0)}
      >
        Personal info
      </h2>
      <h2
        className={
          selectedTab === 1
            ? "bg-orange-400  sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-white"
            : " sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-orange-400"
        }
        onClick={() => setSelectedTab(1)}
      >
        My orders
      </h2>
      <h2
        className={
          selectedTab === 2
            ? "bg-orange-400  sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-white"
            : " sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-orange-400"
        }
        onClick={() => setSelectedTab(2)}
      >
        Logout
      </h2>
    </div>
  );
}
