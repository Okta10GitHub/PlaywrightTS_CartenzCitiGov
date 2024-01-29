import { chromium, expect, test } from "@playwright/test"
import { TIMEOUT } from "dns";
import { beforeEach, afterEach } from "node:test";

test.describe("Skenario2", () => {
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

test("02_PAB_001", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_001_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_001_internal-citigov-register.png' });
//  await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_001_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[normalize-space()='Nama Lengkap harus diisi']").textContent()
    expect (errorMessage==="Nama Lengkap harus diisi").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_001_popup_message.png' });
});

test("02_PAB_002", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_002_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_002_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
//  await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_002_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
   //validasi button dan error message
//   const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//   await expect (buttonDaftar).toBeDisabled();

   const errorMessage = await page.locator("//span[normalize-space()='Email harus diisi']").textContent()
   expect (errorMessage==="Email harus diisi").toBeTruthy()
   await page.screenshot({ path: 'screenshots/02_PAB_002_popup_message.png' });

});

test("02_PAB_003", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_003_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_003_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
//  await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_003_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[normalize-space()='Nomor Telepon / Handphone harus diisi']").textContent()
    expect (errorMessage==="Nomor Telepon / Handphone harus diisi").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_003_popup_message.png' });

});

test("02_PAB_004", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_004_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_004_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
//  await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_004_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
   //validasi button dan error message
//   const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//   await expect (buttonDaftar).toBeDisabled();

   const errorMessage = await page.locator("//span[contains(text(),'Kata sandi harus minimal 8 karakter dan harus meng')]").textContent()
   expect (errorMessage==="Kata sandi harus minimal 8 karakter dan harus mengandung Huruf Besar,Huruf Kecil,Angka,Simbol").toBeTruthy()
   await page.screenshot({ path: 'screenshots/02_PAB_004_popup_message.png' });

});

test("02_PAB_005", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_005_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_005_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
//  await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_005_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[normalize-space()='Konfirmasi Kata sandi harus diisi']").textContent()
    expect (errorMessage==="Konfirmasi Kata sandi harus diisi").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_005_popup_message.png' });

});

test("02_PAB_006", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_006_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_006_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","  ")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_006_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //Loading screen
    await page.waitForSelector("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']",{timeout: 100000})
   
    //validasi pop up message
    //await page.screenshot({ path: 'screenshots/02_PAB_006_popup_message.png' });
    const errorMessage1 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 title-popup'][normalize-space()='Gagal']").textContent()
    expect (errorMessage1==="Gagal").toBeTruthy()

    const errorMessage2 = await page.locator("//div[@id='failed_popup']//div[@class='col-md-12 subtitle-popup'][normalize-space()='Terjadi kesalahan, silahkan ulangi kembali']").textContent()
    expect (errorMessage2==="Terjadi kesalahan, silahkan ulangi kembali").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_006_popup_message.png' });

    
});

test("02_PAB_007", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_007_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_007_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_007_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
   //validasi button dan error message
//   const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//   await expect (buttonDaftar).toBeDisabled();

   const errorMessage = await page.locator("//span[@class='error-message']").textContent()
   expect (errorMessage==="Format email harus benar").toBeTruthy()
   await page.screenshot({ path: 'screenshots/02_PAB_007_popup_message.png' });

});

test("02_PAB_008", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_008_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_008_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","89")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_008_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[@class='error-message']").textContent()
    expect (errorMessage==="Nomor Telepon / Handphone minimal 5 angka").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_008_popup_message.png' });

});

test("02_PAB_009", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_009_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_009_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tes@m1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tes@m1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_009_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
   //validasi button dan error message
//   const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//   await expect (buttonDaftar).toBeDisabled();

   const errorMessage = await page.locator("//span[@class='error-message']").textContent()
   expect (errorMessage==="Kata sandi harus minimal 8 karakter").toBeTruthy()
   await page.screenshot({ path: 'screenshots/02_PAB_009_popup_message.png' });

});

test("02_PAB_010", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_010_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_010_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","tests@mple1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_010_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[@class='error-message']").textContent()
    expect (errorMessage==="Kata sandi harus mengandung Huruf Besar").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_010_popup_message.png' });

});

test("02_PAB_011", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_011_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_011_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","TESTS@MPLE1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","TESTS@MPLE1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_011_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[@class='error-message']").textContent()
    expect (errorMessage==="Kata sandi harus mengandung Huruf Kecil").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_011_popup_message.png' });

});

test("02_PAB_012", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_012_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_012_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_012_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[@class='error-message']").textContent()
    expect (errorMessage==="Kata sandi harus mengandung Angka").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_012_popup_message.png' });

});

test("02_PAB_013", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_013_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_013_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Testsample1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Testsample1")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_013_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[@class='error-message']").textContent()
    expect (errorMessage==="Kata sandi harus mengandung Simbol").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_013_popup_message.png' });

});

test("02_PAB_014", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/02_PAB_014_internal-citigov-signin.png' });
    await page.click("//span[@class='float-right text-cg font-weight-bold pointer']")//Klik daftar sekarang
    await page.screenshot({ path: 'screenshots/02_PAB_014_internal-citigov-register.png' });
    await page.fill("//input[@placeholder='Masukkan nama lengkap']","Pefim")//input nama lengkap
    await page.fill("//input[@id='email']","pefim69161@wuzak.com")//input email
    await page.fill("//input[@placeholder='Masukkan nomor telepon / handphone']","8960213")//input no telp
    await page.fill("//input[@placeholder='Kata sandi']","Tests@mple1")//input katasandi
    await page.fill("//input[@placeholder='Konfirmasi Kata sandi']","Tests@mple2")//input konfirmasi kata sandi
    await page.screenshot({ path: 'screenshots/02_PAB_014_internal-citigov-daftar.png' });
    await page.click("//button[normalize-space()='Daftar']")//Klik button daftar
    
    //validasi button dan error message
    //const buttonDaftar = await page.locator("//button[normalize-space()='Daftar']")
//    await expect (buttonDaftar).toBeDisabled();

    const errorMessage = await page.locator("//span[@class='error-message']").textContent()
    expect (errorMessage==="Konfirmasi Kata sandi tidak sama").toBeTruthy()
    await page.screenshot({ path: 'screenshots/02_PAB_014_popup_message.png' });

});
});
