
import { useState } from "react";
import Header from "@/components/Header";
import CaseCard from "@/components/CaseCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Star, ChevronDown } from "lucide-react";

// Временные данные для демонстрации
const allCases = [
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
  },
  {
    id: "cs2-dreams",
    name: "CS2 Dreams",
    image: "/placeholder.svg",
    price: 299,
    items: [
      { id: "1", name: "AWP | Азимов", image: "/placeholder.svg", price: 6000, rarity: "mythical" as const },
      { id: "2", name: "AK-47 | Вулкан", image: "/placeholder.svg", price: 5000, rarity: "legendary" as const },
      { id: "3", name: "M4A4 | Император", image: "/placeholder.svg", price: 3000, rarity: "rare" as const },
      { id: "4", name: "Desert Eagle | Код красный", image: "/placeholder.svg", price: 2000, rarity: "uncommon" as const },
    ]
  },
  {
    id: "rifle",
    name: "Снайперский кейс",
    image: "/placeholder.svg",
    price: 399,
    items: [
      { id: "r1", name: "AWP | Неоновая революция", image: "/placeholder.svg", price: 8000, rarity: "legendary" as const },
      { id: "r2", name: "SSG 08 | Кровь в воде", image: "/placeholder.svg", price: 3000, rarity: "rare" as const },
      { id: "r3", name: "SCAR-20 | Изумруд", image: "/placeholder.svg", price: 1500, rarity: "uncommon" as const },
    ]
  },
  {
    id: "pistol",
    name: "Пистолетный кейс",
    image: "/placeholder.svg",
    price: 199,
    items: [
      { id: "ps1", name: "Desert Eagle | Пламя", image: "/placeholder.svg", price: 4000, rarity: "legendary" as const },
      { id: "ps2", name: "USP-S | Неонуар", image: "/placeholder.svg", price: 2500, rarity: "mythical" as const },
      { id: "ps3", name: "Glock-18 | Fade", image: "/placeholder.svg", price: 1800, rarity: "rare" as const },
    ]
  },
];

const Cases = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  
  const filteredCases = allCases.filter(caseItem => {
    // Фильтр по поиску
    const matchesSearch = caseItem.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Фильтр по цене
    let matchesPrice = true;
    if (selectedPrice === "low") {
      matchesPrice = caseItem.price < 300;
    } else if (selectedPrice === "medium") {
      matchesPrice = caseItem.price >= 300 && caseItem.price < 700;
    } else if (selectedPrice === "high") {
      matchesPrice = caseItem.price >= 700;
    }
    
    return matchesSearch && matchesPrice;
  });

  return (
    <div className="min-h-screen pb-16">
      <Header />
      
      <main className="container px-4 md:px-6 pt-24 pb-12">
        {/* Заголовок страницы */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cs-purple to-cs-pink bg-clip-text text-transparent">
            Все кейсы CS2
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Выбирай из широкого ассортимента кейсов и испытай свою удачу в погоне за редкими скинами CS2
          </p>
        </div>
        
        {/* Фильтры и поиск */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Поиск кейсов..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                <span className="hidden sm:inline">Сортировать</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              <div className="relative">
                <Button variant="outline" className="gap-2">
                  <span>Цена</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
                <div className="absolute right-0 top-full mt-2 w-48 bg-card rounded-lg border border-cs-gray/20 shadow-lg p-2 z-10">
                  <div className="space-y-1">
                    <Button 
                      variant={selectedPrice === "all" ? "secondary" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setSelectedPrice("all")}
                    >
                      Все цены
                    </Button>
                    <Button 
                      variant={selectedPrice === "low" ? "secondary" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setSelectedPrice("low")}
                    >
                      До 300 ₽
                    </Button>
                    <Button 
                      variant={selectedPrice === "medium" ? "secondary" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setSelectedPrice("medium")}
                    >
                      300 ₽ - 700 ₽
                    </Button>
                    <Button 
                      variant={selectedPrice === "high" ? "secondary" : "ghost"} 
                      className="w-full justify-start"
                      onClick={() => setSelectedPrice("high")}
                    >
                      От 700 ₽
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Вкладки категорий */}
        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mb-6 w-full justify-start overflow-auto">
            <TabsTrigger value="all">Все кейсы</TabsTrigger>
            <TabsTrigger value="new">Новинки</TabsTrigger>
            <TabsTrigger value="popular">Популярные</TabsTrigger>
            <TabsTrigger value="knives">Ножи</TabsTrigger>
            <TabsTrigger value="gloves">Перчатки</TabsTrigger>
            <TabsTrigger value="rifles">Винтовки</TabsTrigger>
            <TabsTrigger value="pistols">Пистолеты</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="m-0">
            {filteredCases.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredCases.map((caseItem) => (
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
            ) : (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Кейсы не найдены. Попробуйте изменить параметры поиска.</p>
              </div>
            )}
          </TabsContent>
          
          {/* Заглушки для остальных вкладок */}
          <TabsContent value="new" className="m-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCases.slice(0, 3).map((caseItem) => (
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
          </TabsContent>
          
          <TabsContent value="popular" className="m-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredCases.slice(1, 4).map((caseItem) => (
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
          </TabsContent>
          
          {/* Можно добавить содержимое для других вкладок по аналогии */}
        </Tabs>
        
        {/* Рекомендуемые кейсы */}
        <section className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold">Рекомендуемые кейсы</h2>
              <p className="text-muted-foreground">Выбраны нашими экспертами специально для вас</p>
            </div>
            <Button variant="outline" className="hidden md:flex border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple">
              <Star className="mr-2 h-4 w-4" /> 
              Популярные
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allCases.slice(0, 3).map((caseItem) => (
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

export default Cases;
