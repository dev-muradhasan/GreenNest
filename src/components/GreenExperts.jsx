import MyContainer from "./MyContainer";


const GreenExperts = () => {
  const experts = [
    {
      name: "Ayesha Rahman",
      role: "Indoor Plant Specialist",
      image: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Tanvir Ahmed",
      role: "Succulents & Cacti Expert",
      image: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Nusrat Jahan",
      role: "Flowering Plants Consultant",
      image: "https://i.pravatar.cc/150?img=32",
    },
    {
      name: "Kamal Hossain",
      role: "Landscape & Decor Advisor",
      image: "https://i.pravatar.cc/150?img=11",
    },
  ];

  return (
    <section className="bg-white py-10 md:py-16">
      <MyContainer className="px-5">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Meet Our Green Experts
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {experts.map((expert, index) => (
            <div key={index} className="text-center group">
              {/* Image */}
              <div className="mx-auto w-16 h-16 md:w-19 md:h-19 rounded-full overflow-hidden bg-[#cfe3d0]">
                <img
                  src={expert.image}
                  alt={expert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="mt-2 text-sm font-semibold text-gray-800">
                {expert.name}
              </h3>
              <p className="mt-1 text-[10px] md:text-xs text-gray-500 leading-relaxed">
                {expert.role}
              </p>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default GreenExperts;
