"use client";
import * as React from "react";
import logo from "../../../assets/nextrade-logo.png";
import Button from "@/components/library/Button/Button";
import { IoMdArrowDropup } from "react-icons/io";
import Container from "@/components/library/Container";
import Image from "next/image";
import Drawer from "./Drawer";
import { RiCloseLine, RiMenu5Fill } from "react-icons/ri";
import Link from "next/link";
import "@/components/common/Navbar/navbarStyle.css";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import useAuth from "@/utils/useAuth";
import { Avatar, IconButton, Menu, MenuItem, Stack, Tooltip, Typography } from "@mui/material";


const menuItemsForUser = [
  {
      route: "Wallet",
      pathname: "/dashboard/wallet"
  }
];

const Navbar = () => {
  const { user, logOut } = useAuth()
  // console.log(user)

  // get the current pathname
  const pathname = usePathname();


  // user menu related functions
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  const [toggleMenu, setToggleMenu] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    const handleScrolled = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScrolled);
    return () => {
      window.removeEventListener("scroll", handleScrolled);
    };
  }, []);

  const navLinks = (
    <>
      <Link href={"/"} className={clsx("activeStyle", { 'text-primary border-b-4 border-b-primary font-semibold': pathname === "/" })}>Home</Link>
      <Link href={"/dashboard"} className={clsx("activeStyle", { 'text-primary border-b-4 border-b-primary font-semibold': pathname === "/dashboard" })}>Dashboard</Link>
      <Link href={"/services"} className={clsx("activeStyle", { 'text-primary border-b-4 border-b-primary font-semibold': pathname === "/services" })}>Services</Link>
      <div
        className="lg:p-1 lg:py-3 relative activeStyle flex flex-col justify-center items-center"
      >
        <button className={clsx("activeStyle", { 'text-primary border-b-4 border-b-primary font-semibold': pathname === "/aboutus" || pathname === "/why-choose-us" || pathname === "/contactUs" })}>About Us </button>

        <div className="activeMenu text-center min-w-max overflow-hidden rounded-t-none border border-t-4 border-t-primary bg-blue-50 text-black flex flex-col justify-center items-center rounded-md text-sm">
          <Link href={"/aboutUs"} className="px-4 py-[10px] w-full">About NexTrade</Link>
          <Link href={"/why-choose-us"} className="px-4 py-[10px] w-full">Why Choose Us</Link>
          <Link href={"/contactUs"} className="px-4 py-[10px] w-full">Contact Us</Link>
        </div>

      </div>
      <div
        className="lg:p-1 lg:py-3 relative activeStyle flex flex-col justify-center items-center"
      >
        <button className={clsx("activeStyle", { 'text-primary border-b-4 border-b-primary font-semibold': pathname === "/payment" || pathname === "/helpCenter" })}>Recourses</button>
        <div className="activeMenu text-center min-w-max overflow-hidden rounded-t-none border border-t-4 border-t-primary bg-blue-50 text-black flex flex-col justify-center items-center rounded-md text-sm">
          <Link href={"/payment"} className="px-4 py-[10px] w-full">Payment Methods</Link>
          <Link href={"/helpCenter"} className="px-4 py-[10px] w-full">Help Centre</Link>
        </div>
      </div>
    </>
  );

  return (
    <nav
      className={`fixed z-[100] top-0 w-full  ${pathname === "/register" || pathname === "/login" || pathname.includes('/dashboard') ? "hidden" :
        scrolled
          ? "bg-[#E9EEF1] py-4 transition-all duration-700 ease-in-out shadow-xl"
          : "bg-transparent py-6 transition-all duration-700 ease-in-out"
        }`}
    >
      <div>
        <button
          onClick={handleScrollToTop}
          className={`p-2 bg-gradient-to-r  from-[#239FFE] to-[#0272E5] hover:bg-gradient-to-r  hover:from-[#0272E5] hover:to-[#239FFE] border-none text-white fixed bottom-10 right-5 md:right-10 rounded-full ${!scrolled && "hidden"
            }`}
        >
          <IoMdArrowDropup className="w-7 h-7 md:w-10 md:h-10" />
        </button>
      </div>
      <Container className="flex justify-between items-center">
        <Link href={"/"} className="">
          <Image src={logo} alt="Trad Icon" width={140} placeholder="blur" />
        </Link>
        <div
          className='hidden xl:flex items-center gap-9 lg:text-lg font-medium '
        >
          {navLinks}
        </div>
        {
          user ?
            <Stack direction="row" alignItems="center" spacing={3}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="user-img" className="border-2 border-primary" src={user?.photoURL} />
                </IconButton>
              </Tooltip>
            </Stack>
            :

            <div className="hidden xl:flex items-center gap-5">
              <Link href={"/login"}>
                <Button className="px-5"> Login</Button>
              </Link>
              <Link href={"/register"}>
                <Button className="px-5"> Register</Button>
              </Link>
            </div>
        }

        {/* user menu */}
        <Menu
          sx={{ mt: '45px', py:"0px" }}
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {
              menuItemsForUser.map((menu, idx) => (
                <Link key={idx} href={menu.pathname}>
                    <MenuItem className="p-0 my-0" onClick={handleCloseUserMenu}>
                        <Typography textAlign="center" className=" hover:bg-primary hover:text-white w-full px-6 py-2">{menu.route}</Typography>
                    </MenuItem>
                </Link>
            ))
            }
          <MenuItem className="p-0 my-0" onClick={() => {
            logOut();
            handleCloseUserMenu();
          }}>
            <Typography textAlign="center" className=" hover:bg-primary hover:text-white w-full px-6 py-2">Logout</Typography>
          </MenuItem>
        </Menu>


        <div className="xl:hidden">
          <Button onClick={() => setToggleMenu(!toggleMenu)} className="px-3">
            {toggleMenu ? <RiCloseLine /> : <RiMenu5Fill />}
          </Button>
        </div>
      </Container>

      {/* {toggleMenu && <Drawer toggleMenu={toggleMenu} />} */}
      <Drawer className={`${toggleMenu ? "translate-x-24" : ""}`} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
