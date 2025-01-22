import { Card } from "@/components/ui/card";

const OrderDetails = ({ order }: { order: any }) => {
  if (!order) {
    return <p>Les données de la commande sont introuvables.</p>;
  }

  return (
    <Card className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[#4B0082] font-semibold text-lg">
          Commande N°{order.trackId}
        </h2>
        <span className="bg-yellow-100 text-yellow-800 text-sm px-3 py-1 rounded-full">
          {order.status}
        </span>
      </div>

      <div className="mb-6">
        <h3 className="text-[#4B0082] font-medium mb-3">CLIENT</h3>
        <p className="font-medium">{order.customerName}</p>
        {/* Si une adresse est ajoutée dans l'API, affichez-la ici */}
        {/* Exemple : <p>{order.customerAddress}</p> */}
      </div>

      <div className="mb-6">
        <h3 className="text-[#4B0082] font-medium mb-4">Détails de la commande</h3>
        <div className="space-y-4">
          {order.products.map((product: any, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
            >
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-gray-600">
                  Prix unitaire : {product.price}€
                </p>
              </div>
              <button className="text-red-500 text-sm font-medium">
                × Supprimer
              </button>
            </div>
          ))}
        </div>
        <button className="text-[#4B0082] mt-4 text-sm font-medium underline">
          Ajouter un produit +
        </button>
      </div>

      <div className="text-right mb-6">
        <span className="text-[#4B0082] font-medium text-lg">TOTAL</span>
        <p className="text-[#4B0082] text-2xl font-bold">
          {order.totalPrice}€ TTC
        </p>
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
  );
};

export default OrderDetails;
