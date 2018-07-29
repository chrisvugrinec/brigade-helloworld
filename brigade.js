const { events } = require("brigadier")

events.push = function(e, p) {
  j = new Job("example")
  j.env= {"MY_ENV_VAR": p.secrets.myVar}
}
 
events.on("exec", () => {
 console.log("Hello world, secret value: $MY_ENV_VAR")
})
