/**
 * @fileoverview user drawer component to display user's drawer with tabs to user's profile, orders and logout.
 *  */
type Props = {
  selectedTab: number;
  setSelectedTab: React.Dispatch<React.SetStateAction<number>>;
  setConfirmLogout: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function UserDrawer({
  selectedTab,
  setSelectedTab,
  setConfirmLogout,
}: Props) {
  return (
    <div
      className={
        " flex flex-row sm:flex-col items-center justify-evenly   sm:fixed sm:left-0 sm:top-0 sm:justify-start  text-slate-600  sm:py-4 text-base sm:text-lg font-semibold sm:h-screen w-full sm:w-1/3 md:w-1/4 lg:w-1/5 bg-white shadow-md "
      }
    >
      <h2
        className={
          selectedTab === 0
            ? "bg-orange-400 mt-[55px] sm:mt-20 md:mt-24 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-white"
            : "mt-[55px] sm:mt-20 md:mt-24 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-orange-400"
        }
        onClick={() => setSelectedTab(0)}
      >
        Personal info
      </h2>
      <h2
        className={
          selectedTab === 1
            ? "bg-orange-400 mt-[55px] sm:mt-0 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-white"
            : " mt-[55px] sm:mt-0 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-orange-400"
        }
        onClick={() => setSelectedTab(1)}
      >
        My orders
      </h2>
      <h2
        className={
          selectedTab === 2
            ? "bg-orange-400 mt-[55px] sm:mt-0 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-white"
            : " mt-[55px] sm:mt-0 sm:mb-8 w-full text-center py-4 cursor-pointer hover:text-orange-400"
        }
        onClick={() => setConfirmLogout(true)}
      >
        Logout
      </h2>
    </div>
  );
}
