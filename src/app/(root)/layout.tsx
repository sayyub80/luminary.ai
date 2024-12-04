import Sidebar from "@/components/shared/Sidebar";
import MobileNav  from "@/components/shared/MobileNav";
import { Toaster } from "@/components/ui/toaster"
export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main>
      <div className="root">
        {/* sideBar  */}
        <Sidebar/>
        {/* Mobileview */}
        <MobileNav/>

        <div className="root-container">
          <div className="wrapper">
          {children}
          </div>
        </div>
      </div>
      <Toaster />
      </main>
       
  
  )
}