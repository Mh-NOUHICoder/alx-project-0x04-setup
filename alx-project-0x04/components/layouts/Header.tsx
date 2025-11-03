// Header page Layout 
import Link from "next/link";
import Button from "../common/Button";
import { ModeToggle } from "@/components/ModeToggle";

const Header: React.FC = () => {
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
          
          {/* Auth Buttons */}
          <Button
            buttonLabel="Sign In"
            buttonBackgroundColor="red"
          />
          <Button
            buttonLabel="Sign Up" 
            buttonBackgroundColor="blue"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;