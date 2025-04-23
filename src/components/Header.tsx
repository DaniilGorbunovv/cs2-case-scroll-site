
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { SheetTrigger, Sheet, SheetContent } from "@/components/ui/sheet";
import { Menu, X, Package, CreditCard, User, LogIn } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Обработчик скролла для изменения стиля шапки
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo-b.svg" alt="ISAGORDROP" className="w-8 h-8" />
          <span className="text-xl font-bold bg-gradient-to-r from-cs-purple to-cs-pink bg-clip-text text-transparent">
            ISAGORDROP
          </span>
        </Link>

        {/* Навигация для десктопа */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/cases"
            className="text-sm font-medium hover:text-cs-purple transition"
          >
            Все кейсы
          </Link>
          <Link
            to="/top-drops"
            className="text-sm font-medium hover:text-cs-purple transition"
          >
            Топ дропы
          </Link>
          <Link
            to="/bonus"
            className="text-sm font-medium hover:text-cs-purple transition"
          >
            Бонусы
          </Link>
          <Link
            to="/faq"
            className="text-sm font-medium hover:text-cs-purple transition"
          >
            FAQ
          </Link>
        </nav>

        {/* Действия пользователя для десктопа */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            variant="outline"
            className="border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple"
          >
            <LogIn className="w-4 h-4 mr-2" />
            Войти
          </Button>
          <Button className="bg-cs-purple hover:bg-cs-purple/90">
            Регистрация
          </Button>
        </div>

        {/* Мобильное меню */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] sm:w-[350px]">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center mb-6">
                <Link to="/" className="flex items-center gap-2">
                  <img src="/logo-b.svg" alt="ISAGORDROP" className="w-8 h-8" />
                  <span className="text-xl font-bold bg-gradient-to-r from-cs-purple to-cs-pink bg-clip-text text-transparent">
                    ISAGORDROP
                  </span>
                </Link>
              </div>

              <nav className="flex flex-col gap-4 mb-8">
                <Link
                  to="/cases"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                >
                  <Package className="w-5 h-5 text-cs-purple" />
                  <span>Все кейсы</span>
                </Link>
                <Link
                  to="/top-drops"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                >
                  <CreditCard className="w-5 h-5 text-cs-purple" />
                  <span>Топ дропы</span>
                </Link>
                <Link
                  to="/bonus"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                >
                  <User className="w-5 h-5 text-cs-purple" />
                  <span>Бонусы</span>
                </Link>
                <Link
                  to="/faq"
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted transition"
                >
                  <User className="w-5 h-5 text-cs-purple" />
                  <span>FAQ</span>
                </Link>
              </nav>

              <div className="mt-auto space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  Войти
                </Button>
                <Button className="w-full bg-cs-purple hover:bg-cs-purple/90">
                  Регистрация
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
