import Image from "next/image";
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
      <div>
        <SignedIn>
           <h1 className="m-5 text-5xl">Welcome to Home page </h1>
        </SignedIn>
        
        <SignedOut>
        <Button className="m-4">Login</Button>
        </SignedOut>
        
      </div>
   
  );
}
