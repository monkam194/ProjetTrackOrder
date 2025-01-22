"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OrderDetails from "@/components/OrderDetails"; // Import du composant

export default function Home() {
  const [trackId, setTrackId] = useState("");
  const [order, setOrder] = useState<any>(null);

  const handleSearch = async () => {
    if (!trackId) return;

    try {
      const response = await fetch(`https://localhost:7035/Orders/track/${trackId}`);
      if (response.ok) {
        const data = await response.json();
        setOrder(data);
      } else {
        alert("Commande introuvable !");
      }
    } catch (error) {
      console.error("Erreur lors de la récupération de la commande :", error);
    }
  };

  return (
    <main className="min-h-screen bg-[#EAE6FF] p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-[#4B0082] mb-6 text-center">
          SUIVI DE COMMANDE
        </h1>

        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Rechercher par numéro de suivi"
            value={trackId}
            onChange={(e) => setTrackId(e.target.value)}
            className="w-full pl-10 py-3 bg-white rounded-lg border border-gray-300 shadow-sm"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Button onClick={handleSearch} className="mt-4 w-full">
            Rechercher
          </Button>
        </div>

        {order && <OrderDetails order={order} />}
      </div>
    </main>
  );
}
