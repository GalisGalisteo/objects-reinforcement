const users = [
  {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
    name: "Alex",
  },
  {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
    name: "Asab",
  },
  {
    email: "daniel@daniel.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 30,
    isLoggedIn: true,
    points: 50,
    name: "Brook",
  },
  {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Daniel",
  },
  {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
    name: "John",
  },
  {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Thomas",
  },
  {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
    name: "Paul",
  },
];

/**
 * Recorre el array de usuarios y encuentra aquél usuario que tiene más 'skills' de todos.
 * El resultado de tu búsqueda debería ser Asab.
 */


let maxSkills = 0;
let usersWithMostSkills = [];

users.forEach(user => {
  if (user.skills.length > maxSkills) {
    maxSkills = user.skills.length;
    usersWithMostSkills = [user];
  } else if (user.skills.length === maxSkills) {
    usersWithMostSkills.push(user);
  }
});

console.log("🚀 ~ file: ex3.js:85 ~ usersWithMostSkills:", usersWithMostSkills)

const sortedUsers = users.sort((a, b) => b.skills.length - a.skills.length);
sortedUsers.forEach(sortedUser => sortedUser.skills.length === sortedUser.skills.length)
const maxSkill = sortedUsers[0].skills.length;
const usersMostSkills = sortedUsers.filter(user => user.skills.length === maxSkill);
console.log("🚀 ~ file: ex3.js:110 ~ usersMostSkills:", usersMostSkills)




const usersReduce = users.reduce((prevUser, currentUser) => {
  if (prevUser.skills.length > currentUser.skills.length) {
    return prevUser;
  }
  return  currentUser;
}, users[0])
const userWithMostSkills = usersReduce.name;
console.log("🚀 ~ file: ex3.js:87 ~ userWithMostSkills ~ userWithMostSkills:", userWithMostSkills)

// const userMaxSkills = users.filter(user => {
//   return user.skills.length
// })
// console.log("🚀 ~ file: ex3.js:87 ~ userMaxSkills ~ userMaxSkills:", users[0].skills.length)

// for (let i in users) {

// }