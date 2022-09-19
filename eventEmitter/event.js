const EventEmitter = require("events");
const event = new EventEmitter();

event.on("sayMyName", () => {
    console.log("Your name is jyoti chauhan");
  });
  
  event.on("sayMyName", () => {
    console.log("Your name is Gudia");
  });
  event.on("sayMyName", () => {
      console.log("Your name is Jyoti rani bahera");
  });

event.emit("sayMyName");


