import { LogoutIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg"
import { useAuth } from "../../contexts/AuthContext";
import Logout from "../accounts/Logout";
import ThemeChange from "./ThemeChange";
import profilePic from "../../assets/images/profile.svg"
export default function Header() {
  const [modal, setModal] = useState(false);

  const { currentUser } = useAuth();

  return (
    <>
      <nav className="px- px-2 sm:px-4 py-2.5 bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-900 text-sm rounded border dark:text-white">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="flex">
            <div className="flex flex-row gap-2 align-middle justify-items-center">
              <img src={logo} alt="logo" className="w-10 h-10 mt-2" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                Juice Vendor Labs Chat
              </span>
            </div>
          </Link>
          <div className="flex md:order-2">
            <ThemeChange />

            {currentUser && (
              <>
                <button
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-lg text-sm p-2.5"
                  onClick={() => setModal(true)}
                >
                  <LogoutIcon className="text-green-500 h-8 w-8" aria-hidden="true" />
                </button>

                <Link
                  to="/profile"
                  className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none rounded-full text-sm p-2.5"
                >
                  <img
                    className="h-8 w-8 rounded-full border-green-400 border-2"
                    src={profilePic}
                    alt=""
                  />
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
      {modal && <Logout modal={modal} setModal={setModal} />}
    </>
  );
}
