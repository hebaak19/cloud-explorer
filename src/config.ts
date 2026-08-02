export type CameraMode = "vintage" | "modern" | "polaroid";

export const CONFIG = {
  gradientColors: ["#ff0000", "#ff9900", "#ffff00"],

  name: "Heba Alkatheri",

  funFact: "I hate to pay my bills.",

  isOnCloud: false,

  enablePhotoBooth: true,

  photoBoothMode: "polaroid" as CameraMode,

  favorite: {
    category: "movie",

    title: "The Odessy",

    posterUrl: "/public/images.png",
  },
};
