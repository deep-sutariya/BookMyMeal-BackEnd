const bcrypt = require("bcryptjs");
const mhashpassword = async (req, res, next) => {
  try {
    console.log(req.body.rpass);
    req.body.mpass = await bcrypt.hash(req.body.mpass, 10);
    next();
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "error" });
  }
};
module.exports = mhashpassword;
