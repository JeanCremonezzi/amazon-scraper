// Middleware to check if keyword is empty
const checkKeyword = async (req, res, next) => {
   if (req.query.keyword.trim() === "") {
      return res.sendStatus(400) // Status 400 -> "server cannot or will not process the request due to something that is perceived to be a client error"
   }   

   next();
}

module.exports = { checkKeyword }