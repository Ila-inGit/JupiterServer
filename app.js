var express = require("express"),
  fs = require("fs"),
  cors = require("cors");
const { send } = require("process");
const app = express();
const port = process.env.PORT || 3001;

app.use("/uploadedFiles", express.static(__dirname + "/uploadedFiles"));
app.use(express.static(__dirname + "/uploadedFiles"));
app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => res.type("html").send(html));

app.listen(port, () =>
  console.log(`Jupiter server listening on port ${port}!`)
);

app.post("/uploadFile", (req, res) => {
  const sessionToken = req.query.sessionToken;
  var body = "";
  var filePath = __dirname + "/uploadedFiles/" + sessionToken + ".txt";
  req.on("data", function (data) {
    body += data;
  });
  req.on("end", function () {
    fs.writeFile(filePath, body, function () {
      res.end();
    });
  });
  res.status(200).send(filePath);
});

app.get("/requestFile", (req, res) => {
  const sessionToken = req.query.sessionToken;
  var filePath = __dirname + "/uploadedFiles/" + sessionToken + ".txt";
  res.download(filePath);
});

app.get("/deleteFile", (req, res) => {
  const sessionToken = req.query.sessionToken;
  const filePath = __dirname + "/uploadedFiles/" + sessionToken + ".txt";
  var error = "";
  fs.unlink(filePath, function (err) {
    if (err) error = err;
    else console.log("file deleted successfully");
  });
  if (error) res.status(404).send(error);
  else res.status(200).send("the file has been deleted");
});

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`;
