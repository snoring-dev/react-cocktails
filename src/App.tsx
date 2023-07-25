import AppIcon from "@/assets/icons8-drink-58.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import RandomCocktailPage from "./pages/random-cocktail";

function App() {
  return (
    <div className="w-screen flex flex-col items-center pt-16 pb-20">
      <div className="flex flex-col items-center justify-center">
        <div className="h-30 w-30 pb-4">
          <img src={AppIcon} alt="app title" />
        </div>
        <span className="text-2xl text-black">
          Bienvenue dans la fabrique de Cocktails!
        </span>
      </div>
      <Separator className="w-[600px] mt-4 mb-4" />
      <Tabs defaultValue="random" className="w-[600px]">
        <TabsList>
          <TabsTrigger value="random">Cocktail au hasard</TabsTrigger>
          <TabsTrigger value="find">Trouver un cocktail</TabsTrigger>
          <TabsTrigger value="listing">Liste des cocktails</TabsTrigger>
        </TabsList>
        <TabsContent value="random">
          <RandomCocktailPage />
        </TabsContent>
        <TabsContent value="find">Look for you preferred cocktail.</TabsContent>
        <TabsContent value="listing">
          Here will be a list of cocktails.
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
