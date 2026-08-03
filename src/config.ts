export type CameraMode = "vintage" | "modern" | "polaroid";

export const CONFIG = {
  //change the gradient colors to pink, purple, and blue
  gradientColors: ["#ff00ff", "#800080", "#0000ff"],

  name: "Heba Adel",

  funFact: "I hate to pay my billssssssssss.",

  isOnCloud: false,

  enablePhotoBooth: true,

  photoBoothMode: "polaroid" as CameraMode,

  favorite: {
    category: "movie",

    title: "The Odessy",

    posterUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3H1ZUqnzZ5lsiZTW4ThEYUllw7vqtijqp2hUx6sho8A&s=10",
  },
};
