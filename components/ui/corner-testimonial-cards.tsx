"use client";

const CornerTestimonialCards = () => {
  const cards = [
    {
      quote: "AI-driven workflows transform how teams operate and scale.",
      name: "Sundar Pichai",
      role: "CEO, Google",
      img: "/ceos/sundar.jpg",
      pos: "top-[100px] left-[0.8px] -rotate-6"
    },
    {
      quote: "Intelligent automation enables new levels of execution.",
      name: "Satya Nadella",
      role: "CEO, Microsoft",
      img: "/ceos/satya.jpg",
      pos: "top-[100px] right-[80px] rotate-6"
    },
    {
      quote: "AI will power the future of productivity.",
      name: "Sam Altman",
      role: "CEO, OpenAI",
      img: "/ceos/sam.jpg",
      pos: "top-[360px] left-[80px] -rotate-3"
    },
    {
      quote: "Automation accelerates breakthroughs across industries.",
      name: "Elon Musk",
      role: "CEO, Tesla & SpaceX",
      img: "/ceos/elon.jpg",
      pos: "top-[360px] right-[40px] rotate-3"
    }
  ];

  return (
    <div className="absolute inset-0 z-[7] pointer-events-none hidden md:block">
      {cards.map((card, i) => (
        <div key={i} className={`absolute ${card.pos}`}>
          <div
            className="
              bg-white text-black p-6 w-[260px] rounded-2xl pointer-events-auto
              shadow-[0_8px_20px_rgba(0,0,0,0.25)]
              border border-zinc-200
              transition-transform hover:scale-[1.03]
            "
          >
            {/* Image */}
            <div className="w-full flex justify-center mb-4">
              <img
                src={card.img}
                alt={card.name}
                className="w-14 h-14 rounded-full object-cover border border-zinc-300 shadow"
              />
            </div>

            {/* Quote */}
            <p className="text-sm text-zinc-700 leading-relaxed">
              &quot;{card.quote}&quot;
            </p>

            {/* Name & role */}
            <p className="mt-4 text-sm font-semibold">
              – {card.name}, {card.role}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CornerTestimonialCards;
