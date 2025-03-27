import React from "react";

const Card = () => {
    return(
      <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white p-6 border border-gray-200">
      <img src="/assets/imgs/Rectangle 7.png" alt="" />
      <div className="py-4">
        <h1 className="text-xl font-semibold text-gray-800">RPG: Warhammer 40k</h1>
        <h2 className="text-xl font-semibold text-gray-800">Nome do Personagem</h2>
        <p className="text-gray-600 mt-2 text-sm">História do Personagem</p>
        <p className="text-gray-600 mt-2 text-sm font-medium">Skills do Personagem</p>
        <p className="text-gray-700 mt-2 text-sm font-semibold">Condição do Personagem</p>
        <div className="mt-2 flex items-center gap-4">
          <label className="flex items-center text-gray-700 text-sm">
            <input type="radio" name="condicao" className="mr-1" /> Vivo
          </label>
          <label className="flex items-center text-gray-700 text-sm">
            <input type="radio" name="condicao" className="mr-1" /> Morto
          </label>
        </div>
        <p className="text-gray-700 mt-2 text-sm font-semibold">Level do Personagem</p>
      </div>
    </div>
    )
}


export default Card;