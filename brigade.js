const { events, Job } = require("brigadier")

events.on("exec", () => {
  var hello = new Job("hello", "alpine:3.4")
  hello.env= {"MY_ENV_VAR": p.secrets.myVar}
  hello.tasks = [
    "echo Hello",
    "echo World $MY_ENV_VAR"
  ]

  hello.run()
})
