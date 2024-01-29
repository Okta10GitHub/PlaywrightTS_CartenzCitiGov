import { chromium, expect, test } from "@playwright/test"
import { TIMEOUT } from "dns";
import { beforeEach, afterEach } from "node:test";

test.describe("Skenario4", () => {
    let browser;
    let context;
    let page;
  
    // Fungsi ini dijalankan sebelum seluruh suite test dimulai
    test.beforeAll(async () => {
      browser = await chromium.launch();
    });
  
    // Fungsi ini dijalankan setelah seluruh suite test selesai
    test.afterAll(async () => {
      await browser.close();
    });
  
    // Fungsi ini dijalankan sebelum setiap test dimulai
    test.beforeEach(async () => {
      context = await browser.newContext();
      page = await context.newPage();
    });
  
    // Fungsi ini dijalankan setelah setiap test selesai
    test.afterEach(async () => {
      await context.close();
    });

test("01_LGN_001", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/01_LGN_001_internal-citigov-signin.png' });
    await page.fill("//input[@placeholder='Masukkan email']","oktaviansyah.rizky10@gmail.com")//input email
    await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi
    await page.fill("//input[@placeholder='Masukan kata sandi']","Tests@mple1")//input Kata Sandi
    await page.screenshot({ path: 'screenshots/01_LGN_001_internal-citigov-Login.png' });
    await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
    
    //validasi Homepage
    await page.waitForURL("https://internal.citigov.id/citizen/pelayanan",{timeout:30000})
    await page.screenshot({ path: 'screenshots/01_LGN_001_homepage_pelayanan.png' });
    await expect(page).toHaveURL("https://internal.citigov.id/citizen/pelayanan")

});

test("01_LGN_002", async()=>{
    
  await page.goto("https://internal.citigov.id/signin")
  await page.screenshot({ path: 'screenshots/01_LGN_002_internal-citigov-signin.png' });
  await page.fill("//input[@placeholder='Masukkan email']","oktaviansyah.rizky10gmail.com")//input email
  await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi

  await page.fill("//input[@placeholder='Masukan kata sandi']","Tests@mple1")//input Kata Sandi
  await page.screenshot({ path: 'screenshots/01_LGN_002_internal-citigov-Login.png' });
  await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
  
  //Loading screen
  await page.waitForSelector("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']",{timeout: 10000})
    
  //validasi pop up message
  const errorMessage1 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']").textContent()
  expect (errorMessage1==="Gagal").toBeTruthy()

  const errorMessage2 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 subtitle-popup'][normalize-space()='Email tidak valid']").textContent()
  expect (errorMessage2==="Email tidak valid").toBeTruthy()
  await page.screenshot({ path: 'screenshots/01_LGN_002_popup_message.png' });
  });

test("01_LGN_003", async()=>{
    
  await page.goto("https://internal.citigov.id/signin")
  await page.screenshot({ path: 'screenshots/01_LGN_003_internal-citigov-signin.png' });
  await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi
  await page.screenshot({ path: 'screenshots/01_LGN_003_internal-citigov-Login.png' });
  await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
  
  //Loading screen
  await page.waitForSelector("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']",{timeout: 10000})
    
  //validasi pop up message
  const errorMessage1 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']").textContent()
  expect (errorMessage1==="Gagal").toBeTruthy()

  const errorMessage2 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 subtitle-popup'][normalize-space()='Mohon lengkapi semua field']").textContent()
  expect (errorMessage2==="Mohon lengkapi semua field").toBeTruthy()
  await page.screenshot({ path: 'screenshots/01_LGN_003_popup_message.png' });
  });

test("01_LGN_004", async()=>{
    
  await page.goto("https://internal.citigov.id/signin")
  await page.screenshot({ path: 'screenshots/01_LGN_004_internal-citigov-signin.png' });
  await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi
  await page.fill("//input[@placeholder='Masukan kata sandi']","Tests@mple1")//input Kata Sandi
  await page.screenshot({ path: 'screenshots/01_LGN_004_internal-citigov-Login.png' });
  await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
  
  //Loading screen
  await page.waitForSelector("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']",{timeout: 10000})
    
  //validasi pop up message
  const errorMessage1 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']").textContent()
  expect (errorMessage1==="Gagal").toBeTruthy()

  const errorMessage2 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 subtitle-popup'][normalize-space()='Email tidak boleh kosong']").textContent()
  expect (errorMessage2==="Email tidak boleh kosong").toBeTruthy()
  await page.screenshot({ path: 'screenshots/01_LGN_004_popup_message.png' });
  });

test("01_LGN_005", async()=>{
    
  await page.goto("https://internal.citigov.id/signin")
  await page.screenshot({ path: 'screenshots/01_LGN_005_internal-citigov-signin.png' });
  await page.fill("//input[@placeholder='Masukkan email']","oktaviansyah.rizky10@gmail.com")//input email
  await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi
  await page.screenshot({ path: 'screenshots/01_LGN_005_internal-citigov-Login.png' });
  await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
  
  //Loading screen
  await page.waitForSelector("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']",{timeout: 10000})
    
  //validasi pop up message
  const errorMessage1 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']").textContent()
  expect (errorMessage1==="Gagal").toBeTruthy()

  const errorMessage2 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 subtitle-popup'][normalize-space()='Password tidak boleh kosong']").textContent()
  expect (errorMessage2==="Password tidak boleh kosong").toBeTruthy()
  await page.screenshot({ path: 'screenshots/01_LGN_005_popup_message.png' });
});

test("01_LGN_006", async()=>{
    
  await page.goto("https://internal.citigov.id/signin")
  await page.screenshot({ path: 'screenshots/01_LGN_006_internal-citigov-signin.png' });
  await page.fill("//input[@placeholder='Masukkan email']","namakubento@gmail.com")//input email
  await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi
  await page.fill("//input[@placeholder='Masukan kata sandi']","Tests@mple1")//input Kata Sandi
  await page.screenshot({ path: 'screenshots/01_LGN_006_internal-citigov-Login.png' });
  await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
  
  //validasi pop up message
  const errorMessage1 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']").textContent()
  expect (errorMessage1==="Gagal").toBeTruthy()

  const errorMessage2 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 subtitle-popup'][normalize-space()='User kamu belum terdaftar']").textContent()
  expect (errorMessage2==="User kamu belum terdaftar").toBeTruthy()
  await page.screenshot({ path: 'screenshots/01_LGN_006_popup_message.png' });

  //validasi Homepage
  await page.waitForURL("https://internal.citigov.id/signin",{timeout:12000})
  await page.screenshot({ path: 'screenshots/01_LGN_006_Signin_Page.png' });
  await expect(page).toHaveURL("https://internal.citigov.id/signin")
  });

test("01_LGN_007", async()=>{
    
  await page.goto("https://internal.citigov.id/signin")
  await page.screenshot({ path: 'screenshots/01_LGN_007_internal-citigov-signin.png' });
  await page.fill("//input[@placeholder='Masukkan email']","oktaviansyah.rizky10@gmail.com")//input email
  await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi
  await page.fill("//input[@placeholder='Masukan kata sandi']","Tests@mple1210")//input Kata Sandi
  await page.screenshot({ path: 'screenshots/01_LGN_007_internal-citigov-Login.png' });
  await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
  
  //Loading screen
  await page.waitForSelector("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal Login']",{timeout: 10000})
    
  //validasi pop up message
  const errorMessage1 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal Login']").textContent()
  expect (errorMessage1==="Gagal Login").toBeTruthy()

  const errorMessage2 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 subtitle-popup']").textContent()
  expect (errorMessage2==="Wrong user identifier/password").toBeTruthy()
  await page.screenshot({ path: 'screenshots/01_LGN_007_popup_message.png' });
});
});