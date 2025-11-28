import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import MainBtn from "../Mainbtn/MainBtn";

export default function SliderSection() {
  const testimonials = [
    {
      name: "Helen Guo",
      username: "@HelenGuo_",
      image: "/images/helen.jpg",
      text: "I've been using PostPilot for years. Good for retention. You can get creative with messaging.",
    },
    {
      name: "Nathan Woods",
      username: "@HeisNathan",
      image: "/images/nathan.jpg",
      text: "Done some rad winbacks to customers since purchase. PostPilot team is one of my favs.",
    },
    {
      name: "Chris Lander",
      username: "@chris_basis",
      image: "/images/chris.jpg",
      text: "+1 for PostPilot. It’s been wonderful. Their team is super helpful every time.",
    },
    {
      name: "Helen Guo",
      username: "@HelenGuo_",
      image: "/images/helen.jpg",
      text: "I've been using PostPilot for years. Good for retention. You can get creative with messaging.",
    },
    {
      name: "Nathan Woods",
      username: "@HeisNathan",
      image: "/images/nathan.jpg",
      text: "Done some rad winbacks to customers since purchase. PostPilot team is one of my favs.",
    },
    {
      name: "Chris Lander",
      username: "@chris_basis",
      image: "/images/chris.jpg",
      text: "+1 for PostPilot. It’s been wonderful. Their team is super helpful every time.",
    },
    {
      name: "Daniel Ross",
      username: "@danross",
      image: "/images/nathan.jpg",
      text: "Great tool! Helped us increase return customers by 30%.",
    },
  ];

  return (
    <div className="py-20 overflow-hidden">
      <h2 className="text-center text-4xl font-bold mb-12">
        PostPilot is <span className="text-orange-500">🔥</span> for{" "}
        <span className="text-[#009387] grace-title text-5xl">DTC</span>
      </h2>

      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        className="px-10"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="!w-[350px]">
            <div className="border border-gray-300 rounded-xl p-6 shadow-sm bg-white h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-4">
                  <img
                    src={t.image}
                    className="w-12 h-12 rounded-full object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <p className="text-sm text-gray-500">{t.username}</p>
                  </div>
                </div>
                <span className="text-xl">
                  <i className="fa-brands fa-twitter"></i>
                </span>
              </div>

              <p className="text-gray-700 leading-relaxed">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-10">
        <MainBtn txt=" TRY IT RISK-FREE" className="" />
      </div>
    </div>
  );
}
