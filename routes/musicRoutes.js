const express = require("express");
const {
  getAllGenres,
  getSongsByGenre,
  handleLikeSong,
  getSongById,
} = require("../controllers/musicControllers");

const router = express.Router();

router.get("/genres", getAllGenres);
router.get("/:genre", getSongsByGenre);
router.get("/songById/:songId", getSongById);
router.post("/handlelikesong", handleLikeSong);

module.exports = router;
