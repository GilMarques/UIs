import { useState } from "react";
import { FaBars, FaUserCircle, FaWindowClose } from "react-icons/fa";
import "./App.css";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import icon from "./icon.png";
import shelf from "./shelf.png";
function App() {
  const [results, setResults] = useState([]);
  const [searchVisible, setSearchVisible] = useState(false);
  const [sidebarActive, setSidebarActive] = useState(false);
  return (
    <div className="" onClick={() => setSearchVisible(false)}>
      {/* Navbar */}

      <nav className="fixed top-0 z-10 flex w-full items-center justify-between bg-orange-300 p-4">
        <div className="text-3xl" id="logo">
          <img
            src={icon}
            width={80}
            alt="icon"
            style={{ minWidth: "80px", maxWidth: "80px" }}
          />
        </div>

        <div className="hidden items-center gap-8 text-nowrap text-4xl font-bold xl:flex">
          <a href="/">Home</a>
          <a href="store">Store</a>
          <a href="community">Community</a>
          <a href="about-us">About Us</a>
        </div>

        <div className="hidden xl:flex">
          <button>Sign In</button>
          <button className="rounded-md bg-black p-2 text-white">
            Get Started
          </button>
        </div>
        <input
          type="checkbox"
          className="hidden"
          id="sidebar-active"
          onChange={() => setSidebarActive(!sidebarActive)}
          value={sidebarActive}
        />
        <label htmlFor="sidebar-active" className="block xl:hidden">
          <FaBars size={50} />
        </label>
      </nav>

      {/* Sidebar */}

      <div
        className="fixed right-0 top-0 z-20 flex h-full w-[300px] flex-col bg-orange-200 transition-all duration-700 ease-out xl:hidden"
        style={{ right: sidebarActive ? "-100%" : "0" }}
      >
        <label htmlFor="sidebar-active" className="close-sidebar-button">
          <FaWindowClose size={50} />
        </label>
        <div className="align-start flex w-full flex-col justify-start gap-4 pl-4 font-bold">
          <button id="user">
            <FaUserCircle size={80} />
          </button>
          <a href="/">Home</a>
          <a href="store">Store</a>
          <a href="community">Community</a>
          <a href="about-us">About Us</a>
        </div>
      </div>

      {/* Page */}
      <div className="relative mx-auto mt-[200px] w-[70%]">
        <div
          className={`absolute w-full ${
            searchVisible ? "" : "hidden"
          } bg-orange-100 border-2 border-black rounded-xl py-2 px-4`}
          onClick={(e) => e.stopPropagation()}
        >
          <SearchBar setResults={setResults} searchVisible={searchVisible} />
          <SearchResults results={results} />
        </div>
        <div className="flex items-center">
          <div>
            <p>⭐ Start your reading journey today</p>
            <h1 className="style-script-regular text-[5rem] font-bold">
              Where every page is a new Adventure
            </h1>{" "}
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              quam voluptatum nisi delectus, quos suscipit incidunt at obcaecati
              explicabo odit illo deserunt alias quia temporibus dicta, non ea,
              esse sint.
            </p>
          </div>

          <img src={shelf} alt="Book shelf" className="hidden xl:block" />
        </div>
        <div className="flex justify-center xl:block">
          <button
            className="rounded-2xl border-2 border-black px-4 py-2"
            onClick={(e) => {
              e.stopPropagation();
              setSearchVisible(true);
            }}
          >
            {" "}
            🔍 Search books
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
