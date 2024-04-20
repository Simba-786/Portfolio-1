function HonoursAndAwards() {
  
  return (
    <div className="flex gap-4 flex-col px-4">
      <h2 className="text-center underline underline-offset-2 uppercase tracking-wider font-bold text-xs">
        Honours And Awards
      </h2>

      <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="cards animate-bounce-1">
          Service & Commitment Award - Tata Consultancy Services
        </div>
        <div className="cards animate-bounce-2 ">
          On the Spot (Team) Award - Tata Consultancy Services
        </div>
        <div className="cards animate-bounce-3">
          Service & Commitment Award - Tata Consultancy Service
        </div>
        <div className="cards animate-bounce-4 ">
          Fresco Play Miles Award - Tata Consultancy Services
        </div>
        <div className="cards animate-bounce-5 ">
          Star Team Award - Tata Consultancy Services
        </div>
        <div className="cards animate-bounce-6 ">
          Certificate Of Appreciation - Tata Consultancy Services
        </div>
      </div>
    </div>
  );
}

export default HonoursAndAwards;
