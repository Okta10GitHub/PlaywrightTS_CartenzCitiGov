import { chromium, expect, test } from "@playwright/test"
import { TIMEOUT } from "dns";
import { beforeEach, afterEach } from "node:test";

test.describe("Skenario1", () => {
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

test("01_PAB_001", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/01_PAB_001_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/01_PAB_001_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefino")//input nama lengkap
    await page.fill("//input[@id='email']","yeciwe4556@trackden.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/01_PAB_001_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //Loading screen
    await page.waitForSelector("//div[@id='notice_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Selangkah lagi !']",{timeout: 100000})
   
    //validasi pop up message
    await page.screenshot({ path: 'screenshots/01_PAB_001_popup_message.png' });
    const errorMessage1 = await page.locator("//div[@id='notice_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Selangkah lagi !']").textContent()
    expect (errorMessage1==="Selangkah lagi !").toBeTruthy()

    const errorMessage2 = await page.locator("//div[@id='notice_popup']//div[@class='col-md-12 subtitle-popup'][contains(text(),'klik selanjutnya untuk proses verifikasi agar kamu')]").textContent()
    expect (errorMessage2==="klik selanjutnya untuk proses verifikasi agar kamu dapat menikmati layanan kami").toBeTruthy()
    
    /*
    //Selanjutnya
    await page.click ("//button[normalize-space()='Selanjutnya']")//klik popup message button selanjutnya
    
    //input OTP manual
    await page.screenshot({ path: 'screenshots/01_PAB_001_OTP_Page.png' });
    await page.pause()
    await page.waitForURL("https://internal.citigov.id/citizen/pelayanan",{timeout:10000})
    await page.screenshot({ path: 'screenshots/01_PAB_001_homepage_pelayanan.png' });
    await expect(page).toHaveURL("https://internal.citigov.id/citizen/pelayanan")
    */

});

test("01_PAB_002", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/01_PAB_002_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/01_PAB_002_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","testdata1")//input nama lengkap
    await page.fill("//input[@id='email']","ryjude@tutuapp.bid")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","891931")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/div[2]/button[1]/span[1]")//Klik button show password
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[4]/div[2]/div[1]/div[2]/button[1]/span[1]")//Klik button show confirmation password
    await page.screenshot({ path: 'screenshots/01_PAB_002_internal-citigov-daftar.png' });
    await page.click ("//button[normalize-space()='Daftar']")//Klik button daftar
    
     //Loading screen
     await page.waitForSelector("//div[@id='notice_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Selangkah lagi !']",{timeout: 10000})
   
     //validasi pop up message
     await page.screenshot({ path: 'screenshots/01_PAB_002_popup_message.png' });
     const errorMessage1 = await page.locator("//div[@id='notice_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Selangkah lagi !']").textContent()
     expect (errorMessage1==="Selangkah lagi !").toBeTruthy()
 
     const errorMessage2 = await page.locator("//div[@id='notice_popup']//div[@class='col-md-12 subtitle-popup'][contains(text(),'klik selanjutnya untuk proses verifikasi agar kamu')]").textContent()
     expect (errorMessage2==="klik selanjutnya untuk proses verifikasi agar kamu dapat menikmati layanan kami").toBeTruthy()
     
     /*
     //Selanjutnya
     await page.click ("//button[normalize-space()='Selanjutnya']")//klik popup message button selanjutnya
     
     //input OTP manual
     await page.screenshot({ path: 'screenshots/01_PAB_002_OTP_Page.png' });
     await page.pause()
     await page.waitForURL("https://internal.citigov.id/citizen/pelayanan",{timeout:5000})
     await page.screenshot({ path: 'screenshots/01_PAB_002_homepage_pelayanan.png' });
     await expect(page).toHaveURL("https://internal.citigov.id/citizen/pelayanan")
    */
});

test("01_PAB_003", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/01_PAB_003_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/01_PAB_003_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Naba")//input nama lengkap
    await page.fill("//input[@id='email']","nabastalastore.id@gmail.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","89689112")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/01_PAB_003_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //Loading screen
    await page.waitForSelector("//div[@id='success_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Email Anda telah terdaftar']",{timeout: 10000})
   
    //validasi pop up message
    await page.screenshot({ path: 'screenshots/01_PAB_003_popup_message.png' });
    const errorMessage1 = await page.locator("//div[@id='success_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Email Anda telah terdaftar']").textContent()
    expect (errorMessage1==="Email Anda telah terdaftar").toBeTruthy()

    const errorMessage2 = await page.locator("//div[@id='success_popup']//div[@class='col-md-12 subtitle-popup'][contains(text(),'Masukkan kode OTP yang telah dikirim melalui email')]").textContent()
    expect (errorMessage2==="Masukkan kode OTP yang telah dikirim melalui email nabastalastore.id@gmail.com. Bila tidak terdapat pada inbox, mohon cek spam email anda").toBeTruthy()
    
    /*
    //Selanjutnya
    await page.click ("//button[normalize-space()='Selanjutnya']")//klik popup message button selanjutnya
    
    //input OTP manual
    await page.screenshot({ path: 'screenshots/01_PAB_003_OTP_Page.png' });
    await page.pause()
    await page.waitForURL("https://internal.citigov.id/citizen/pelayanan",{timeout:5000})
    await page.screenshot({ path: 'screenshots/01_PAB_003_homepage_pelayanan.png' });
    await expect(page).toHaveURL("https://internal.citigov.id/citizen/pelayanan")
    */

});
});
