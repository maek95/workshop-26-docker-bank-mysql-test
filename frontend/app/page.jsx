"use client";
import Button from "@/components/Button";
import NavBar from "@/components/NavBar";
import Socials from "@/components/Socials";
import TopBar from "@/components/TopBar";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// npm run dev

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let tokenStorage;

  /* useEffect(() => {
    tokenStorage = localStorage.getItem("token");
  }, [])  
    useEffect(() => {
    if (tokenStorage != null) {
      setIsLoggedIn(true);
    } else {
      //setIsLoggedIn(false);
    }
  }, []);
 */

  // even though we arent storing token in localStorage anymore we still want the client-side to remember if we are online or not!
  useEffect(() => {
    tokenStorage = localStorage.getItem("loggedIn");
    //console.log("tokenStorage: ", tokenStorage);
  }, [])

  useEffect(() => {
    if (tokenStorage == "true" ) {
      setIsLoggedIn(true);
    } else if (tokenStorage == "false") {
      setIsLoggedIn(false)
    } else {
      console.log("Failed to read 'loggedIn' status from localStorage");
    }
  }, [])
  //console.log("(after useEffect) isLoggedIn: ", isLoggedIn);


  return (
    <main
      className="min-h-screen bg-taieriverytransparent" /* style={{backgroundImage: "url('Taieri.png')"}} */
    >
      <div className="flex flex-col justify-center md:justify-between h-lvh gap-8">

        {/* top navbar and new h1 on devices above 768px */}
        <div className="hidden md:flex flex-col gap-20">
          <TopBar isHomePage={true} isLoggedIn={isLoggedIn} stickyOrFixed={"sticky"}></TopBar>
          <div className="hidden md:flex justify-center md:justify-start px-8">
            <h1 className="text-6xl">Chas Bank</h1>
          </div>
        </div>

        {/* h1 on mobile device */}
        <div className="flex justify-center md:hidden">
          <h1 className="flex text-5xl">Chas Bank</h1>
        </div>
        <div className="flex flex-col gap-8 justify-center md:items-start md:px-8">
          {" "}
          
          <div className="flex flex-col justify-center items-center">
            {" "}
           
            <div className="">
              {isLoggedIn ? (
                <Button 
                  onClick={() => {
                    //localStorage.clear("token");
                    localStorage.clear("loggedIn");
                    setIsLoggedIn(false);
                  }}
                >
                  Log Out
                </Button>
              ) : (
                <div className="flex flex-col gap-8">
                  <Link className="text-white no-underline" href={"./login"}>
                    <Button>
                      <p>Log In</p>
                    </Button>
                  </Link>
                  <Link className="text-white no-underline" href={"./users"}>
                    <Button>Become a client</Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {/*  <div className="h-[1000px]">
          hi there
        </div> */}
          <div className="flex md:hidden items-center justify-center">
            <Socials />
          </div>
        </div>

        <div className="hidden md:flex items-center justify-start p-8 pb-24">
          <Socials />
        </div>
        {/* <div className="mt-20">
       <NavBar stickyOrFixed={"fixed"}></NavBar>
       </div> */}

        <div className="md:hidden">
          <NavBar isHomePage={true} isLoggedIn={isLoggedIn} stickyOrFixed={"fixed"}></NavBar>
        </div>
        {/* <NavBar stickyOrFixed={"fixed"}></NavBar> */}
      </div>
    </main>
  );
}
