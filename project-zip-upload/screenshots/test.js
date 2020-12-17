const resemble = require('resemblejs');
const puppeteer = require('puppeteer');

// login page testing 
var fs = require('fs');
(async () => {

   var dir = './output';

   if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
   }


   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://example.com');
   await page.reload('https://example.com');
   await page.setViewport({
      width: 1200,
      height: 800
   })

   await page.screenshot({ path: './output/example1.png', fullPage: true });

   const image1 = fs.readFileSync("./screenshots/login_test-case.png");
   const image2 = fs.readFileSync("./output/example1.png");

   const diffpercent = await getDiff(
      image1,
      image2
   );
   console.log('TESTCASE:test_case1:success:', diffpercent);
   await browser.close();
})();

// user dashboard testing 
(async () => {

   var dir = './output';

   if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
   }


   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://example.com');
   await page.reload('https://example.com');
   await page.setViewport({
      width: 1200,
      height: 800
   })
   await page.type('#inputname', 'user')
   await page.type('#inputpassword', 'user')
   await page.click('#inputsubmit')
   await page.screenshot({ path: './output/example2.png', fullPage: true });

   const image1 = fs.readFileSync("./screenshots/user_test-case.png");
   const image2 = fs.readFileSync("./output/example2.png");

   const diffpercent = await getDiff(
      image1,
      image2
   );
   console.log('TESTCASE:test_case2:success:', diffpercent);
   await browser.close();
})();

// admin dashboard testing 
(async () => {

   var dir = './output';

   if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
   }


   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://example.com');
   await page.reload('https://example.com');
   await page.setViewport({
      width: 1200,
      height: 800
   })
   await page.type('#inputname', 'admin')
   await page.type('#inputpassword', 'admin')
   await page.click('#inputsubmit')
   await page.screenshot({ path: './output/example3.png', fullPage: true });

   const image1 = fs.readFileSync("./screenshots/admin_test-case.png");
   const image2 = fs.readFileSync("./output/example3.png");

   const diffpercent = await getDiff(
      image1,
      image2
   );
   console.log('TESTCASE:test_case3:success:', diffpercent);
   await browser.close();
})();

// super admin dashboard testing 
(async () => {

   var dir = './output';

   if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
   }


   const browser = await puppeteer.launch();
   const page = await browser.newPage();
   await page.goto('https://example.com');
   await page.reload('https://example.com');
   await page.setViewport({
      width: 1200,
      height: 800
   })
   await page.type('#inputname', 'super admin')
   await page.type('#inputpassword', 'superAdmin')
   await page.click('#inputsubmit')
   await page.screenshot({ path: './output/example4.png', fullPage: true });

   const image1 = fs.readFileSync("./screenshots/super-admin_test-case.png");
   const image2 = fs.readFileSync("./output/example4.png");

   const diffpercent = await getDiff(
      image1,
      image2
   );
   console.log('TESTCASE:test_case4:success:', diffpercent);
   await browser.close();
})();





const getDiff = async (image1, image2) => {
   return new Promise(async (resolve) => {
      const compare = require("resemblejs").compare;
      await compare(image1, image2, {}, function (err, data) {
         if (err) {
            console.log("An error!");
            resolve(0);
         } else {
            resolve(100 - data.rawMisMatchPercentage);
         }
      });
   });
};
