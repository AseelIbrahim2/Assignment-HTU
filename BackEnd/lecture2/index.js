/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import fs from 'fs';

// inquirer
  // .prompt([
  //   {
  //     type: 'input',
  //     name: 'url',
  //     message: 'Enter a URL to generate its QR code:',
  //     validate: function (value) {
  //       if (value.startsWith('http://') || value.startsWith('https://')) {
  //         return true;
  //       }
  //       return 'Please enter a valid URL (starting with http:// or https://)';
  //     },
  //   },
  // ])
  // .then((answers) => {
  //   const url = answers.url;

//     const qr_png = qr.image(url, { type: 'png' });
//     const qrStream = fs.createWriteStream('qr_code.png');
//     qr_png.pipe(qrStream);
//     console.log('✅ QR code saved as qr_code.png');




//     // 2. Save URL to a text file
//     fs.writeFile('url.txt', url, (err) => {
//       if (err) throw err;
//       console.log('✅ URL saved to url.txt');
//     });
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.error('Prompt couldn’t be rendered in this environment');
//     } else {
//       console.error('Something went wrong:', error);
//     }
//   });



// answer


import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",// name attr i will save the value init
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));

    fs.writeFile("URL.txt", url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
