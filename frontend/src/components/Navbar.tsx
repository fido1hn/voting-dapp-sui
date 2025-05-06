const Navbar = () => {
  const currentPage: string = "/";
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 p-4 shadow-md">
      <ul className="flex space-x-6">
        <li>
          <button
            className={`px-4 py-2 rounded ${
              currentPage === "/" ? "bg-blue-700" : ""
            }`}>
            Home
          </button>
        </li>
        <li>
          <button
            className={`px-4 py-2 rounded ${
              currentPage === "/wallet" ? "bg-blue-700" : ""
            }`}>
            Wallet
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
