let age = 17;
let movieRating = "PG";

if (age > 17) {
  console.log("You can watch any movie!");
} else if (age === 17) {
  if (movieRating === "PG") {
    console.log("You can watch the movie!");
  } else if (movieRating === "12") {
    console.log("You can watch the movie!");
  } else if (movieRating === "15") {
    console.log("You can watch the movie!");
  } else if (movieRating === "18") {
    console.log("You cannot watch the movie! (18 - for ages 18 and older)");
  } else if (movieRating === "U") {
    console.log("You can watch the movie! (Universal - suitable for all ages)");
  } else {
    console.log("Invalid movie rating provided.");
  }
}
