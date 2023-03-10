import React from 'react'

function Card({removeCardFromList, card}) {

  const handleDelete = () => {
    fetch(`http://localhost:3000/cards/${card.id}`, { method: "DELETE"})
      .then(removeCardFromList(card.id))
  }
  return (
    
    <div className="inline-block">





    <div >
      <div className="border-hidden border-2 border-sky-500 max-w-xs bg-black hover:border-solid hover:bg-gray-800 shadow-lg rounded-xl p-6 cursor-pointer group perspective">
        <div className="max-w-xs">
          <div className="">
            <div className="relative preserve-3d group-active:my-rotate-y-180 h-62 w-full mb-3 duration-1000">
              <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-100 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg></button>
              </div>
              <div className="backface-hidden">
                <img src={card.imagefront} alt={card.altfront} className=" w-full   object-fill  rounded-2xl"/>
              </div>
              <div className="absolute my-rotate-y-180 backface-hidden flex flex-col top-0 right-0 bg-black-100">
                <img src={card.imageback} alt={card.altback} className=" w-full   object-fill  rounded-2xl"/>
              </div>
            </div>
            <div className="flex items-center w-full justify-between min-w-0 ">
              <h2 className="w-full text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">{card.athlete}</h2>
              <button onClick={handleDelete} className="transition ease-in duration-100 inline-flex items-center hover:shadow-lg hover:bg-red-600 bg-red-400 text-white text-sm px-2 py-1 ml-3 rounded-lg">
                BENCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Card;