const notFound = (req, res) => {
  return res.status(400).json({message: "route does not exist"})
}

module.exports = notFound