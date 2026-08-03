export type CameraMode = "vintage" | "modern" | "polaroid";

export const CONFIG = {
  gradientColors: ["#ff0000", "#ff9900", "#ffff00"],

  name: "Heba Adel",

  funFact: "I hate to pay my bills.",

  isOnCloud: false,

  enablePhotoBooth: true,

  photoBoothMode: "polaroid" as CameraMode,

  favorite: {
    category: "movie",

    title: "The Odessy",

    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H1ZUqnzZ5lsiZTW4ThEYUllw7vqtijqp2hUx6sho8A&s=10",
  },
};
