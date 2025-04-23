import Header from "@/components/Header";
import CaseCard from "@/components/CaseCard";
import CaseSpinner from "@/components/CaseSpinner";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, Award } from "lucide-react";

// Временные данные для демонстрации
const featuredCase = {
  id: "cs2-dreams",
  name: "CS2 Dreams",
  image: "/placeholder.svg",
  price: 299,
  items: [
    { id: "1", name: "AWP | Азимов", image: "/placeholder.svg", price: 6000, rarity: "mythical" as const },
    { id: "2", name: "AK-47 | Вулкан", image: "/placeholder.svg", price: 5000, rarity: "legendary" as const },
    { id: "3", name: "M4A4 | Император", image: "/placeholder.svg", price: 3000, rarity: "rare" as const },
    { id: "4", name: "Desert Eagle | Код красный", image: "/placeholder.svg", price: 2000, rarity: "uncommon" as const },
    { id: "5", name: "USP-S | Убийство подтверждено", image: "/placeholder.svg", price: 1500, rarity: "rare" as const },
    { id: "6", name: "Glock-18 | Градиент", image: "/placeholder.svg", price: 800, rarity: "uncommon" as const },
    { id: "7", name: "P250 | Азимов", image: "/placeholder.svg", price: 150, rarity: "common" as const },
    { id: "8", name: "MP7 | Кровавый спорт", image: "/placeholder.svg", price: 100, rarity: "common" as const },
  ]
};

const popularCases = [
  {
    id: "premium",
    name: "Премиум кейс",
    image: "/placeholder.svg",
    price: 599,
    items: [
      { id: "p1", name: "AWP | Драконий лор", image: "/placeholder.svg", price: 15000, rarity: "ancient" as const },
      { id: "p2", name: "AK-47 | Огненный змей", image: "/placeholder.svg", price: 10000, rarity: "legendary" as const },
      { id: "p3", name: "M4A4 | Вой", image: "/placeholder.svg", price: 5000, rarity: "mythical" as const },
    ]
  },
  {
    id: "knife",
    name: "Ножевой кейс",
    image: "/placeholder.svg",
    price: 999,
    items: [
      { id: "k1", name: "Керамбит | Градиент", image: "/placeholder.svg", price: 20000, rarity: "ancient" as const },
      { id: "k2", name: "Штык-нож М9 | Мраморный градиент", image: "/placeholder.svg", price: 18000, rarity: "ancient" as const },
      { id: "k3", name: "Скелетный нож | Убийство", image: "/placeholder.svg", price: 15000, rarity: "legendary" as const },
    ]
  },
  {
    id: "gloves",
    name: "Перчатки",
    image: "/placeholder.svg",
    price: 799,
    items: [
      { id: "g1", name: "Спортивные перчатки | Пандора", image: "/placeholder.svg", price: 12000, rarity: "legendary" as const },
      { id: "g2", name: "Водительские перчатки | Лунный узор", image: "/placeholder.svg", price: 9000, rarity: "mythical" as const },
      { id: "g3", name: "Мотоциклетные перчатки | Полигон", image: "/placeholder.svg", price: 7000, rarity: "rare" as const },
    ]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <main className="container px-4 md:px-6 pt-24 pb-12">
        {/* Hero section */}
        <section className="mb-12 mt-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col justify-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cs-purple to-cs-pink bg-clip-text text-transparent">
                Открывай кейсы CS2
                <br />и выигрывай скины!
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                ISAGORDROP — это лучшая платформа для открытия виртуальных кейсов CS2. 
                Получи шанс выиграть редкие скины по низким ценам!
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <Button className="bg-cs-purple hover:bg-cs-purple/90">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Открыть кейсы
                </Button>
                <Button variant="outline" className="border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple">
                  Как это работает?
                </Button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-card p-4 rounded-lg border border-cs-gray/20">
                  <p className="text-3xl font-bold mb-1 text-cs-purple">10K+</p>
                  <p className="text-sm text-muted-foreground">Открытых кейсов</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-cs-gray/20">
                  <p className="text-3xl font-bold mb-1 text-cs-pink">5K+</p>
                  <p className="text-sm text-muted-foreground">Счастливых игроков</p>
                </div>
                <div className="bg-card p-4 rounded-lg border border-cs-gray/20">
                  <p className="text-3xl font-bold mb-1 text-cs-blue">99%</p>
                  <p className="text-sm text-muted-foreground">Моментальные выводы</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 flex items-center justify-center">
              <CaseSpinner 
                items={featuredCase.items} 
                onSpin={() => console.log("Spinning...")}
                className="max-w-md mx-auto"
              />
            </div>
          </div>
        </section>
        
        {/* Popular cases section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Популярные кейсы</h2>
              <p className="text-muted-foreground">Самые востребованные кейсы среди наших пользователей</p>
            </div>
            <Button variant="outline" className="hidden md:flex border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple">
              <TrendingUp className="mr-2 h-4 w-4" /> 
              Все кейсы
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularCases.map((caseItem) => (
              <CaseCard 
                key={caseItem.id}
                id={caseItem.id}
                name={caseItem.name}
                image={caseItem.image}
                price={caseItem.price}
                items={caseItem.items}
              />
            ))}
          </div>
          
          <Button variant="outline" className="mt-6 w-full md:hidden border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple">
            <TrendingUp className="mr-2 h-4 w-4" /> 
            Все кейсы
          </Button>
        </section>
        
        {/* Featured case section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Попробуй свою удачу</h2>
              <p className="text-muted-foreground">Наш специальный кейс CS2 Dreams</p>
            </div>
            <Button variant="outline" className="hidden md:flex border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple">
              <Award className="mr-2 h-4 w-4" /> 
              Топ дропы
            </Button>
          </div>
          
          <div className="bg-card rounded-lg border border-cs-gray/20 p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="bg-cs-dark/50 rounded-lg p-4 border border-cs-purple/20">
                  <h3 className="text-xl font-bold mb-3">{featuredCase.name}</h3>
                  <div className="relative w-full aspect-square flex items-center justify-center mb-4">
                    <div className="absolute inset-0 bg-cs-purple/20 rounded-full blur-xl"></div>
                    <img 
                      src={featuredCase.image}
                      alt={featuredCase.name}
                      className="relative w-40 h-40 object-contain animate-float"
                    />
                  </div>
                  <Button className="w-full bg-cs-purple hover:bg-cs-purple/90">
                    Открыть за {featuredCase.price} ₽
                  </Button>
                </div>
              </div>
              
              <div className="lg:col-span-2">
                <h3 className="text-lg font-bold mb-3">Возможные предметы</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                  {featuredCase.items.map((item) => (
                    <div 
                      key={item.id}
                      className={`relative rounded-lg border p-2 ${rarityColors[item.rarity]} ${rarityGlows[item.rarity]}`}
                    >
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full aspect-square object-contain mb-1"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-center py-1 text-xs truncate px-1">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Simple banner */}
        <section>
          <div className="relative rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cs-purple to-cs-pink opacity-80"></div>
            <div className="relative py-10 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
              <div className="mb-6 lg:mb-0 text-center lg:text-left">
                <h2 className="text-2xl font-bold mb-2">Начни открывать кейсы прямо сейчас!</h2>
                <p className="text-white/80 max-w-xl">Зарегистрируйся и получи бонусные 50 ₽ на свой первый кейс</p>
              </div>
              <Button size="lg" className="bg-white text-cs-purple hover:bg-white/90">
                Зарегистрироваться
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t border-cs-gray/20 py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2023 ISAGORDROP. Все права защищены.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/terms" className="text-sm text-muted-foreground hover:text-cs-purple">Условия использования</a>
              <a href="/privacy" className="text-sm text-muted-foreground hover:text-cs-purple">Политика конфиденциальности</a>
              <a href="/support" className="text-sm text-muted-foreground hover:text-cs-purple">Поддержка</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
