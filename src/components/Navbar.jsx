import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { RiAuctionFill } from "react-icons/ri";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import GroupsIcon from '@mui/icons-material/Groups';
import MessageIcon from '@mui/icons-material/Message';
import PersonIcon from '@mui/icons-material/Person';
import { FaPencilAlt } from "react-icons/fa";

import LogoutIcon from '@mui/icons-material/Logout';
import 'react-tooltip/dist/react-tooltip.css'


export const Navbar = () => {
  const navigate=useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  const currentUser=JSON.parse(localStorage.getItem('user'));
  console.log(":asd",currentUser);
  const handleLogout=()=>{
    try{
      localStorage.removeItem('user');
      setIsLoggedIn(false);
      navigate('/');
    }catch(err){
      console.log(err);
    }
  }
  const navItems = [{
    id: 1,
    link: "/",
    icon: <HomeIcon />,
    name: "Home",
  },
  {id:2,
    link:"/create",
    icon:<FaPencilAlt/>,
    name:"Create"
  },
  ];
  
  const menuVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const itemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 },
  };
  return (
    <div className="border-b shadow-md sticky top-0 z-50 bg-white">
      <div className="relative flex items-center justify-between px-[48px] py-[22px]">
        <a
          href="/"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <img src="logo.png" className='object-fit w-[130px]' />
        </a>
        <ul className="items-center hidden space-x-8 lg:flex">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                // href={`${item.link}`}
                onClick={() => navigate(`${item.link}`)}
                className="flex items-center font-medium  text-gray-700  duration-200 hover:text-primary hover:underline-primary animated-underline cursor-pointer space-x-2 hover:text-[#f91e5a] "
              >
                <p>
                  {item.icon}
                </p>
                <p>
                  {item.name}
                </p>
              </a>
            </li>

          ))}
          {currentUser ? <li onClick={handleLogout} className='cursor-pointer'>

             <LogoutIcon /> Logout</li>
              : <button onClick={()=>{navigate("/register")}} className='bg-[#f91e5a] rounded-md px-10 py-2 text-white hover:bg-white hover:text-[#f91e5a] hover:border-[#f91e5a] hover:border '>Signup</button>}
          
        </ul>
        <div className="lg:hidden ">
          <motion.button
            whileTap={{ scale: 1.5 }}

            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial="closed"
                animate="open"
                exit="closed"
                variants={menuVariants}
                transition={{ duration: 0.5 }}
                // onMouseLeave={setIsMenuOpen(false)}
                className="absolute top-20 left-0 w-full shadow-md">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <motion.ul className="space-y-4">
                    {navItems.map((item, i) => (
                      <motion.li
                        key={item.id}
                        variants={itemVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        transition={{ delay: i * 0.1 }}
                      >
                        <a
                          onClick={() => navigate(`${item.link}`)}
                          // aria-label="Our product"
                          // title={`${item.link}`}
                          className="font-medium  text-gray-700  duration-200 hover:text-primary hover:font-bold flex space-x-2 items-center cursor-pointer"
                        >
                          <p>
                            {item.icon}
                          </p>
                          <p>
                            {item.name}
                          </p>
                        </a>
                      </motion.li>

                    ))}
                    {currentUser ?<motion.li
                      // key={item.id}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ delay: 5 * 0.1 }}
                    >
                      <a
                        onClick={handleLogout}
                        // aria-label="Our product"
                        // title={`${item.link}`}
                        
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                       <LogoutIcon/> Logout
                      </a>
                    </motion.li>:<motion.li
                      // key={item.id}
                      variants={itemVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ delay: 5 * 0.1 }}
                    >
                      {/* <Modal/> */}
                    </motion.li> }
                    

                  </motion.ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};