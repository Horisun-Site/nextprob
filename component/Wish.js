import React from "react";

const projects = [
  {
    id: 1,
    name: "Business firm site",
    image: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
    link: "https://wellow.vercel.app/",
  },
  {
    id: 2,
    name: "E-commerce App",
    image: "https://cdn.pixabay.com/photo/2016/06/19/08/58/shop-1466324_1280.jpg",
    link: "https://timi-shop-x15j.vercel.app/",
  },
  {
    id: 3,
    name: "fun and cooking site",
    image: "https://cdn.pixabay.com/photo/2025/08/08/07/43/cooking-9762156_1280.png",
    link: "https://fun-site-three.vercel.app/",
  },
  {
    id: 4,
    name: "Note-Pad App",
    image: "https://cdn.pixabay.com/photo/2018/04/07/08/28/notepad-3297994_1280.jpg",
    link: "https://timpad.vercel.app/",
  },
  {
    id: 5,
    name: "mini-blog site",
    image: "https://cdn.pixabay.com/photo/2015/03/22/15/26/blog-684748_1280.jpg",
    link: "https://timilehin-blog-dcjb.vercel.app/",
  },
  {
    id: 6,
    name: "Pet Store site",
    image: "https://cdn.pixabay.com/photo/2022/03/09/18/09/dog-7058440_960_720.jpg",
    link: "https://web1-alpha-drab.vercel.app/",
  },
  {
    id: 7,
    name: "auto mobile site",
    image: "https://cdn.pixabay.com/photo/2019/10/29/12/21/motor-4586782_1280.jpg",
    link: "https://chart-kappa-orcin.vercel.app/",
  },
  {
    id: 8,
    name: "Login and Register",
    image: "https://cdn.pixabay.com/photo/2022/08/24/20/54/subscribe-7408764_1280.png",
    link: "https://todo-zeta-dusky-59.vercel.app/",
  },
  {
    id: 9,
    name: "Business firm site",
    image: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261_1280.jpg",
    link: "https://wellow.vercel.app/",
  },
];

const Wish = () => {
  return (
    <div className="min-h-[100vh] bg-gradient-to-br from-gray-500 via-green-300 to-gray-500 text-gray-900 px-6 py-10">
      <h2 className="text-center text-3xl font-bold mb-10 animate-fadeSlide">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="flex flex-col items-center animate-cardFadeUp"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-60 h-40 object-cover rounded-xl cursor-pointer
                  transition-all duration-500
                  group-hover:scale-105
                  group-hover:shadow-2xl"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 rounded-xl bg-black/40 opacity-0
                  group-hover:opacity-100 transition duration-500
                  flex items-center justify-center"
                >
                  <span className="text-white text-lg font-semibold tracking-wide">
                    View Project →
                  </span>
                </div>
              </div>
            </a>

            <p className="mt-4 text-lg font-semibold tracking-wide animate-fadeIn">
              {project.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wish;
