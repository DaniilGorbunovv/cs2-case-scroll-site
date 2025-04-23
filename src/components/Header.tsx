import { Button } from "@/components/ui/button";
import { Wallet, Menu, User, Home } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-cs-gray/20 bg-cs-dark/50 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container flex items-center justify-between h-16 px-4 md:px-6">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-cs-purple rounded-full blur-sm opacity-70"></div>
              <div className="relative flex items-center justify-center w-full h-full bg-cs-dark/80 rounded-full border border-cs-purple/30">
                <span className="text-cs-purple font-bold">I</span>
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-cs-purple to-cs-pink bg-clip-text text-transparent">
              ISAGORDROP
            </span>
          </a>
          
          <nav className="hidden md:flex items-center gap-6 ml-6">
            <a href="/" className="text-sm font-medium hover:text-cs-purple transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Главная
            </a>
            <a href="/cases" className="text-sm font-medium hover:text-cs-purple transition-colors">
              Кейсы
            </a>
            <a href="/upgrade" className="text-sm font-medium hover:text-cs-purple transition-colors">
              Апгрейд
            </a>
            <a href="/battles" className="text-sm font-medium hover:text-cs-purple transition-colors">
              Баттлы
            </a>
          </nav>
        </div>
        
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple"
          >
            <Wallet className="h-4 w-4 mr-2" />
            Пополнить
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="bg-cs-purple hover:bg-cs-purple/90"
          >
            <User className="h-4 w-4 mr-2" />
            Войти
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
