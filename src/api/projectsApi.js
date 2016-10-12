import delay from './delay';

const projects = [
  {
    id: "plastic-walrus",
    title: "Plastic Walrus Inc",
    type: "eCommerce, Website, Wordpress",
    linkToSite: "http://plasticwalrus.com/",
    description: "",
    objectives: "Create an eCommerce site",
    tech: "Wordpress, Google Analytics"
  },
  {
    id: "rad-how-to-school",
    title: "Rad How To School",
    type: "Website, Wordpress",
    linkToSite: "http://radhowtoschool.com/",
    description: "",
    objectives: "Create an engaging and modern site to provide visitors with information on the artist. Allow students to register for classes on the site.",
    tech: "Wordpress"
  },
  {
    id: "halfway-hang",
    title: "Halfway Hang",
    type: "App, Website",
    linkToSite: "http://halfwayhang.herokuapp.com/map",
    description: "Halfway Hang is app for users to find a middleplace to meet. Whether it be a coffee shop, restaurant, or bar, this app will help you find a meeting place with your friends!".
    objectives: "User authentication, routing, design",
    tech: "NodeJs, Express, Ajax, Mongo/Mongoose, HTML, CSS, Twitter Bootstrap, Facebook Authentication API, Google Maps API, Yelp API, Passport Authentication"
  }
];

// Use setTimeout to simulate the delay of an AJAX call
// All calls return promises
class ProjectApi {
  static getAllProjects(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }
}

export default ProjectApi;
