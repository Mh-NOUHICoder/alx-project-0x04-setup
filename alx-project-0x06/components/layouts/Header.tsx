// Header page Layout 
import Link from "next/link";
import Button from "../common/Button";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header: React.FC = () => {
  const pathname = usePathname()
   const count = useSelector((state: RootState) => state.counter.value)

  return (
    <header className="fixed w-full bg-background border-b border-border shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
          Splash App
        </Link>

        {/* Button Group & Dark Mode Toggle */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <ModeToggle />
          
          {/* Button Group */}
        <div className="flex gap-4">
          {
            !["/counter-app"].includes(pathname) ? (
              <>
              <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
          />
          <Button
            buttonLabel="Sign Up"
            buttonBackgroundColor="blue"
          /></>
            ) : (
              <p className=" font-semibold text-lg">Current count : {count}</p>
            )
          }

        </div>
        <div className="px-6">
          <p className=" font-semibold text-lg">Current count : {count}</p>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;