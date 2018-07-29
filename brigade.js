const { events, Job } = require("brigadier")

events.on("exec", (event, project) => {
  var hello = new Job("hello", "alpine:3.4")
  hello.env= {"MY_ENV_VAR": project.secrets.username}
  hello.tasks = [
    "echo Hello",
    "echo World $MY_ENV_VAR"
  ]

  hello.run()
})
