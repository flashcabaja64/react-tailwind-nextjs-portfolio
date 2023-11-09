import chatProject from '../../public/chat.jpg';
import choreProject from '../../public/chore_runner.jpg';
import deliveryProject from '../../public/delivery.jpg';
import evolveProject from '../../public/evolve.jpg';
import shoplocalProject from '../../public/local.jpg';
import webpackProject from '../../public/webpack.jpg';
import rentProject from '../../public/rentCar.jpeg';
import aiToolboxProject from '../../public/ai_toolbox.jpg'

const projectDetails = [
  {
    id: 1,
    title: "AI Toolbox",
    summary: "Explore a comprehensive online platform that houses a diverse collection of cutting-edge AI tools. This website is your gateway to a wealth of artificial intelligence resources, offering solutions for tasks ranging from natural language processing and image generation to text summarization and text to audio conversions. Harness the power of AI effortlessly.",
    img: aiToolboxProject,
    link: "https://ai-toolbox.vercel.app/",
    github: "https://github.com/flashcabaja64/ai-toolbox",
    type: "AI Tools"
  },
  {
    id: 2,
    title: "Chat Away App",
    summary: "The online front-end chat application is a versatile and reliable tool designed for real-time communication and collaboration. It allows users to connect via direct messaging, private channels, and group conversations. The platform's modern design and intuitive interface make it easy to use and navigate, while the image uploading feature enables users to share visual content with ease. Overall, it is an excellent resource for remote teams or groups looking to work together in a digital environment.",
    img: chatProject,
    link: "https://chat-away-server.web.app/",
    github: "https://github.com/flashcabaja64/chat-away-app",
    type: "Personal Chat App"
  },
  {
    id: 3,
    title: "Shop Local",
    summary: "Shop local restaurants for cashback is a great way to support small businesses in your community while saving money on your purchases. With this platform, users can browse local restaurants and cafes, place orders online, and earn cashback rewards for their purchases. Overall, it's an excellent resource for anyone looking to support their local economy and get more value out of their dining experiences.",
    img: shoplocalProject,
    link: "https://www.shop.com/shoplocal",
    github: false,
    type: "Shop Local Favorites"
  },
  {
    id: 4,
    title: "EvolveChat",
    summary: "The chat application designed for health insurance employees is a powerful tool for facilitating communication and collaboration within a large organization. This platform allows employees to connect with one another in real-time, sharing insights and ideas to improve the quality of service provided to customers. With its secure messaging capabilities, this app is an ideal resource for teams looking to work together effectively and efficiently.",
    img: evolveProject,
    link: "https://apps.apple.com/us/app/evolvechat/id1567123775",
    github: false,
    type: "Health Care Chat App"
  },
  {
    id: 5,
    title: "Shop.com Webpack 5",
    summary: "Single-handedly designed the entire webpack 5 that provided customers with an exceptional online shopping experince with its powerful bundling capabilities. Because of ths implementation loading times of website exceeded over 15% than its prior build. This help paved a way to ship better and new user interfaces and featured applications.",
    img: webpackProject,
    link: "https://www.shop.com/",
    github: false,
    type: "E-Commerce Project"
  },
  {
    id: 56,
    title: "Chore Runner",
    summary: "Help track child chores and reward them upon completion is a fantastic tool for busy parents. With its intuitive interface and advanced functionality, this platform makes it easy to create chore charts, assign tasks, and track progress. Whether you're looking to teach your children responsibility or simply keep your household running smoothly, this website is an excellent resource for anyone looking to simplify their daily routines.",
    img: choreProject,
    link: "https://chore-runner-client.vercel.app/",
    github: "https://github.com/flashcabaja64/ChoreRunner-Client",
    type: "Track Children's House Chores"
  },
  {
    id: 7,
    title: "Chow Cab (Native)",
    summary: "Chow Cab is a food delivery app that connects customers with local restaurants. Users can browse menus, place orders, and track deliveries in real-time. The app's intuitive interface and widespread availability make it a popular choice for anyone looking to order food from the comfort of their own home.",
    img: deliveryProject,
    link: "https://expo.dev/%40flashcabaja64/newapp?serviceType=classic&distribution=expo-go&releaseChannel=default",
    github: "https://github.com/Team-Food-Delivery/food-delivery-webapp",
    type: "Order Local Food Deliveries",
  },
  {
    id: 8,
    title: "Rent a Car (Native)",
    summary: "Rent-A-Car app is a car sharing app that helps users book cars local to their area. They can filter based on the types of car they want to rent and view all the pertinent information in order for them to make an inform decision.",
    img: rentProject,
    link: "https://expo.dev/@flashcabaja64/rent-a-car?serviceType=classic&distribution=expo-go",
    github: "https://github.com/flashcabaja64/rent-a-car-app",
    type: "Local Car Rentals",
  },
]

export default projectDetails;