import OverviewCards from "~/components/home/OverviewCards";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import Image from "next/image";
const homePage = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center justify-between">
        <div className="inline-block bg-[linear-gradient(85.84deg,#071139_-6.26%,#142F9F_47.63%,#1FC274_96.28%)] bg-clip-text text-3xl font-semibold text-transparent">
          <h1>Good day, Lamia</h1>
          <h2>Let’s make smart decisions today!</h2>
        </div>
        <div>
          <FaUserCircle size={30} className="text-main" />
        </div>
      </div>
      <div className="text-md flex gap-x-2 font-semibold">
        <Link href={"/ai-advisor"}>
          <div className="flex cursor-pointer items-center justify-center gap-x-1 rounded-lg bg-[linear-gradient(85.84deg,#071139_-6.26%,#142F9F_47.63%,#1FC274_96.28%)] p-2 text-center text-white">
            <HiSparkles />
            <p>Ask for a plan</p>
          </div>
        </Link>
        {["Generate a report", "Track Expanses"].map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center justify-center gap-x-1 rounded-lg border bg-white p-2 text-center text-[#071139]"
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <OverviewCards />
      <div className="flex items-center gap-x-4 p-4">
        <div className="flex flex-col gap-y-3">
          <div className="flex justify-between">
            <div>
              <p>Spending This Week</p>
              <div className="inline-block bg-[linear-gradient(85.84deg,#071139_-6.26%,#142F9F_47.63%,#1FC274_96.28%)] bg-clip-text text-3xl font-semibold text-transparent">
                513,068.00DA
              </div>
            </div>
            <div>
              <Image
                src={"/HomeBR.png"}
                alt="spending"
                width={100}
                height={100}
              />
            </div>
          </div>
          <div className="h-[2px] w-1/3 rounded-lg bg-[#66666640]"></div>

          <div className="text-lg font-medium text-[#CD0606]">
            <p>Risks Detected</p>
            <p className="text-xl font-bold text-main">
              Expecting a <span className="text-[#CD0606]">2,670,400</span> loss
              within 18 days if we don’t change the expenses rate.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
