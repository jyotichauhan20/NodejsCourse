const EventEmitter = require("events");
const event = new EventEmitter();


event.on("checkPage", (sc, msg) => {
    console.log(`status code is ${sc} and page is ${msg}`)
});
event.emit("checkPage",200,"ok");
