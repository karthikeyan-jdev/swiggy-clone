export const FoodCategoriesData = {
  top: [
    {
      id: 1,
      name: "Biryani",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Biryani.png",
    },
    {
      id: 2,
      name: "South Indian",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/South%20Indian.png",
    },
    {
      id: 3,
      name: "Chinese",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Chinese.png",
    },
    {
      id: 4,
      name: "North Indian",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/North%20Indian.png",
    },
    {
      id: 5,
      name: "Pizza",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pizza.png",
    },
    {
      id: 6,
      name: "Cake",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Cake.png",
    },
    {
      id: 7,
      name: "Burger",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Burger.png",
    },
    {
      id: 8,
      name: "Pure Veg",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pure%20Veg.png",
    },
    {
      id: 9,
      name: "Parotta",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Parotta.png",
    },
    {
      id: 10,
      name: "Noodles",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Noodles.png",
    },
  ],
  more: [
    {
      id: 1,
      name: "Pasta",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pasta.png",
    },
    {
      id: 2,
      name: "Shawarma",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shawarma.png",
    },
    {
      id: 3,
      name: "Rolls",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Rolls.png",
    },
    {
      id: 4,
      name: "Dosa",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Dosa.png",
    },
    {
      id: 5,
      name: "Paratha",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Paratha.png",
    },
    {
      id: 6,
      name: "Pastry",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Pastry.png",
    },
    {
      id: 7,
      name: "Shake",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Shake.png",
    },
    {
      id: 8,
      name: "Ice Cream",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Ice%20Cream.png",
    },
    {
      id: 9,
      name: "Salad",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Salad.png",
    },
    {
      id: 10,
      name: "Idli",
      image:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/PC_Mweb/Idli.png",
    },
  ],
};

export const getFoodCategories = async (): Promise<any> => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve(FoodCategoriesData);
    }, 2000);
  });
};
