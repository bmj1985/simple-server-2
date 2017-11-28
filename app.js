const express = require("express");
const cors = require("cors");
const instructors = require("./data/instructors");
const app = express();
app.use(cors());

function getObjectById(array, id) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].id == id) {
      console.log(array[i])
      return array[i];
    }
  }
  return null;
};

app.get("/", (req, res) => res.json({
  data: instructors
}));

app.get("/:id", function(request, response) {
  var item = getObjectById(instructors, request.params.id);
  if (!item) {
    response.status = 404;
    response.json({
      error: {
        message: "No record found!"
      }
    });
  }
  response.json({
    data: item
  });
});


app.listen(process.env.PORT || 3000, () => console.log("Example app listening on port 3000!"))
