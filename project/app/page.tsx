"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAE6FF] p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-[#4B0082] mb-6 text-center">SUIVI DE COMMANDE</h1>

        <div className="relative mb-6">
          <Input
            type="text"
            placeholder="Rechercher par numéro de suivi"
            className="w-full pl-10 py-3 bg-white rounded-lg border border-gray-300 shadow-sm"
          />
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        </div>

        <Card className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-[#4B0082] font-semibold text-lg">Commande N°2801112023</h2>
            <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
              En cours de traitement
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-[#4B0082] font-medium mb-3">CLIENT</h3>
            <p className="font-medium">Michel Gagnant</p>
            <p className="text-blue-600 underline">michel@gagnant.com</p>
            <p className="text-gray-600 mt-2 font-medium">Adresse :</p>
            <p>3 rue des Alpes, 33498</p>
            <p>VENOSC</p>
          </div>

          <div className="mb-6">
            <h3 className="text-[#4B0082] font-medium mb-4">Détails de la commande</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div>
                  <p className="font-medium">Produit 1</p>
                  <p className="text-sm text-gray-600">Prix unitaire : 30€</p>
                </div>
                <button className="text-red-500 text-sm font-medium">× Supprimer</button>
              </div>
              <div className="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
                <div>
                  <p className="font-medium">Produit 1</p>
                  <p className="text-sm text-gray-600">Prix unitaire : 30€</p>
                </div>
                <button className="text-red-500 text-sm font-medium">× Supprimer</button>
              </div>
            </div>
            <button className="text-[#4B0082] mt-4 text-sm font-medium underline">
              Ajouter un produit +
            </button>
          </div>

          <div className="text-right mb-6">
            <span className="text-[#4B0082] font-medium text-lg">TOTAL</span>
            <p className="text-[#4B0082] text-2xl font-bold">60€ TTC</p>
          </div>

          <div className="flex justify-between">
            <button className="text-[#4B0082] underline text-sm font-medium">
              Générer une facture
            </button>
            <button className="text-red-500 text-sm font-medium">
              Annuler la commande
            </button>
          </div>
        </Card>
      </div>
    </main>
  );
}
