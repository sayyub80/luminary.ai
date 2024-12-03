'use client'

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton, SignedIn,SignedOut  } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/constants/index";
import { usePathname } from "next/navigation";


function MobileNav() {
    const pathname=usePathname();
  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/logo-text.svg"
          alt="Logo"
          width={180}
          height={28}
        />
      </Link>
      <nav className="flex  gap-2">
        <SignedIn>
          <UserButton />
          <Sheet>
            <SheetTrigger>
                <Image
                src="/assets/icons/menu.svg"
                alt="menu"
                width={32}
                height={32}
                className="cursor-pointer"
                />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
               <>
                <Image
                src="/assets/images/logo-text.svg"
                alt="Logo"
                width={152}
                height={23}
                />

<ul className="header-nav_elements">
              {navLinks.slice(0, 6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li 
                  key={link.route} 
                  className={`${isActive &&
                     'gradient-text'
                  }`}>
                  <Link className="cursor-pointer sidebar-link" href={link.route}>
                  <Image 
                    src={link.icon}
                    alt="logo"
                    width={24}
                    height={24}

                  />
                  {link.label}
                </Link>
                  </li>
                )
              })}
              </ul>


            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link) => {
                const isActive = link.route === pathname

                return (
                  <li key={link.route} className={`sidebar-nav_element group ${
                    isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'
                  }`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton showName />
              </li>
            </ul>
               </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
            <Button asChild className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
    
      </nav>
    </header>
  );
}

export default MobileNav;
