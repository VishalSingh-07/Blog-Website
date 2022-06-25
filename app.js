const request = require("request")
const express = require("express")
const bodyParser = require("body-parser")
var _ = require("lodash")

const app = express()
const homeStartingContent =
  "The lake or the easy weekend is the desire to want to decorate it. He was always the creator, not the time of his life. Let's be honest of course, let's just be honest. Cartoon earth dwell in this. Then leave the lion or the hotel with a warm door. Until the vengeful keyboard bows, not the members nor the members. Mattis annoys me from the arrows but it was my kids The mountains will be born with great gods and a ridiculous mus will miss life's compensation. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. The vengeful life of the author eu augue to drink at the bed of the bow. I hate the memories at any one laughter but I hate the Olympics. Of course there was a lot of annoyance from the arrows at the kids."
const aboutContent =
  "Hac habitasse pAt this dwelling the street was said to be the entrance of the Zen, to the kids. It was said that the entrance to the world is to be delivered from the pain of the bears. Not a small boat but a porch. Each street is said to be pure arrows. But want to hang on to the price of laughter rather than the Olympic asset. Mauris in aliquam sem fringilla. There is always laughter in the planning of the pregnant makeup, everyone does not have land orcs. A lot of the mass of life is a torturer who can or should For example, the arrows of the earth are the element of life."
const contactContent =
  "And the crime of teenagers until the price of the Olympics is wise. The range of the urn is neither cartoon nor just vengeful. Let us live with the bow of the bow, and drink the cat. The customer's choice is sad. Laughter cartoon boxes at in the earth the entire immune system. The tips of the arrows do not take any Vikings to drink the bow of life. You can create a lot of love from time to time. Now the arrows, but not the lake. Sometimes the pain is placed on the Internet itself, it is important to the main customer. The cushion is not an integral element. The vengeful pregnant woman said that there was no way to invest. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor put down and so that the consequences will always be monitored for free."

const posts = []

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(__dirname))

app.get("/", function (request, response) {
  response.render("home", {
    homefirst: homeStartingContent,
    homepost: posts,
  })
})

app.get("/about", function (request, response) {
  response.render("about", {
    aboutfirst: aboutContent,
  })
})

app.get("/contact", function (request, response) {
  response.render("contact", {
    contactfirst: contactContent,
  })
})

app.get("/compose", function (request, response) {
  response.render("compose")
})
app.get("/posts/:topic", function (request, response) {
  const requestTitle = _.lowerCase(request.params.topic)
  for (var i = 0; i < posts.length; i++) {
    var matchingstring = _.lowerCase(posts[i].title)

    if (matchingstring === requestTitle) {
      console.log("Match Found!!!")

      response.render("post", {
        titlepost: posts[i].title,
        postdesc: posts[i].post,
      })
    } else {
      console.log("NOT MATCH FOUND!!!")
    }
  }
})
app.post("/compose", function (request, response) {
  const posttitle = request.body.title
  const postbody = request.body.post

  const obj = {
    title: posttitle,
    post: postbody,
  }
  posts.push(obj)
  response.redirect("/")
})

app.listen(3000, function () {
  console.log("Server is running on PORT 3000")
})
