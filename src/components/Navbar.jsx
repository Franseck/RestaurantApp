import Logo from "../assets/Logo.png";
import { FaCaretDown } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Navlinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/About",
  },
  {
    id: 3,
    name: "Contact",
    link: "/Contact",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Vegetables",
    link: "/Vegetables",
  },
  {
    id: 2,
    name: "Fruits",
    link: "/Fruits",
  },
  {
    id: 1,
    name: "Tropicals",
    link: "/Tropicals",
  },
];


const Navbar = () => {

const navigate = useNavigate();

  return (
    <>
      <div className="bg-primary shadow-md sm:py-2">
        <div className="container flex justify-between py-4 sm:py-2 items-center">
          <div className="logo flex">
            <img src={Logo}  alt="logo" />
          </div>
          <div>
            <ul className="flex items-center gap-8 text-center">
              {Navlinks.map(({ id, name, link }) => (
                <li key={id}>
                  <a
                    href={link}
                    className="inline-block hover:text-orange-300 font-general text-xl text-tex"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li className="cursor-pointer group ">
                <a
                  href="/"
                  className="inline-block hover:text-orange-300 font-general text-xl text-tex"
                >
                  <div className="flex items-center gap-1 py-2">
                    Dropdown{" "}
                    <span>
                      <FaCaretDown className="group-hover:rotate-180 duration-300" />{" "}
                    </span>
                  </div>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[120px] shadow-md">
                  <ul className="drop">
                    {DropdownLinks.map(
                      ({ id, name, link }) => (
                        <li key={id}>
                          <a
                            href={link}
                            className="inline-block hover:text-orange-300 font-general text-xl text-tex"
                          >
                            {name}
                          </a>
                        </li>
                  )
                    )}
                  </ul> 
                    
                </div>
              </li>
              <li className="log flex gap-1 items-center hover:text-blue-800 hover:scale-105 duration-300 font-general  text-secondary ">
                     <button onClick={()=>navigate("/Login") } 
                          > Login </button>
                          <IoLogIn />
                    </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
