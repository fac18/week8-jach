exports.client = (req, res) => {
  res.status(404).render("error", {
    layout: "error",
    statusCode: 404,
    errorMessage: "Page not found :(",
    imageUrl: "https://gph.is/2ify9JA"
  });
};

exports.server = (err, req, res, next) => {
  res.status(500).render("error", {
    layout: "error",
    statusCode: 500,
    errorMessage: "Internal server error"
  });
};
