exports.saveLocation = (req, res) => {
  res.sendStatus(200);
}

exports.saveRadius = (req, res) => {
  const { radius } = req.body;
  res.json({
    radius: parseInt(radius * 1609.34)
  });
}

