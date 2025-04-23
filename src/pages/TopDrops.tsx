
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import { Clock, ArrowDown } from "lucide-react";

type TopDrop = {
  id: string;
  username: string;
  userAvatar: string;
  itemName: string;
  caseName: string;
  price: number;
  time: string;
  rarity: "common" | "uncommon" | "rare" | "epic" | "legendary" | "mythical";
};

const rarityColors = {
  common: "text-gray-200",
  uncommon: "text-blue-400",
  rare: "text-indigo-400",
  epic: "text-purple-400",
  legendary: "text-amber-400",
  mythical: "text-red-500"
};

const rarityGlows = {
  common: "",
  uncommon: "",
  rare: "drop-shadow(0 0 2px rgba(79, 70, 229, 0.3))",
  epic: "drop-shadow(0 0 3px rgba(168, 85, 247, 0.4))",
  legendary: "drop-shadow(0 0 4px rgba(245, 158, 11, 0.5))",
  mythical: "drop-shadow(0 0 5px rgba(239, 68, 68, 0.6))"
};

const TopDrops = () => {
  const [activeTab, setActiveTab] = useState("day");
  
  // Mock data for top drops
  const mockTopDrops: TopDrop[] = [
    {
      id: "1",
      username: "Sasha_Legend",
      userAvatar: "/placeholder.svg",
      itemName: "AWP | Древесная гадюка",
      caseName: "Кейс «Кобальт»",
      price: 18524,
      time: "15 минут назад",
      rarity: "legendary"
    },
    {
      id: "2",
      username: "GorStorm",
      userAvatar: "/placeholder.svg",
      itemName: "M4A4 | Император",
      caseName: "Кейс «Призма»",
      price: 12857,
      time: "27 минут назад",
      rarity: "mythical"
    },
    {
      id: "3",
      username: "JonyFrag",
      userAvatar: "/placeholder.svg",
      itemName: "USP-S | Убийство подтверждено",
      caseName: "Кейс «Гамма»",
      price: 8745,
      time: "42 минуты назад",
      rarity: "epic"
    },
    {
      id: "4",
      username: "MaksMoney",
      userAvatar: "/placeholder.svg",
      itemName: "AK-47 | Вулкан",
      caseName: "Кейс «Хроматик»",
      price: 7652,
      time: "1 час назад",
      rarity: "epic"
    },
    {
      id: "5",
      username: "ProHunter",
      userAvatar: "/placeholder.svg",
      itemName: "Перчатки | Кровавый узор",
      caseName: "Кейс «Люкс»",
      price: 32450,
      time: "1 час назад",
      rarity: "mythical"
    },
    {
      id: "6",
      username: "CSLover",
      userAvatar: "/placeholder.svg",
      itemName: "Desert Eagle | Ржавый кодекс",
      caseName: "Кейс «Хрома 3»",
      price: 3200,
      time: "2 часа назад",
      rarity: "rare"
    },
    {
      id: "7",
      username: "DreamKiller",
      userAvatar: "/placeholder.svg",
      itemName: "Нож-бабочка | Градиент",
      caseName: "Кейс «Элитный»",
      price: 45870,
      time: "3 часа назад",
      rarity: "mythical"
    },
    {
      id: "8",
      username: "XtraLuck",
      userAvatar: "/placeholder.svg",
      itemName: "Glock-18 | Градиент",
      caseName: "Кейс «Гамма 2»",
      price: 2860,
      time: "3 часа назад",
      rarity: "rare"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      
      <main className="container px-4 md:px-6 pt-24 pb-16 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cs-purple to-cs-pink bg-clip-text text-transparent mb-4">
              Топ дропы
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Здесь вы можете увидеть самые удачные выигрыши наших пользователей. Может быть, следующим счастливчиком станете именно вы!
            </p>
          </div>
          
          <Tabs defaultValue="day" className="w-full" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-gray-800/50 p-1">
                <TabsTrigger value="day" className="px-8 py-2 data-[state=active]:bg-cs-purple/20">
                  Сегодня
                </TabsTrigger>
                <TabsTrigger value="week" className="px-8 py-2 data-[state=active]:bg-cs-purple/20">
                  За неделю
                </TabsTrigger>
                <TabsTrigger value="month" className="px-8 py-2 data-[state=active]:bg-cs-purple/20">
                  За месяц
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="day" className="mt-0">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700/50">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Пользователь
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Предмет
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Кейс
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Стоимость
                        </th>
                        <th className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                          Время
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700/50">
                      {mockTopDrops.map((drop) => (
                        <tr key={drop.id} className="hover:bg-gray-700/20 transition-colors">
                          <td className="px-4 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-8 w-8">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={drop.userAvatar}
                                  alt={drop.username}
                                />
                              </div>
                              <div className="ml-3">
                                <div className="text-sm font-medium text-gray-200">
                                  {drop.username}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span 
                              className={`text-sm font-medium ${rarityColors[drop.rarity]}`}
                              style={{ filter: rarityGlows[drop.rarity] }}
                            >
                              {drop.itemName}
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-300">
                            {drop.caseName}
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-right font-medium text-green-400">
                            {drop.price.toLocaleString()} ₽
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-right text-gray-400">
                            <div className="flex items-center justify-end">
                              <Clock className="w-3 h-3 mr-1" />
                              {drop.time}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button variant="outline" className="border-cs-purple/30 hover:bg-cs-purple/10 hover:text-cs-purple">
                  <ArrowDown className="w-4 h-4 mr-2" />
                  Загрузить еще
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="week" className="mt-0">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
                <div className="p-8 text-center text-gray-400">
                  Статистика за неделю загружается...
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="month" className="mt-0">
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50">
                <div className="p-8 text-center text-gray-400">
                  Статистика за месяц загружается...
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default TopDrops;
