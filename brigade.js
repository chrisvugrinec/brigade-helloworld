const { events } = require("brigadier")

 
events.on("exec", () => {
  j = new Job("example")
  j.env= {"MY_ENV_VAR": p.secrets.myVar}
  console.log("Hello world, secret value: "+$MY_ENV_VAR)
})
