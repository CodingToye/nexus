import sharp from "sharp";

await sharp("public/images/city-background.png")
  .resize({ width: 1920 })
  .webp({ quality: 75 })
  .toFile("public/images/city-background-desktop.webp");

await sharp("public/images/city-background.png")
  .resize({ width: 960 })
  .webp({ quality: 72 })
  .toFile("public/images/city-background-mobile.webp");

console.log("Background images optimised");
