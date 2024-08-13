"use client";
import Image from "next/image";
import { brainwave } from "@/assets";
import { navigation } from "@/constants";
import { useParams } from "next/navigation";
import Button from "./Button";
import { useEffect, useState } from "react";

const Header = () => {
  const params = useParams();
  const [currentPath, setCurrentPath] = useState<null | string>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPath(window.location.hash);
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [params]);

  return (
    <div className="fix top-0 left-0 w-full z-50 bg-n-8/90 backdrop-blur-sm border-b border-n-6 lg:bg-n-8/90">
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Image src={brainwave} alt="logo" width={190} height={40} />
        </a>

        <nav className="fixed hidden top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent">
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((nav) => (
              <a
                key={nav.id}
                href={nav.url}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  nav.onlyMobile ? "lg:hidden" : ""
                } ${
                  nav.url === currentPath ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {nav.title}
              </a>
            ))}
          </div>
        </nav>

        <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New Account
        </a>
        <Button className="hidden lg:flex" href="#login">
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Header;
