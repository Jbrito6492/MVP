
exports.createHashtag = (req, res) => {
  const { hashtag } = req.body;
  console.log(hashtag)
  res.sendStatus(200);
}
