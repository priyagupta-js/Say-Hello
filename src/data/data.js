import image1 from "../../src/assets/certificate.png";
import user1 from "../../src/assets/user-pic.jpg";
export const users = [
  {
    id: 1,
    text: "Just finished building my first React app!",
    hashtags: ["#ReactJS", "#WebDevelopment", "#100DaysOfCode"],
    content: "I finally completed my to-do list app using React Hooks and Context API.",
    image:{image1},
    userLogo : "https://randomuser.me/api/portraits/women/1.jpg",
    likedBy: 154,
    comments:6,
    bio: "Frontend Dev | Learning in public",
    time: "2h"
  },
  {
    id: 2,
    text: "CSS Grid vs Flexbox: Which one to use?",
    hashtags: ["#CSS", "#Flexbox", "#Grid"],
    content: "After using both for layout building, I’ve found Grid to be great for 2D layouts!",
    image:{image1},
    userLogo: "https://randomuser.me/api/portraits/men/2.jpg",
    likedBy: 212,
    comments:6,
    bio: "UI Designer & Frontend Enthusiast",
    time: "1d"
  },
  {
    id: 3,
    text: "Mastering MongoDB Aggregation Framework",
    hashtags: ["#MongoDB", "#Backend", "#NoSQL"],
    content: "Aggregation pipelines are super powerful once you get used to them.",
    image:{image1},
    userLogo: "https://randomuser.me/api/portraits/men/3.jpg",
    likedBy: 320,
    comments:6,
    bio: "Backend Developer | Node.js & MongoDB",
    time: "5h"
  },
  {
    id: 4,
    text: "VS Code extensions I can't live without",
    hashtags: ["#VSCode", "#Productivity", "#DevTools"],
    content: "Prettier, GitLens, and Live Server are absolute essentials!",
    image:"https://source.unsplash.com/random/600x400?technology",
    userLogo: "https://randomuser.me/api/portraits/women/4.jpg",
    likedBy: 98,
    comment:6,
    bio: "Student Developer | Exploring tools & workflows",
    time: "3d"
  },
  {
    id: 5,
    text: "How I cracked my first internship interview",
    hashtags: ["#Internship", "#Career", "#WomenWhoCode"],
    content: "Consistency and side projects helped me land the opportunity!",
    image: "https://source.unsplash.com/random/300x200?career",
    userLogo: "https://randomuser.me/api/portraits/women/5.jpg",
    likedBy: 450,
    comments:6,
    bio: "CS Undergrad | Full-stack enthusiast",
    time: "4h"
  }
];
