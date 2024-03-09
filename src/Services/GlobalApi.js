// import axios from "axios"

// const baseURL = 'http://localhost:5173/api'
// const getAllVideosList = axios.get(baseURL + "/video-list?populate=*")
// export default{
//     getAllVideosList
// }

const videoData = {
    data: [
      {
        id: 1,
        title: 'Learn JSON in 10 Minutes',
        description: 'In this video we will cover everything you need to know about JSON in only 10 minutes. We will cover what JSON is, why JSON is important, what JSON is used for, the syntax of JSON, and multiple examples of JSON. JSON is the most popular data representation format, and is one of the most important, and easiest concepts you can learn in programming. It allows you to create APIs, config files, and structured data. We will be covering all of the terminology, and going through live examples of all the different JSON types.',
        views: 1000000,
        likes: 50000,
        dislikes: 1000,
        duration: '10:30',
        uploader: 'CatLover123',
        upload_date: '2022-06-15',
        tags: ['json', 'web dev'],
        images: {
          thumbnail: '/thumbnails/learn_json.jpg',
          banner: 'https://example.com/banner1.jpg'
        },
        url:'https://www.youtube.com/watch?v=iiADhChRriM'
      },
      {
        id: 2,
        title: 'What is a REST API?',
        description: "What is a REST API? What are the benefits and how are they fundamental to your cloud application? In this lightboard video, Nathan Hekman with IBM Cloud, answers these questions and much more as he visually shows the benefits a company can gain with using REST API.",
        views: 500000,
        likes: 25000,
        dislikes: 500,
        duration: '15:45',
        uploader: 'FoodieChef',
        upload_date: '2023-02-10',
        tags: ['api', 'ibm', 'rest'],
        images: {
          thumbnail: '/thumbnails/rest_api.jpg',
          banner: 'https://example.com/banner2.jpg'
        }
      },{
        id: 3,
        title: 'How the Backend works? Server, Application, Database, and API ( by CodeON Jason K )',
        description: "This time, I will show you how the backend works, which consists of three different parts; server, application, and database. Let's learn what each of them are and how they work at the back side of the web.",
        views: 500000,
        likes: 25000,
        dislikes: 500,
        duration: '15:45',
        uploader: 'FoodieChef',
        upload_date: '2023-02-10',
        tags: ['backend', 'databases', 'api'],
        images: {
          thumbnail: '/thumbnails/backend.jpg',
          banner: 'https://example.com/banner2.jpg'
        }
      },
      {
        id: 4,
        title: 'Reality of Frontend Developers',
        description: 'To try everything Brilliant has to offer—free—for a full 30 days, visit https://brilliant.org/bigboxSWE The first 200 of you will get 20% off Brilliant’s annual premium subscription. This video was sponsored by Brilliant',
        views: 500000,
        likes: 25000,
        dislikes: 500,
        duration: '15:45',
        uploader: 'FoodieChef',
        upload_date: '2023-02-10',
        tags: ['front-end', 'javascript'],
        images: {
          thumbnail: '/thumbnails/reality.jpg',
          banner: 'https://example.com/banner2.jpg'
        }
      },

      // Add more video objects as needed
    ]
  };
  
  const getAllVideosList = () => {
    return Promise.resolve({ data: videoData });
  };
  
  export default {
    getAllVideosList
  };