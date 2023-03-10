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
            <div className="backface-hidden">
              <img src={card.imagefront} alt={card.altfront} className=" w-full   object-fill  rounded-2xl"/>
            </div>
            <div className="absolute my-rotate-y-180 backface-hidden flex flex-col top-0 right-0 bg-black-100">
              <img src={card.imageback} alt={card.altback} className=" w-full   object-fill  rounded-2xl"/>
            </div>
          </div>
            <div className="flex-auto justify-evenly">
              <div className="flex flex-wrap ">
                <div className="w-full flex-none text-sm flex items-center text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-gray-400 whitespace-nowrap mr-3">{card.grade}</span><span className="mr-2 text-gray-400">{card.pack}</span>
                </div>
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">{card.athlete}</h2>
                  <button onClick={handleDelete} className="transition ease-in duration-100 flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg hover:shadow-lg tracking-wider text-white rounded-full hover:bg-red-600">
                    BENCH</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};
export default Card;
