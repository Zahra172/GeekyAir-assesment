import { useState } from "react";

export default function StepsSection() {
  const [active, setActive] = useState(1);

  const steps = [
    {
      id: 1,
      title: "Segment",
      desc: "Divide your audience into relevant groups for better personalization.",
    },
    {
      id: 2,
      title: "Design",
      desc: "Create visually appealing and high-performing message flows.",
    },
    {
      id: 3,
      title: "Send",
      desc: "One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week.",
    },
    {
      id: 4,
      title: "Convert",
      desc: "Track performance and optimize conversion at every stage.",
    },
  ];

  return (
    <section className="  px-6 md:px-16">
      <h2 className="pb-14 text-[4rem] text-center font-bold text-[#2E2F35]">
        Fast launch. Fast results.
        <br /> <span className="grace-title ">Here's how.</span>
      </h2>

      <div className="mt-16 max-w-xl  flex flex-col gap-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col">
            
            <button
              onClick={() => setActive(step.id === active ? null : step.id)}
              className="flex items-center gap-4 text-left"
            >
              <span
                className={`text-3xl font-semibold ${
                  active === step.id ? "text-teal-600" : "text-teal-300"
                }`}
              >
                {String(step.id).padStart(2, "0")}
              </span>

              <span
                className={`text-3xl font-bold ${
                  active === step.id ? "text-gray-900" : "text-gray-400"
                }`}
              >
                {step.title}
              </span>
            </button>

            
            <div
              className={`overflow-hidden transition-all duration-500 ${
                active === step.id
                  ? "max-h-40 opacity-100 mt-3"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 leading-relaxed pl-10 border-l-2 border-gray-300">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
