import { FaTint, FaSun, FaSeedling } from "react-icons/fa";
import MyContainer from "./MyContainer";

const PlantCareTips = () => {
  const tips = [
    {
      icon: <FaTint color="#0E87CC" size={25} />,
      title: "Watering",
      description:
        "Water when the top inch of soil feels dry. Avoid over watering.",
    },
    {
      icon: <FaSun color="#FCE570" size={25} />,
      title: "Sunlight",
      description:
        "Most indoor plants love bright, indirect light near a window.",
    },
    {
      icon: <FaSeedling size={25} />,
      title: "Fertilizing",
      description:
        "Feed monthly during spring & summer with a balanced fertilizer.",
    },
  ];

  return (
    <section className="bg-[#eef8ed] py-14 md:py-16 mb-16">
      <MyContainer className="">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Plant Care Tips
          </h2>
        </div>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-5 min-h-31
              shadow-sm hover:shadow-lg transition duration-300"
            >
              <h3 className="flex items-center gap-3 font-semibold text-[#267442] mb-2">
                <span>{tip.icon}</span>
                <span>{tip.title}</span>
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                {tip.description}
              </p>
            </div>
          ))}
        </div>
      </MyContainer>
    </section>
  );
};

export default PlantCareTips;
