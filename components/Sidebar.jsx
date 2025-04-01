import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { useClerk, UserButton } from "@clerk/nextjs"; // Ensure this import exists

const Sidebar = ({ expand, setExpand }) => {

  const {openSignIn} = useClerk()

  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
        expand ? "p-4 w-64" : "md:w-20 w-0 max-md:overflow-hidden"
      }`}
    >
      <div>
        <div
          className={`flex ${
            expand ? "flex-row gap-10" : "flex-col items-center gap-8"
          }`}
        >
          <Image
            className={expand ? "w-36" : "w-10"}
            alt=""
            src={expand ? assets.logo_text : assets.logo_icon}
          />
          <div
            onClick={() => setExpand(!expand)}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
          >
            <Image alt="" src={assets.menu_icon} className="md:hidden" />
            <Image
              alt=""
              src={expand ? assets.sidebar_close_icon : assets.sidebar_icon}
              className="hidden md:block w-7"
            />
            <div
              className={`absolute w-max ${
                expand ? "left-1/2 -translate-x-1/2 top-12" : "-top-12 left-0"
              } opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? "Close Sidebar" : "Open Sidebar"}
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${
                  expand
                    ? "left-1/2 -top-1.5 translate-x-1/2"
                    : "left-4 -bottom-1.5"
                }`}
              ></div>
            </div>
          </div>
        </div>

        <button
          className={`mt-8 flex items-center justify-center cursor-pointer ${
            expand
              ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
              : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            className={expand ? "w-6" : "w-7"}
            src={expand ? assets.chat_icon : assets.chat_icon_dull}
            alt=""
          />
          <div className="absolute w-max -top-12 -right-12 opacity-0 group-hover:opacity-100 bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
            New Chat
            <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
          </div>
          {expand && <p className="text-white text font-medium">New Chat</p>}
        </button>

        {expand && (
          <div className="mt-8 text-white/25 text-sm">
            <p className="my-1">Recents</p>
          </div>
        )}
      </div>

      <div>
        <div
          className={`flex items-center cursor-pointer group relative ${
            expand
              ? "gap-1 text-white-80 text-sm p-2.5 border border-primary rounded-lg hover:bg-white/10 cursor-pointer"
              : "h-10 w-10 mx-auto hover:bg-gray-500/30 rounded-lg"
          }`}
        >
          <Image
            src={expand ? assets.phone_icon : assets.phone_icon_dull}
            alt=""
            className={expand ? "w-5" : "w-6.5 mx-auto"}
          />
          <div
            className={`absolute -top-60 pb-8 ${
              expand && "-right-40"
            } opacity-0 group-hover:opacity-100 hidden group-hover:block transition`}
          >
            <div className="relative w-max bg-black text-white text-sm p-3 rounded-lg shadow-lg">
              <Image src={assets.qrcode} alt="" className="w-44" />
              <p>Scan to get DeepSeek App</p>
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${
                  expand ? "right-1/2" : "left-4"
                } -bottom-1.5`}
              ></div>
            </div>
          </div>
          {expand && (
            <>
              <span>Get App</span> <Image src={assets.new_icon} alt="" />
            </>
          )}
        </div>

        <div
          onClick={openSignIn}
          className={`flex items-center ${
            expand ? "hover:bg-white/10 rounded-lg" : "justify-center w-full"
          } gap-3 text-white/60 text-sm p-2 mt-2 cursor-pointer`}
        >
          <Image src={assets.profile_icon} className="w-7" alt="" />
          {expand && <span>My Profile</span>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
