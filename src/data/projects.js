import faceCardImage from './images/face_app.png';
export const projects = [
    {
      id: 1,
      title: "Todo App",
      tagline: "A no‑frills productivity helper.",
      image: "/projects/todo.png",  // temp placeholder in public/projects/
      tags: ["React", "Tailwind"],
      repo: "https://github.com/priyanshugithub/todo",
      live: "https://todo.priyanshu.dev",
    },
    {
      id: 2,
      title: "WeatherNow",
      tagline: "Live weather powered by OpenWeather API.",
      image: "/projects/weather.png",
      tags: ["React", "API", "Context"],
      repo: "https://github.com/priyanshugithub/weather",
      live: "https://weather.priyanshu.dev",
    },
    {
        id: 3,
        title: "FaceDetection",
        tagline: "Face Detection App that detects faces in a image",
        image: faceCardImage,
        tags: ["React", "API", "Context"],
        repo: "https://github.com/priyanshugithub/FaceApp",
        live: "https://weather.priyanshu.dev",
      },
    // add 1–2 more
  ];
  