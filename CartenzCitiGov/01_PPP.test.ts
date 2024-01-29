import { chromium, expect, test } from "@playwright/test"
import { TIMEOUT } from "dns";
import { beforeEach, afterEach } from "node:test";
import { Browser, BrowserContext, Page } from "@playwright/test";


test.skip("Skenario6", () => {
    let browser: Browser;
    let context: BrowserContext;
    let page: Page;
  
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
        context = await browser.newContext({
            // Menyetujui izin lokasi dan menentukan lokasi geografis
            geolocation: { latitude: -6.114755996617127, longitude: 106.5340901 }, // Contoh koordinat
            permissions: ['geolocation'], // Menyetujui izin lokasi
          });
      page = await context.newPage();
    });
  
    // Fungsi ini dijalankan setelah setiap test selesai
    test.afterEach(async () => {
      await context.close();
    });

test("01_PPP_001", async()=>{
    
    await page.goto("https://internal.citigov.id/signin")
    await page.screenshot({ path: 'screenshots/01_PPP_001_internal-citigov-signin.png' });
    await page.fill("//input[@placeholder='Masukkan email']","pefim69161@wuzak.com")//input email
    await page.click("//button[normalize-space()='Kata sandi']")//Klik button kata sandi
    await page.fill("//input[@placeholder='Masukan kata sandi']","Tests@mple1")//input Kata Sandi
    await page.screenshot({ path: 'screenshots/01_PPP_001_internal-citigov-Login.png' });
    await page.click("//button[normalize-space()='Masuk']")//Klik button Masuk
    
    //validasi Homepage
    await page.waitForURL("https://internal.citigov.id/citizen/pelayanan",{timeout:12000})
    await page.screenshot({ path: 'screenshots/01_PPP_001_homepage_pelayanan.png' });
    await expect(page).toHaveURL("https://internal.citigov.id/citizen/pelayanan")

    await page.click("//a[@href='/citizen/pelayanan-create']//div[@class='submenu']")
    await page.waitForURL("https://internal.citigov.id/citizen/pelayanan-create",{timeout:12000})
    await page.screenshot({ path: 'screenshots/01_PPP_001_daftar_pelayanan_cartenz.png' });
    await expect(page).toHaveURL("https://internal.citigov.id/citizen/pelayanan-create")
    await page.waitForTimeout(2000);

    await page.click("//div[@class='citizen-list-layanan-action pointer']")
   // await page.waitForSelector("//p[@class='font-weight-bold mb-1']",{timeout: 10000})
   // const formPermohonan = await page.locator("//p[@class='font-weight-bold mb-1']").textContent()
   // expect (formPermohonan==="Form Permohonan Pelayanan Soal Software Development Engineer in Test").toBeTruthy()
    //Isi Form
    
    //Jenis Pemohon
    await page.waitForSelector("//div[@class='citizen-list-layanan-action pointer']", { state: 'visible' });
    await page.click("//div[@class='citizen-list-layanan-action pointer']")
    await page.waitForSelector("//div[@class='wizard-select css-2b097c-container']//div[@class=' css-tlfecz-indicatorContainer']//*[name()='svg']", { state: 'visible' });
//  await page.waitForSelector("//div[@class='wizard-select css-2b097c-container']//div[@class=' css-tlfecz-indicatorContainer']//*[name()='svg']")
    await page.click("//div[@class='wizard-select css-2b097c-container']//div[@class=' css-tlfecz-indicatorContainer']//*[name()='svg']")
    const ddJenisPemohon = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const options = await ddJenisPemohon.locator("div").elementHandles();
    for (const option of options) {
        const jenisPemohon = await option.textContent();
        if (jenisPemohon?.includes('Ketua')) {
        await option.click();
        break;
        }
    }
    
    //Kewarganegaraan
    const rdKewarganegaraan = "//label[normalize-space()='WNI']"
    await page.click(rdKewarganegaraan)
    const kewarganegaraan = await page.isChecked (rdKewarganegaraan);
    expect (kewarganegaraan).toBe(true);
    const WNI = await page.locator(rdKewarganegaraan).textContent()
    expect (WNI==="WNI").toBeTruthy();

    //Pekerjaan
    const rdPekerjaan = "//label[normalize-space()='Swasta']"
    await page.click(rdPekerjaan)
    const pekerjaan = await page.isChecked (rdPekerjaan);
    expect (pekerjaan).toBe(true);
    const Swasta = await page.locator(rdPekerjaan).textContent()
    expect (Swasta==="Swasta").toBeTruthy();

    //Jenis izin Reklame
    const rdIzinReklame = "//label[normalize-space()='Permanen']"
    await page.click(rdIzinReklame)
    const izinReklame = await page.isChecked (rdIzinReklame);
    expect (izinReklame).toBe(true);
    const Permanen = await page.locator(rdIzinReklame).textContent()
    expect (Permanen==="Permanen").toBeTruthy();

    //NoKtp
    await page.fill("//input[@placeholder='Masukkan No. KTP']","360331000")

    //Nama Lengkap
    await page.fill("//input[@placeholder='Masukkan Nama Lengkap']","Test Okta")

    //Tempat lahir
    await page.fill("//input[@placeholder='Masukkan Tempat Lahir']","Jakarta")

    //TGL Lahir
    let tglLahir1 = "06 Juni 2000"
    await page.click("//input[@placeholder='Masukkan Tanggal']")
    await page.click("//th[@class='rdtSwitch']")
    await page.click("//th[@class='rdtSwitch']")
    await page.click("//span[contains(text(),'‹')]")
    await page.click("//span[contains(text(),'‹')]")
    await page.click("//td[normalize-space()='2000']")
    await page.click("//td[normalize-space()='Jun']")
    await page.click("//td[@class='rdtDay'][normalize-space()='06']")
    
    const tglLahir2Field = ("//input[@placeholder='Masukkan Tanggal']")
    const cekTglLahir2 = await page.waitForSelector(tglLahir2Field);

  // Gunakan inputValue() untuk mendapatkan nilai dari elemen input
    const tglLahir2 = await cekTglLahir2.inputValue();
    console.log(`Tanggal Lahir 1: ${tglLahir1}`);
    console.log(`Tanggal Lahir 2: ${tglLahir2}`);
    expect (tglLahir1===tglLahir2).toBeTruthy();

    //alamat pemohon
    await page.fill("//textarea[@placeholder='Masukkan Alamat Pemohon']","Jl. Kesatria no.24")

    //Negara pemohon
    await page.fill("//input[@placeholder='Masukkan Negara Pemohon']","Indonesia")

    //Provinsi1
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[15]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]//*[name()='svg']")
    const ddProvinsi1 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi1 = await ddProvinsi1.locator("div").elementHandles();
    for (const optionProv1 of provinsi1) {
        const pilihProv1 = await optionProv1.textContent();
        if (pilihProv1?.includes('BANTEN')) {
        await optionProv1.click();
        break;
        }
    }
    await page.waitForTimeout(2000);


    //Provinsi2
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[15]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]//*[name()='svg']")
    const ddProvinsi2 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi2 = await ddProvinsi2.locator("div").elementHandles();
    for (const optionProv2 of provinsi2) {
        const pilihProv2 = await optionProv2.textContent();
        if (pilihProv2?.includes('BANTEN')) {
        await optionProv2.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kota1
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[16]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]//*[name()='svg']")
    const ddKota1 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kota1 = await ddKota1.locator("div").elementHandles();
    for (const optionkota1 of kota1) {
        const pilihKota1 = await optionkota1.textContent();
        if (pilihKota1?.includes('KOTA TANGERANG')) {
        await optionkota1.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Provinsi3
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[17]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]")
    const ddProvinsi3 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi3 = await ddProvinsi3.locator("div").elementHandles();
    for (const optionProv3 of provinsi3) {
        const pilihProv3 = await optionProv3.textContent();
        if (pilihProv3?.includes('BANTEN')) {
        await optionProv3.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kota2
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[17]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[2]")
    const ddKota2 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kota2 = await ddKota2.locator("div").elementHandles();
    for (const optionkota2 of kota2) {
        const pilihKota2 = await optionkota2.textContent();
        if (pilihKota2?.includes('KOTA TANGERANG')) {
        await optionkota2.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kec1
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[17]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[2]/div[1]")
    const ddKec1 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kec1 = await ddKec1.locator("div").elementHandles();
    for (const optionkec1 of kec1) {
        const pilihKec1 = await optionkec1.textContent();
        if (pilihKec1?.includes('CIPONDOH')) {
        await optionkec1.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Provinsi4
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[17]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]")
    const ddProvinsi4 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi4 = await ddProvinsi4.locator("div").elementHandles();
    for (const optionProv4 of provinsi4) {
        const pilihProv4 = await optionProv4.textContent();
        if (pilihProv4?.includes('BANTEN')) {
        await optionProv4.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kota3
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[17]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[2]")
    const ddKota3 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kota3 = await ddKota3.locator("div").elementHandles();
    for (const optionkota3 of kota3) {
        const pilihKota3 = await optionkota3.textContent();
        if (pilihKota3?.includes('KOTA TANGERANG')) {
        await optionkota3.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kec2
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[17]/div[1]/div[1]/div[1]/div[1]/div[5]/div[1]/div[2]/div[1]")
    const ddKec2 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kec2 = await ddKec2.locator("div").elementHandles();
    for (const optionkec2 of kec2) {
        const pilihKec2 = await optionkec2.textContent();
        if (pilihKec2?.includes('CIPONDOH')) {
        await optionkec2.click();
        break;
        }
    }

    //Kel1
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[18]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[1]")
    const ddKel1 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const Kel1 = await ddKel1.locator("div").elementHandles();
    for (const optionkel1 of Kel1) {
        const pilihKel1 = await optionkel1.textContent();
        if (pilihKel1?.includes('CIPONDOH')) {
        await optionkel1.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //no telp pemohon
    await page.fill ("//input[@placeholder='Masukkan No Telepon Pemohon']","0897822")

    //negara perusahaan
    await page.fill ("//input[@placeholder='Masukkan Negara Perusahaan']","Indonesia")

    //Provinsi12
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[32]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]")
    const ddProvinsi12 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi12 = await ddProvinsi12.locator("div").elementHandles();
    for (const optionProv12 of provinsi12) {
        const pilihProv12 = await optionProv12.textContent();
        if (pilihProv12?.includes('BANTEN')) {
        await optionProv12.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Provinsi22
    await page.click("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[3]/div[33]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]")
    const ddProvinsi22 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi22 = await ddProvinsi22.locator("div").elementHandles();
    for (const optionProv22 of provinsi22) {
        const pilihProv22 = await optionProv22.textContent();
        if (pilihProv22?.includes('BANTEN')) {
        await optionProv22.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kota12
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[33]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]")
    const ddKota12 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kota12 = await ddKota12.locator("div").elementHandles();
    for (const optionkota12 of kota12) {
        const pilihKota12 = await optionkota12.textContent();
        if (pilihKota12?.includes('KOTA TANGERANG')) {
        await optionkota12.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Provinsi31
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[34]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]")
    const ddProvinsi31 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi31 = await ddProvinsi31.locator("div").elementHandles();
    for (const optionProv31 of provinsi31) {
        const pilihProv31 = await optionProv31.textContent();
        if (pilihProv31?.includes('BANTEN')) {
        await optionProv31.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kota21
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[34]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]")
    const ddKota21 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kota21 = await ddKota21.locator("div").elementHandles();
    for (const optionkota21 of kota21) {
        const pilihKota21 = await optionkota21.textContent();
        if (pilihKota21?.includes('KOTA TANGERANG')) {
        await optionkota21.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kec11
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[34]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]")
    const ddKec11 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kec11 = await ddKec11.locator("div").elementHandles();
    for (const optionkec11 of kec11) {
        const pilihKec11 = await optionkec11.textContent();
        if (pilihKec11?.includes('CIPONDOH')) {
        await optionkec11.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Provinsi41
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[35]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]")
    const ddProvinsi41 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const provinsi41 = await ddProvinsi41.locator("div").elementHandles();
    for (const optionProv41 of provinsi41) {
        const pilihProv41 = await optionProv41.textContent();
        if (pilihProv41?.includes('BANTEN')) {
        await optionProv41.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kota31
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[35]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]")
    const ddKota31 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kota31 = await ddKota31.locator("div").elementHandles();
    for (const optionkota31 of kota31) {
        const pilihKota31 = await optionkota31.textContent();
        if (pilihKota31?.includes('KOTA TANGERANG')) {
        await optionkota31.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kec23
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[35]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[2]/div[1]")
    const ddKec23 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const kec23 = await ddKec23.locator("div").elementHandles();
    for (const optionkec23 of kec23) {
        const pilihKec23 = await optionkec23.textContent();
        if (pilihKec23?.includes('CIPONDOH')) {
        await optionkec23.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Kel11
    await page.click("//body/div[@id='app']/div/div[@id='admin_wrapper']/div[@id='wrapper']/div[@id='page_content_wrapper']/div[@class='container-fluid citizen-container-fluid']/div[@class='row row-eq-height']/div[@class='col-md-12']/div[@class='container-wrapper']/div[@class='container content-common citizen-container']/div[@class='row justify-content-md-center']/div[@class='col-md-12']/div[@class='row d-flex justify-content-center']/div[@class='col-md-12']/div[@class='wizard']/div[@class='signin-box wizard-form-box']/div[@id='main_form']/div/div/div[@class='row']/div[@class='col-md-12']/div[35]/div[1]/div[1]/div[1]/div[1]/div[7]/div[1]/div[2]/div[1]")
    const ddKel11 = await page.locator("//div[@class=' css-4ljt47-MenuList']")
    const Kel11 = await ddKel11.locator("div").elementHandles();
    for (const optionkel11 of Kel11) {
        const pilihKel11 = await optionkel11.textContent();
        if (pilihKel11?.includes('CIPONDOH')) {
        await optionkel11.click();
        break;
        }
    }
    await page.waitForTimeout(2000);

    //Judul Reklame
    await page.fill("//textarea[@placeholder='Masukkan Judul Reklame']","testing okta")
    //jumlah reklame
    await page.fill("//input[@placeholder='Masukkan Jumlah']","2")
    //link spreadsheet
    await page.fill("//input[@placeholder='Masukkan Link Spreadsheet Test Case']","linktest0.com")
    //link github
    await page.fill("//input[@placeholder='Masukkan Link Open Repository ( github )']","linktest1.com")
    //link video
    await page.fill("//input[@placeholder='Masukkan Link Video Test Running']","linktest2.com")

    //Upload file A
    const inputFile = ("//label[@for='upload-file0']//div[@class='citizen-card-pelayanan-upload-file-box']//div//div[@class='wizard-upload-file-content'][normalize-space()='Lampirkan file disini']")
    await page.waitForSelector(inputFile);
    await page.setInputFiles(inputFile, "C:\\Users\\M Rizky Okta\\Pictures\\Wheeldop\\wheeldop.jpeg");
    await page.waitForTimeout(2000);
    //Kirim

});
});