// eslint-disable-next-line @typescript-eslint/no-require-imports
const sharp = require("sharp");

const files = [
  "public/images/rs-sekarwangi.jfif",
  "public/images/rs-muhammadiyah.jfif"
];

async function convert() {
  for (const file of files) {
    const output = file.replace(".jfif", ".png");

    await sharp(file)
      .png()
      .toFile(output);

    console.log("Converted:", output);
  }
}

convert();