import MyContainer from "./MyContainer";

const EcoDecorIdeas = () => {
  const ideas = [
    {
      title: "Cozy Reading Corner",
      image:
        "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Boho Balcony",
      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Minimalist Shelf Styling",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="bg-[#eef8ed] py-14 md:py-16">
      <MyContainer className="px-5">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Eco Decor Ideas
          </h2>
          <p className="text-xs md:text-sm text-gray-500 mt-2">
            Style your space naturally with greenery
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {ideas.map((idea, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden rounded-lg shadow-sm hover:shadow-md transition duration-300 group"
            >
              <div className="h-44 overflow-hidden bg-[#cfe3d0]">
                <img
                  src={idea.image}
                  alt={idea.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="px-2 py-2">
                <h3 className="text-sm font-semibold text-gray-800">
                  {idea.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default EcoDecorIdeas;
