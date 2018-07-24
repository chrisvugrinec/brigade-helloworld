const { events } = require('brigadier')

events.on("exec", (brigadeEvent, project) => {
  console.log("Hello world! FROM GITHUB...now changed and commited")
})
