const express = require("express");
const Chance = require("chance");
const productsRouter = express.Router();
const chance = new Chance();

var products = [
  {
    alt: "Intel Dual Core E5200 2,50GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/d/u/xdual_core_e5200.jpg.pagespeed.ic.c-W40x7NZi.webp",
    title: "Procesor Intel Pentium Dual Core E5200 2.50 GHz - second hand",
    description:
      "Procesor Procesor Intel Dual Core E5200 2.50 GHz cu 2MB Cache, viteza FSB este 800Mhz.",
    price: "12 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Dual Core E5300 2.60Ghz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/d/u/xdual_core_e5300.jpg.pagespeed.ic.23xSFJnWWI.webp",
    title: "Procesor Intel Pentium Dual Core E5300 2.60 GHz - second hand",
    description:
      "Procesor Procesor Intel Pentium Dual Core E5300 2.60 GHz cu 2MB Cache, viteza FSB este 800Mhz, este compatibil cu socket LGA775.",
    price: "12 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor refurbished Intel Dual Core E5400 2.70 GHz ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_pentium_dualcore_e5400.jpg.pagespeed.ic.EYDEJbSp0i.webp",
    title: "Procesor Intel Pentium Dual Core E5400 2.70 GHz - second hand",
    description:
      "Procesor refurbished Procesor Intel Pentium Dual Core E5400, 2.70 GHz, 2 MB Cache, 800 MHz FSB, 45 nm, socket LGA775.",
    price: "12 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Pentium Dual Core E5700 3.00 GHz - reconditionat",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/e/5/xe5700.jpg.pagespeed.ic.WkA909SqZF.webp",
    title: "Procesor Intel Pentium Dual Core E5700 3.00 GHz - second hand",
    description:
      "Procesor reconditionat Procesor Intel Pentium E5700 tactat la frecventa de 3.00 GHz, doua nuclee, 2MB cache, FSB 800 MHz, set instructiuni pe 64 biti, compatibil cu placi de baza dotate cu soclu LGA775\n\nA775",
    price: "18 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core 2 Duo E7300 2.66 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_2_duo_e7300_1.jpg.pagespeed.ic.w07crx3hl0.webp",
    title: "Procesor Intel Core 2 Duo E7300 2.66 GHz - second hand",
    description:
      "Procesor Procesor Intel Core 2 Duo, socket LGA 775, doua nuclee si doua fire de executie, 3 MB cache, 2.66 GHz, proces fabricatie 45 nm, set de instructiuni 64 bit",
    price: "18 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Celeron G550 2.60 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/e/xceleron_g550.jpg.pagespeed.ic.y_rwVy1SBd.webp",
    title: "Procesor Intel Celeron G550 2.60 GHz - second hand",
    description:
      "Procesor second hand Intel Celeron G550, 2.60 GHz, 2 MB Smartcache, 32 nm, 2 nuclee 2 fire de executie.",
    price: "19 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core 2 Duo E7500 2.93 GHz - reconditionat",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_core_2_duo_e7500.jpg.pagespeed.ic.H0K80Donna.webp",
    title: "Procesor Intel Core 2 Duo E7500 2.93 GHz - second hand",
    description:
      "Procesor reconditionat Procesor Intel Core 2 Duo E7500 tactat la frecventa de 2.93 GHz, doua nuclee, 3MB cache, FSB 1066 MHz, set instructiuni pe 64 biti, compatibil cu placi de baza dotate cu soclu LGA775",
    price: "24 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Pentium G640 2.80 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_processor.jpg.pagespeed.ic.cBhjEz_Gt9.webp",
    title: "Procesor Intel Pentium G640 2.80 GHz - second hand",
    description:
      "Procesor second hand Procesor Intel Pentium G640, 2.80 GHz, 3 MB Smartcache, 32 nm, socket LGA1155, 2 nuclee 2 fire de executie.",
    price: "25 Lei",
    category: "cpu"
  },
  {
    alt: "Pasta termica Arctic AC MX-4 2g ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/a/xpasta_termica_arctic_mx-4_2g.jpg.pagespeed.ic.MbhreZ6Cr1.webp",
    title: "Pasta termica Arctic MX-4 2g",
    description:
      "Pasta termica Arctic AC MX-4, 2g, ajută la disiparea căldurii de la un procesor, chipset sau procesor într-un cooler.",
    price: "25 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Pentium Dual Core G6950 reconditionat",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_pentium_dual_core_g6950.jpg.pagespeed.ic.ZmBCRaZ-Q_.webp",
    title: "Procesor Intel Pentium Dual Core G6950 2.80 GHz - second hand",
    description:
      "Procesor second hand Procesor Intel Pentium Dual Core G6950, doua nuclee, frecventa 2.80 GHz, 3MB cache, LGA 1156, nucleu grafic integrat",
    price: "30 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Pentium G840 2.80 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/e/xpentium_g840_2.jpg.pagespeed.ic.TTMNtf6_LI.webp",
    title: "Procesor Intel Pentium G840 2.80 GHz - second hand",
    description:
      "Procesor second hand Procesor Intel Pentium G840, 2.80 GHz, 3 MB Smartcache, 32 nm, socket LGA1155, 2 nuclee 2 fire de executie.",
    price: "36 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Pentium G860 3.00 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/e/xpentium_g860.jpg.pagespeed.ic.Auw2Wft-0b.webp",
    title: "Procesor Intel Pentium G860 3.00 GHz - second hand",
    description:
      "Procesor second hand Procesor Intel Pentium G860 3.00 GHz, 3 MB Smartcache, 32 nm, socket LGA1155, 2 nuclee 2 fire de executie.",
    price: "41 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Pentium G2020 2.90 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/e/xpentium_g2020.jpg.pagespeed.ic.fOQwL8cBAE.webp",
    title: "Procesor Intel Pentium G2020 2.90 GHz - second hand",
    description:
      "Procesor second hand Procesor Intel Pentium G2020, 2.90 GHz, 3 MB Smartcache, 22 nm, socket LGA1155, 2 nuclee 2 fire de executie.",
    price: "48 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Xeon E5507 2.26 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_xeon_2_1_1_1.jpg.pagespeed.ic.B3_MOhuCio.webp",
    title: "Procesor Intel Xeon E5507 2.26 GHz - second hand",
    description:
      "Procesor Quad Core server / workstaion Intel Xeon E5507, frecventa 2.26 GHz, 4 nuclee / 4 fire de executie, 4MB SmartCache, QPI 4.8GT/s, socket LGA1366",
    price: "80 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i3-2120 3.30 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_core_i3-2120_3.3_ghz.jpg.pagespeed.ic.7aWR0houUA.webp",
    title: "Procesor Intel Core i3-2120 3.30 GHz - second hand",
    description:
      "Procesor second hand de la Intel, modelul Core i3-2120 care lucreaza la 3.30 GHz frecventa, dispune de 3 MB Cache si 5 GT/s DMI, fiind compatibil cu socket LGA1155.",
    price: "110 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i3-2130 3.40 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_core_i3-2120_3.3_ghz_2.jpg.pagespeed.ic.7aWR0houUA.webp",
    title: "Procesor Intel Core i3-2130 3.40 GHz - second hand",
    description:
      "Procesor second hand de la Intel, modelul Core i3-2130 care lucreaza la 3.40 GHz frecventa, dispune de 3 MB Cache si 5 GT/s DMI, fiind compatibil cu socket LGA1155.",
    price: "120 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Xeon X5550 2.66 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_xeon_2_1.jpg.pagespeed.ic.B3_MOhuCio.webp",
    title: "Procesor Intel Xeon X5550 2.66 GHz - second hand",
    description:
      "Procesor Quad Core server / workstaion Intel Xeon X5550, frecventa 2.66 GHz, 4 nuclee / 8 fire de executie, 8MB SmartCache, QPI 6.4GT/s, socket LGA1366",
    price: "120 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Xeon E5620 2.40 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_xeon_2_1_1.jpg.pagespeed.ic.B3_MOhuCio.webp",
    title: "Procesor Intel Xeon E5620 2.40 GHz - second hand",
    description:
      "Procesor Quad Core server / workstaion Intel Xeon E5620, frecventa 2.40 GHz, 4 nuclee / 8 fire de executie, 12MB SmartCache, QPI 5.86GT/s, socket LGA1366",
    price: "120 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i3-3225 3.30 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i3-3225.jpg.pagespeed.ic.cB8vM5Y81p.webp",
    title: "Procesor Intel Core i3-3225 3.30 GHz - second hand",
    description:
      "Procesor second hand de la Intel, modelul Core i3-3225 care lucreaza la 3.30 GHz frecventa, dispune de 3 MB Cache si 5 GT/s DMI, fiind compatibil cu socket LGA1155.",
    price: "130 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i3-3220 3.30 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/3/xi3-3220.jpg.pagespeed.ic.QnMqy6fzFt.webp",
    title: "Procesor Intel Core i3-3220 3.30 GHz - second hand",
    description:
      "Procesor second hand de la Intel, modelul Core i3-3220 care lucreaza la 3.30 GHz frecventa, dispune de 3 MB Cache si 5 GT/s DMI, fiind compatibil cu socket LGA1155.",
    price: "130 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Pentium G3220 3.00 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/e/xpentium_g3220.jpg.pagespeed.ic.QCg77jBP6u.webp",
    title: "Procesor Intel Pentium G3220 3.00 GHz - second hand",
    description:
      "Procesor second hand Procesor Intel Pentium G3220, 3.00 GHz, 3 MB Smartcache, 22 nm, socket LGA1150, 2 nuclee 2 fire de executie.",
    price: "151 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i3-3240 3.40GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i3-3240.jpg.pagespeed.ic.KcxZk0nmWc.webp",
    title: "Procesor Intel Core i3-3240 3.40 GHz - second hand",
    description:
      "Procesor second hand de la Intel, model Core i3-3240 care lucreaza la 3.40 GHz frecventa, dispune de 3 MB Cache si 5 GT/s DMI, fiind compatibil cu socket LGA1155.",
    price: "151 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i3-3245 3.40GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/3/xi3-3245.jpg.pagespeed.ic.6Aux5lysBn.webp",
    title: "Procesor Intel Core i3-3245 3.40 GHz - second hand",
    description:
      "Procesor second hand de la Intel, model Core i3-3245 care lucreaza la 3.40 GHz frecventa, dispune de 3 MB Cache si 5 GT/s DMI, fiind compatibil cu socket LGA1155.",
    price: "159 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i5-2500s 2.70 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-2500s.jpg.pagespeed.ic.-xnIU3f50P.webp",
    title: "Intel Core i5-2500s 2.70 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-2500s, 2.70 GHz, Quad Core, 6 MB Cache, 32 nm, socket LGA1155, TDP 65 W",
    price: "175 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i5-2300 2.80 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-2300.jpg.pagespeed.ic.yD21U9P0oI.webp",
    title: "Procesor Intel Core i5-2300 2.80 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-2300, 2.80 GHz, 6 MB L3 Cache, Quad Core, 32 nm, socket LGA1155, TDP 95 W",
    price: "181 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-2300 2.80 GHz - nou",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel-core-i5-sandy-bridge-box.jpg.pagespeed.ic.UvbJAb33tk.webp",
    title: "Procesor Intel Core i5-2300 2.80 GHz - nou",
    description:
      "Procesor nou Intel Core i5-2300, 2.80 GHz, 6 MB L3 Cache, Quad Core, 32 nm, socket LGA1155, TDP 95 W",
    price: "191 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i5-2400 3.10 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-2400.jpg.pagespeed.ic.-H__ShSSVU.webp",
    title: "Procesor Intel Core i5-2400 3.10 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-2400, 3.10 GHz, 6 MB L3 Cache, Quad Core, 32 nm, socket LGA1155, TDP 95 W",
    price: "193 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-3350P 3.10 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-3350p.jpg.pagespeed.ic.rTKEGzpZ0T.webp",
    title: "Procesor Intel Core i5-3350P 3.10 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-3350P, 3.10 GHz, 6 MB L3 Cache, Quad Core, 22 nm, socket LGA1155, TDP 69 W",
    price: "211 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Celeron G5900 (3.4GHz, 2MB, LGA1200) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80701G5900SRH44_200519160015562455.jpg.pagespeed.ic.68yfwLCaqM.webp",
    title: "Intel CPU Desktop Celeron G5900 (3.4GHz, 2MB, LGA1200) box",
    description: "Intel CPU Desktop Celeron G5900 (3.4GHz, 2MB, LGA1200) box",
    price: "218 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i5-3550 3.30 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-3550.jpg.pagespeed.ic.hYaP-md_ED.webp",
    title: "Intel Core i5-3550 3.30 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-3550, 3.30 GHz, 6 MB L3 Cache, Quad Core, 22 nm, socket LGA1155, TDP 77 W",
    price: "535 Lei (-294 Lei)\n\n241 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i5-3470 3.20 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i5-3470.jpg.pagespeed.ic.uDrNbwZX86.webp",
    title: "Procesor Intel Core i5-3470 3.20 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-3470, 3.20GHz, 6 MB Cache, Quad Core, 22 nm, socket LGA1155.",
    price: "391 Lei (-150 Lei)\n\n241 Lei",
    category: "cpu"
  },
  {
    alt: " Intel Core i5-3470S 2.90 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-3470s.jpg.pagespeed.ic.6rp3PhksOC.webp",
    title: "Procesor Intel Core i5-3470S 2.90 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-3470S, 2.90 GHz, 6 MB L3 Cache, Quad Core, 22 nm, socket LGA1155, TDP 65 W",
    price: "385 Lei (-83 Lei)\n\n302 Lei",
    category: "cpu"
  },
  {
    alt: "Intel Core i5-3570K 3.40 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-3570k.jpg.pagespeed.ic.450mGtDSWn.webp",
    title: "Intel Core i5-3570K 3.40 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-3570K, 3.40 GHz, multiplicator deblocat, 6 MB L3 Cache, Quad Core, 22 nm, socket LGA1155, TDP 77 W",
    price: "556 Lei (-254 Lei)\n\n302 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Celeron G6400 (4.0GHz, 4MB, LGA1200) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title: "Intel CPU Desktop Celeron G6400 (4.0GHz, 4MB, LGA1200) box",
    description: "Intel CPU Desktop Celeron G6400 (4.0GHz, 4MB, LGA1200) box",
    price: "310 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i3-3240 3.40 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/3/xi3-4130.jpg.pagespeed.ic.wvBZRkEL79.webp",
    title: "Procesor Intel Core i3-4130 3.40 GHz - second hand",
    description:
      "Procesor second hand de la Intel, model Core i3-4130 care lucreaza la 3.40 GHz frecventa, dispune de 3 MB Cache si 5 GT/s DMI, fiind compatibil cu socket LGA1150.",
    price: "373 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Xeon E5-2640 2.50 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_xeon_2_1_2.jpg.pagespeed.ic.B3_MOhuCio.webp",
    title: "Procesor Intel Xeon E5-2640 2.50 GHz Hexa-Core - second hand",
    description:
      "Procesor Hexa Core server / workstaion Intel Xeon E5-2640, frecventa 2.50 GHz, 6 nuclee / 12 fire de executie, 15MB SmartCache, QPI 7.2GT/s, socket LGA2011",
    price: "403 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-4690T 2.50 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-4690t.jpg.pagespeed.ic.xAlUQuAPu5.webp",
    title: "Procesor Intel Core i5-4690T 2.50 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-4690T, 2.50 GHz, 6 MB Cache, Quad Core, 22 nm, socket LGA1150.",
    price: "484 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Xeon E5-2620 v2 2.10 GHz Hexa-Core - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_xeon_2_1_2_2.jpg.pagespeed.ic.B3_MOhuCio.webp",
    title: "Procesor Intel Xeon E5-2620 v2 2.10 GHz Hexa-Core - second hand",
    description:
      "Procesor Hexa Core server / workstaion Intel Xeon E5-2620 v2, frecventa 2.10 GHz, 6 nuclee / 12 fire de executie, 15MB SmartCache, QPI 7.2GT/s, socket LGA2011",
    price: "484 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-4460 3.20 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-4460.jpg.pagespeed.ic.Ng-c-btqan.webp",
    title: "Procesor Intel Core i5-4460 3.20 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-4460, 3.20GHz, 6 MB Cache, Quad Core, 22 nm, socket LGA1150.",
    price: "840 Lei (-336 Lei)\n\n504 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Xeon E5-2650 2.00 GHz Octa-Core - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_xeon_2_1_2_1.jpg.pagespeed.ic.B3_MOhuCio.webp",
    title: "Procesor Intel Xeon E5-2650 2.00 GHz Octa-Core - second hand",
    description:
      "Procesor Octa Core server / workstaion Intel Xeon E5-2650, frecventa 2.00 GHz, 8 nuclee / 16 fire de executie, 20MB SmartCache, QPI 8GT/s, socket LGA2011",
    price: "504 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i7-2600 3.40 GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i7-2600.jpg.pagespeed.ic._P02iWAnPG.webp",
    title: "Procesor Intel Core i7-2600 3.40 GHz - second hand",
    description:
      "Procesor Intel Core i7-2600, cu frecventa de 3.40 GHz, cu 4 nuclee si 8 fire de executie. Dispune de 8 MB SmartCache si 5GT/s DMI, fiind compatibil cu socket LGA 1155.",
    price: "524 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-4690 3.50 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-4690.jpg.pagespeed.ic.bifWQSCow5.webp",
    title: "Procesor Intel Core i5-4690 3.50 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-4690, 3.50 GHz, 6 MB Cache, Quad Core, 22 nm, socket LGA1150.",
    price: "545 Lei",
    category: "cpu"
  },
  {
    alt:
      "AMD CPU Desktop Ryzen 3 4C/4T 2200G (3.7GHz,6MB,65W,AM4) box, RX Vega Graphics, with Wraith Stealth cooler",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_YD2200C5FBBOX_190919160014824455_1.jpg.pagespeed.ic.WHAsLQGqKl.webp",
    title:
      "AMD CPU Desktop Ryzen 3 4C/4T 2200G (3.7GHz,6MB,65W,AM4) box, RX Vega Graphics, with Wraith Stealth cooler",
    description:
      "AMD CPU Desktop Ryzen 3 4C/4T 2200G (3.7GHz,6MB,65W,AM4) box, RX Vega Graphics, with Wraith Stealth cooler",
    price: "548 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Xeon E5-2665 2.50 GHz Octa-Core - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_xeon_2_1_2_1_1.jpg.pagespeed.ic.B3_MOhuCio.webp",
    title: "Procesor Intel Xeon E5-2665 2.50 GHz Octa-Core - second hand",
    description:
      "Procesor Octa Core server / workstaion Intel Xeon E5-2665, frecventa 2.50 GHz, 8 nuclee / 16 fire de executie, 20MB SmartCache, QPI 8GT/s, socket LGA2011",
    price: "555 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor second hand Intel Core i5-4570, 3.20GHz",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i5-4570_3.jpg.pagespeed.ic.wV5or3c18U.webp",
    title: "Procesor Intel Core i5-4570 3.20 GHz - second hand",
    description:
      "Procesor second hand Intel Core i5-4570, 3.20GHz, 6 MB Cache, Quad Core, 22 nm, socket LGA1150.",
    price: "840 Lei (-284 Lei)\n\n556 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i3-9100 (3.6GHz, 6MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I39100SRCZV_191022160008475786_1.jpg.pagespeed.ic.n8sGUCt1LG.webp",
    title: "Intel CPU Desktop Core i3-9100 (3.6GHz, 6MB, LGA1151) box",
    description: "Intel CPU Desktop Core i3-9100 (3.6GHz, 6MB, LGA1151) box",
    price: "603 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i3-10100 (3.6GHz, 6MB, LGA1200) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX8070110100SRH3N_200504180015297558.jpg.pagespeed.ic.5cr3y__xN0.webp",
    title: "Intel CPU Desktop Core i3-10100 (3.6GHz, 6MB, LGA1200) box",
    description: "Intel CPU Desktop Core i3-10100 (3.6GHz, 6MB, LGA1200) box",
    price: "660 Lei",
    category: "cpu"
  },
  {
    alt:
      "Intel® Core™ i5 Coffee Lake i5-9400F 6C 65W 2.90G up to 4.1G 9M LGA1151 ITT No Graphics",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I59400FSRF6M_190305150009593493_1.jpg.pagespeed.ic.gXEXTiIDyZ.webp",
    title:
      "Intel® Core™ i5 Coffee Lake i5-9400F 6C 65W 2.90G up to 4.1G 9M LGA1151 ITT No Graphics",
    description:
      "Intel® Core™ i5 Coffee Lake i5-9400F 6C 65W 2.90G up to 4.1G 9M LGA1151 ITT No Graphics",
    price: "766 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i5-9400 (2.9GHz, 9MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I59400SR3X5_191002160022130823.jpg.pagespeed.ic.LrzPWUIT4-.webp",
    title: "Intel CPU Desktop Core i5-9400 (2.9GHz, 9MB, LGA1151) box",
    description: "Intel CPU Desktop Core i5-9400 (2.9GHz, 9MB, LGA1151) box",
    price: "879 Lei",
    category: "cpu"
  },
  {
    alt:
      "AMD CPU Desktop Ryzen 5 4C/8T 3400G (4.2GHz,6MB,65W,AM4) box, RX Vega 11 Graphics, with Wraith Spire cooler",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_YD3400C5FHBOX_190919160018131797_1.jpg.pagespeed.ic.UR0OxF45e6.webp",
    title:
      "AMD CPU Desktop Ryzen 5 4C/8T 3400G (4.2GHz,6MB,65W,AM4) box, RX Vega 11 Graphics, with Wraith Spire cooler",
    description:
      "AMD CPU Desktop Ryzen 5 4C/8T 3400G (4.2GHz,6MB,65W,AM4) box, RX Vega 11 Graphics, with Wraith Spire cooler",
    price: "886 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i7-4790S 3.20 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i7_1.jpg.pagespeed.ic.d_kn-B5NcM.webp",
    title: "Procesor Intel Core i7-4790S 3.20 GHz - second hand",
    description:
      "Procesor Intel Core i7-4790S, cu frecventa de 3.20 GHz (max turbo frequency 4.00GHz), cu 4 nuclee si 8 fire de executie. Dispune de 8 MB SmartCache si 5GT/s DMI, fiind compatibil cu socket LGA 1150.",
    price: "928 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i5-9500F (3.0GHz, 9MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I59500FSRG10_200421160016610886.jpg.pagespeed.ic.vCpIOThu3l.webp",
    title: "Intel CPU Desktop Core i5-9500F (3.0GHz, 9MB, LGA1151) box",
    description: "Intel CPU Desktop Core i5-9500F (3.0GHz, 9MB, LGA1151) box",
    price: "948 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i7-4790S 3.20 GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i7_1_1.jpg.pagespeed.ic.d_kn-B5NcM.webp",
    title: "Procesor Intel Core i7-4790 3.60 GHz - second hand",
    description:
      "Procesor Intel Core i7-4790, cu frecventa de 3.60 GHz (max turbo frequency 4.00GHz), cu 4 nuclee si 8 fire de executie. Dispune de 8 MB SmartCache si 5GT/s DMI, fiind compatibil cu socket LGA 1150.",
    price: "959 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-6400T 2.20GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-6400t.jpg.pagespeed.ic.thDUmbOUHe.webp",
    title: "Procesor Intel Core i5-6400T 2.20GHz - second hand",
    description:
      "Procesor desktop second hand Intel Core i5-6400T, 2.20 GHz, L3 6MB, 14 nm, LGA1151.",
    price: "959 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i5-10400 (2.9GHz, 12MB, LGA1200) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX8070110400SRH3C_200504180014650207.jpg.pagespeed.ic._SrZCbjWaW.webp",
    title: "Intel CPU Desktop Core i5-10400 (2.9GHz, 12MB, LGA1200) box",
    description: "Intel CPU Desktop Core i5-10400 (2.9GHz, 12MB, LGA1200) box",
    price: "965 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i7-4770 3.40 GHz ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcore_i7_1_2_1.jpg.pagespeed.ic.d_kn-B5NcM.webp",
    title: "Procesor Intel Core i7-4770K 3.50 GHz - second hand",
    description:
      "Procesor Intel Core i7-4770K, multiplicator deblocat, 3.50 GHz, Turbo Boost 3.90GHz, 4C/ 8T, 8MB L3, 5GT/s DMI, socket LGA1150",
    price: "979 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-6500 3.20GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-6500.jpg.pagespeed.ic._elj7iu43y.webp",
    title: "Procesor Intel Core i5-6500 3.20GHz - second hand",
    description:
      "Procesor desktop second hand Intel Core i5-6500, 3.20 GHz, L3 6MB, 14 nm, LGA1151.",
    price: "1.009 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-6600 3.30GHz - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-6600.jpg.pagespeed.ic.UJPccUqmxo.webp",
    title: "Procesor Intel Core i5-6600 3.30GHz - second hand",
    description:
      "Procesor desktop second hand Intel Core i5-6600, 3.30 GHz, L3 6MB, 14 nm, LGA1151.",
    price: "1.050 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i5-9500 (3.30GHz, 9MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I59500SRF4B_190730070017010366_1.jpg.pagespeed.ic.gXEXTiIDyZ.webp",
    title: "Intel CPU Desktop Core i5-9500 (3.30GHz, 9MB, LGA1151) box",
    description: "Intel CPU Desktop Core i5-9500 (3.30GHz, 9MB, LGA1151) box",
    price: "1.072 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i5-10500 (3.1GHz, 12MB, LGA1200) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX8070110500SRH3A_200504180014650207.jpg.pagespeed.ic._SrZCbjWaW.webp",
    title: "Intel CPU Desktop Core i5-10500 (3.1GHz, 12MB, LGA1200) box",
    description: "Intel CPU Desktop Core i5-10500 (3.1GHz, 12MB, LGA1200) box",
    price: "1.127 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i5-9600K (3.7GHz, 9MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I59600KSRG11_190923160015314458_1.jpg.pagespeed.ic.LrzPWUIT4-.webp",
    title: "Intel CPU Desktop Core i5-9600K (3.7GHz, 9MB, LGA1151) box",
    description: "Intel CPU Desktop Core i5-9600K (3.7GHz, 9MB, LGA1151) box",
    price: "1.203 Lei",
    category: "cpu"
  },
  {
    alt: "64BIT MPU BX80684I59600 3.100G 9MB SRF4H FCLGA1151",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title: "64BIT MPU BX80684I59600 3.100G 9MB SRF4H FCLGA1151",
    description: "64BIT MPU BX80684I59600 3.100G 9MB SRF4H FCLGA1151",
    price: "1.208 Lei",
    category: "cpu"
  },
  {
    alt: "Procesor Intel Core i5-8500 3.00GHz 6-Core LGA1151 v2 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/5/xi5-8500.jpg.pagespeed.ic.DiSAqMKLlS.webp",
    title:
      "Procesor Intel Core i5-8500 3.00GHz 6-Core LGA1151 v2 - second hand",
    description:
      "Procesor second hand Intel Core i5-8500. 3.00GHz, 6-Core / 6-Thread, 9MB cache, 65W TDP, LGA1151 v2, second hand",
    price: "1.211 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i5-10600 (3.3GHz, 12MB, LGA1200) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX8070110600SRH37_200519160016650173.jpg.pagespeed.ic.9JwInCoxZA.webp",
    title: "Intel CPU Desktop Core i5-10600 (3.3GHz, 12MB, LGA1200) box",
    description: "Intel CPU Desktop Core i5-10600 (3.3GHz, 12MB, LGA1200) box",
    price: "1.247 Lei",
    category: "cpu"
  },
  {
    alt: "64BIT MPU BX8070110600K 4.100G 12MB SRH6R FCLGA1200",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title: "64BIT MPU BX8070110600K 4.100G 12MB SRH6R FCLGA1200",
    description: "64BIT MPU BX8070110600K 4.100G 12MB SRH6R FCLGA1200",
    price: "1.365 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i7-9700F (3.0GHz, 12MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I79700FSRG14_190611160017338048_1.jpg.pagespeed.ic.D6JFheWj8C.webp",
    title: "Intel CPU Desktop Core i7-9700F (3.0GHz, 12MB, LGA1151) box",
    description: "Intel CPU Desktop Core i7-9700F (3.0GHz, 12MB, LGA1151) box",
    price: "1.381 Lei",
    category: "cpu"
  },
  {
    alt:
      "AMD CPU Desktop Ryzen 5 6C/12T 3600XT (4.5GHz Max Boost,36MB,95W,AM4) box with Wraith Spire cooler",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_100_100000281BOX_200602160013084812.jpg.pagespeed.ic.KJglhFLqAg.webp",
    title:
      "AMD CPU Desktop Ryzen 5 6C/12T 3600XT (4.5GHz Max Boost,36MB,95W,AM4) box with Wraith Spire cooler",
    description:
      "AMD CPU Desktop Ryzen 5 6C/12T 3600XT (4.5GHz Max Boost,36MB,95W,AM4) box with Wraith Spire cooler",
    price: "1.386 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i7-9700 (3.0GHz, 12MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I79700SRG13_190617160011333046_1.jpg.pagespeed.ic.D6JFheWj8C.webp",
    title: "Intel CPU Desktop Core i7-9700 (3.0GHz, 12MB, LGA1151) box",
    description: "Intel CPU Desktop Core i7-9700 (3.0GHz, 12MB, LGA1151) box",
    price: "1.475 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i7-9700KF (3.6GHz, 12MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I79700KFSRG16_191022160013085600.jpg.pagespeed.ic.EE0AM-gLFZ.webp",
    title: "Intel CPU Desktop Core i7-9700KF (3.6GHz, 12MB, LGA1151) box",
    description: "Intel CPU Desktop Core i7-9700KF (3.6GHz, 12MB, LGA1151) box",
    price: "1.654 Lei",
    category: "cpu"
  },
  {
    alt:
      "AMD CPU Desktop Ryzen 7 8C/16T 3700X (4.4GHz,36MB,65W,AM4) box with Wraith Prism cooler",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_100_100000071BOX_190919160017509577_1.jpg.pagespeed.ic.5DtKYbodp8.webp",
    title:
      "AMD CPU Desktop Ryzen 7 8C/16T 3700X (4.4GHz,36MB,65W,AM4) box with Wraith Prism cooler",
    description:
      "AMD CPU Desktop Ryzen 7 8C/16T 3700X (4.4GHz,36MB,65W,AM4) box with Wraith Prism cooler",
    price: "1.725 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i7-9700K (3.6GHz, 12MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I79700KSRG15_190604160013374018_1.jpg.pagespeed.ic.EE0AM-gLFZ.webp",
    title: "Intel CPU Desktop Core i7-9700K (3.6GHz, 12MB, LGA1151) box",
    description: "Intel CPU Desktop Core i7-9700K (3.6GHz, 12MB, LGA1151) box",
    price: "1.951 Lei",
    category: "cpu"
  },
  {
    alt:
      "AMD CPU Desktop Ryzen 7 8C/16T 3800X (4.5GHz,36MB,105W,AM4) box with Wraith Prism cooler",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_100_100000025BOX_190919160017509577_1.jpg.pagespeed.ic.5DtKYbodp8.webp",
    title:
      "AMD CPU Desktop Ryzen 7 8C/16T 3800X (4.5GHz,36MB,105W,AM4) box with Wraith Prism cooler",
    description:
      "AMD CPU Desktop Ryzen 7 8C/16T 3800X (4.5GHz,36MB,105W,AM4) box with Wraith Prism cooler",
    price: "2.058 Lei",
    category: "cpu"
  },
  {
    alt: "Intel CPU Desktop Core i9-9900K (3.6GHz, 16MB, LGA1151) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I99900KSRG19_190731160020549892_1.jpg.pagespeed.ic.Xg_59EOcEW.webp",
    title: "Intel CPU Desktop Core i9-9900K (3.6GHz, 16MB, LGA1151) box",
    description: "Intel CPU Desktop Core i9-9900K (3.6GHz, 16MB, LGA1151) box",
    price: "2.177 Lei",
    category: "cpu"
  },
  {
    alt:
      "AMD CPU Desktop Ryzen 7 8C/16T 3800XT(4.7GHz Max Boost,36MB,105W,AM4) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_100_100000279WOF_200602160013388634.jpg.pagespeed.ic.VxWs5uIAVD.webp",
    title:
      "AMD CPU Desktop Ryzen 7 8C/16T 3800XT(4.7GHz Max Boost,36MB,105W,AM4) box",
    description:
      "AMD CPU Desktop Ryzen 7 8C/16T 3800XT(4.7GHz Max Boost,36MB,105W,AM4) box",
    price: "2.238 Lei",
    category: "cpu"
  },
  {
    alt:
      "AMD CPU Desktop Ryzen 9 12C/24T 3900XT (4.7GHz Max Boost,70MB,105W,AM4) box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_100_100000277WOF_200602160016400514.jpg.pagespeed.ic.VX3wXUL0It.webp",
    title:
      "AMD CPU Desktop Ryzen 9 12C/24T 3900XT (4.7GHz Max Boost,70MB,105W,AM4) box",
    description:
      "AMD CPU Desktop Ryzen 9 12C/24T 3900XT (4.7GHz Max Boost,70MB,105W,AM4) box",
    price: "2.844 Lei",
    category: "cpu"
  },
  {
    alt: "Memorie DDR3 1GB 1333 MHz Hynix - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/1/_/x1_gb_ddr3_1333_mhz_hynix.jpg.pagespeed.ic.gNIHn6Wnq2.webp",
    title: "Memorie DDR3 1GB 1333 MHz Hynix - second hand",
    description:
      "Memorie second hand de la Hynix, 1GB DDR3, 1333 MHz, PC3-10600.",
    price: "18 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR2 1GB 800 MHz Samsung - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/1/_/x1_gb_ddr2_800_mhz_samsung.jpg.pagespeed.ic.4lrwjzzuyN.webp",
    title: "Memorie DDR2 1GB 800 MHz Samsung - second hand",
    description:
      "Memorie second hand de la Samsung 1 GB DDR2, 800 MHz, PC2-6400",
    price: "19 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR2 1 GB 667 MHz Hynix - refurbished ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/y/xhynix_1_gb_ddr2_pc5300_667_mhz.jpg.pagespeed.ic.SznP-lEV36.webp",
    title: "Memorie DDR2 1GB 667 MHz Hynix - second hand ",
    description:
      "Memorie second hand reconditionat Hynix 1 GB DDR2, 667 MHz, PC5300.",
    price: "19 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR2 1 GB 533 MHz Kingston - refurbished",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/xkingston_1_gb_ddr2_pc6400_1.jpg.pagespeed.ic.6hlnw1waxp.webp",
    title: "Memorie DDR2 1GB 533 MHz Kingston - second hand",
    description: "Memorie second hand Kingston 1 GB DDR2, 533 MHz, PC4200.",
    price: "19 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR2 1 GB 667 MHz Samsung ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/1/_/x1_gb_ddr2_667_mhz_samsung_pc2-5300u.jpg.pagespeed.ic.oq0oRXy0mq.webp",
    title: "Memorie DDR2 1GB 667 MHz Samsung - second hand",
    description:
      "Memorie RAM second hand de 1 GB tip DDR2 de la Samsung cu frecventa 667 MHz PC2-5300",
    price: "19 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Kingston HyperX Genesis Blue - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/xkingston-hyperx-genesis-blue_1.jpg.pagespeed.ic.-Xdkws7Dbe.webp",
    title:
      "Memorie DDR3 2GB 1333 MHz Kingston HyperX Genesis Blue - second hand",
    description:
      "Modul de memorie second hand de la Kingston, model HyperX Genesis Blue, 2GB DDR3, 1333 MHz, PC3-10600",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Kingston HyperX Blu - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/4/g/x4gb_ddr3_1333_mhz_kingston_hypex_blu_2.jpg.pagespeed.ic.nz15jOV0Np.webp",
    title: "Memorie DDR3 2GB 1333 MHz Kingston HyperX Blu. - second hand",
    description:
      "Memorie second hand de la Kingston 2GB DDR3, 1333 MHz, PC3-10600",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Corsair XMS3 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/x/m/xxms3_4gb_1x4gb__3.jpg.pagespeed.ic.w0xSoA-GeO.webp",
    title: "Memorie DDR3 2GB 1333 MHz Corsair XMS3 - second hand",
    description:
      "Memorie gaming cu radiator, tip DDR3 1333MHz PC3-10600 de la Corsair cu capacitatea de 2GB si timing 9-9-9-24",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Corsair XMS3 Platinum - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/x/m/xxms3_platinum_1.jpg.pagespeed.ic.XZIOYrZEyN.webp",
    title: "Memorie DDR3 2GB 1333 MHz Corsair XMS3 Platinum - second hand",
    description:
      "Memorie gaming cu radiator, tip DDR3 1333MHz PC3-10600 de la Corsair cu capacitatea de 2GB",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Corsair Dominator - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcorsair-dominator-green-heatsink_1.jpg.pagespeed.ic.eQJyZb1Sab.webp",
    title: "Memorie DDR3 2GB 1333 MHz Corsair Dominator - second hand",
    description:
      "Memorie de la Corsair, gama Dominator 2GB DDR3, 1333 MHz, PC3-10600, 9-9-9-24, 1.65 v, radiator verde",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Corsair XMS3 DHX - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcorsair-xms3-dhx-2.jpg.pagespeed.ic.zkkkc502lV.webp",
    title: "Memorie DDR3 2GB 1333 MHz Corsair XMS3 DHX - second hand",
    description:
      "Memorie gaming cu radiator, tip DDR3 1333MHz PC3-10600 de la Corsair cu capacitatea de 2GB",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz G.Skill Ripjaws Red - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/g/_/xg.skill-ripjaws-red-4gb-1600mhz-cl9_3.jpg.pagespeed.ic.-xlK4FDT3v.webp",
    title: "Memorie DDR3 2GB 1333 MHz G.Skill Ripjaws Red - second hand",
    description:
      "Memorie gaming Ripjaws de la producatorul G.Skill, 2GB DDR3 tactat la 1333MHz (PC3-10600), latenta 9-9-9-24, 1.5V, XMP, radiator rosu.",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz G.Skill Ripjaws Black - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/g/_/xg.skill-ripjaws-black.jpg.pagespeed.ic.DkmzaSMBDp.webp",
    title: "Memorie DDR3 2GB 1333 MHz G.Skill Ripjaws Black - second hand",
    description:
      "Memorie gaming Ripjaws de la producatorul G.Skill, 2GB DDR3 tactat la 1333MHz (PC3-10600), latenta 7-7-7-21, 1.5V, XMP, radiator negru.",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Patriot Sector 5 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/a/xpatriot-sector-5.jpg.pagespeed.ic.2gXTdyI-dU.webp",
    title: "Memorie DDR3 2GB 1333 MHz Patriot Sector 5 - second hand",
    description:
      "Modul de memorie DDR3 DIMM second hand Patriot Sector 5, capacitate 2GB, frecventa 1333 MHz, CL9, standard: PC3-10600",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz Patriot Viper Silver - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/a/xpatriot-viper-silver.jpg.pagespeed.ic.lGyUTRJzOU.webp",
    title: "Memorie DDR3 2GB 1333 MHz Patriot Viper Silver - second hand",
    description:
      "Modul de memorie DDR3 DIMM second hand Patriot Viper, capacitate 2GB, frecventa 1333 MHz, CL9, standard: PC3-10600",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz GeIL Value PLUS - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/g/e/xgeil-value-plus.jpg.pagespeed.ic.XTFUjTeZSO.webp",
    title: "Memorie DDR3 2GB 1333 MHz GeIL Value PLUS - second hand",
    description:
      "Memorie gaming Value PLUS de la producatorul GeIL, 2GB DDR3 tactat la 1333MHz (PC3-10600), latenta 9-9-9-24, 1.5V, radiator",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1333 MHz GeIL Value - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/g/e/xgeil-value.jpg.pagespeed.ic.n3G8zvj7bp.webp",
    title: "Memorie DDR3 2GB 1333 MHz GeIL Value - second hand",
    description:
      "Memorie gaming Value de la producatorul GeIL, 2GB DDR3 tactat la 1333MHz (PC3-10600), latenta 9-9-9-24, 1.5V, radiator",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1066 MHz OCZ Gold Edition - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/o/c/xocz-gold-edition.jpg.pagespeed.ic.yh4mnVTOS3.webp",
    title: "Memorie DDR3 2GB 1066 MHz OCZ Gold Edition - second hand",
    description:
      "Memorie second hand de 2GB de la producatorul OCZ, de tip DDR3, ce functioneaza la o frecventa de 1066 MHz, PC3-8500, 7-7-7-16 @ 1.6V",
    price: "39 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR2 2 GB 800 MHz Kingston - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/2/_/x2_gb_ddr2_800_mhz_kingston_low_profile.jpg.pagespeed.ic.SEA6VwN9LX.webp",
    title: "Memorie DDR2 2GB 800 MHz Kingston - second hand",
    description:
      "Memorie refurbished de la Kingston 2 GB DDR2, 800 MHz, PC6400.",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Corsair Dominator",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/d/o/xdominator_4gb_2.jpg.pagespeed.ic.xmOYAmAPUg.webp",
    title: "Memorie DDR3 2GB 1600 MHz Corsair Dominator - second hand",
    description:
      "Memorie de la Corsair, gama Dominator 2GB DDR3, 1600 MHz, PC3-12800, 9-9-9-24, 1.65 v, radiator negru sau albastru",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Kingston HyperX Genesis Blue - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/xkingston-hyperx-genesis-blue_1_1.jpg.pagespeed.ic.-Xdkws7Dbe.webp",
    title:
      "Memorie DDR3 2GB 1600 MHz Kingston HyperX Genesis Blue - second hand",
    description:
      "Modul de memorie second hand de la Kingston, model HyperX Genesis Blue, 2GB DDR3, 1600 MHz, PC3-12800",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Corsair Vengeance Black - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcorsair-vengeance-16gb-4x4gb-ddr3-1600mhz-c_1_1_4.jpg.pagespeed.ic.eWhSuGdVHX.webp",
    title: "Memorie DDR3 2GB 1600 MHz Corsair Vengeance Black - second hand",
    description:
      "Memorie gaming cu radiator negru, tip DDR3 1600MHz PC3-12800 de la Corsair cu capacitatea de 2GB si timing 8-8-8-24",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Corsair XMS3 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/x/m/xxms3_4gb_1x4gb__3_1.jpg.pagespeed.ic.w0xSoA-GeO.webp",
    title: "Memorie DDR3 2GB 1600 MHz Corsair XMS3 - second hand",
    description:
      "Memorie gaming cu radiator, tip DDR3 1600MHz PC3-12800 de la Corsair cu capacitatea de 2GB",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Corsair XMS3 Platinum - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/x/m/xxms3_platinum.jpg.pagespeed.ic.XZIOYrZEyN.webp",
    title: "Memorie DDR3 2GB 1600 MHz Corsair XMS3 Platinum - second hand",
    description:
      "Memorie gaming cu radiator, tip DDR3 1600MHz PC3-12800 de la Corsair cu capacitatea de 2GB",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Corsair Vengeance LP Black - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcorsair-vengeace-lp-black-4gb-1600mhz-second-hand-2_1.jpg.pagespeed.ic.6kyGkFnCCz.webp",
    title: "Memorie DDR3 2GB 1600 MHz Corsair Vengeance LP Black - second hand",
    description:
      "Memorie gaming cu radiator negru, tip DDR3 1600MHz PC3-12800 de la Corsair cu capacitatea de 2GB, timing 9-9-9-24, 1.5V, XMP 1.3",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Patriot Sector 5 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/a/xpatriot-sector-5_1.jpg.pagespeed.ic.2gXTdyI-dU.webp",
    title: "Memorie DDR3 2GB 1600 MHz Patriot Sector 5 - second hand",
    description:
      "Modul de memorie DDR3 DIMM second hand Patriot Sector 5, capacitate 2GB, frecventa 1600 MHz, CL9, standard: PC3-12800",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Z:\\!Webshop\\2-Fotok\\Diverse\\Memoria\\DDR3\\Patriot\\Viper",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/a/xpatriot-viper-blue.jpg.pagespeed.ic._udd2m4EGo.webp",
    title: "Memorie DDR3 2GB 1600 MHz Patriot Viper Blue - second hand",
    description:
      "Modul de memorie DDR3 DIMM second hand Patriot Viper, capacitate 2GB, frecventa 1600 MHz, CL8, standard: PC3-12800",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Crucial Ballistix Tracer - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/b/a/xballistix-tracer.jpg.pagespeed.ic.6Ke5gCijuw.webp",
    title: "Memorie DDR3 2GB 1600 MHz Crucial Ballistix Tracer - second hand",
    description:
      "Memorie second hand de la Crucial, model Ballistix Tracer, 2GB DDR3, 1600 MHz, PC3-12800, CL8, 1.65V, XMP",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt:
      "Memorie DDR3 2GB 1600 MHz TeamGroup Xtreem Dark TXD32048M1600HC8-D - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/t/e/xteamgroup-xtreem-dark.jpg.pagespeed.ic.HkDcJ1BEDG.webp",
    title: "Memorie DDR3 2GB 1600 MHz TeamGroup Xtreem Dark - second hand",
    description:
      "Memorie second hand TeamGroup Xtreem Dark TXD32048M1600HC8-D 2GB DDR3 1600 MHz, PC3-12800, 8-8-8-24, 1.65V",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1066 MHz OCZ Gold Edition - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/o/c/xocz-reaper-hpc.jpg.pagespeed.ic.9nVJMLMPTe.webp",
    title: "Memorie DDR3 2GB 1600 MHz OCZ Reaper HPC - second hand",
    description:
      "Memorie second hand de 2GB de la producatorul OCZ, de tip DDR3, ce functioneaza la o frecventa de 1600 MHz, PC3-12800, 7-7-7-24 @ 1.65V",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1600 MHz Mushkin Enhanced Essential - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/e/n/xenhanced-essential-blue.jpg.pagespeed.ic.WaBHzH0RJN.webp",
    title: "Memorie DDR3 2GB 1600 MHz Mushkin Enhanced Essential - second hand",
    description:
      "Memorie second hand de la Mushkin, 2GB DDR3, 1600 MHz, PC3-12800, 9-9-9-27 @ 1.5V - 1.6V",
    price: "49 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 1866 MHz Corsair Dominator",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/d/o/xdominator_4gb_2_2.jpg.pagespeed.ic.xmOYAmAPUg.webp",
    title: "Memorie DDR3 2GB 1866 MHz Corsair Dominator - second hand",
    description:
      "Memorie de la Corsair, gama Dominator 2GB DDR3, 1866 MHz, PC3-14900, 9-9-9-24, 1.65 v, radiator negru",
    price: "59 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 2GB 2000 MHz G.Skill Ripjaws Black - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/g/_/xg.skill-ripjaws-black_1.jpg.pagespeed.ic.DkmzaSMBDp.webp",
    title: "Memorie DDR3 2GB 2000 MHz G.Skill Ripjaws Black - second hand",
    description:
      "Memorie gaming Ripjaws de la producatorul G.Skill, 2GB DDR3 tactat la 2000MHz (PC3-16000), latenta 9-9-9-27, 1.6V, XMP, radiator negru.",
    price: "69 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1333 MHz Kingston HyperX Fury Black - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/8/_/8_gb_ddr3_1600_mhz_kingston_hyperx_fury_black_hx316c10fb-8_1_2_2_1.jpg",
    title: "Memorie DDR3 4GB 1333 MHz Kingston HyperX Fury Black - second hand",
    description:
      "Memorie gaming HyperX Fury de la producatorul Kingston, 4GB DDR3, tactat la 1333 MHz (PC3-10600), CL9, 1.5V, radiator negru.",
    price: "79 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1333 MHz Corsair Dominator",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/d/o/dominator_4gb.jpg",
    title: "Memorie DDR3 4GB 1333 MHz Corsair Dominator - second hand",
    description:
      "Memorie de la Corsair, gama Dominator 4GB DDR3, 1333 MHz, PC3-10600, 9-9-9-24, 1.60V, radiator negru",
    price: "89 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1600 MHz Kingston HyperX Blu - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/4/g/4gb_ddr3_1333_mhz_kingston_hypex_blu_1.jpg",
    title: "Memorie DDR3 4GB 1600 MHz Kingston HyperX Blu. - second hand",
    description:
      "Memorie second hand de la Kingston, 4GB DDR3, 1600 MHz, PC3-12800",
    price: "89 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1600 MHz Kingston HyperX Fury Black - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/8/_/8_gb_ddr3_1600_mhz_kingston_hyperx_fury_black_hx316c10fb-8_1_2.jpg",
    title: "Memorie DDR3 4GB 1600 MHz Kingston HyperX Fury Black - second hand",
    description:
      "Memorie gaming HyperX Fury de la producatorul Kingston, 4GB DDR3, tactat la 1600MHz (PC3-12800), CL10, 1.5V, radiator negru.",
    price: "89 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1600 MHz Kingston HyperX Genesis Blue - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/kingston-hyperx-genesis-blue.jpg",
    title:
      "Memorie DDR3 4GB 1600 MHz Kingston HyperX Genesis Blue - second hand",
    description:
      "Modul de memorie second hand de la Kingston, model HyperX Genesis Blue, 4GB DDR3, 1600 MHz, PC3-12800",
    price: "89 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1600 MHz Kingston HyperX Fury White - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/kingston-hyperx-fury-white.jpg",
    title: "Memorie DDR3 4GB 1600 MHz Kingston HyperX Fury White - second hand",
    description:
      "Memorie gaming HyperX Fury de la producatorul Kingston, 4GB DDR3, tactat la 1600MHz (PC3-12800), CL10, 1.5V, radiator alb.",
    price: "89 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1866 MHz Kingston HyperX Fury Black - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/8/_/8_gb_ddr3_1600_mhz_kingston_hyperx_fury_black_hx316c10fb-8_1_2_2.jpg",
    title: "Memorie DDR3 4GB 1866 MHz Kingston HyperX Fury Black - second hand",
    description:
      "Memorie gaming HyperX Fury de la producatorul Kingston, 4GB DDR3, tactat la 1866 MHz (PC3-14900), CL10, 1.5V, radiator negru.",
    price: "99 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR4 4GB 2133 MHz G.Skill Value F4-2133C15S-4GNT - open box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/4/g/x4gb_ddr4_2133mhz_g.skill_value_f4-2133c15s-4gnt_1.jpg.pagespeed.ic.wG8Vn6EtKN.webp",
    title:
      "Memorie DDR4 4GB 2133 MHz G.Skill Value F4-2133C15S-4GNT - open box",
    description:
      "Memorie open-box G.Skill Value F4-2133C15S-4GNT 4GB DDR4 2133 MHz, PC4-17000, 15-15-15-35, SPD 1.20V",
    price: "100 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 1600 MHz Corsair Vengeance Pro Red - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/o/xcorsair-vengeance-pro-red-4gb-1600mhz-cl9-second-hand-1_2.jpg.pagespeed.ic.6YN5JDsCqY.webp",
    title: "Memorie DDR3 4GB 2133 MHz Corsair Vengeance Pro Red - second hand",
    description:
      "Memorie gaming cu radiator rosu, tip DDR3 2133MHz PC3-17000 de la Corsair cu capacitatea de 4GB, 9-11-11-31, 1.5V, XMP 1.3",
    price: "110 Lei",
    category: "memory"
  },
  {
    alt:
      "Memorie DDR3 4GB 2133 MHz Kingston HyperX Predator Blue - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/xkingston-hyperx-predator-4gb-ddr3-2133mhz-second-hand.jpg.pagespeed.ic.7NvrRbqOPb.webp",
    title:
      "Memorie DDR3 4GB 2133 MHz Kingston HyperX Predator Blue - second hand",
    description:
      "Memorie second hand de 4GB de la producatorul Kingston, model HyperX Predator Blue, tip DDR3, frecventa 2133 MHz, PC3-17000, 1.5V, CL11, XMP",
    price: "110 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 4GB 2133 MHz Patriot Viper Xtreme - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/4/g/x4gb_ddr3_patriot_viper_xtreme_2133mhz.jpg.pagespeed.ic.bYnFDFxbfJ.webp",
    title: "Memorie DDR3 4GB 2133 MHz Patriot Viper Xtreme - second hand",
    description:
      "Modul de memorie DDR3 DIMM second hand Patriot Viper Xtreme, capacitate 4GB, frecventa 2133 MHz, CL11, standard: PC3-17000",
    price: "110 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR4 4GB 2400 MHz TeamGroup Elite TED44G2400C16BK - open box",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/4/g/x4gb_ddr4_2400mhz_teamgroup_ted44g2400c16bk.jpg.pagespeed.ic.i_6hIgU7gD.webp",
    title:
      "Memorie DDR4 4GB 2400 MHz TeamGroup Elite TED44G2400C16BK - open box",
    description:
      "Memorie open-box TeamGroup Elite TED44G2400C16BK 4GB DDR4 2400 MHz, PC4-19200, 16-16-16-39, SPD 1.20V",
    price: "110 Lei",
    category: "memory"
  },
  {
    alt:
      "Crucial RAM 4GB DDR3L 1600 MT/s (PC3L-12800) CL11 Unbuffered UDIMM 240pin 1.35V/1.5V",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT51264BD160B_161010160315090519_1.jpg.pagespeed.ic.g8-8OV45LU.webp",
    title:
      "Crucial RAM 4GB DDR3L 1600 MT/s (PC3L-12800) CL11 Unbuffered UDIMM 240pin 1.35V/1.5V",
    description:
      "Crucial RAM 4GB DDR3L 1600 MT/s (PC3L-12800) CL11 Unbuffered UDIMM 240pin 1.35V/1.5V",
    price: "154 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 8 GB 1600 MHz Crucial Ballistix Sport - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/8/_/x8_gb_ddr3_1600_mhz_crucial_ballistix_sport.jpg.pagespeed.ic.RA02yHhUjb.webp",
    title: "Memorie DDR3 8GB 1600 MHz Crucial Ballistix Sport - second hand",
    description: "Memorie DIMM de la Crucial, 8 GB DDR3, 1600 MHz.",
    price: "181 Lei",
    category: "memory"
  },
  {
    alt: "KINGSTON 8GB 2666MHz DDR4 Non-ECC CL19 DIMM 1Rx8",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_KVR26N19S8_8_171212150021033505_1.jpg.pagespeed.ic.GaekNtNoD1.webp",
    title: "KINGSTON 8GB 2666MHz DDR4 Non-ECC CL19 DIMM 1Rx8",
    description: "KINGSTON 8GB 2666MHz DDR4 Non-ECC CL19 DIMM 1Rx8",
    price: "184 Lei",
    category: "memory"
  },
  {
    alt:
      "Kingston  8GB 2400MHz DDR4 Non-ECC CL17 DIMM 1Rx8, EAN: '740617259643",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_KVR24N17S8_8_160809160127013215_1.jpg.pagespeed.ic.w-5LvH2X6F.webp",
    title:
      "Kingston  8GB 2400MHz DDR4 Non-ECC CL17 DIMM 1Rx8, EAN: '740617259643",
    description:
      "Kingston 8GB 2400MHz DDR4 Non-ECC CL17 DIMM 1Rx8, EAN: '740617259643",
    price: "185 Lei",
    category: "memory"
  },
  {
    alt: "Memorie DDR3 8GB 1866 MHz Crucial - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/8/g/x8gb_ddr3_1866_mhz_crucial_ct102464bd186d.m16fp.jpg.pagespeed.ic.q8Dp_JTBXj.webp",
    title: "Memorie DDR3 8GB 1866 MHz Crucial - second hand",
    description:
      "Memorie DIMM second hand Crucial 8GB DDR3, 1866MHz, PC3-14900",
    price: "191 Lei",
    category: "memory"
  },
  {
    alt: "Placa de baza Asus P8H67-M Pro cu I/O Shield - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/s/xasus_p8h61-m_le.jpg.pagespeed.ic.XFzmgHY4kP.webp",
    title: "Placa de baza Asus P8H61-M LE cu I/O Shield - second hand",
    description:
      "Placa de baza Asus P8H61-M LE, mATX, socket 1155, 2 x DIMM, SATA 3Gb/s, USB 2.0, PCI-E 2.0, I/O Shield",
    price: "115 Lei",
    category: "motherboard"
  },
  {
    alt:
      "Kit placa de baza Acer / ECS H81H3-AD + I/O Shield + Ventilator - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/xkit_placa_de_baza_acer_ecs_h81h3-ad_io_shield_ventilator_-_second_hand_-_2.jpg.pagespeed.ic.sePiHj6IGu.webp",
    title:
      "Kit placa de baza Acer / ECS H81H3-AD + I/O Shield + Ventilator - second hand",
    description:
      "Kit placa de baza Acer / ECS H81H3-AD + I/O Shield + Ventilator - second hand",
    price: "189 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop A320 (SAM4, 2xDDR4, PCI-Ex16, PCI-Ex1, USB3.2, USB2.0, SATA III, HDMI, DVI-D, GLAN) mATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_A320M_A_PRO_191002160022410446_1.jpg.pagespeed.ic.8nD6IiHqxP.webp",
    title:
      "MSI Main Board Desktop A320 (SAM4, 2xDDR4, PCI-Ex16, PCI-Ex1, USB3.2, USB2.0, SATA III, HDMI, DVI-D, GLAN) mATX Retail",
    description:
      "MSI Main Board Desktop A320 (SAM4, 2xDDR4, PCI-Ex16, PCI-Ex1, USB3.2, USB2.0, SATA III, HDMI, DVI-D, GLAN) mATX Retail",
    price: "243 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Main Board Desktop AMD B350 (AM4, 2xDDR4, D-Sub/ DVI-D/ HDMI ,1xPCIe x16, 2xPCIe x1, 1xM.2, 4xSATA 6Gb/s, 2xPS/2, 4xUSB3.1, 2xUSB 2.0 Realtek ALC887, LAN) mATX",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GA_A320M_S2H_V2_200213080307981057.jpg.pagespeed.ic.DHMuXaSL9t.webp",
    title:
      "GIGABYTE Main Board Desktop AMD B350 (AM4, 2xDDR4, D-Sub/ DVI-D/ HDMI ,1xPCIe x16, 2xPCIe x1, 1xM.2, 4xSATA 6Gb/s, 2xPS/2, 4xUSB3.1, 2xUSB 2.0 Realtek ALC887, LAN) mATX",
    description:
      "GIGABYTE Main Board Desktop AMD B350 (AM4, 2xDDR4, D-Sub/ DVI-D/ HDMI ,1xPCIe x16, 2xPCIe x1, 1xM.2, 4xSATA 6Gb/s, 2xPS/2, 4xUSB3.1, 2xUSB 2.0 Realtek ALC887, LAN) mATX",
    price: "249 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE A320M-H, AM4, AMD A320, 2xDDR4, Max:2667MHz, Max:32GB, 1xPCIE16 3.0, 2xPCIE1, 4xSATA3, 2xUSB, 4xUSB3.1, DVI, HDMI, RAID, 7.1, Gigabit, PS2:2 db, Micro-ATX, 1xM.2",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GA_A320M_H_181204150013564730_1.jpg.pagespeed.ic.6LqQ1vnHmm.webp",
    title:
      "GIGABYTE A320M-H, AM4, AMD A320, 2xDDR4, Max:2667MHz, Max:32GB, 1xPCIE16 3.0, 2xPCIE1, 4xSATA3, 2xUSB, 4xUSB3.1, DVI, HDMI, RAID, 7.1, Gigabit, PS2:2 db, Micro-ATX, 1xM.2",
    description:
      "GIGABYTE A320M-H, AM4, AMD A320, 2xDDR4, Max:2667MHz, Max:32GB, 1xPCIE16 3.0, 2xPCIE1, 4xSATA3, 2xUSB, 4xUSB3.1, DVI, HDMI, RAID, 7.1, Gigabit, PS2:2 db, Micro-ATX, 1xM.2",
    price: "262 Lei",
    category: "motherboard"
  },
  {
    alt:
      "Gigabyte Main Board Desktop H310 (S1151, 2xDDR4, D-sub, 1xPCIex16, 2xPCIex1, ALC887, Realtek 8118 Gaming LAN, 4xSATA3, 4xUSB 3.1 2xUSB 2.0) mATX, retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GA_H310M_S2_2.0_190716160021407642_1.jpg.pagespeed.ic.l8KYA0OESb.webp",
    title:
      "Gigabyte Main Board Desktop H310 (S1151, 2xDDR4, D-sub, 1xPCIex16, 2xPCIex1, ALC887, Realtek 8118 Gaming LAN, 4xSATA3, 4xUSB 3.1 2xUSB 2.0) mATX, retail",
    description:
      "Gigabyte Main Board Desktop H310 (S1151, 2xDDR4, D-sub, 1xPCIex16, 2xPCIex1, ALC887, Realtek 8118 Gaming LAN, 4xSATA3, 4xUSB 3.1 2xUSB 2.0) mATX, retail",
    price: "282 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop H310 (S1151v2, DDR4, USB3.1, USB2.0, SATA III, HDMI, DVI-D, VGA - Requires Processor Graphics, 8-Channel(7.1), Realtek 8111H Gigabit LAN) mATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_H310M_PRO_VDH_PLUS_181101150007626785_1.jpg.pagespeed.ic.lbWuwtneFt.webp",
    title:
      "MSI Main Board Desktop H310 (S1151v2, DDR4, USB3.1, USB2.0, SATA III, HDMI, DVI-D, VGA - Requires Processor Graphics, 8-Channel(7.1), Realtek 8111H Gigabit LAN) mATX Retail",
    description:
      "MSI Main Board Desktop H310 (S1151v2, DDR4, USB3.1, USB2.0, SATA III, HDMI, DVI-D, VGA - Requires Processor Graphics, 8-Channel(7.1), Realtek 8111H Gigabit LAN) mATX Retail",
    price: "286 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Main Board Desktop H310 (S1151, 2xDDR4, VGA, HDMI, 1xPCIex16, 2xPCIex1, ALC887, Realtek 8118 LAN, 4xSATA III, USB 3.1, USB 2.0) mATX, retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_H310M_H_2.0_190613160007939289_2.jpg.pagespeed.ic.1WvRKdr7dz.webp",
    title:
      "GIGABYTE Main Board Desktop H310 (S1151, 2xDDR4, VGA, HDMI, 1xPCIex16, 2xPCIex1, ALC887, Realtek 8118 LAN, 4xSATA III, USB 3.1, USB 2.0) mATX, retail",
    description:
      "GIGABYTE Main Board Desktop H310 (S1151, 2xDDR4, VGA, HDMI, 1xPCIex16, 2xPCIex1, ALC887, Realtek 8118 LAN, 4xSATA III, USB 3.1, USB 2.0) mATX, retail",
    price: "286 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Main Board Desktop Intel H310 (S1151v2, 2xDDR4, Realtek ALC887, 1x10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX1, 4xSATA 6Gb/s, 1xPS/2, 1xD-Sub, 1xDVI-D, 2xUSB3.1Gen1, 4xUSB2.0, 1xRJ-45) mATX, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_H310M_S2V_2.0_190724160010143677_1.jpg.pagespeed.ic.NxJuRiJmRk.webp",
    title:
      "GIGABYTE Main Board Desktop Intel H310 (S1151v2, 2xDDR4, Realtek ALC887, 1x10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX1, 4xSATA 6Gb/s, 1xPS/2, 1xD-Sub, 1xDVI-D, 2xUSB3.1Gen1, 4xUSB2.0, 1xRJ-45) mATX, Retail",
    description:
      "GIGABYTE Main Board Desktop Intel H310 (S1151v2, 2xDDR4, Realtek ALC887, 1x10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX1, 4xSATA 6Gb/s, 1xPS/2, 1xD-Sub, 1xDVI-D, 2xUSB3.1Gen1, 4xUSB2.0, 1xRJ-45) mATX, Retail",
    price: "287 Lei",
    category: "motherboard"
  },
  {
    alt: "MSI Main Board Desktop H310M PRO-M2 PLUS",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_H310M_PRO_M2_PLUS_190408160011248358_1.jpg.pagespeed.ic.2rWjdVG059.webp",
    title: "MSI Main Board Desktop H310M PRO-M2 PLUS",
    description: "MSI Main Board Desktop H310M PRO-M2 PLUS",
    price: "303 Lei",
    category: "motherboard"
  },
  {
    alt:
      "Gigabyte Main Board Desktop H310 (S1151, 2xDDR4, HDMI, DVI-D, VGA, 1xPCIe x16, 2xPCIe x1, 4xSATA III, M.2, 2xUSB 3.1, 4xUSB 2.0,  1 x M.2, 2x PS/2, Gb LAN, Audio ALC887   mATX",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_H310M_S2H_2.0_200226150017907176.jpg.pagespeed.ic.bRth6cWwK5.webp",
    title:
      "Gigabyte Main Board Desktop H310 (S1151, 2xDDR4, HDMI, DVI-D, VGA, 1xPCIe x16, 2xPCIe x1, 4xSATA III, M.2, 2xUSB 3.1, 4xUSB 2.0,  1 x M.2, 2x PS/2, Gb LAN, Audio ALC887   mATX",
    description:
      "Gigabyte Main Board Desktop H310 (S1151, 2xDDR4, HDMI, DVI-D, VGA, 1xPCIe x16, 2xPCIe x1, 4xSATA III, M.2, 2xUSB 3.1, 4xUSB 2.0, 1 x M.2, 2x PS/2, Gb LAN, Audio ALC887 mATX",
    price: "307 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Mainboard Desktop H410 (S1200, 2xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 4xSATA III, 1xM.2, USB 3.2, USB 2.0) mATX retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_H410M_S2H_200520160008581922.jpg.pagespeed.ic.M8jVWYKm-o.webp",
    title:
      "GIGABYTE Mainboard Desktop H410 (S1200, 2xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 4xSATA III, 1xM.2, USB 3.2, USB 2.0) mATX retail",
    description:
      "GIGABYTE Mainboard Desktop H410 (S1200, 2xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 4xSATA III, 1xM.2, USB 3.2, USB 2.0) mATX retail",
    price: "328 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop B450 (SAM4, 2xDDR4, 1xPCI-Ex16, 2xPCI-Ex1, USB3.2, USB2.0, 4xSATA III, M.2, Raid, VGA, DVI-D, HDMI, GLAN) mATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_B450M_PRO_M2_MAX_191106080012074897_1.jpg.pagespeed.ic.iNtTlu7wmn.webp",
    title:
      "MSI Main Board Desktop B450 (SAM4, 2xDDR4, 1xPCI-Ex16, 2xPCI-Ex1, USB3.2, USB2.0, 4xSATA III, M.2, Raid, VGA, DVI-D, HDMI, GLAN) mATX Retail",
    description:
      "MSI Main Board Desktop B450 (SAM4, 2xDDR4, 1xPCI-Ex16, 2xPCI-Ex1, USB3.2, USB2.0, 4xSATA III, M.2, Raid, VGA, DVI-D, HDMI, GLAN) mATX Retail",
    price: "349 Lei",
    category: "motherboard"
  },
  {
    alt: "GIGABYTE Main Board Desktop B450M GAMING",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_B450M_GAMING_181127150007526297.jpg.pagespeed.ic.KZsZN7v7Kn.webp",
    title: "GIGABYTE Main Board Desktop B450M GAMING",
    description: "GIGABYTE Main Board Desktop B450M GAMING",
    price: "369 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop B460M-A PRO (S1200, 2xDDR4, 1xPCI-Ex16, 2xPCI-Ex1, 6xUSB3.2 Gen1 Type A, 6xUSB2.0, 6xSATA III, 1xM.2, DVI-D, HDMI, 1xGLAN) mATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title:
      "MSI Main Board Desktop B460M-A PRO (S1200, 2xDDR4, 1xPCI-Ex16, 2xPCI-Ex1, 6xUSB3.2 Gen1 Type A, 6xUSB2.0, 6xSATA III, 1xM.2, DVI-D, HDMI, 1xGLAN) mATX Retail",
    description:
      "MSI Main Board Desktop B460M-A PRO (S1200, 2xDDR4, 1xPCI-Ex16, 2xPCI-Ex1, 6xUSB3.2 Gen1 Type A, 6xUSB2.0, 6xSATA III, 1xM.2, DVI-D, HDMI, 1xGLAN) mATX Retail",
    price: "384 Lei",
    category: "motherboard"
  },
  {
    alt: "MSI Main Board Desktop B365M PRO-VDH",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_B365M_PRO_VDH_190822160012476491_1.jpg.pagespeed.ic.sd5BsiRSXL.webp",
    title: "MSI Main Board Desktop B365M PRO-VDH",
    description: "MSI Main Board Desktop B365M PRO-VDH",
    price: "386 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop B450 (SAM4, 4xDDR4, 1xPCI-E X16, 2xPCI-E X1, USB3.2, USB2.0, 4xSATA III, 1xM.2, Realtek ALC892 Audio, VGA, DVI-D, HDMI, GLAN) mATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_B450M_PRO_VDH_MAX_191216150018413921_1.jpg.pagespeed.ic.qA0Fq_DUZH.webp",
    title:
      "MSI Main Board Desktop B450 (SAM4, 4xDDR4, 1xPCI-E X16, 2xPCI-E X1, USB3.2, USB2.0, 4xSATA III, 1xM.2, Realtek ALC892 Audio, VGA, DVI-D, HDMI, GLAN) mATX Retail",
    description:
      "MSI Main Board Desktop B450 (SAM4, 4xDDR4, 1xPCI-E X16, 2xPCI-E X1, USB3.2, USB2.0, 4xSATA III, 1xM.2, Realtek ALC892 Audio, VGA, DVI-D, HDMI, GLAN) mATX Retail",
    price: "392 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE B460M D2V ( B460, S1200, 2xDDR4, 1xPCIe x16, D-Sub /DVI-D, 2xPCIe x1, ALC887, 6 x SATA, 1 x M.2 , 6 x USB, GbE LAN, mATX",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title:
      "GIGABYTE B460M D2V ( B460, S1200, 2xDDR4, 1xPCIe x16, D-Sub /DVI-D, 2xPCIe x1, ALC887, 6 x SATA, 1 x M.2 , 6 x USB, GbE LAN, mATX",
    description:
      "GIGABYTE B460M D2V ( B460, S1200, 2xDDR4, 1xPCIe x16, D-Sub /DVI-D, 2xPCIe x1, ALC887, 6 x SATA, 1 x M.2 , 6 x USB, GbE LAN, mATX",
    price: "411 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Main Board Desktop Intel  H110 (S1151, 2xDDR4, Realtek ALC887, 1x10/100/1000 Mbit, 1xPCIEX16, 5XPCIEX1(Mining Ready 6xVGA), 1xM.2, 4xSATA 6Gb/s, 2xPS/2, 1xparallel port, 1xserial port, 1xD-Sub, 2xUSB3.1Gen1, 2xUSB2.0, 1xRJ-45) ATX, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_GA_H110_D3A_170627160010688490_1.jpg",
    title:
      "GIGABYTE Main Board Desktop Intel  H110 (S1151, 2xDDR4, Realtek ALC887, 1x10/100/1000 Mbit, 1xPCIEX16, 5XPCIEX1(Mining Ready 6xVGA), 1xM.2, 4xSATA 6Gb/s, 2xPS/2, 1xparallel port, 1xserial port, 1xD-Sub, 2xUSB3.1Gen1, 2xUSB2.0, 1xRJ-45) ATX, Retail",
    description:
      "GIGABYTE Main Board Desktop Intel  H110 (S1151, 2xDDR4, Realtek ALC887, 1x10/100/1000 Mbit, 1xPCIEX16, 5XPCIEX1(Mining Ready 6xVGA), 1xM.2, 4xSATA 6Gb/s, 2xPS/2, 1xparallel port, 1xserial port, 1xD-Sub, 2xUSB3.1Gen1, 2xUSB2.0, 1xRJ-45) ATX, Retail",
    price: "415 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Mainboard Desktop B460 (S1200, 4xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 6xSATA III RAID, 1xM.2, USB 3.2A, USB 2.0) mATX retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_B460M_DS3H_200521160017426580.jpg",
    title:
      "GIGABYTE Mainboard Desktop B460 (S1200, 4xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 6xSATA III RAID, 1xM.2, USB 3.2A, USB 2.0) mATX retail",
    description:
      "GIGABYTE Mainboard Desktop B460 (S1200, 4xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 6xSATA III RAID, 1xM.2, USB 3.2A, USB 2.0) mATX retail",
    price: "423 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Main Board Desktop B450 AORUS M ((SAM4, 4xDDR4, 1xPCI-Ex16, 1xPCIEX4, 1xPCI-Ex1, USB3.1, USB2.0, 6xSATA III, 1xM.2, 7.1Audio, DVI-D, HDMI, GLAN) mATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_B450_AORUS_M_181002140013518336_1.jpg",
    title:
      "GIGABYTE Main Board Desktop B450 AORUS M ((SAM4, 4xDDR4, 1xPCI-Ex16, 1xPCIEX4, 1xPCI-Ex1, USB3.1, USB2.0, 6xSATA III, 1xM.2, 7.1Audio, DVI-D, HDMI, GLAN) mATX Retail",
    description:
      "GIGABYTE Main Board Desktop B450 AORUS M ((SAM4, 4xDDR4, 1xPCI-Ex16, 1xPCIEX4, 1xPCI-Ex1, USB3.1, USB2.0, 6xSATA III, 1xM.2, 7.1Audio, DVI-D, HDMI, GLAN) mATX Retail",
    price: "441 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop B360 (S1151, DDR4, USB3.1, USB2.0, SATA III, M.2, DisplayPort, DVI-D - Requires Processor Graphics, 8-Channel(7.1) HD Audio with Audio Boost, Intel I219-V Gigabit LAN) ATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_B360_A_PRO_180405130112049996_1.jpg",
    title:
      "MSI Main Board Desktop B360 (S1151, DDR4, USB3.1, USB2.0, SATA III, M.2, DisplayPort, DVI-D - Requires Processor Graphics, 8-Channel(7.1) HD Audio with Audio Boost, Intel I219-V Gigabit LAN) ATX Retail",
    description:
      "MSI Main Board Desktop B360 (S1151, DDR4, USB3.1, USB2.0, SATA III, M.2, DisplayPort, DVI-D - Requires Processor Graphics, 8-Channel(7.1) HD Audio with Audio Boost, Intel I219-V Gigabit LAN) ATX Retail",
    price: "443 Lei",
    category: "motherboard"
  },
  {
    alt: "GIGABYTE Main Board Desktop B450 GAMING X",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_B450_GAMING_X_190418160017339842_1.jpg",
    title: "GIGABYTE Main Board Desktop B450 GAMING X",
    description: "GIGABYTE Main Board Desktop B450 GAMING X",
    price: "459 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Mainboard Desktop H470 (S1200, 4xDDR4, HDMI, DVI-D, VGA, Thunderbolt 2c, 1xPCIex16, 1xPCIex4, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 6xSATA III RAID, 2xM.2, USB 3.2A, USB3.2C, USB 2.0) mATX retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_H470M_DS3H_200520160016114549.jpg",
    title:
      "GIGABYTE Mainboard Desktop H470 (S1200, 4xDDR4, HDMI, DVI-D, VGA, Thunderbolt 2c, 1xPCIex16, 1xPCIex4, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 6xSATA III RAID, 2xM.2, USB 3.2A, USB3.2C, USB 2.0) mATX retail",
    description:
      "GIGABYTE Mainboard Desktop H470 (S1200, 4xDDR4, HDMI, DVI-D, VGA, Thunderbolt 2c, 1xPCIex16, 1xPCIex4, 2xPCIex1, ALC887, 8118 Gaming GbE LAN, 6xSATA III RAID, 2xM.2, USB 3.2A, USB3.2C, USB 2.0) mATX retail",
    price: "520 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Mainboard Desktop B460 (S1200, 4xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 1xPCIex4, 3xPCIex1, ALC1200, 8118 Gaming GbE LAN, 6xSATA III RAID, 2xM.2, USB 3.2A and Type-C, USB 2.0) ATX retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title:
      "GIGABYTE Mainboard Desktop B460 (S1200, 4xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 1xPCIex4, 3xPCIex1, ALC1200, 8118 Gaming GbE LAN, 6xSATA III RAID, 2xM.2, USB 3.2A and Type-C, USB 2.0) ATX retail",
    description:
      "GIGABYTE Mainboard Desktop B460 (S1200, 4xDDR4, HDMI, DVI-D, VGA, 1xPCIex16, 1xPCIex4, 3xPCIex1, ALC1200, 8118 Gaming GbE LAN, 6xSATA III RAID, 2xM.2, USB 3.2A and Type-C, USB 2.0) ATX retail",
    price: "520 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop B460 (S1200, 4xDDR4, 2xPCI-Ex16, 1xPCI-Ex1, USB3.2, 6xSATA III, 2xM.2, Raid, DP, HDMI, GLAN) mATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title:
      "MSI Main Board Desktop B460 (S1200, 4xDDR4, 2xPCI-Ex16, 1xPCI-Ex1, USB3.2, 6xSATA III, 2xM.2, Raid, DP, HDMI, GLAN) mATX Retail",
    description:
      "MSI Main Board Desktop B460 (S1200, 4xDDR4, 2xPCI-Ex16, 1xPCI-Ex1, USB3.2, 6xSATA III, 2xM.2, Raid, DP, HDMI, GLAN) mATX Retail",
    price: "580 Lei",
    category: "motherboard"
  },
  {
    alt: "GIGABYTE Main Board Desktop B450 AORUS PRO",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_B450_AORUS_PRO_181002140011989726_1.jpg",
    title: "GIGABYTE Main Board Desktop B450 AORUS PRO",
    description: "GIGABYTE Main Board Desktop B450 AORUS PRO",
    price: "645 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 2xPCI-Ex16, 4xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DVI-D, GLAN, RGB) ATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_MPG_Z390_GAMING_PLUS_181218084253716586_1.jpg",
    title:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 2xPCI-Ex16, 4xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DVI-D, GLAN, RGB) ATX Retail",
    description:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 2xPCI-Ex16, 4xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DVI-D, GLAN, RGB) ATX Retail",
    price: "671 Lei",
    category: "motherboard"
  },
  {
    alt: "GIGABYTE Main Board Desktop B550 GAMING X",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title: "GIGABYTE Main Board Desktop B550 GAMING X",
    description: "GIGABYTE Main Board Desktop B550 GAMING X",
    price: "714 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 3xPCI-Ex16, 2xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DP, 2xGLAN, RGB) ATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_MAG_Z390_TOMAHAWK_190328170010775349_1.jpg",
    title:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 3xPCI-Ex16, 2xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DP, 2xGLAN, RGB) ATX Retail",
    description:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 3xPCI-Ex16, 2xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DP, 2xGLAN, RGB) ATX Retail",
    price: "808 Lei",
    category: "motherboard"
  },
  {
    alt: "GIGABYTE Main Board Desktop Z490M GAMING X",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_Z490M_GAMING_X_200512160018951202.jpg",
    title: "GIGABYTE Main Board Desktop Z490M GAMING X",
    description: "GIGABYTE Main Board Desktop Z490M GAMING X",
    price: "841 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop B550M MORTAR WIFI, AM4, 4xDDR4, 2xPCI-Ex16, 2xPCI-Ex1, 6xSATA3, 2xM2, 2xUSB3.2 Gen2(1xType-C +1xType-A), 5xUSB3.2 Gen1 (1xType-C+4xType-A),6xUSB2.0, DP, HDMI, WiFi 6 AX200, BT 5.1, 1x 2.5GLAN, mATX",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_MAG_B550M_MORTAR_WIFI_200806160013856330.jpg",
    title:
      "MSI Main Board Desktop B550M MORTAR WIFI, AM4, 4xDDR4, 2xPCI-Ex16, 2xPCI-Ex1, 6xSATA3, 2xM2, 2xUSB3.2 Gen2(1xType-C +1xType-A), 5xUSB3.2 Gen1 (1xType-C+4xType-A),6xUSB2.0, DP, HDMI, WiFi 6 AX200, BT 5.1, 1x 2.5GLAN, mATX",
    description:
      "MSI Main Board Desktop B550M MORTAR WIFI, AM4, 4xDDR4, 2xPCI-Ex16, 2xPCI-Ex1, 6xSATA3, 2xM2, 2xUSB3.2 Gen2(1xType-C +1xType-A), 5xUSB3.2 Gen1 (1xType-C+4xType-A),6xUSB2.0, DP, HDMI, WiFi 6 AX200, BT 5.1, 1x 2.5GLAN, mATX",
    price: "869 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop MAG B550 TOMAHAWK (AM4, 4xDDR4, 2xPCI-E x16, 2xPCI-E x1, 2xM.2, 6xSATA3, 2xUSB3.2Gen2, 5xUSB3.2 Gen1, RAID, HDMI, DP, 2xGLAN) ATX",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title:
      "MSI Main Board Desktop MAG B550 TOMAHAWK (AM4, 4xDDR4, 2xPCI-E x16, 2xPCI-E x1, 2xM.2, 6xSATA3, 2xUSB3.2Gen2, 5xUSB3.2 Gen1, RAID, HDMI, DP, 2xGLAN) ATX",
    description:
      "MSI Main Board Desktop MAG B550 TOMAHAWK (AM4, 4xDDR4, 2xPCI-E x16, 2xPCI-E x1, 2xM.2, 6xSATA3, 2xUSB3.2Gen2, 5xUSB3.2 Gen1, RAID, HDMI, DP, 2xGLAN) ATX",
    price: "896 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop MPG Z390 GAMING EDGE AC (S1151, 4xDDR4, 3xPCI-E X16,3xPCI-E X1,6xSATA3, 2xM.2, 3xUSB3.1 Gen2, 6xUSB3.1 Gen1, 6xUSB2.0, DP, HDMI, GLAN) ATX",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title:
      "MSI Main Board Desktop MPG Z390 GAMING EDGE AC (S1151, 4xDDR4, 3xPCI-E X16,3xPCI-E X1,6xSATA3, 2xM.2, 3xUSB3.1 Gen2, 6xUSB3.1 Gen1, 6xUSB2.0, DP, HDMI, GLAN) ATX",
    description:
      "MSI Main Board Desktop MPG Z390 GAMING EDGE AC (S1151, 4xDDR4, 3xPCI-E X16,3xPCI-E X1,6xSATA3, 2xM.2, 3xUSB3.1 Gen2, 6xUSB3.1 Gen1, 6xUSB2.0, DP, HDMI, GLAN) ATX",
    price: "896 Lei",
    category: "motherboard"
  },
  {
    alt:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 3xPCI-Ex16, 3xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DP, GLAN, RGB) ATX Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_MPG_Z390_GAMING_PRO_CARBON_190304150015050333_1.jpg",
    title:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 3xPCI-Ex16, 3xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DP, GLAN, RGB) ATX Retail",
    description:
      "MSI Main Board Desktop Z390 (S1151, 4xDDR4, 3xPCI-Ex16, 3xPCI-Ex1, USB3.1, USB Type-C, USB2.0, 6xSATA III, 2xM.2, RAID, HDMI, DP, GLAN, RGB) ATX Retail",
    price: "931 Lei",
    category: "motherboard"
  },
  {
    alt: "GIGABYTE  Main Board Desktop B550 AORUS PRO",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/images/catalog/product/placeholder/xsmall_image.jpg.pagespeed.ic.0AZM5j2dHE.webp",
    title: "GIGABYTE  Main Board Desktop B550 AORUS PRO",
    description: "GIGABYTE Main Board Desktop B550 AORUS PRO",
    price: "951 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Main Board Desktop Intel Z390 (S1151v2, 4xDDR4, Realtek ALC892, 10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX4, 3xPCIEX1, 2xM.2, 6xSATA 6Gb/s, 4xUSB 2.0, 1 x HDMI, 4xUSB 3.1, 2xUSB 3.1, 1xRJ-45 port) ATX, Retail.",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_Z390_AORUS_PRO_181026140008390753_1.jpg",
    title:
      "GIGABYTE Main Board Desktop Intel Z390 (S1151v2, 4xDDR4, Realtek ALC892, 10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX4, 3xPCIEX1, 2xM.2, 6xSATA 6Gb/s, 4xUSB 2.0, 1 x HDMI, 4xUSB 3.1, 2xUSB 3.1, 1xRJ-45 port) ATX, Retail.",
    description:
      "GIGABYTE Main Board Desktop Intel Z390 (S1151v2, 4xDDR4, Realtek ALC892, 10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX4, 3xPCIEX1, 2xM.2, 6xSATA 6Gb/s, 4xUSB 2.0, 1 x HDMI, 4xUSB 3.1, 2xUSB 3.1, 1xRJ-45 port) ATX, Retail.",
    price: "953 Lei",
    category: "motherboard"
  },
  {
    alt:
      "GIGABYTE Main Board Desktop Intel Z390 (S1151v2, 4xDDR4, Realtek ALC1220-VB, 10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX4, 4xPCIEX1, 2xM.2, 6xSATA 6Gb/s, 4xUSB 2.0, 1 x HDMI, 4xUSB 3.1, 2xUSB 3.1, 1xRJ-45 port) ATX, Retail.",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_Z390_AORUS_ELITE_181026140011366645_1.jpg",
    title:
      "GIGABYTE Main Board Desktop Intel Z390 (S1151v2, 4xDDR4, Realtek ALC1220-VB, 10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX4, 4xPCIEX1, 2xM.2, 6xSATA 6Gb/s, 4xUSB 2.0, 1 x HDMI, 4xUSB 3.1, 2xUSB 3.1, 1xRJ-45 port) ATX, Retail.",
    description:
      "GIGABYTE Main Board Desktop Intel Z390 (S1151v2, 4xDDR4, Realtek ALC1220-VB, 10/100/1000 Mbit, 1xPCIEX16, 1xPCIEX4, 4xPCIEX1, 2xM.2, 6xSATA 6Gb/s, 4xUSB 2.0, 1 x HDMI, 4xUSB 3.1, 2xUSB 3.1, 1xRJ-45 port) ATX, Retail.",
    price: "959 Lei",
    category: "motherboard"
  },
  {
    alt: 'HDD 80 GB S-ATA Seagate 3.5" - reconditionat',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/d/xhdd_80gb_seagate_sata.jpg.pagespeed.ic.ydbFN30GlF.webp",
    title: 'HDD 80 GB Seagate SATA 3.5" - second hand',
    description:
      'HDD reconditionat de 80 GB de la Seagate, SATA-2, 3 Gb/s, 7200 RPM, 8 MB Cache, 3.5".',
    price: "9 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD Hitachi 160 GB SATA-II 3.5" - reconditionat',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/3/2/x320gb_hitachi_sata_2_2.jpg.pagespeed.ic.RBZOB1aVNy.webp",
    title: 'HDD 160 GB Hitachi SATA-II 3.5" - second hand',
    description:
      'HDD reconditionat de 160 GB Hitachi Serial-ATA II, 3 Gb/s, 7200 RPM si are 8 MB Cache, 3.5".',
    price: "14 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 160 GB S-ATA Western Digital 3.5" - reconditionat',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/w/e/xwestern_digital_160_gb_sata.jpg.pagespeed.ic.JZDXL-ZmEb.webp",
    title: 'HDD 160 GB S-ATA 2 Western Digital 3.5" - second hand',
    description:
      'HDD intern reconditionat de 160 GB Western Digital, SATA-2, 3 Gb/s, 7200 RPM, 8 MB Cache, 3.5".',
    price: "15 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 250 GB S-ATA Western Digital 3,5" - reconditionat',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/w/e/xwestern_digital_caviar_blue_250gb_1.jpg.pagespeed.ic.9vlWSTQWgq.webp",
    title: 'HDD 250 GB Western Digital SATA III 3.5" - second hand',
    description:
      'HDD intern second hand de 250 GB Western Digital, SATA III, 6 Gb/s, 7200 RPM, 16 MB Cache, 3.5".',
    price: "33 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 250 GB S-ATA Hitachi 3.5" - reconditionat',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/a/xhard_disk_hitachi_250_gb.jpg.pagespeed.ic.yzFxHhczpg.webp",
    title: 'HDD 250 GB Hitachi Deskstar SATA-II 3.5" - second hand',
    description:
      'HDD second hand reconditionat de 250 GB Hitachi, SATA-2, 3 Gb/s, 7200 RPM, 8 MB Cache, 3.5".',
    price: "34 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 320 GB Seagate SATA-III 3.5" - second hand',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/e/xseagate_320gb_1.jpg.pagespeed.ic.tmZEfljyIw.webp",
    title: 'HDD 320 GB Seagate Barracuda SATA-III 3.5" - second hand',
    description:
      'Hard disk intern 3.5" reconditionat cu capacitatea de 320 GB de la Seagate cu interfata Serial-ATA III, cu viteza de rotatie 7200 RPM si buffer de 16 MB.',
    price: "39 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 320 GB S-ATA 2 Western Digital 3,5" - reconditionat',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/w/d/xwd3200aajs-56m0a0-2_1.jpg.pagespeed.ic.pXhtfV1MRr.webp",
    title: 'HDD 320 GB Western Digital Caviar Blue SATA-II 3.5" - second hand',
    description:
      "Hard disk intern reconditionat de 320 GB de la Western Digital, model WD3200AAKS-00L9A0, cu interfata Serial-ATA II, viteza de transer 3 Gb/s, viteza de rotatie 7200 RPM, cache 16 MB.",
    price: "39 Lei",
    category: "hdd"
  },
  {
    alt:
      'HDD 160 GB Western Digital Caviar Blue SATA, 7200 RPM, 8 MB cache 3.5" - second hand',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/1/6/x160-gb-wd-caviar-blue.jpg.pagespeed.ic.TDvBdvA81z.webp",
    title:
      'HDD 160 GB Western Digital Caviar Blue SATA, 7200 RPM, 8 MB cache 3.5" - second hand',
    description:
      'HDD second hand de la Western Digital Caviar Blue de 3.5", cu o capacitate de stocare de 160 GB, interfata SATA, viteza de rotatie de 7200 RPM si un buffer de 8 MB.',
    price: "50 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 500 GB Seagate Barracude ST500DM009 SATA-III 3.5" - second hand',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/5/0/x500_gb_seagate_barracuda_st500dm009.jpg.pagespeed.ic.bJ_H1RUl0F.webp",
    title:
      'HDD 500 GB Seagate Barracude ST500DM009 SATA-III 3.5" - second hand',
    description:
      'HDD intern refurbished de 500 GB Seagate Barracuda, SATA-3, 6 Gb/s, 7200 RPM, 32MB Cache, 3.5"',
    price: "60 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 500 GB Seagate Barracuda ST500DM002 SATA III 3.5" - second hand',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/5/0/x500_gb_seagate_barracuda_st500dm002.jpg.pagespeed.ic.uqD3HXZoPu.webp",
    title:
      'HDD 500 GB Seagate Barracuda ST500DM002 SATA III 3.5" - second hand',
    description:
      "Hard disk intern refurbished de 500 GB Seagate ST500DM002 cu interfata SATA-III, cu o viteza de rotatie 7200 RPM si 16 MB Cache",
    price: "60 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 500 GB Toshiba P300 HDWD105 SATA-III 3.5" - second hand',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/5/0/x500_gb_toshiba_p300_hdwd105.jpg.pagespeed.ic.RLbA7SRPE0.webp",
    title: 'HDD 500 GB Toshiba P300 HDWD105 SATA-III 3.5" - second hand',
    description:
      'Hard disk intern second hand de 500 GB marca Toshiba, gama P300, SATA-III 6 Gbps, viteza de rotatie 7200 rpm, 64MB Cache, marimea 3.5"',
    price: "61 Lei",
    category: "hdd"
  },
  {
    alt: "HDD 1 TB S-ATA III 6 Gb/s Seagate",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/1/_/x1_tb_seagate_constellation.jpg.pagespeed.ic.XdmeR1k24s.webp",
    title: 'HDD 1 TB Seagate SATA 3.5" - second hand',
    description:
      'HDD refurbished 1 TB de la Seagate, S-ATA III 6 Gb/s, 7200 RPM, 64 MB Cache, 3.5".',
    price: "129 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 1 TB Hitachi Deskstar SATA-II 3.5" - second hand ',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/i/xhitachi-deskstar-sata-ii_1.jpg.pagespeed.ic.Hkcq2gCOXx.webp",
    title: 'HDD 1 TB Hitachi Deskstar 7K1000.C SATA III 3.5" - second hand',
    description:
      'Hard disk intern 3.5" second hand cu capacitatea de 1 TB de la Hitachi cu interfata Serial-ATA III, cu viteza de rotatie 7200 RPM si cache de 32 MB.',
    price: "129 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 1 TB Western Digital Red WD10EFRX SATA III 3.5"',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/1/_/x1_tb_wd_red_wd10efrx_3.5_inch_2.jpg.pagespeed.ic.HiKTCFcPV_.webp",
    title: 'HDD 1 TB Western Digital Red WD10EFRX SATA III 3.5" - second hand',
    description:
      'HDD intern second hand de 1 TB de la Western Digital din seria RED dedicata solutiilor NAS SOHO, interfata SATA III, viteza de rotatie 5400 RPM, 64 MB Cache, format 3.5".',
    price: "149 Lei",
    category: "hdd"
  },
  {
    alt:
      'HDD desktop Toshiba P300 (3.5" 1TB, 7200RPM, 64MB, NCQ, AF, SATAIII), bulk',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_HDWD110UZSVA_151027150022320443_1.jpg.pagespeed.ic.5zGag47Dav.webp",
    title:
      'HDD desktop Toshiba P300 (3.5" 1TB, 7200RPM, 64MB, NCQ, AF, SATAIII), bulk',
    description:
      'HDD desktop Toshiba P300 (3.5" 1TB, 7200RPM, 64MB, NCQ, AF, SATAIII), bulk',
    price: "208 Lei",
    category: "hdd"
  },
  {
    alt: 'WD Blue HDD Desktop (3.5", 1TB, 64MB, SATA III-600)',
    src:
      "data:image/webp;base64,UklGRggKAABXRUJQVlA4IPwJAABQNACdASrIAMgAPm0ylUikIqIhJHFqeIANiWlu3WAZqV2yuvvy+e2fGjm3RGu4vQP2j8Aj8e/pf+c38sAXeSTWVf41PzBKrJoq410jZUmTFQosNb3xmCFfRVxmUPwAX7f+XzLJ4iOP3Kf3+8QQq9/Na31JglLmV9SGaBWlW1fEvnqRjTtbUvGPHxpMA8cev6x9/wuM+PsT0ytJGcF6MnGMf2KO2ul/wRinW9VS2bUogKwslPjFc/uCOXzM0VxJnxXEifqDw4DHBdvqAbWdBPFqwPuPEF46J2J6mIPetTxyQAzuVvppIerHyEad03mWc5B54JVa1D0WTAFXl9RTiFvK+fGreLRpHSivWMSD0LTbLChdUkfVNfW1I38o0L1QcFGSfbqG5hoo27tbHErrKAuQrmAOn0ETec1obkgOaaC8xNKGyKsNFwaycSyTtLbGUIUMLzMPDxCszsuWY3MXxBeeJIa+GVi9kztqEvJVBe7G2faaElph0FlpOyfn2WaIAavGv5sJYVolow6X6W3+D/4oRaeKdt+mBIdFTQWRTYjJ3X+97sqhEnwU1M4AAP78qBowWkIdDOUk0PwjXEl+8EGj66XltKuKgmxPwZrXpqYDG/OLrRGi5wxP7/w6XDdu9enM9L6h/KfXcPF723Zfh+/qhyA/HAND4lp3xus1fB6MTdZiRg9I6s0y+jaBvRXGx+aPeKdSxQmqsIEoILZvB1pzP85I0IoQGaBkw3Id/yggo/mhL/FOkVviynBxrbISJu3n1yUDheUwGD8dA+AWbdMy0QEkeDsoZlCUM3mJF4HqkhODAhq/zwtfzvu0rSxh5zSnkEoA+DhubNs8pE/8TrBI8XrpiibJz7rQV8g9f6J5dSCWomxT0n/QAvXGMSDTQ9Caz5XGh4I4Z3IwhBnQQ557prYcbxg+XrG8zfJGOgGN8IwUdrWRU2DTIbleoTgf3TaVZGmdo40/guuZFQAPaM6ZuAvzj3ta3WS9pfd0pL1p453/A3VJH7OtvxtCkpa6Pf0S8JB3OaXu4mLJ+0GAqAehBAXn5jW1ZogqqRuXocTiP6+EKLN/nzH4ZgB/Duu2xjM+UNGLEKDoNOAYKPZU9Dd75WPo1/ArDm/mj6m9hAm+5q/yHCSQ6Hn/zpnui46w8qhKjpByStuPE2u+VJjB2WATwZdHadr2i2Wy6gl6/c2lZPCnhjfiICR4LsC6EceIxbD8KahWMPSDBNnUPgbDYUk5NsjF9v9nj2x9zpphO9GeoUFrSvRTLAqSSrL2ET37g58noDkX2nz2W/f7p10lyD+ceYSjGUXWKH6WzzXi5Z3EmLTd/NkOtfCGElBOW0UdLlqZQ1CjCQV54lPFAoP/rqN0D/BGYFmpHgVZ/u3wrlbPpNsqwzitRNRxgj5hJSAvDHdEirwYVCX3S5KsVG0HUk6WX9TCZfzkwLtIYfB3JUdbejbwZtWoNFBnYLZG5bLIibM7TtxOLeR1VUgq/TYqZn9mCtxTGKFFFD9Z0nHDyRCEbD+EdHYSyZ+Zin+d83S9pUfIxgJAwkVr5SrKFGV//LkpP2z9amaIbvIa1gM3ma7RvWPcVUQEUmKrTSoQ6XKCLSJh4j97gPsWU8mIbvKqczvgeZL2q5HQ0gys7AvRi+LO8l/CCaUGEt6e0vCIWb0ovchpp8H8cZeoQYCwxYOqWJqmAgy8eILY1JSteOjz+IgVMRPcVHoo/K3kSNPWO3veUEXUjIXNj+PIM7YiSr7SEolQu0wvvImZ0jAsXpSYyYVHA9AdNS23N6uC/Cdt8Y90h1c9+fXeYinGMOwqnwa2dmvlOCPYgVMSUB9M6mw3BejQ2v9cPseMwzh/NKK7EC+kdtT3uOdGHXfBsydbH/B9qQyvnw/4fP4aZXniUPlS6z07GG4GokWV1S8Wld6+EFoL5x6dSXkTCMr24BvLbdvzgRCMflAQ+HuEr1CvlG81LZTlnxa9+WWzIxtoMtClwZsAR5xPmf336JRbEuv1b5ixn0B5XicLqYEgypq61fl3c8vhzk5JdD/x33ZJldVKvUTrln9RA7w724Xj3TULO9fie92LuEwOSsKIFpnwIhaE98oaL8Mile7YWhN38zHMXLYh8BmYFtOxuFPzbs0bxVJjBNodb8rjLXGpijdjHyplVH2HruSNDKGUdWr0azcP5v3SDQp4Tx3WEW87bfB/QMVUrHvkgcI6JVvuLZhUT8y+Pbc9W1FJyxg1NoL0DpFtbvQi6P3D0Uwdq82QwJrr/y1F7JGlPDzfhMnjO6ltL8f3NMMBSzQANF8Qxo7b5D7YVfcdPqlxlOBExbzvrJ8X3Z4+ObcaldBQxQ7+HgAA3Vbuqe2iUD2OyRQP/Us76P4exehX3Yjr41To4K10ajaMtYSz93sjdZm/z7qqNYzod3KAbh/5jf9gQOZfIyT3xxF3mbHVIkT32lHFp8Vm8eC2uUDkCchIA0QCv0A4XTA6vGpwSt96NgXC8XSIBdTRai9YHNsyRicAIsXU+XBpS54kAaF9GJrUGKT6M4/lR1gJ5tkwjskBt8xG1Lc3Y9zov3rs/6VrsjDy8+wbxyovfi2rpPpWPyrdEwZAmcur1VCzBwKlMkYVpgAsa+jaDcj2l5U/KZ8WVJqF7d0cLn+ml5lRB/vEPT9bZxkQZR3atnG+6bn1xRPkyvJN5LzhkkPeWEMt8RsETlbzqrZIT3+Fb/z0Bhb5dzPtCV27PjtO9IOL1neXvbJipcjIPrQV2sInGifh7ri6W8L+L2ulEEoFB7PgTsp3dEqoWukqtGI6+fxevtPh4YXav05kOuiPDW//pEkG8ASuBK8uV7Wva9to6WH1sqGbcy0VlzVXQ0kZQGUvagUgXPyv4e279/mgE7v1g4j4CLvfN1oJ1d00ezT88G/q82c/8MbWxROVA9rvUm5eF/2+smKzkrgutuvTO+f/wPSCxttKP+0rO2PWf+9/vIe5EhUjBPTSjVYjgGJ5HlzSXWc97RnGof+/hWpPJROEmT8vNeMjWBJfThw6U6nCu2/211oM0Z/hYGXqeFM6WvV8PXX2glg+8Vcr4WV4J2HLneeiiAuqJ1PvQ8/euKaSmpqDs10pbD8U8RVdbAdsajOncYQXo3FO//BGexj5e4dYb/oAltCicAoAkfS34h1XjV2/4FuktydH+iYOXolvXLAKHfH3K8RM/GNDfBglirQVBfwbpJbf8pqxUsGlUnMCJd/FCfVlECGycO7DAtZ/7X3uvQCg7T3D9pvizZq6qRo2KfdayO2YaIXYKfC8sTOemUKWcpvM0XfwbbSjqS/oC6WBcdnRrNWa+WTtYk1dr9iMWU9R3XXsU8Ab9ecCM1OIR7f88Ikb+wli3NZRX4o343RC2tgF7Q9Ag+dKDEmwOP4T+yb3dY2Mr2mpgp0CFsEAAZEAAAA=",
    title: 'WD Blue HDD Desktop (3.5", 1TB, 64MB, SATA III-600)',
    description: 'WD Blue HDD Desktop (3.5", 1TB, 64MB, SATA III-600)',
    price: "219 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 1 TB Western Digital Blue WD10EZEX SATA-III 3.5"',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/d/xhdd_1_tb_western_digital_blue_wd10ezex_sata-iii_3.5.jpg.pagespeed.ic.9kFbEtCF8M.webp",
    title: 'HDD 1 TB Western Digital Blue WD10EZEX SATA III 3.5" - nou',
    description:
      'HDD intern nou de 1 TB de la Western Digital, SATA-III 6 Gb/s, 7200 RPM, 64 MB Cache, 3.5".',
    price: "229 Lei",
    category: "hdd"
  },
  {
    alt:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/1TB/SATA 6Gb/s/rmp 7200)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_ST1000DM010_160905160213944365_1.jpg.pagespeed.ic.GTukXU2kmE.webp",
    title:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/1TB/SATA 6Gb/s/rmp 7200)',
    description:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/1TB/SATA 6Gb/s/rmp 7200)',
    price: "229 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 1 TB S-ATA Seagate ST1000DM010 3.5"',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/e/xseagate_st1000dm010.jpg.pagespeed.ic.ZpJS4WkSlY.webp",
    title: 'HDD 1 TB Seagate ST1000DM010 SATA III 3.5" - nou',
    description:
      'HDD intern nou de 1 TB de la Seagate, SATA-III 6 Gb/s, 7200 RPM, 64 MB Cache, 3.5".',
    price: "239 Lei",
    category: "hdd"
  },
  {
    alt:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/1TB/SATA 6Gb/s/rpm 5900)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_ST1000VX005_200310150008425818.jpg.pagespeed.ic.8ugrhvKE6N.webp",
    title:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/1TB/SATA 6Gb/s/rpm 5900)',
    description:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/1TB/SATA 6Gb/s/rpm 5900)',
    price: "268 Lei",
    category: "hdd"
  },
  {
    alt: 'HDD 1 TB Western Digital Purple SATA-III WD10PURZ 3.5"',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/w/e/western_digital_wd10purz_images_2044860102.jpg",
    title: 'HDD 1 TB Western Digital Purple WD10PURZ SATA III 3.5" - nou',
    description:
      'HDD intern nou de 1 TB de la Western Digital, SATA-III 6 Gb/s, Intelli Power 5400 RPM, 64 MB Cache, 3.5". ',
    price: "289 Lei",
    category: "hdd"
  },
  {
    alt:
      'SEAGATE HDD Desktop Iron Wolf Guardian NAS(3.5"/1TB/SATA 6Gb/s/rpm 5900)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST1000VN002_160905160217484526.jpg",
    title:
      'SEAGATE HDD Desktop Iron Wolf Guardian NAS(3.5"/1TB/SATA 6Gb/s/rpm 5900)',
    description:
      'SEAGATE HDD Desktop Iron Wolf Guardian NAS(3.5"/1TB/SATA 6Gb/s/rpm 5900)',
    price: "300 Lei",
    category: "hdd"
  },
  {
    alt: "HDD Desktop WD Blue (3.5'', 2TB, 64MB, 5400 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD20EZRZ_150820160016782521_1.jpg",
    title: "HDD Desktop WD Blue (3.5'', 2TB, 64MB, 5400 RPM, SATA 6 Gb/s)",
    description:
      "HDD Desktop WD Blue (3.5'', 2TB, 64MB, 5400 RPM, SATA 6 Gb/s)",
    price: "314 Lei",
    category: "hdd"
  },
  {
    alt: 'SEAGATE HDD Desktop Barracuda Guardian (3.5"/2TB/SATA 6Gb/s/7200rpm)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST2000DM008_190425160015264978_1.jpg",
    title:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/2TB/SATA 6Gb/s/7200rpm)',
    description:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/2TB/SATA 6Gb/s/7200rpm)',
    price: "332 Lei",
    category: "hdd"
  },
  {
    alt:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/2TB/SATA 6Gb/s/rpm 5900)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST2000VX008_200310150008425818.jpg",
    title:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/2TB/SATA 6Gb/s/rpm 5900)',
    description:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/2TB/SATA 6Gb/s/rpm 5900)',
    price: "348 Lei",
    category: "hdd"
  },
  {
    alt:
      'HDD desktop Toshiba P300 (3.5" 3TB, 7200RPM, 64MB, NCQ, AF, SATAIII), bulk',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_HDWD130UZSVA_151127150015077871_1.jpg",
    title:
      'HDD desktop Toshiba P300 (3.5" 3TB, 7200RPM, 64MB, NCQ, AF, SATAIII), bulk',
    description:
      'HDD desktop Toshiba P300 (3.5" 3TB, 7200RPM, 64MB, NCQ, AF, SATAIII), bulk',
    price: "376 Lei",
    category: "hdd"
  },
  {
    alt: "HDD Desktop WD Red (3.5'', 2TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD20EFAX_190717160011896659.jpg",
    title: "HDD Desktop WD Red (3.5'', 2TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    description:
      "HDD Desktop WD Red (3.5'', 2TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    price: "411 Lei",
    category: "hdd"
  },
  {
    alt:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/4TB/SATA 6Gb/s/rpm 5400)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST4000DM004_170313150014509439_1.jpg",
    title:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/4TB/SATA 6Gb/s/rpm 5400)',
    description:
      'SEAGATE HDD Desktop Barracuda Guardian (3.5"/4TB/SATA 6Gb/s/rpm 5400)',
    price: "544 Lei",
    category: "hdd"
  },
  {
    alt:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/4TB/SATA 6Gb/s/rpm 5900)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST4000VX007_200310150008425818.jpg",
    title:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/4TB/SATA 6Gb/s/rpm 5900)',
    description:
      'SEAGATE HDD Desktop SkyHawk Guardian Surveillance (3.5"/4TB/SATA 6Gb/s/rpm 5900)',
    price: "560 Lei",
    category: "hdd"
  },
  {
    alt: "HDD Desktop WD Red (3.5'', 4TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD40EFAX_200120150021469741.jpg",
    title: "HDD Desktop WD Red (3.5'', 4TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    description:
      "HDD Desktop WD Red (3.5'', 4TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    price: "578 Lei",
    category: "hdd"
  },
  {
    alt:
      'SEAGATE HDD Desktop Iron Wolf Guardian NAS(3.5"/4TB/SATA 6Gb/s/rpm 5900)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST4000VN008_160905160217484526.jpg",
    title:
      'SEAGATE HDD Desktop Iron Wolf Guardian NAS(3.5"/4TB/SATA 6Gb/s/rpm 5900)',
    description:
      'SEAGATE HDD Desktop Iron Wolf Guardian NAS(3.5"/4TB/SATA 6Gb/s/rpm 5900)',
    price: "604 Lei",
    category: "hdd"
  },
  {
    alt: "HDD Desktop WD Red Pro (3.5'', 2TB, 64MB, 7200 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD2002FFSX_160526160016526486.jpg",
    title: "HDD Desktop WD Red Pro (3.5'', 2TB, 64MB, 7200 RPM, SATA 6 Gb/s)",
    description:
      "HDD Desktop WD Red Pro (3.5'', 2TB, 64MB, 7200 RPM, SATA 6 Gb/s)",
    price: "640 Lei",
    category: "hdd"
  },
  {
    alt: "HDD Desktop WD Black (3.5'', 2TB, 64MB, 7200 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD2003FZEX_131106080025759380_1.jpg",
    title: "HDD Desktop WD Black (3.5'', 2TB, 64MB, 7200 RPM, SATA 6 Gb/s)",
    description:
      "HDD Desktop WD Black (3.5'', 2TB, 64MB, 7200 RPM, SATA 6 Gb/s)",
    price: "647 Lei",
    category: "hdd"
  },
  {
    alt: "SEAGATE HDD Desktop IronWolf Pro (3.5'/ 4TB/ SATA 6Gb/s/ rmp 7200)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST4000NE001_190515160012547377.jpg",
    title: "SEAGATE HDD Desktop IronWolf Pro (3.5'/ 4TB/ SATA 6Gb/s/ rmp 7200)",
    description:
      "SEAGATE HDD Desktop IronWolf Pro (3.5'/ 4TB/ SATA 6Gb/s/ rmp 7200)",
    price: "828 Lei",
    category: "hdd"
  },
  {
    alt: "SEAGATE HDD Desktop SkyHawk Guardian (3.5'/ 6TB/ SATA/ rpm 5400)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST6000VX001_200310150008425818.jpg",
    title: "SEAGATE HDD Desktop SkyHawk Guardian (3.5'/ 6TB/ SATA/ rpm 5400)",
    description:
      "SEAGATE HDD Desktop SkyHawk Guardian (3.5'/ 6TB/ SATA/ rpm 5400)",
    price: "890 Lei",
    category: "hdd"
  },
  {
    alt: "HDD Desktop WD Black (3.5'', 4TB, 256MB, 7200 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD4005FZBX_180305150251799160_1.jpg",
    title: "HDD Desktop WD Black (3.5'', 4TB, 256MB, 7200 RPM, SATA 6 Gb/s)",
    description:
      "HDD Desktop WD Black (3.5'', 4TB, 256MB, 7200 RPM, SATA 6 Gb/s)",
    price: "967 Lei",
    category: "hdd"
  },
  {
    alt: "HDD AV WD Purple (3.5'', 8TB, 256MB, 7200 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD82PURZ_190719140013090058.jpg",
    title: "HDD AV WD Purple (3.5'', 8TB, 256MB, 7200 RPM, SATA 6 Gb/s)",
    description: "HDD AV WD Purple (3.5'', 8TB, 256MB, 7200 RPM, SATA 6 Gb/s)",
    price: "1.143 Lei",
    category: "hdd"
  },
  {
    alt: "SEAGATE HDD Desktop SkyHawk Guardian (3.5'/ 8TB/ SATA/ rpm 5900)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST8000VX004_200310150008425818.jpg",
    title: "SEAGATE HDD Desktop SkyHawk Guardian (3.5'/ 8TB/ SATA/ rpm 5900)",
    description:
      "SEAGATE HDD Desktop SkyHawk Guardian (3.5'/ 8TB/ SATA/ rpm 5900)",
    price: "1.152 Lei",
    category: "hdd"
  },
  {
    alt: "SEAGATE HDD Desktop IronWolf (3.5'/ 8TB/ SATA 6Gb/s/ rmp 7200)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_ST8000VN004_190515160012547377.jpg",
    title: "SEAGATE HDD Desktop IronWolf (3.5'/ 8TB/ SATA 6Gb/s/ rmp 7200)",
    description:
      "SEAGATE HDD Desktop IronWolf (3.5'/ 8TB/ SATA 6Gb/s/ rmp 7200)",
    price: "1.194 Lei",
    category: "hdd"
  },
  {
    alt: "HDD Desktop WD Red (3.5'', 8TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_WD80EFAX_180710160013599195.jpg",
    title: "HDD Desktop WD Red (3.5'', 8TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    description:
      "HDD Desktop WD Red (3.5'', 8TB, 256MB, 5400 RPM, SATA 6 Gb/s)",
    price: "1.203 Lei",
    category: "hdd"
  },
  {
    alt: 'SSD Intel 320 Series 160 GB 2.5" - second hand',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel_320_series_160_gb-2.jpg.pagespeed.ic.XYnqGAa9hN.webp",
    title: 'SSD Intel 320 Series 160 GB 2.5" - second hand',
    description:
      'Solid state drive second hand Intel 320 Series cu 160 GB capacitate de stocare, format 2.5", interfata SATA II (3 Gbps), viteza maxima citire pana la 270 MB/s, viteza maxima scriere pana la 165 MB/s',
    price: "129 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Patriot Burst (PBU120GS25SSDR) 120 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/a/xpatriot_burst_120gb.jpg.pagespeed.ic.hSg4Zlkrhf.webp",
    title: 'SSD Patriot Burst (PBU120GS25SSDR) 120 GB 2.5" - nou',
    description:
      'Solid State Drive nou de la Patriot, capacitate 120 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 560 MB/s, viteza maxima scriere: pana la 540 MB/s.',
    price: "129 Lei",
    category: "ssd"
  },
  {
    alt:
      "CRUCIAL BX500 120GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT120BX500SSD1_180925160010002443_1.jpg.pagespeed.ic.eUgN4EEOR7.webp",
    title:
      "CRUCIAL BX500 120GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    description:
      "CRUCIAL BX500 120GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    price: "132 Lei",
    category: "ssd"
  },
  {
    alt: "SSD Hynix SC210 128 GB mSATA - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/y/xhynix_sc210_128gb_msata.jpg.pagespeed.ic.96_Sp3yEWb.webp",
    title: "SSD SK Hynix 128 GB mSATA - second hand",
    description:
      "Solid State Drive second hand de la SK Hynix in format mSATA destinat laptopurilor, seria SC210, cu o capacitate de stocare de 128 GB si bus SATA-III 6.0 Gbps",
    price: "134 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD WD Green (2.5", 120GB, SATA III 6 Gb/s)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_WDS120G2G0A_171221150036917485_1.jpg.pagespeed.ic.1nfFq36Y9o.webp",
    title: 'SSD WD Green (2.5", 120GB, SATA III 6 Gb/s)',
    description: 'SSD WD Green (2.5", 120GB, SATA III 6 Gb/s)',
    price: "142 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Kingmax KM120GSMV32 120 GB 2.5" - nou ',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/s/xssd-kingmax-120gb-km120gsmv32.jpg.pagespeed.ic.wcZVazixbl.webp",
    title: 'SSD Kingmax KM120GSMV32 120 GB 2.5" - nou ',
    description:
      'Solid State Drive nou de la Kingmax KM120GSMV32, capacitate 120 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 500 MB/s, viteza maxima scriere: pana la 350 MB/s.',
    price: "145 Lei",
    category: "ssd"
  },
  {
    alt: "SSD Intel Pro 2500 Series 180GB M.2 2280 SATA-III - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/xintel-pro-2500-series-180gb-m.2-2280.jpg.pagespeed.ic.Av9CrEaZq_.webp",
    title: "SSD Intel Pro 2500 Series 180GB M.2 2280 SATA-III - second hand",
    description:
      "Solid State Drive reconditionat de la Intel in format M.2 2280 SATA-III, seria Pro 2500 Series, cu o capacitate de stocare de 180GB si bus SATA-III 6.0 Gbps",
    price: "159 Lei",
    catergory: "ssd"
  },
  {
    alt:
      "Intel SSD 760p Series (128GB, M.2 80mm, PCIe 3.0 x4, 3D2, TLC) Generic Single Pack",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SSDPEKKW128G801_200310150010102393.jpg.pagespeed.ic.ftG__qPVZJ.webp",
    title:
      "Intel SSD 760p Series (128GB, M.2 80mm, PCIe 3.0 x4, 3D2, TLC) Generic Single Pack",
    description:
      "Intel SSD 760p Series (128GB, M.2 80mm, PCIe 3.0 x4, 3D2, TLC) Generic Single Pack",
    price: "185 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD WD Green (2.5", 240GB, SATA III 6 Gb/s)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_WDS240G2G0A_171212150023819763_1.jpg.pagespeed.ic.pZZBwhj0Cw.webp",
    title: 'SSD WD Green (2.5", 240GB, SATA III 6 Gb/s)',
    description: 'SSD WD Green (2.5", 240GB, SATA III 6 Gb/s)',
    price: "188 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Apacer Panther AS350 256 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/a/xaapcer_120_gb_2_1.jpg.pagespeed.ic.AA6wZCpUzB.webp",
    title: 'SSD Apacer Panther AS350 256 GB 2.5" - nou ',
    description:
      'Solid State Drive nou Apacer Panther AS350 capacitate 256 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 550 MB/s, viteza maxima scriere: pana la 520 MB/s.',
    price: "209 Lei",
    catergory: "ssd"
  },
  {
    alt:
      "CRUCIAL MX500 250GB SSD, M.2 2280, SATA 6 Gb/s, Read/Write: 560 / 510 MB/s, Random Read/Write IOPS 95K/90K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT250MX500SSD4_200219150012745521_1.jpg.pagespeed.ic.xWKMGkDKil.webp",
    title:
      "CRUCIAL MX500 250GB SSD, M.2 2280, SATA 6 Gb/s, Read/Write: 560 / 510 MB/s, Random Read/Write IOPS 95K/90K",
    description:
      "CRUCIAL MX500 250GB SSD, M.2 2280, SATA 6 Gb/s, Read/Write: 560 / 510 MB/s, Random Read/Write IOPS 95K/90K",
    price: "214 Lei",
    category: "ssd"
  },
  {
    alt:
      "CRUCIAL MX500 250GB SSD, 2.5'' 7mm, SATA 6 Gb/s, Read/Write: 560/510 MB/s, Random Read/Write IOPS 95k/90k, with 9.5mm adapter",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT250MX500SSD1_181112150007466629_1.jpg.pagespeed.ic.xv0IG4E8zs.webp",
    title:
      "CRUCIAL MX500 250GB SSD, 2.5'' 7mm, SATA 6 Gb/s, Read/Write: 560/510 MB/s, Random Read/Write IOPS 95k/90k, with 9.5mm adapter",
    description:
      "CRUCIAL MX500 250GB SSD, 2.5'' 7mm, SATA 6 Gb/s, Read/Write: 560/510 MB/s, Random Read/Write IOPS 95k/90k, with 9.5mm adapter",
    price: "217 Lei",
    category: "ssd"
  },
  {
    alt:
      "KINGSTON A2000 250G SSD, M.2 2280, NVMe, Read/Write: 2000 / 1100 MB/s, Random Read/Write IOPS 150K/180K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SA2000M8_250G_190813070010279313_1.jpg.pagespeed.ic.qSUy89bGlG.webp",
    title:
      "KINGSTON A2000 250G SSD, M.2 2280, NVMe, Read/Write: 2000 / 1100 MB/s, Random Read/Write IOPS 150K/180K",
    description:
      "KINGSTON A2000 250G SSD, M.2 2280, NVMe, Read/Write: 2000 / 1100 MB/s, Random Read/Write IOPS 150K/180K",
    price: "219 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Kingston A400 (SA400S37/240G) 240 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/a/xsa400s37-240g-800x800.jpg.pagespeed.ic.5jCjMMLDmB.webp",
    title: 'SSD Kingston A400 (SA400S37/240G) 240 GB 2.5" - nou',
    description:
      'Solid State Drive nou de la Kingston SA400S37/240G, capacitate 240 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 500 MB/s, viteza maxima scriere: pana la 350 MB/s.',
    price: "219 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Crucial BX500 (CT240BX500SSD1) 240 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/r/xcrucial_ct240bx500ssd1_2.jpg.pagespeed.ic.MGpBZwHgI0.webp",
    title: 'SSD Crucial BX500 (CT240BX500SSD1) 240 GB 2.5" - nou ',
    description:
      'Solid State Drive nou de la Crucial CT240BX500SSD1, capacitate 240 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 540 MB/s, viteza maxima scriere: pana la 500 MB/s.',
    price: "221 Lei",
    catergory: "ssd"
  },
  {
    alt: 'SSD Western Digital Green WDS240G2G0A 240 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/w/d/xwds240g1g0a_01.png.pagespeed.ic.02xrtUZFWk.webp",
    title: 'SSD Western Digital Green WDS240G2G0A 240 GB 2.5" - nou',
    description:
      'SSD nou Western Digital Green, capacitate 240 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 545 MB/s.',
    price: "225 Lei",
    catergory: "ssd"
  },
  {
    alt: 'SSD Kingmax KM240GSMV32 240 GB 2.5" - nou ',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/xkingmax_km240gsmv32.jpg.pagespeed.ic.sR5fJdp1iD.webp",
    title: 'SSD Kingmax KM240GSMV32 240 GB 2.5" - nou ',
    description:
      'Solid State Drive nou de la Kingmax KM240GSMV32, capacitate 240 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 500 MB/s, viteza maxima scriere: pana la 410 MB/s.',
    price: "225 Lei",
    category: "ssd"
  },
  {
    alt: "SSD Samsung PM871 256GB M.2 2280 SATA - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/a/xsamsung_256_gb_m.2.jpg.pagespeed.ic.IXc1ITtyXu.webp",
    title: "SSD Samsung PM871 256GB M.2 2280 SATA - second hand",
    description:
      "SSD second hand Samsung, 256GB, factor de forma M.2 2280, bus SATA-III 6 Gb/s, viteza maxima citire: pana la 550 MB/s, viteza maxima scriere: pana la 340 MB/s, MZNLN256HCHP",
    price: "239 Lei",
    catergory: "ssd"
  },
  {
    alt:
      "Intel SSD 545s Series (256GB, 2.5in SATA 6Gb/s, 3D2, TLC) Retail Box Single Pack",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SSDSC2KW256G8X1_190816140009221527_1.jpg.pagespeed.ic.DJLlAGwqLn.webp",
    title:
      "Intel SSD 545s Series (256GB, 2.5in SATA 6Gb/s, 3D2, TLC) Retail Box Single Pack",
    description:
      "Intel SSD 545s Series (256GB, 2.5in SATA 6Gb/s, 3D2, TLC) Retail Box Single Pack",
    price: "241 Lei",
    category: "ssd"
  },
  {
    alt:
      'SSD WD Blue (2.5", 250GB, SATA III 6 Gb/s, 3D NAND Read/Write: 550 / 525 MB/sec, Random Read/Write IOPS 95K/81K)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_WDS250G2B0A_170807160012756885_1.jpg.pagespeed.ic.kpajTT9-ci.webp",
    title:
      'SSD WD Blue (2.5", 250GB, SATA III 6 Gb/s, 3D NAND Read/Write: 550 / 525 MB/sec, Random Read/Write IOPS 95K/81K)',
    description:
      'SSD WD Blue (2.5", 250GB, SATA III 6 Gb/s, 3D NAND Read/Write: 550 / 525 MB/sec, Random Read/Write IOPS 95K/81K)',
    price: "241 Lei",
    category: "ssd"
  },
  {
    alt: "SSD Samsung SM951 256GB M.2 2280 PCIe 3.0 x4 NVMe - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/a/xsamsung-sm951-256gb-m.2-nvme-pcie-3.0-x4.jpg.pagespeed.ic.O8mE9k_8XV.webp",
    title: "SSD Samsung SM951 256GB M.2 2280 PCIe 3.0 x4 NVMe - second hand",
    description:
      "SSD second hand Samsung, 256GB, factor de forma M.2 2280, bus PCIe 3.0 X4 NVMe, viteza maxima citire: pana la 2150 MB/s, viteza maxima scriere: pana la 1550 MB/s, MZHPV256HDGL",
    price: "269 Lei",
    category: "ssd"
  },
  {
    alt: "SSD WD Blue SN550 (M.2, 250GB, PCIe Gen3 8 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_WDS250G2B0C_191213150013469815_1.jpg.pagespeed.ic.4p_mflwSBi.webp",
    title: "SSD WD Blue SN550 (M.2, 250GB, PCIe Gen3 8 Gb/s)",
    description: "SSD WD Blue SN550 (M.2, 250GB, PCIe Gen3 8 Gb/s)",
    price: "280 Lei",
    category: "ssd"
  },
  {
    alt:
      "CRUCIAL BX500 480GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT480BX500SSD1_180925160010002443_1.jpg.pagespeed.ic.eUgN4EEOR7.webp",
    title:
      "CRUCIAL BX500 480GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    description:
      "CRUCIAL BX500 480GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    price: "291 Lei",
    category: "ssd"
  },
  {
    alt:
      "MICRON 2200 256GB SSD, M.2 2280, PCIe Gen3 x4, Read/Write: 3000 / 1600 MB/s, Random Read/Write IOPS 240K/210K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_MTFDHBA256TCK_1AS1AABYY_190522160018729254.jpg.pagespeed.ic.mk-YHyJO5K.webp",
    title:
      "MICRON 2200 256GB SSD, M.2 2280, PCIe Gen3 x4, Read/Write: 3000 / 1600 MB/s, Random Read/Write IOPS 240K/210K",
    description:
      "MICRON 2200 256GB SSD, M.2 2280, PCIe Gen3 x4, Read/Write: 3000 / 1600 MB/s, Random Read/Write IOPS 240K/210K",
    price: "297 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD WD Green (2.5", 480GB, SATA III 6 Gb/s)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_WDS480G2G0A_181228150010189733_1.jpg.pagespeed.ic.vuTDWw-oWO.webp",
    title: 'SSD WD Green (2.5", 480GB, SATA III 6 Gb/s)',
    description: 'SSD WD Green (2.5", 480GB, SATA III 6 Gb/s)',
    price: "302 Lei",
    category: "ssd"
  },
  {
    alt:
      "SAMSUNG 860 EVO 250GB SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 520 MB/s,  Random Read/Write IOPS 98K/90K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_MZ_76E250B_EU_180125150140317234_1.jpg.pagespeed.ic.cqeXmmYptb.webp",
    title:
      "SAMSUNG 860 EVO 250GB SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 520 MB/s,  Random Read/Write IOPS 98K/90K",
    description:
      "SAMSUNG 860 EVO 250GB SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 520 MB/s, Random Read/Write IOPS 98K/90K",
    price: "305 Lei",
    category: "ssd"
  },
  {
    alt:
      'SSD WD Blue (2.5", 500GB, SATA III 6 Gb/s, 3D NAND Read/Write: 560 / 530 MB/sec, Random Read/Write IOPS 95K/84K)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_WDS500G2B0A_170807160012756885_1.jpg.pagespeed.ic.kpajTT9-ci.webp",
    title:
      'SSD WD Blue (2.5", 500GB, SATA III 6 Gb/s, 3D NAND Read/Write: 560 / 530 MB/sec, Random Read/Write IOPS 95K/84K)',
    description:
      'SSD WD Blue (2.5", 500GB, SATA III 6 Gb/s, 3D NAND Read/Write: 560 / 530 MB/sec, Random Read/Write IOPS 95K/84K)',
    price: "321 Lei",
    category: "ssd"
  },
  {
    alt: "SSD SK Hynix SC300 512GB M.2 2280 SATA-III - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/s/xssd-sk-hynix-sc300-512gb-m.2-2280-sata-iii.jpg.pagespeed.ic.6tAIXBc3HP.webp",
    title: "SSD SK Hynix SC300 512GB M.2 2280 SATA-III - second hand",
    description:
      "Solid State Drive reconditionat de la SK Hynix in format M.2 2280 SATA-III, seria SC300, cu o capacitate de stocare de 512 GB si bus SATA-III 6.0 Gbps",
    price: "329 Lei",
    category: "ssd"
  },
  {
    alt:
      "KINGSTON A2000 500G SSD, M.2 2280, NVMe, Read/Write: 2200 / 2000 MB/s, Random Read/Write IOPS 180K/200K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SA2000M8_500G_190813070010279313_1.jpg.pagespeed.ic.qSUy89bGlG.webp",
    title:
      "KINGSTON A2000 500G SSD, M.2 2280, NVMe, Read/Write: 2200 / 2000 MB/s, Random Read/Write IOPS 180K/200K",
    description:
      "KINGSTON A2000 500G SSD, M.2 2280, NVMe, Read/Write: 2200 / 2000 MB/s, Random Read/Write IOPS 180K/200K",
    price: "331 Lei",
    category: "ssd"
  },
  {
    alt: "SSD Sandisk X400 512GB M.2 2280 SATA-III - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/a/xsandisk-x400-m.2-2280-sata-iii.jpg.pagespeed.ic.YUQGIG-Rps.webp",
    title: "SSD Sandisk X400 512GB M.2 2280 SATA-III - second hand",
    description:
      "Solid State Drive reconditionat de la Sandisk in format M.2 2280 SATA-III, seria X400, cu o capacitate de stocare de 512 GB si bus SATA-III 6.0 Gbps",
    price: "359 Lei",
    category: "ssd"
  },
  {
    alt:
      "KINGSTON KC600 512G SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 550 / 520 MB/s, Random Read/Write IOPS 90K/80K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SKC600_512G_191024160008442227_1.jpg.pagespeed.ic.yEz2YOIZEG.webp",
    title:
      "KINGSTON KC600 512G SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 550 / 520 MB/s, Random Read/Write IOPS 90K/80K",
    description:
      "KINGSTON KC600 512G SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 550 / 520 MB/s, Random Read/Write IOPS 90K/80K",
    price: "360 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Kingston A400 (SA400S37/480G) 480 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/s/xssd_kingston_a400_480_gb_1.jpg.pagespeed.ic.i5M2tz0IDG.webp",
    title: 'SSD Kingston A400 (SA400S37/480G) 480 GB 2.5" - nou',
    description:
      'Solid State Drive nou de la Kingston SA400S37/480G, capacitate 480 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 500 MB/s, viteza maxima scriere: pana la 450 MB/s.',
    price: "379 Lei",
    catergory: "ssd"
  },
  {
    alt: "SSD Samsung PM871A 512 GB M.2 2280 SATA-III - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/s/xssd-samsung-pm871a-512gb-m.2-2280-sata-iii-second-hand.jpg.pagespeed.ic.XDLqbBLFSD.webp",
    title: "SSD Samsung PM871A 512GB M.2 2280 SATA-III - second hand",
    description:
      "Solid State Drive reconditionat de la Samsung in format M.2 2280 SATA-III, seria PM871A, cu o capacitate de stocare de 512 GB si bus SATA-III 6.0 Gbps",
    price: "379 Lei",
    catergory: "ssd"
  },
  {
    alt: "SSD SK Hynix SC313 512GB M.2 2280 SATA-III - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/s/xssd-sk-hynix-sc313-512gb-m.2-2280-sata-iii.jpg.pagespeed.ic.Z1pMC0ATy6.webp",
    title: "SSD SK Hynix SC313 512GB M.2 2280 SATA-III - second hand",
    description:
      "Solid State Drive reconditionat de la SK Hynix in format M.2 2280 SATA-III, seria SC313, cu o capacitate de stocare de 512 GB si bus SATA-III 6.0 Gbps",
    price: "379 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Crucial BX500 (CT480BX500SSD1) 480 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/s/xssd_crucial_bx500_ct480bx500ssd1_480_gb_2.5_1.jpg.pagespeed.ic.x28th8u5X1.webp",
    title: 'SSD Crucial BX500 (CT480BX500SSD1) 480 GB 2.5" - nou ',
    description:
      'Solid State Drive nou de la Crucial CT480BX500SSD1, capacitate 480 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 540 MB/s, viteza maxima scriere: pana la 500 MB/s.',
    price: "383 Lei",
    category: "ssd"
  },
  {
    alt: 'SSD Kingmax KM480GSMV32 480 GB 2.5" - nou',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/i/xkingmax_km480gsmv32.jpg.pagespeed.ic.NevDS-tNSJ.webp",
    title: 'SSD Kingmax KM480GSMV32 480 GB 2.5" - nou',
    description:
      'Solid State Drive nou de la Kingmax KM480GSMV32, capacitate 480 GB, format 2.5", interfata SATA-III 6 Gb/s, viteza maxima citire: pana la 500 MB/s, viteza maxima scriere: pana la 480 MB/s.',
    price: "395 Lei",
    category: "ssd"
  },
  {
    alt: "SSD WD Blue SN550 (M.2, 500GB, PCIe Gen3 8 Gb/s)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_WDS500G2B0C_191213150008474995_1.jpg.pagespeed.ic.N6CdKFR7ve.webp",
    title: "SSD WD Blue SN550 (M.2, 500GB, PCIe Gen3 8 Gb/s)",
    description: "SSD WD Blue SN550 (M.2, 500GB, PCIe Gen3 8 Gb/s)",
    price: "407 Lei",
    catergory: "ssd"
  },
  {
    alt:
      "Intel SSD 760p Series (512GB, M.2 80mm, PCIe 3.0 x4, 3D2, TLC) Generic Single Pack",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SSDPEKKW512G801_200310150010102393.jpg.pagespeed.ic.ftG__qPVZJ.webp",
    title:
      "Intel SSD 760p Series (512GB, M.2 80mm, PCIe 3.0 x4, 3D2, TLC) Generic Single Pack",
    description:
      "Intel SSD 760p Series (512GB, M.2 80mm, PCIe 3.0 x4, 3D2, TLC) Generic Single Pack",
    price: "413 Lei",
    category: "ssd"
  },
  {
    alt:
      "MICRON 1300 512GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 530 / 520 MB/s, Random Read/Write IOPS 90K/87K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_MTFDDAK512TDL_1AW1ZABYY_190514160012018848.jpg.pagespeed.ic.zjmV_o7BFT.webp",
    title:
      "MICRON 1300 512GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 530 / 520 MB/s, Random Read/Write IOPS 90K/87K",
    description:
      "MICRON 1300 512GB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 530 / 520 MB/s, Random Read/Write IOPS 90K/87K",
    price: "414 Lei",
    category: "ssd"
  },
  {
    alt:
      "KINGSTON DC1000B 240GB Enterprise SSD, M.2 2280, PCIe NVMe Gen3 x4, Read/Write: 2200 / 290 MB/s, Random Read/Write IOPS 111K/12K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SEDC1000BM8_240G_200121150028525443.jpg.pagespeed.ic.hTVwxPbkUD.webp",
    title:
      "KINGSTON DC1000B 240GB Enterprise SSD, M.2 2280, PCIe NVMe Gen3 x4, Read/Write: 2200 / 290 MB/s, Random Read/Write IOPS 111K/12K",
    description:
      "KINGSTON DC1000B 240GB Enterprise SSD, M.2 2280, PCIe NVMe Gen3 x4, Read/Write: 2200 / 290 MB/s, Random Read/Write IOPS 111K/12K",
    price: "422 Lei",
    category: "ssd"
  },
  {
    alt:
      "SAMSUNG 970 EVO PLUS 250GB SSD, M.2 2280, NVMe, Read/Write: 3500 / 2300 MB/s, Random Read/Write IOPS 250K/550K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_MZ_V7S250BW_190410070018961908_1.jpg.pagespeed.ic.dbs_Wqlys0.webp",
    title:
      "SAMSUNG 970 EVO PLUS 250GB SSD, M.2 2280, NVMe, Read/Write: 3500 / 2300 MB/s, Random Read/Write IOPS 250K/550K",
    description:
      "SAMSUNG 970 EVO PLUS 250GB SSD, M.2 2280, NVMe, Read/Write: 3500 / 2300 MB/s, Random Read/Write IOPS 250K/550K",
    price: "433 Lei",
    category: "ssd"
  },
  {
    alt: "SSD Samsung PM961 512GB M.2 2280 PCIe 3.0 x4 NVMe - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/a/xsamsung-pm-961-512gb-m.2-nvme-pcie-3.0-x4.jpg.pagespeed.ic.8AKGYDpobH.webp",
    title: "SSD Samsung PM961 512GB M.2 2280 PCIe 3.0 x4 NVMe - second hand",
    description:
      "SSD second hand Samsung, 512GB, factor de forma M.2 2280, bus PCIe 3.0 X4 NVMe, viteza maxima citire: pana la 2800 MB/s, viteza maxima scriere: pana la 1600 MB/s, MZVLW512HMJP",
    price: "499 Lei",
    category: "ssd"
  },
  {
    alt:
      "SAMSUNG PM883 240GB Enterprise SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 320 MB/s, Random Read/Write IOPS 98K/14K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_MZ7LH240HAHQ_00005_180919160011529794.jpg.pagespeed.ic.5EtqpRWO9Q.webp",
    title:
      "SAMSUNG PM883 240GB Enterprise SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 320 MB/s, Random Read/Write IOPS 98K/14K",
    description:
      "SAMSUNG PM883 240GB Enterprise SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 320 MB/s, Random Read/Write IOPS 98K/14K",
    price: "499 Lei",
    category: "ssd"
  },
  {
    alt:
      "CRUCIAL BX500 1TB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT1000BX500SSD1_200213080323663558_1.jpg.pagespeed.ic.SbPJNQef1e.webp",
    title:
      "CRUCIAL BX500 1TB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    description:
      "CRUCIAL BX500 1TB SSD, 2.5” 7mm, SATA 6 Gb/s, Read/Write: 540 / 500 MB/s",
    price: "514 Lei",
    category: "ssd"
  },
  {
    alt:
      "Intel SSD DC S4510 Series (240GB, 2.5in SATA 6Gb/s, 3D2, TLC) Generic Single Pack",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SSDSC2KB240G801_200213080215636662.jpg.pagespeed.ic.KClrkoe3nV.webp",
    title:
      "Intel SSD DC S4510 Series (240GB, 2.5in SATA 6Gb/s, 3D2, TLC) Generic Single Pack",
    description:
      "Intel SSD DC S4510 Series (240GB, 2.5in SATA 6Gb/s, 3D2, TLC) Generic Single Pack",
    price: "523 Lei",
    category: "ssd"
  },
  {
    alt:
      "SAMSUNG 860 EVO 500GB SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 520 MB/s,  Random Read/Write IOPS 98K/90K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_MZ_76E500B_EU_180202150154723383_1.jpg.pagespeed.ic.DdqJtZIVMe.webp",
    title:
      "SAMSUNG 860 EVO 500GB SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 520 MB/s,  Random Read/Write IOPS 98K/90K",
    description:
      "SAMSUNG 860 EVO 500GB SSD, 2.5” 7mm, SATA 6Gb/s, Read/Write: 550 / 520 MB/s, Random Read/Write IOPS 98K/90K",
    price: "539 Lei",
    category: "ssd"
  },
  {
    alt:
      'CRUCIAL MX500 1TB SSD, 2.5" 7mm, SATA 6 Gb/s, Read/Write: 560 / 510 MB/s, Random Read/Write IOPS 95K/90K',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT1000MX500SSD1_181112150007466629_1.jpg.pagespeed.ic.xv0IG4E8zs.webp",
    title:
      'CRUCIAL MX500 1TB SSD, 2.5" 7mm, SATA 6 Gb/s, Read/Write: 560 / 510 MB/s, Random Read/Write IOPS 95K/90K',
    description:
      'CRUCIAL MX500 1TB SSD, 2.5" 7mm, SATA 6 Gb/s, Read/Write: 560 / 510 MB/s, Random Read/Write IOPS 95K/90K',
    price: "588 Lei",
    category: "ssd"
  },
  {
    alt:
      "Intel SSD D3-S4610 Series (240GB, 2.5in SATA 6Gb/s, 3D2, TLC) Generic Single Pack",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SSDSC2KG240G801_200522140010634732.jpg.pagespeed.ic.KClrkoe3nV.webp",
    title:
      "Intel SSD D3-S4610 Series (240GB, 2.5in SATA 6Gb/s, 3D2, TLC) Generic Single Pack",
    description:
      "Intel SSD D3-S4610 Series (240GB, 2.5in SATA 6Gb/s, 3D2, TLC) Generic Single Pack",
    price: "592 Lei",
    category: "ssd"
  },
  {
    alt: "CRUCIAL X8 500GB Portable SSD USB 3.1 Gen-2 Up to 1050MB/s",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CT500X8SSD9_200127170012415236.jpg.pagespeed.ic.Vm98pkiF0N.webp",
    title: "CRUCIAL X8 500GB Portable SSD USB 3.1 Gen-2 Up to 1050MB/s",
    description: "CRUCIAL X8 500GB Portable SSD USB 3.1 Gen-2 Up to 1050MB/s",
    price: "622 Lei",
    category: "ssd"
  },
  {
    alt:
      "SAMSUNG 970 EVO PLUS 500GB SSD, M.2 2280, NVMe, Read/Write: 3500 / 3200 MB/s, Random Read/Write IOPS 480K/550K",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_MZ_V7S500BW_190222150010080745_1.jpg.pagespeed.ic.9RF2Kujrpl.webp",
    title:
      "SAMSUNG 970 EVO PLUS 500GB SSD, M.2 2280, NVMe, Read/Write: 3500 / 3200 MB/s, Random Read/Write IOPS 480K/550K",
    description:
      "SAMSUNG 970 EVO PLUS 500GB SSD, M.2 2280, NVMe, Read/Write: 3500 / 3200 MB/s, Random Read/Write IOPS 480K/550K",
    price: "666 Lei",
    category: "ssd"
  },
  {
    alt: "Placa Video nVidia Quadro NVS295 256 MB GDDR3 - refurbished",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/n/v/xnvidia_quadro_nvs_295.jpg.pagespeed.ic.rzqJSuuQvY.webp",
    title: "Placa Video nVidia NVS 295 256 MB GDDR3 - second hand",
    description:
      "Placa video second hand nVidia NVS 295, 8 nuclee CUDA, 256 MB GDDR3, 64 bit, PCI-E, 11.2 GB/s, output: 2 x Display port, Shader Model 4.0, OpenGL 3.0, Microsoft DirectX 10.",
    price: "19 Lei",
    category: "video"
  },
  {
    alt: "Placa video nVidia NVS 300 512 MB DDR3 - reconditionat",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/n/v/xnvidia_nvs_300.jpg.pagespeed.ic.V03bl7Wkq_.webp",
    title: "Placa video nVidia NVS 300 512 MB DDR3 - second hand",
    description:
      "Placa video second hand PCI-E nVidia NVS 300 de 512 MB DDR3, output: DMS59 cu adaptor dual VGA, 64 biti, OpenGL 3.3, DirectX 10.1.",
    price: "29 Lei",
    category: "video"
  },
  {
    alt: "Placa video Fujitsu GeForce 605 DP 1 GB DDR3 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/n/v/xnvidia_geforce_605_dp_3.jpg.pagespeed.ic.QzF4snVYlM.webp",
    title: "Placa video Fujitsu GeForce 605 DP 1 GB DDR3 - second hand",
    description:
      "Placa video Fujitsu Geforce 605 DP second hand cu 48 nuclee CUDA, 1 GB GDDR3, 64 biti, DVI, Displayport, 2560x1600, Shader Model 5.0, OpenGL 4.6, Microsoft DirectX12.",
    price: "39 Lei",
    category: "video"
  },
  {
    alt: "AMD Radeon HD6350 512 MB DDR3 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/d/e/xdell_v218_amd_radeon_hd5450_large_1.jpg.pagespeed.ic.UChsFIRGxl.webp",
    title: "AMD Radeon HD6350 512 MB DDR3 - second hand",
    description:
      "Placa video second hand AMD Radeon HD6350 512 MB DDR3 64 bit, GPU 650 MHz / RAM 800 MHz, PCI-E x16, Low Profile, DMS-59, DirectX11, OpenGL 4.3",
    price: "40 Lei",
    category: "video"
  },
  {
    alt: " Placa video AMD Radeon HD7450 1 GB DDR3  - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/m/xamd_radeon_hd_7450_oem_1_gb.jpg.pagespeed.ic.9c2krmOdw_.webp",
    title: "Placa video AMD Radeon HD7450 1 GB DDR3 low profile - second hand",
    description:
      "Placa video Lenovo HD7450 dispune de un procesor grafic AMD Radeon 7450 care functioneaza la 750 MHz. Memoria placii grafice este de 1 GB DDR3, cu frecventa de 1600 MHz si latime banda memorie de 64 bit. Are interfata PCI-Express x16 2.0 si dispune de outputuri DVI si DisplayPort cu suport DirectX 11.1 si OpenGL 4.5",
    price: "60 Lei",
    category: "video"
  },
  {
    alt: "Placa video Fujitsu AMD Radeon HD7350 1 GB DDR3",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/f/u/xfujitsu_amd_radeon_hd_7350_1_gb_ddr3.jpg.pagespeed.ic.lqcFwEL9lf.webp",
    title: "Placa video Fujitsu AMD Radeon HD7350 1 GB DDR3",
    description:
      "Placa video Fujitsu HD7350 dispune de un procesor grafic AMD Radeon 7350 care functioneaza la 650 MHz. Memoria placii grafice este de 1 GB DDR3, cu frecventa de 1066 MHz si latime banda memorie de 64 bit. Are interfata PCI-Express x16 2.0 si dispune de doua outputuri DVI.Ofera suport DirectX 11 si OpenGL 4.3",
    price: "71 Lei",
    category: "video"
  },
  {
    alt: "Placa video Radeon HD 8490 1GB DDR3 64-bit low profile - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/m/xamd-radeon-hd-8490-low-profile.jpg.pagespeed.ic.Vyq9iKG6mt.webp",
    title:
      "Placa video Radeon HD 8490 1GB DDR3 64-bit low profile - second hand",
    description:
      "Placa video second hand cu chipset AMD Radeon HD 8490, memorie 1GB DDR3, interfata PCI-E v2.0 x16, output Dual Link DVI-I respectiv DisplayPort, suport pentru DirectX 11, OpenGL 4.4 si Shader Model 5.0",
    price: "94 Lei",
    category: "video"
  },
  {
    alt: "Placa video nVidia GeForce GT630 2 GB DDR3",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/n/v/xnvidia_geforce_gt630.jpg.pagespeed.ic.DIZgL9QV4R.webp",
    title: "Placa video nVidia GeForce GT630 2GB DDR3 - second hand",
    description:
      "Placa video nVidia GeForce GT630, 2GB DDR3, 128 bit, PCI-Express 2.0, output: Displayport, DVI, suport DirectX 12 si OpenGL 4.6.",
    price: "149 Lei",
    category: "video"
  },
  {
    alt: "Placa video Palit nVidia GeForce GT710 2 GB DDR3 64 bit",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/a/xpalit_nvidia_geforce_gt710_2_gb_ddr3_3.jpg.pagespeed.ic.MR_7Hk7ugA.webp",
    title:
      "Placa video Palit nVidia GeForce GT710 2 GB DDR3 64 bit low profile - second hand",
    description:
      "Placa video Palit nVidia GeForce GT710 cu 2 GB capacitate video de tip DDR3 64 bit, PCI-Express x8 2.0, outputs: DL DVI-D, VGA, HDMI, racire passiva dual Slot, cu suport DirectX 12 si OpenGL 4.5.",
    price: "175 Lei",
    category: "video"
  },
  {
    alt: "Placa video Club 3D Radeon R7 240 2GB DDR3 low profile - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/l/xclub-3d-radeon-r7-240-2gb-1.jpg.pagespeed.ic.A-i24okMVh.webp",
    title:
      "Placa video Club 3D Radeon R7 240 2GB DDR3 low profile - second hand",
    description:
      "Placa video Club 3D Radeon R7 240, 2GB DDR3, 128 bit, PCI-Express 3.0 x8, output: DVI, HDMI, DX12, OpenGL 4.6, low profile",
    price: "199 Lei",
    category: "video"
  },
  {
    alt: "Nvidia Quadro K420 2GB DDR3 128-bit - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/q/u/xquadro_k420_2gb_ddr3_128-bit.jpg.pagespeed.ic.ReX9a1Zjjp.webp",
    title: "Nvidia Quadro K420 2GB DDR3 128-bit - second hand",
    description:
      "Placa video profesionala Nvidia Quadro K420 cu 2GB DDR3 128-bit avand interfata PCI-E 2.0 x16 si conectori Dual Link DVI-i respectiv Displayport 1.2",
    price: "239 Lei",
    category: "video"
  },
  {
    alt:
      "Placa video Asus GeForce GT710 (GT710-SL-1GD5) 1GB GDDR5 32-bit, low profile - nou",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/s/xasus-geforce-gt710-1gb-gddr5-32bit-passive-cooler-2.jpg.pagespeed.ic.ggXwX4IbCP.webp",
    title:
      "Placa video Asus GeForce GT710 (GT710-SL-1GD5) 1GB GDDR5 32-bit, low profile - nou",
    description:
      "Placa video noua Asus GeForce GT710, 1GB GDDR5, 32-bit, PCI-Expess 2.0 x16, output: VGA / HDMI / DVI-D, suport DirectX 12 API si OpenGL 4.5, 1-slot Heatsink",
    price: "239 Lei",
    category: "video"
  },
  {
    alt: "Placa video nVidia Quadro 2000 - refurbished",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/q/u/xquadro_2000.jpg.pagespeed.ic.YUGDeXMq9t.webp",
    title: "Placa video nVidia Quadro 2000 1 GB GDDR5 - second hand",
    description:
      "Placa video second hand nVidia Quadro 2000, 1 GB GDDR5, 128 biti, PCI-Express 16 v2.0, output: Dual-Displayport si DVI, suport OpenGL 4.4 si DirectX 11.",
    price: "241 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GT 730 DDR3 2GB/64bit, 902MHz/1600MHz, PCI-E 2.0 x16, HDMI, DVI-D, VGA, Heatsink, Low-profile, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_N730K_2GD3H_LP_160219150021726864_1.jpg.pagespeed.ic.zYOZdqLrSo.webp",
    title:
      "MSI Video Card NVidia GeForce GT 730 DDR3 2GB/64bit, 902MHz/1600MHz, PCI-E 2.0 x16, HDMI, DVI-D, VGA, Heatsink, Low-profile, Retail",
    description:
      "MSI Video Card GeForce GT 730 GDDR3 2GB/64bit, PCI-E 2.0 x16, HDMI,DVI, VGA, Retail",
    price: "370 Lei",
    category: "video"
  },
  {
    alt: "Placa video nVidia Quadro K2000 2GB GDDR5 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/n/v/xnvidia-quadro-k2000-2gb-gddr5-main.jpg.pagespeed.ic.ARjJdjtUiF.webp",
    title: "Placa video nVidia Quadro K2000 2GB GDDR5 128-bit - second hand",
    description:
      "Placa video profesionala second hand, Quadro K2000, 2GB GDDR5, 128 bit, 954 / 1000 MHz, PCI-Express 2.0 x16, DirectX12, OpenGL 4.6, 1 x DVI-I, 2 x DisplayPort",
    price: "373 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GT 1030 OC GDDR5 2GB/64bit, 1265MHz/6008MHz, PCI-E 3.0 x16, HDMI, DP, Cooler, Low-profile, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GT_1030_2G_LP_OC_170522160009630383_1.jpg.pagespeed.ic.q6xgDy__-q.webp",
    title:
      "MSI Video Card NVidia GeForce GT 1030 OC GDDR5 2GB/64bit, 1265MHz/6008MHz, PCI-E 3.0 x16, HDMI, DP, Cooler, Low-profile, Retail",
    description:
      "MSI Video Card NVidia GeForce GT 1030 OC GDDR5 2GB/64bit, 1265MHz/6008MHz, PCI-E 3.0 x16, HDMI, DP, Cooler, Low-profile, Retail",
    price: "419 Lei",
    category: "video"
  },
  {
    alt: "RADEON RX 550 4GB D5 1091M DD DP HDMIDVI",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_RX_550P4PFG5_200720160009392868.jpg.pagespeed.ic.3uVNlVJBD9.webp",
    title: "RADEON RX 550 4GB D5 1091M DD DP HDMIDVI",
    description: "RADEON RX 550 4GB D5 1091M DD DP HDMIDVI",
    price: "485 Lei",
    category: "video"
  },
  {
    alt: "Placa video PNY Quadro K1200 4GB GDDR5 128 bit",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/q/u/xquadro_k1200.png.pagespeed.ic.IBKWsGXU34.webp",
    title: "Placa video PNY Quadro K1200 4GB GDDR5 128 bit - second hand",
    description:
      "Placa video profesionala second hand, PNY Quadro K1200, 4GB GDDR5, 128-bit, 512 Cuda Core, 80 GB/s memory bandwith, 4 mini-Displayport.",
    price: "529 Lei",
    category: "video"
  },
  {
    alt: "Placa video nVidia Quadro K2200 4GB GDDR5 - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/n/v/xnvidia-quadro-k2000-2gb-gddr5-main_1.jpg.pagespeed.ic.ARjJdjtUiF.webp",
    title: "Placa video nVidia Quadro K2200 4GB GDDR5 - second hand",
    description:
      "Placa video profesionala second hand, Quadro K2200, 4GB GDDR5, 128 bit, 1045 / 5012 MHz, PCI-Express 2.0 x16, DirectX 12, OpenGL 4.6, 1 x DVI-I, 2 x DisplayPort",
    price: "569 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GTX 1050 Ti 4GT LP, PCI Express x16 3.0, 4GB GDDR5, 128-bit, 1392 MHz/1290 MHz, Memory Clock: 7008 MHz, DisplayPort (Version 1.4) / HDMI (Version 2.0) / DL-DVI-D",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GTX_1050_TI_4GTLP_180126150142442673_2.jpg.pagespeed.ic.DoPZVzLjlh.webp",
    title:
      "MSI Video Card NVidia GeForce GTX 1050 Ti 4GT LP, PCI Express x16 3.0, 4GB GDDR5, 128-bit, 1392 MHz/1290 MHz, Memory Clock: 7008 MHz, DisplayPort (Version 1.4) / HDMI (Version 2.0) / DL-DVI-D",
    description:
      "MSI Video Card NVidia GeForce GTX 1050 Ti 4GT LP, PCI Express x16 3.0, 4GB GDDR5, 128-bit, 1392 MHz/1290 MHz, Memory Clock: 7008 MHz, DisplayPort (Version 1.4) / HDMI (Version 2.0) / DL-DVI-D",
    price: "732 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GTX 1050 Ti OC GDDR5 4GB/128bit, 1341MHz/7008MHz, PCI-E 3.0 x16, DP, HDMI, DVI-D, Sleeve 2X Fan Cooler (Double Slot), Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_GTX_1050_TI_4GT_OC_161116150420139493_1.jpg",
    title:
      "MSI Video Card NVidia GeForce GTX 1050 Ti OC GDDR5 4GB/128bit, 1341MHz/7008MHz, PCI-E 3.0 x16, DP, HDMI, DVI-D, Sleeve 2X Fan Cooler (Double Slot), Retail",
    description:
      "MSI Video Card NVidia GeForce GTX 1050 Ti OC GDDR5 4GB/128bit, 1341MHz/7008MHz, PCI-E 3.0 x16, DP, HDMI, DVI-D, Sleeve 2X Fan Cooler (Double Slot), Retail",
    price: "746 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GTX 1050 Ti GAMING GDDR5 4GB/128bit, 1303MHz/7008MHz, PCI-E 3.0 x16, DP, HDMI, DVI-D, Twin Frozr VI Cooler LED(Double Slot), Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GTX_1050_TI_GAMING_4G_171207150010298379_1.jpg.pagespeed.ic.PZ5_DsOCIm.webp",
    title:
      "MSI Video Card NVidia GeForce GTX 1050 Ti GAMING GDDR5 4GB/128bit, 1303MHz/7008MHz, PCI-E 3.0 x16, DP, HDMI, DVI-D, Twin Frozr VI Cooler LED(Double Slot), Retail",
    description:
      "MSI Video Card NVidia GeForce GTX 1050 Ti GAMING GDDR5 4GB/128bit, 1303MHz/7008MHz, PCI-E 3.0 x16, DP, HDMI, DVI-D, Twin Frozr VI Cooler LED(Double Slot), Retail",
    price: "784 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GTX 1650 GDDR5 4GB/128bit, 1695MHz/8000MHz, PCI-E 3.0 x16, HDMI, DVI-D, Dual Fan Cooler (Double Slot), Low-profile, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_GTX_1650_4GT_LP_OC_190919160017986583_1.jpg",
    title:
      "MSI Video Card NVidia GeForce GTX 1650 GDDR5 4GB/128bit, 1695MHz/8000MHz, PCI-E 3.0 x16, HDMI, DVI-D, Dual Fan Cooler (Double Slot), Low-profile, Retail",
    description:
      "MSI Video Card NVidia GeForce GTX 1650 GDDR5 4GB/128bit, 1695MHz/8000MHz, PCI-E 3.0 x16, HDMI, DVI-D, Dual Fan Cooler (Double Slot), Low-profile, Retail",
    price: "796 Lei",
    category: "video"
  },
  {
    alt: "MSI Video Card NVidia GeForce GTX 1650 VENTUS XS 4G OC",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GTX_1650_VENTUS_XS_4G_OC_190902070009606265_1.jpg.pagespeed.ic.KtE1q2eUsk.webp",
    title: "MSI Video Card NVidia GeForce GTX 1650 VENTUS XS 4G OC",
    description: "MSI Video Card NVidia GeForce GTX 1650 VENTUS XS 4G OC",
    price: "816 Lei",
    category: "video"
  },
  {
    alt: "XFX Radeon RX 570 8GB, XXX Ed 1286M D5 3xDP HDMI",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_570P8DFD6_180207080204926166_2.jpg",
    title: "XFX Radeon RX 570 8GB, XXX Ed 1286M D5 3xDP HDMI",
    description: "XFX Radeon RX 570 8GB, XXX Ed 1286M D5 3xDP HDMI",
    price: "869 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GTX 1650 GAMING X GDDR6 4GB/128bit, 1860/8000MHz, PCI-E 3.0 x16, 2xDP, HDMI, DVI-D, Twin Frozr VII Cooler LED(Double Slot), RGB Mystic Light, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_GTX_1650_GAMING_X_4G_190503160008714106_1.jpg",
    title:
      "MSI Video Card NVidia GeForce GTX 1650 GAMING X GDDR6 4GB/128bit, 1860/8000MHz, PCI-E 3.0 x16, 2xDP, HDMI, DVI-D, Twin Frozr VII Cooler LED(Double Slot), RGB Mystic Light, Retail",
    description:
      "MSI Video Card NVidia GeForce GTX 1650 GAMING X GDDR6 4GB/128bit, 1860/8000MHz, PCI-E 3.0 x16, 2xDP, HDMI, DVI-D, Twin Frozr VII Cooler LED(Double Slot), RGB Mystic Light, Retail",
    price: "877 Lei",
    category: "video"
  },
  {
    alt: "ASUS Video Card Nvidia PH-GTX1660-O6G",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_580P8DFD6_170419080346151255_2.jpg",
    title: "ASUS Video Card Nvidia PH-GTX1660-O6G",
    description: "ASUS Video Card Nvidia PH-GTX1660-O6G",
    price: "981 Lei",
    category: "video"
  },
  {
    alt: "Inno3D Video Card GeForce GTX 1660 Compact",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_N16601_06D5_1521VA29_191018080012056055.jpg",
    title: "Inno3D Video Card GeForce GTX 1660 Compact",
    description: "Inno3D Video Card GeForce GTX 1660 Compact",
    price: "1.121 Lei",
    category: "video"
  },
  {
    alt:
      "Placa video Inno3D nVidia GeForce GTX 1660 Compact (N16601-06D5-1510VA29) 6 GB GDDR5 192 bit - nou",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/n/inno3d_nvidia_geforce_gtx_1660_compact_n16601-06d5-1510va29_6_gb_gddr5_192_bit.jpg",
    title:
      "Placa video Inno3D nVidia GeForce GTX 1660 Compact (N16601-06D5-1510VA29) 6 GB GDDR5 192 bit - nou",
    description:
      "Placa video noua Inno3D nVidia GeForce GTX 1660 Compact, 6 GB GDDR5, 192 biti, PCI-Express 3.0 x16, Output: 3x Displayport/ HDMI, Suport DirectX 12 si OpenGL 4.5, Single-Fan. ",
    price: "1.149 Lei",
    category: "video"
  },
  {
    alt: "XFX Video Card RX 5500 XT DD 8GB D6 3xDP HDMI",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_55XT8DFD6_200205150009692224.jpg",
    title: "XFX Video Card RX 5500 XT DD 8GB D6 3xDP HDMI",
    description: "XFX Video Card RX 5500 XT DD 8GB D6 3xDP HDMI",
    price: "1.178 Lei",
    category: "video"
  },
  {
    alt:
      "Placa video KFA23D nVidia GeForce GTX 1660 1-Click OC 6GB GDDR5 192 bit - nou",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/k/f/xkfa2_geforce_gtx_1660_1-click_oc_6gb_4_.png.pagespeed.ic.5cAJtrKdWS.webp",
    title:
      "Placa video KFA23D nVidia GeForce GTX 1660 1-Click OC 6GB GDDR5 192 bit - nou",
    description:
      "Placa video noua KFA23D nVidia GeForce GTX 1660 1-Click OC, 6 GB GDDR5, 192 biti, PCI-Express 3.0 x16, Output: 3x Displayport 1.4/ HDMI 2.0b, Suport DirectX 12 si OpenGL 4.5, Dual-Fan.",
    price: "1.179 Lei",
    category: "video"
  },
  {
    alt:
      "MSI Video Card NVidia GeForce GTX 1660 SUPER VENTUS XS OC GDDR6 6GB/192bit, /14000MHz, PCI-E 3.0 x16, 3xDP, HDMI, TORX 2X Cooler(Double Slot) Backplate, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_GTX_1660_SUPER_VENTUS_XS_OC_200213080239915517_1.jpg",
    title:
      "MSI Video Card NVidia GeForce GTX 1660 SUPER VENTUS XS OC GDDR6 6GB/192bit, /14000MHz, PCI-E 3.0 x16, 3xDP, HDMI, TORX 2X Cooler(Double Slot) Backplate, Retail",
    description:
      "MSI Video Card NVidia GeForce GTX 1660 SUPER VENTUS XS OC GDDR6 6GB/192bit, /14000MHz, PCI-E 3.0 x16, 3xDP, HDMI, TORX 2X Cooler(Double Slot) Backplate, Retail",
    price: "1.310 Lei",
    category: "video"
  },
  {
    alt: "MSI Video Card NVidia GeForce GTX 1660 GAMING X 6G",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GTX_1660_GAMING_X_6G_190312150008584486_1.jpg.pagespeed.ic.u2LU3IPKQE.webp",
    title: "MSI Video Card NVidia GeForce GTX 1660 GAMING X 6G",
    description: "MSI Video Card NVidia GeForce GTX 1660 GAMING X 6G",
    price: "1.317 Lei",
    category: "video"
  },
  {
    alt: "XFX RX 5600 XT 14Gbps THICC II Pro 6GB GDDR6 3xDP HDMI",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_56XT6DF46_200601160008507458.jpg",
    title: "XFX RX 5600 XT 14Gbps THICC II Pro 6GB GDDR6 3xDP HDMI",
    description: "XFX RX 5600 XT 14Gbps THICC II Pro 6GB GDDR6 3xDP HDMI",
    price: "1.501 Lei",
    category: "video"
  },
  {
    alt: "XFX RX 5600 XT 14Gbps THICC III Pro 6GB GDDR6 3xDP HDMI",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_56XT6TF48_200601160010017632.jpg",
    title: "XFX RX 5600 XT 14Gbps THICC III Pro 6GB GDDR6 3xDP HDMI",
    description: "XFX RX 5600 XT 14Gbps THICC III Pro 6GB GDDR6 3xDP HDMI",
    price: "1.556 Lei",
    category: "video"
  },
  {
    alt: "MSI Video Card NVidia GeForce GTX 1660 Ti VENTUS XS 6G OC",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_GTX_1660_TI_VENTUS_XS_6G_OC_190826160014361616_1.jpg",
    title: "MSI Video Card NVidia GeForce GTX 1660 Ti VENTUS XS 6G OC",
    description: "MSI Video Card NVidia GeForce GTX 1660 Ti VENTUS XS 6G OC",
    price: "1.564 Lei",
    category: "video"
  },
  {
    alt:
      "GIGABYTE Video Card GeForce GTX 1660 Ti GDDR6 6GB/192bit, 1860MHz/12000MHz, PCI-E 3.0 x16, 3xDP, 1xHDMI, WINDFORCE 3X Cooling System, RGB Fusion 2.0",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_GV_N166TGAMING_OC_6GD_190228150017218684_1.jpg.pagespeed.ic.ODWurKFLtw.webp",
    title:
      "GIGABYTE Video Card GeForce GTX 1660 Ti GDDR6 6GB/192bit, 1860MHz/12000MHz, PCI-E 3.0 x16, 3xDP, 1xHDMI, WINDFORCE 3X Cooling System, RGB Fusion 2.0",
    description:
      "GIGABYTE Video Card GeForce GTX 1660 Ti GDDR6 6GB/192bit, 1860MHz/12000MHz, PCI-E 3.0 x16, 3xDP, 1xHDMI, WINDFORCE 3X Cooling System, RGB Fusion 2.0",
    price: "1.599 Lei",
    category: "video"
  },
  {
    alt:
      "XFX AMD RX 5600 XT THICC III ULTRA 6GB BOOST UP TO 1750M D6 3xDP HDMI",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_56XT6TBD8_200124150015102980.jpg",
    title:
      "XFX AMD RX 5600 XT THICC III ULTRA 6GB BOOST UP TO 1750M D6 3xDP HDMI",
    description:
      "XFX AMD RX 5600 XT THICC III ULTRA 6GB BOOST UP TO 1750M D6 3xDP HDMI",
    price: "1.638 Lei",
    category: "video"
  },
  {
    alt: "XFX AMD Radeon RX 5700 Triple Dissipation 8GB GDDR6",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_57XL83LD8_200601160015427766.jpg",
    title: "XFX AMD Radeon RX 5700 Triple Dissipation 8GB GDDR6",
    description: "XFX AMD Radeon RX 5700 Triple Dissipation 8GB GDDR6",
    price: "1.856 Lei",
    category: "video"
  },
  {
    alt: "XFX Video Card AMD Radeon RX 5700 XT 8GB GDDR6 THICC II Ultra",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_RX_57XT8DBD6_190920140008527106.jpg",
    title: "XFX Video Card AMD Radeon RX 5700 XT 8GB GDDR6 THICC II Ultra",
    description:
      "XFX Video Card AMD Radeon RX 5700 XT 8GB GDDR6 THICC II Ultra",
    price: "2.102 Lei",
    category: "video"
  },
  {
    alt:
      "Power Supply Unit Inter-Tech SL-500C 500W PSU, single rail (30A), 80 mm silent fan, 2 x SATA, 2 x Molex, 1 x Floppy, SCP/OCP/OVP, Passive PFC, bulk + power cord",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SL_500C_180809160009189106_1.jpg.pagespeed.ic.yEbkMfThmn.webp",
    title:
      "Power Supply Unit Inter-Tech SL-500C 500W PSU, single rail (30A), 80 mm silent fan, 2 x SATA, 2 x Molex, 1 x Floppy, SCP/OCP/OVP, Passive PFC, bulk + power cord",
    description:
      "Power Supply Unit Inter-Tech SL-500C 500W PSU, single rail (30A), 80 mm silent fan, 2 x SATA, 2 x Molex, 1 x Floppy, SCP/OCP/OVP, Passive PFC, bulk + power cord",
    price: "86 Lei",
    category: "supply"
  },
  {
    alt: "Sursa FSP FSP350-60HHN 350W - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/f/s/xfsp-fsp350-60hhn_85_.jpg.pagespeed.ic.cKF3e3hZxZ.webp",
    title: "Sursa FSP FSP350-60HHN 350W - second hand",
    description:
      "Sursa FSP 350-60HHN de 350W, ATX 12V 2.3 & EPS 12V v2.92, PFC Activ, Eficienta: >85%, Conectori: 1 x 20+4 pin ATX 12V, 1x 4+4 pin CPU, 4x 6+2 pin PCI-Express 2.0, 8x SATA, 2x 4 pin Molex, 1x FDD, ventilator: 120 mm, protectie: OCP/ OVP/ SCP.  ",
    price: "100 Lei",
    category: "supply"
  },
  {
    alt:
      "Sursa Enermax Liberty ELT500AWT-ECO 500W 80 Plus Semi-modulara - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/e/n/xenermax-liberty-elt500wawt-eco-1.jpg.pagespeed.ic.mFXqIeL_zb.webp",
    title:
      "Sursa Enermax Liberty ELT500AWT-ECO 500W 80 Plus Semi-modulara - second hand",
    description:
      "Sursa ATX12V / EPS12V second hand semi-modulara Enermax Liberty ELT500AWT-ECO 500W cu certificare 80 Plus, PFC activ si ventilator 120mm",
    price: "119 Lei",
    category: "supply"
  },
  {
    alt: "Sursa nJoy Ayrus 450W",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/u/xsursa_njoy_ayrus_450_450w_1.jpg.pagespeed.ic.DQrQokKGAT.webp",
    title: "Sursa nJoy Ayrus - 450W",
    description:
      "Sursa Njoy Ayrus 450 de 450W, ATX 12V 2.3, PFC Pasiv, Eficienta: 80 Plus, Conectori: 1 x 20+4 pin ATX, 1 x 4+4 pin CPU, 1 x 6+2 pin PCI-Express, 4x SATA, 2x 4 pin Molex, ventilator 120mm, protectie: OCP/ OVP/ UVP/ SCP/ OPP, lungime cablu: 45 cm   ",
    price: "139 Lei",
    category: "supply"
  },
  {
    alt: "LC-Power LC6450GP2 v2.2",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/l/c/xlc-power_lc6450gp2_v2.2.jpg.pagespeed.ic.LJwlNagwTU.webp",
    title: "Sursa LC-Power LC6450GP2 V2.2 450W 80+ Bronze - second hand",
    description:
      "Sursa ATX12V 2.2 second hand LC-Power LC6450GP2 V2.2 cu certificare 80+ Bronze, PFC activ si ventilator 140mm",
    price: "149 Lei",
    category: "supply"
  },
  {
    alt: "Sursa Segotep GP1350GN, 80+ Gold, 1250W - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/e/xsegotep-1250w-top.jpg.pagespeed.ic.xSWnZxKt90.webp",
    title: "Sursa Segotep GP1350GN, 80+ Gold, 1250W - second hand",
    description:
      "Sursa gaming Segotep GP1350GN, single rail, Active PFC, 90%, 80+ Gold, 1250W, 140mm fan, second hand",
    price: "195 Lei",
    category: "supply"
  },
  {
    alt: "Sursa Seasonic SS-H850HT 850W 80+ Silver - second hand",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/s/e/xseasonic-ss-h850ht-1.jpg.pagespeed.ic.0g5jVEE1Ki.webp",
    title: "Sursa Seasonic SS-H850HT 850W 80+ Silver - second hand",
    description:
      "Sursa ATX12V 2.3 second hand Seasonic SS-H850HT cu certificare 80+ Silver, PFC activ si ventilator 120mm",
    price: "399 Lei",
    category: "supply"
  },
  {
    alt:
      "FUJITSU Power Supply Module 450W platinum (hot plug) for Primergy RX300 S8, Retail",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_S26113_F575_L12_131211150018608901_1.jpg.pagespeed.ic.-9d0ble_Ie.webp",
    title:
      "FUJITSU Power Supply Module 450W platinum (hot plug) for Primergy RX300 S8, Retail",
    description:
      "FUJITSU Power Supply Module 450W platinum (hot plug) for Primergy RX300 S8, Retail",
    price: "729 Lei",
    category: "supply"
  },
  {
    alt: "Dell Single Hot-plug Power Supply (1+0), 495W, CusKit",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_450_AEBM_05_170124150015631716_1.jpg.pagespeed.ic.aN4nzAhox3.webp",
    title: "Dell Single Hot-plug Power Supply (1+0), 495W, CusKit",
    description: "Dell Single Hot-plug Power Supply (1+0), 495W, CusKit",
    price: "921 Lei",
    category: "supply"
  },
  {
    alt: "Kit - Hot-plug Power Supply, 550W",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_450_AEKP_05_180502150052144155_1.jpg.pagespeed.ic.U_D177Jxr3.webp",
    title: "Kit - Hot-plug Power Supply, 550W",
    description: "Kit - Hot-plug Power Supply, 550W",
    price: "954 Lei",
    category: "supply"
  },
  {
    alt: "Dell Single Hot-plug Power Supply (1+0) 750W",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_450_AEBN_05_151125150017450224_1.jpg.pagespeed.ic.U_D177Jxr3.webp",
    title: "Dell Single Hot-plug Power Supply (1+0) 750W",
    description: "Dell Single Hot-plug Power Supply (1+0) 750W",
    price: "987 Lei",
    category: "supply"
  },
  {
    alt: "Power Supply, 550W, Hot-plug - Kit for R430",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_450_AEIE_05_161014140319871498_1.jpg.pagespeed.ic.sjSdU3S86w.webp",
    title: "Power Supply, 550W, Hot-plug - Kit for R430",
    description: "Power Supply, 550W, Hot-plug - Kit for R430",
    price: "1.080 Lei",
    category: "supply"
  },
  {
    alt:
      "Chassis INTER-TECH L-01 Midi Tower, ATX, 2xUSB2.0, audio, PSU 500W, Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_L_01_500_190221150008356078_1.jpg.pagespeed.ic.fulSS0wXfk.webp",
    title:
      "Chassis INTER-TECH L-01 Midi Tower, ATX, 2xUSB2.0, audio, PSU 500W, Black",
    description:
      "Chassis INTER-TECH L-01 Midi Tower, ATX, 2xUSB2.0, audio, PSU 500W, Black",
    price: "134 Lei",
    category: "tower"
  },
  {
    alt:
      "Carcasa Zalman N2 neagra, SECC Steel ATX Mid Tower, fara sursa (montata jos), interior vopsit negru, 1x5.25” (extern), 2x3.5” (intern), 3x2.5” (intern), design tool-less, fata – 2x 120mm White LED fan (inclus)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_ZM_N2_200221150008883374_1.jpg.pagespeed.ic.c7KgXYt8_U.webp",
    title:
      "Carcasa Zalman N2 neagra, SECC Steel ATX Mid Tower, fara sursa (montata jos), interior vopsit negru, 1x5.25” (extern), 2x3.5” (intern), 3x2.5” (intern), design tool-less, fata – 2x 120mm White LED fan (inclus)",
    description:
      "Carcasa Zalman N2 neagra, SECC Steel ATX Mid Tower, fara sursa (montata jos), interior vopsit negru, 1x5.25” (extern), 2x3.5” (intern), 3x2.5” (intern), design tool-less, fata – 2x 120mm White LED fan (inclus)",
    price: "205 Lei",
    category: "tower"
  },
  {
    alt:
      'Carcasa Riotoro CR100TG RGB neagra, SPCC Steel ATX Mini Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, 2x 3.5" (intern), 2x 2.5" (intern), fata - 3x 120mm fans (optional)',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CR100TG_200221150013829502_1.jpg.pagespeed.ic.6atLLuG05N.webp",
    title:
      'Carcasa Riotoro CR100TG RGB neagra, SPCC Steel ATX Mini Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, 2x 3.5" (intern), 2x 2.5" (intern), fata - 3x 120mm fans (optional)',
    description:
      'Carcasa Riotoro CR100TG RGB neagra, SPCC Steel ATX Mini Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, 2x 3.5" (intern), 2x 2.5" (intern), fata - 3x 120mm fans (optional)',
    price: "214 Lei",
    category: "tower"
  },
  {
    alt:
      "Carcasa Segotep And 8 neagra, SPCC Steel ATX Mid Tower, fara sursa (montata sus), interior vopsit negru, 2x 2.5”(intern), 2x 3.5” (intern), spate – 1x 120mm Blue LED Fan (inclus)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SG_AND8_BK_200221150015682100_1.jpg.pagespeed.ic.Ux9KWd9YEF.webp",
    title:
      "Carcasa Segotep And 8 neagra, SPCC Steel ATX Mid Tower, fara sursa (montata sus), interior vopsit negru, 2x 2.5”(intern), 2x 3.5” (intern), spate – 1x 120mm Blue LED Fan (inclus)",
    description:
      "Carcasa Segotep And 8 neagra, SPCC Steel ATX Mid Tower, fara sursa (montata sus), interior vopsit negru, 2x 2.5”(intern), 2x 3.5” (intern), spate – 1x 120mm Blue LED Fan (inclus)",
    price: "217 Lei",
    category: "tower"
  },
  {
    alt:
      'Carcasa Segotep Zack neagra, SPCC Steel ATX Mid Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, 2x 3.5" (intern), 4x 2.5" (intern), fata – 3x 120mm',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_ZACK_BK_200221150011462744_1.jpg.pagespeed.ic.jYFMKaAPqL.webp",
    title:
      'Carcasa Segotep Zack neagra, SPCC Steel ATX Mid Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, 2x 3.5" (intern), 4x 2.5" (intern), fata – 3x 120mm',
    description:
      'Carcasa Segotep Zack neagra, SPCC Steel ATX Mid Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, 2x 3.5" (intern), 4x 2.5" (intern), fata – 3x 120mm',
    price: "226 Lei",
    category: "tower"
  },
  {
    alt: "Segotep SG-K8 Black, SECC Steel ATX Mid Tower,",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_SG_K8_BK_180709160011374136_1.jpg.pagespeed.ic.rO1Do2m-dS.webp",
    title: "Segotep SG-K8 Black, SECC Steel ATX Mid Tower,",
    description: "Segotep SG-K8 Black, SECC Steel ATX Mid Tower,",
    price: "321 Lei",
    category: "tower"
  },
  {
    alt:
      "Carcasa Thermaltake H100 Tempered Glass neagra, SPCC Steel ATX Mid Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, design premium cu panou lateral din sticla securizata cu grosimea de 4mm, 2x3.5” (intern), 2x2.5” (intern)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CA_1L4_00M1WN_02_200221150015332540_1.jpg.pagespeed.ic.I9MFvEdqAT.webp",
    title:
      "Carcasa Thermaltake H100 Tempered Glass neagra, SPCC Steel ATX Mid Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, design premium cu panou lateral din sticla securizata cu grosimea de 4mm, 2x3.5” (intern), 2x2.5” (intern)",
    description:
      "Carcasa Thermaltake H100 Tempered Glass neagra, SPCC Steel ATX Mid Tower, fara sursa (tip ATX, montata jos), interior vopsit negru, design premium cu panou lateral din sticla securizata cu grosimea de 4mm, 2x3.5” (intern), 2x2.5” (intern)",
    price: "321 Lei",
    category: "tower"
  },
  {
    alt:
      "Carcasa Segotep Phoenix K3 neagra, SPCC Steel ATX 3.0 Mid Tower, placa de baza se monteaza cu conectorii in partea de sus a carcasei",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_PHOENIX_K3_BK_200221150010642465_1.jpg.pagespeed.ic.Y9yCTeZfL1.webp",
    title:
      "Carcasa Segotep Phoenix K3 neagra, SPCC Steel ATX 3.0 Mid Tower, placa de baza se monteaza cu conectorii in partea de sus a carcasei",
    description:
      "Carcasa Segotep Phoenix K3 neagra, SPCC Steel ATX 3.0 Mid Tower, placa de baza se monteaza cu conectorii in partea de sus a carcasei",
    price: "362 Lei",
    category: "tower"
  },
  {
    alt: "Cablu retea Cablexpert PP12-1M, Cat. 5E - 1m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_retea_cat_5e.jpg.pagespeed.ic.4Fn8WffZV0.webp",
    title: "Cablu retea Cablexpert PP12-1M, Cat. 5E - 1m",
    description: "Cablu retea Cablexpert, cat 5E, 1m, gri.",
    price: "4 Lei",
    category: "accessories"
  },
  {
    alt: "Adaptor PCI-e DVI-D Silicon Image",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/d/v/xdvi_convertor_2.jpg.pagespeed.ic._-bdhhxF1C.webp",
    title: "Adaptor PCI-e DVI-D Silicon Image",
    description:
      "Adaptor PCI-e DVI-D Silicon Image pentru calculatoare care nu dispun de port DVI-D",
    price: "5 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu prelungitor audio Jack 3.5mm T/M Cablexpert CCA-423 - 1.5m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_prelungitor_audio_stereo_cablexpert_cca-421s-5m_1.jpg.pagespeed.ic.vwwP2MN4r7.webp",
    title: "Cablu prelungitor audio Jack 3.5mm T/M Cablexpert CCA-423 - 1.5m",
    description:
      "Acest cablu permite prelungirea cablului existent de la casti/ boxe cu jack 3.5 mm.",
    price: "5 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu retea Cablexpert PP12-3M, Cat. 5E - 3m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_retea_cat_5e_1.jpg.pagespeed.ic.4Fn8WffZV0.webp",
    title: "Cablu retea Cablexpert PP12-3M, Cat. 5E - 3m",
    description: "Cablu retea Cablexpert, cat 5E, 3m, gri.",
    price: "6 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu alimentare Molex - 2x Molex T/M Cablexpert CC-PSU-1 - 15cm",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_cc-psu-1_1.jpg.pagespeed.ic.ohH5RyJnud.webp",
    title: "Cablu alimentare Molex - 2x Molex T/M Cablexpert CC-PSU-1 - 15cm",
    description:
      "Cablul de alimentare in forma de Y ofera un port suplimentar Molex 4 pin in plus fata de cel al interfatei standard ATX.",
    price: "6 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu alimentare Molex - SATA M/T Cablexpert CC-SATA-PS - 15cm",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablul_molex_-_sata.jpg.pagespeed.ic.F3umkVXykh.webp",
    title: "Cablu alimentare Molex - SATA M/T Cablexpert CC-SATA-PS - 15cm",
    description:
      "Cablul permite alimentarea HDD-urilor SATA de la o interfata Molex a sursei.",
    price: "7 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu prelungitor USB-A 2.0 - USB-A 2.0 T/M, Cablexpert CCP-USB2-AMAF-6, 1.8m - Black ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_prelungitor_usb-a_2.0_-_usb-a_2.0_t-m_cablexpert_ccp-usb2-amaf-6_1.8m_-_black_2.jpg.pagespeed.ic.Snmxu53pmx.webp",
    title:
      "Cablu prelungitor USB-A 2.0 (tata) - USB-A 2.0 (mama), Cablexpert CCP-USB2-AMAF-6, 1.8m - Black",
    description:
      "Acest cablu se poate folosi pentru prelungirea cablului USB 2.0 deja existent.",
    price: "7 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu OTG mini USB-B - USB-A T/M, Cablexpert A-OTG-AFBM-002, 15 cm - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_adaptor_otg_mini_usb_-_usb_t-m_cablexpert_a-otg-afbm-002_-_15_cm.jpg.pagespeed.ic.xu5Ag274iP.webp",
    title:
      "Cablu OTG mini USB-B - USB-A T/M, Cablexpert A-OTG-AFBM-002, 15 cm - Black",
    description:
      "Acest cablu OTG mini USB-B - USB-A T/M permite conectarea perifericelor USB standard la smartphone si tablete. Functioneaza cu telefoanele si tabletele care suporta OTG!",
    price: "8 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu alimentare PCI-Express Cablexpert CC-PSU-6 - 15 cm",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/c/xcc-psu-6.jpg.pagespeed.ic.xkcldkHtav.webp",
    title:
      "Cablu alimentare placa video PCI-Express 6 pini Cablexpert CC-PSU-6 - 15cm",
    description:
      "Cablu intern de alimentare a placii video de tip PCI-Express.",
    price: "10 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu alimentare notebook 2 contacte Cablexpert PC-184-VDE, 1.8m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/c/xpc-184-vde.jpg.pagespeed.ic.mLYkw2hL1s.webp",
    title:
      "Cablu alimentare notebook 2 contacte Cablexpert PC-184-VDE, 1.8m - Black",
    description:
      "Alimentarea adaptorului notebook de la reteaua de 220 V, cu mufa tip doua contacte.",
    price: "10 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu audio Jack 3.5 mm T/T, Cablexpert CCAP-444-6, 1.8m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/c/xccap-444-6.jpg.pagespeed.ic.AWGNAKWn6f.webp",
    title: "Cablu audio Jack 3.5 mm T/T, Cablexpert CCAP-444-6, 1.8m - Black",
    description:
      "Acest cablu stereo poate fi utilizat pentru conectarea diferitelor dispozitive audio cu interfata 3.5 mm jack.",
    price: "10 Lei",
    category: "accessories"
  },
  {
    alt: "Prelungitor cablu alimentare Cablexpert PC-189-VDE - 1.8m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_pc-189-vde_1.jpg.pagespeed.ic.m6iPy-ADWU.webp",
    title: "Prelungitor cablu alimentare Cablexpert PC-189-VDE - 1.8m",
    description: "Cablu prelungitor pentru UPS/ monitor/ calculator. ",
    price: "12 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu alimentare Cablexpert PC-186-VDE, 1.8m - Black ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_pc-186-vde_1.jpg.pagespeed.ic.FEt8ODwt5A.webp",
    title: "Cablu alimentare Cablexpert PC-186-VDE, 1.8m - Black ",
    description:
      "Cablu pentru conectarea unui PC sau monitor la sursa de alimentare.",
    price: "12 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu retea Cablexpert PP12-7.5M, Cat. 5E - 7.5m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_retea_cat_5e_3.jpg.pagespeed.ic.4Fn8WffZV0.webp",
    title: "Cablu retea Cablexpert PP12-7.5M, Cat. 5E - 7.5m",
    description: "Cablu retea Cablexpert, cat 5E, 7.5m, gri.",
    price: "14 Lei (-2 Lei)\n\n12 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu imprimanta USB A-B 2.0 T/T, Cablexpert CCP-USB2-AMBM-15, 4.5m - Grey",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/c/xccp-usb2-ambm-6g_1.jpg.pagespeed.ic.5SK_hw3m1O.webp",
    title:
      "Cablu imprimanta USB A-B 2.0 T/T, Cablexpert CCP-USB2-AMBM-15, 4.5m - Grey",
    description:
      "Acest cablu permite conectarea imprimantei la un PC sau laptop cu un port USB.",
    price: "12 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu prelungitor USB-A 2.0 (tata) - USB-A 2.0 (mama), Cablexpert CCF-USB2-AMAF-15, 4,5m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_alimentare_notebook_2_contacte.jpg.pagespeed.ic.XuVzVS2nVL.webp",
    title:
      "Cablu prelungitor USB-A 2.0 (tata) - USB-A 2.0 (mama), Cablexpert CCF-USB2-AMAF-15, 4,5m - Black",
    description:
      "Acest cablu se poate folosi pentru prelungirea cablului USB 2.0 deja existent.",
    price: "12 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu alimentare notebook 3 contacte, Cablexpert PC-186-ML12, 1.8m - Black ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_pc-186-ml12_1.jpg.pagespeed.ic.LG8dySfF6Q.webp",
    title:
      "Cablu alimentare notebook 3 contacte, Cablexpert PC-186-ML12, 1.8m - Black ",
    description:
      "Alimentarea adaptorului notebook de la reteaua de 220 V, cu mufa tip trei contacte.",
    price: "15 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu alimentare C14 - Schuko T/M, Cablexpert PC-SFC14M-01, 15cm - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/p/c/xpc-sfc14m-01.jpg.pagespeed.ic.2j5N1GHCXM.webp",
    title:
      "Cablu alimentare C14 - Schuko T/M, Cablexpert PC-SFC14M-01, 15cm - Black",
    description:
      "Cablul C14 - Schuko T/M permite alimentarea unui UPS sau PDU.",
    price: "15 Lei",
    category: "accessories"
  },
  {
    alt:
      'Adaptor fixare SSD/ HDD 2.5" in bay de 3.5" Maclean Brackets MC-655 - Silver',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/m/a/xmaclean_brackets_mc-655.jpg.pagespeed.ic.Ngnbjr95IM.webp",
    title:
      'Adaptor fixare SSD/ HDD 2.5" in bay de 3.5" Maclean Brackets MC-655 - Silver',
    description:
      'Adaptor pentru fixarea SSD/ HDD-ului de 2.5" in slot (bay) de 3.5". ',
    price: "15 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu date USB-A 2.0 - USB-C T/T, Cablexpert CCP-USB2-AMCM-6, 1.8 m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_date_usb_a_2.0_la_type-c_t-t_cablexpert_ccp-usb2-amcm-6_-_1.8_m_1_1.jpg.pagespeed.ic.Grbc9myPTm.webp",
    title:
      "Cablu date USB-A 2.0 - USB-C T/T, Cablexpert CCP-USB2-AMCM-1M, 1 m - Black",
    description:
      "Cablul de date USB-A 2.0 - USB-C T/T permite incarcarea dispozitivelor mobile si sincronizarea datelor.",
    price: "15 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu periferice USB-A 2.0 (tata) - USB-A 2.0 (tata) , Unitek, 1.5m, negru",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu-usb-unitek-usb-20-tata-tata15m-black.jpg.pagespeed.ic.0dBvQcDt0J.webp",
    title:
      "Cablu periferice USB-A 2.0 (tata) - USB-A 2.0 (tata) , Unitek, 1.5m, negru",
    description:
      "Cablu periferice USB-A 2.0 (tata) - USB-A 2.0 (tata) , Unitek, 1.5m, negru",
    price: "15 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu retea Cablexpert PP12-10M, Cat. 5E - 10m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_retea_cat_5e_4.jpg.pagespeed.ic.4Fn8WffZV0.webp",
    title: "Cablu retea Cablexpert PP12-10M, Cat. 5E - 10m",
    description: "Cablu retea Cablexpert, cat 5E, 10m, gri.",
    price: "17 Lei",
    category: "accessories"
  },
  {
    alt: "Adaptor DVI-I - VGA T/M, Roline 12.03.3105CR - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/d/xadaptor_dvi-i_-_vga_roline_12.03.3105c..jpg.pagespeed.ic.CjRNYfbU9e.webp",
    title: "Adaptor DVI-I - VGA T/M, Roline 12.03.3105CR - Black",
    description:
      "Adaptorul permite conectarea unui PC/ notebook cu interfata DVI-I la un monitor/ TV/ proiector cu iesire VGA.",
    price: "19 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu prelungitor alimentare Cablexpert PC-189-VDE-3M, 3m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_pc-189-vde_1_1_1.jpg.pagespeed.ic.m6iPy-ADWU.webp",
    title: "Cablu prelungitor alimentare Cablexpert PC-189-VDE-3M, 3m - Black",
    description:
      "Cablu prelungitor PC-189-VDE-3M poate fi folosit pentru UPS sau pentru prelungirea cablului de alimentare de la sursa/ monitor.",
    price: "19 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu VGA - VGA T/T, Cablexpert CC-PPVGA-6B, 1.8m - Black ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_cc-ppvga-6b.jpg.pagespeed.ic.MYOhYDboBd.webp",
    title: "Cablu VGA - VGA T/T, Cablexpert CC-PPVGA-6B, 1.8m - Black",
    description:
      "Cablu de date VGA - VGA permite conectarea a doua dispozitive cu interfata VGA.",
    price: "20 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu HDMI - HDMI T/T, Cablexpert CC-HDMI4-6, 1.8m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_cc-hdmi4-10_1_1.jpg.pagespeed.ic.mC-aCAajE2.webp",
    title: "Cablu HDMI - HDMI T/T, Cablexpert CC-HDMI4-6, 1.8m - Black",
    description:
      "Acest cablu permite conectarea a doua dispozitive cu interfata HDMI.",
    price: "20 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu date USB-A 3.0 - micro USB-B T/T, Cablexpert CCP-mUSB3-AMBM-6, 1.8m - Blue",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_ccp-musb3-ambm-6_1.jpg.pagespeed.ic.vKUTeA4BHW.webp",
    title:
      "Cablu date USB-A 3.0 - micro USB-B T/T, Cablexpert CCP-mUSB3-AMBM-6, 1.8m - Blue",
    description:
      "Cablul permite conectarea diferitelor dispozitive cu interfata micro-USB-B 3.0 (ex: HDD extern/ Rack extern/ citior de carduri) la un PC/ notebook cu un port USB-A liber.",
    price: "20 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu USB 3.0 Type A - Type B Space Shuttle-Z AWM E101344 1.8 m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_imprimanta_usb_3.0_a-b_blue.jpg.pagespeed.ic.lpPzV4NoEZ.webp",
    title: "Cablu USB 3.0 SS Type A - Type B Space Shuttle-Z AWM E101344 1.8 m",
    description:
      "Cablu USB 3.0 SuperSpeed (5 Gbit/s) de la Type A (tata) la Type B (tata) cu lungimea de 1.8 m. Este destinat imprimantelor cu conector USB 3.0 Type B (mama) sau monitoarelor cu hub USB 3.0 Type B (mama) sau altor dispozitive dotate cu acest tip de conector. Nu este compatibil cu dispozitivele dotate cu USB 2.0 Type B.",
    price: "20 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu USB 3.0 Tata tip A - USB 3.0 Mama tip A, ASSMANN, 1.8m, negru",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/s/xassmann-usb-30-extension-cable.jpeg.pagespeed.ic.x9Kv5YtO5q.webp",
    title:
      "Cablu periferice USB 3.0 Tata tip A - USB 3.0 Mama tip A, ASSMANN, 1.8m, negru",
    description:
      "Cablu periferice Assmann USB 3.0 Male tip A - USB 3.0 Female tip A, 1.8m, negru",
    price: "20 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu date HDMI AM - 2x HDMI AF (splitter) Gembird",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/d/xadaptor-gembird-hdmi-am-hdmi-af-x2-splitter-dsp-2ph4-04-1.jpg.pagespeed.ic.TF38kfrpCD.webp",
    title: "Cablu date HDMI tata - 2x HDMI mama (splitter) Gembird",
    description:
      "Cablu date HDMI AM - 2x HDMI AF (splitter) Gembird, permite sa conecta un dispozitiv adițional cu HDMI.",
    price: "25 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu prelungitor USB-A 3.0 (tata) - USB-A 3.0 (mama), Unitek, 1.5m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_date_usb_2.0_a_-_mini_usb_5_pini_t-t_cablexpert_ccf-usb2-am5p-6_-_1.8m_1_1.jpg.pagespeed.ic.l7hUq4wXx-.webp",
    title:
      "Cablu prelungitor USB-A 3.0 (tata) - USB-A 3.0 (mama), Unitek, 1.5m - Black",
    description:
      "Acest cablu se poate folosi pentru prelungirea cablului USB 3.0 deja existent.",
    price: "25 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu adaptor USB-A 2.0 (tata) - Apple Lightning (tata), Gembird, 1.8 m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu-de-date-gembird-usb-2-0-lightning-1-8m-black-ccb-musb2b-amlm-6-0.jpg.pagespeed.ic.l3QBsYzqOg.webp",
    title:
      "Cablu adaptor USB-A 2.0 (tata) - Apple Lightning (tata), Gembird, 1.8 m - Black",
    description:
      "Cu ajutorul acestui cablu adaptor puteti conecta iPhone-ul sau iPad-ul la un PC sau laptop cu port USB 2.0",
    price: "25 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu retea Cablexpert PP12-20M, Cat. 5E - 20m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_retea_cat_5e_5.jpg.pagespeed.ic.4Fn8WffZV0.webp",
    title: "Cablu retea Cablexpert PP12-20M, Cat. 5E - 20m",
    description: "Cablu retea Cablexpert, cat 5E, 20m, gri.",
    price: "28 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu VGA - VGA T/T, Cablexpert CC-PPVGA-10-B, 3m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablexpert_cc-ppvga-6b_1.jpg.pagespeed.ic.MYOhYDboBd.webp",
    title: "Cablu VGA - VGA T/T, Cablexpert CC-PPVGA-10-B, 3m - Black",
    description:
      "Cablu de date VGA - VGA permite conectarea a doua dispozitive cu interfata VGA.",
    price: "29 Lei",
    category: "accessories"
  },
  {
    alt: "Hub USB Gembird UHB-CT02 - 4 porturi",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/u/xhub_usb_4_porturi_gembird_uhb-ct02_1.jpg.pagespeed.ic.lN2llQwDwn.webp",
    title: "Hub USB Gembird UHB-CT02 - 4 porturi",
    description:
      "Hub USB Gembird cu 4x porturi USB 2.0, lungime cablu: 0.4m, culoare negru.",
    price: "29 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu USB-A - Paralel (IEEE1284) T/M, LogiLink AU0003C, 1.5m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_convertor_usb_la_port_parallel_1.jpg.pagespeed.ic.e3OSwlhvoO.webp",
    title:
      "Cablu USB-A - Paralel (IEEE1284) T/M, LogiLink AU0003C, 1.5m - Black",
    description:
      "Acest cablu va permite sa conectati diferite dispozitive cu conector paralel (ex: imprimanta, scanner) la un port liber USB-A din PC/ notebook.",
    price: "35 Lei",
    category: "accessories"
  },
  {
    alt: "Adaptor Mini Displayport tata - HDMI mama Gembird",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/d/xadaptor_mini_displayport_tata_-_hdmi_mama_gembird_1.jpg.pagespeed.ic._K_SJ7-CZA.webp",
    title: "Adaptor Mini Displayport tata - HDMI mama Gembird",
    description:
      "Adaptorul Mini Displayport la HDMI permite conectarea unui laptop sau calculator la un ecran sau proiector cu port HDMI.",
    price: "35 Lei",
    category: "accessories"
  },
  {
    alt:
      "CANYON Universal 2xUSB car adapter, Input 12V-24V, Output 5V-2.4A, with Smart IC, white glossy with rose-gold electroplated ring, 59.5*28.7*28.7mm, 0.019kg",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CNE_CCA04W_181017140007823516.jpg.pagespeed.ic.t0L0r4G5Lo.webp",
    title:
      "CANYON Universal 2xUSB car adapter, Input 12V-24V, Output 5V-2.4A, with Smart IC, white glossy with rose-gold electroplated ring, 59.5*28.7*28.7mm, 0.019kg",
    description:
      "CANYON Universal 2xUSB car adapter, Input 12V-24V, Output 5V-2.4A, with Smart IC, white glossy with rose-gold electroplated ring, 59.5*28.7*28.7mm, 0.019kg",
    price: "37 Lei",
    category: "accessories"
  },
  {
    alt:
      "Canyon Lightning USB Cable for Apple, braided, metallic shell, cable length 1m, Black, 14.9*6.8*1000mm, 0.02kg",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CNE_CFI3B_190917160008312569.jpg.pagespeed.ic.zRrSyOVJp2.webp",
    title:
      "Canyon Lightning USB Cable for Apple, braided, metallic shell, cable length 1m, Black, 14.9*6.8*1000mm, 0.02kg",
    description:
      "Canyon Lightning USB Cable for Apple, braided, metallic shell, cable length 1m, Black, 14.9*6.8*1000mm, 0.02kg",
    price: "39 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu retea Logilink CP1122U, Cat. 5E - 30m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_retea_cat_5e_6_1.jpg.pagespeed.ic.4Fn8WffZV0.webp",
    title: "Cablu retea Logilink CP1122U, Cat. 5E - 30m",
    description: "Cablu retea Logilink CP1122U, cat 5E, 30m, gri.",
    price: "39 Lei",
    category: "accessories"
  },
  {
    alt: "Prelungitor 6 prize Schuko Gembird SPG6-B-10C, 3 m - Grey",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/g/e/xgembird_spg6-b-10c.jpg.pagespeed.ic.fSJfvwiQlr.webp",
    title: "Prelungitor 6 prize Schuko Gembird SPG6-B-10C, 3 m - Grey",
    description:
      "Prelungitor cu 6x prize Schuko, switch On/Off, 3m, culoare gri.",
    price: "40 Lei",
    category: "accessories"
  },
  {
    alt:
      "CANYON Type C USB 2.0 standard cable, Power output 5V/9V 2A, OD 3.8mm, metal shell, cable length 1.2m, Rainbow, 14*6*1000mm, 0.04kg",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CNS_USBC7RW_190910160010596210.jpg.pagespeed.ic.YoJ1AzGn7y.webp",
    title:
      "CANYON Type C USB 2.0 standard cable, Power output 5V/9V 2A, OD 3.8mm, metal shell, cable length 1.2m, Rainbow, 14*6*1000mm, 0.04kg",
    description:
      "CANYON Type C USB 2.0 standard cable, Power output 5V/9V 2A, OD 3.8mm, metal shell, cable length 1.2m, Rainbow, 14*6*1000mm, 0.04kg",
    price: "40 Lei",
    category: "accessories"
  },
  {
    alt:
      "CANYON Type C USB3.1 standard cable, PD3.0 100W, with full feature(video, audio, data transmission and PD charging), OD 4.8mm, cable length 1m, Black, 13*9*1000mm, 0.043kg",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_CNS_USBC9_200115150016111668.jpg.pagespeed.ic.IWi4-CsjU8.webp",
    title:
      "CANYON Type C USB3.1 standard cable, PD3.0 100W, with full feature(video, audio, data transmission and PD charging), OD 4.8mm, cable length 1m, Black, 13*9*1000mm, 0.043kg",
    description:
      "CANYON Type C USB3.1 standard cable, PD3.0 100W, with full feature(video, audio, data transmission and PD charging), OD 4.8mm, cable length 1m, Black, 13*9*1000mm, 0.043kg",
    price: "47 Lei",
    category: "accessories"
  },
  {
    alt: "Bulk AC cord - 0.6m / 2ft, C5 connector, EU plug, single pack",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_AC06C05EU_181119150009046653.jpg.pagespeed.ic.0mrzF_VgNV.webp",
    title: "Bulk AC cord - 0.6m / 2ft, C5 connector, EU plug, single pack",
    description:
      "Bulk AC cord - 0.6m / 2ft, C5 connector, EU plug, single pack",
    price: "48 Lei",
    category: "accessories"
  },
  {
    alt: "Prelungitor 5 prize Schuko Gembird SPG3-B-15C, 4.5 m - Grey ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/g/e/xgembird_spg3-b-15c_2.jpg.pagespeed.ic.KxT_oMLwF8.webp",
    title: "Prelungitor 5 prize Schuko Gembird SPG3-B-15C, 4.5 m - Grey",
    description:
      "Prelungitor cu 5x prize Schuko, switch On/Off, 4.5m, culoare gri.",
    price: "49 Lei",
    category: "accessories"
  },
  {
    alt:
      "Cablu date monitor DisplayPort - DisplayPort T/T, Roline, 11.04.5602 E - 2m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/xcablu_date_monitor_displayport_displayport_1.jpg.pagespeed.ic.sT1XqT8nQs.webp",
    title:
      "Cablu date monitor DisplayPort - DisplayPort T/T Roline 11.04.5602 E - 2m",
    description:
      "Cablu date monitor DisplayPort tata - DisplayPort tata de la furnizorul Roline, 11.04.5602 E, permite conectarea unui PC/ laptop la un monitor/ proiector cu intrare DisplayPort, suporta transfer de semnale audio si video. Cablul are o lungime de 2m, vine in culoare negru.",
    price: "49 Lei",
    category: "accessories"
  },
  {
    alt: "Adaptor USB-A 2.0 - LAN 100 Mbps, TP-Link UE200 - White/Blue",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/d/xadaptor_usb_2.0_ethernet_100mbps_tp-link_ue200_1.jpg.pagespeed.ic.tRAqXFGqx_.webp",
    title: "Adaptor USB-A 2.0 - LAN 100 Mbps, TP-Link UE200 - White/Blue",
    description:
      "Adaptorul este dotat cu un port USB 2.0 prin care asigura conectivitate Ethernet (10/100 Mbps) in retea pentru calculator/ notebook. ",
    price: "50 Lei",
    category: "accessories"
  },
  {
    alt:
      "CANYON Rotating magnetic lightning charging cable (no data transfer), USB2.0, Power output 5V/2A, OD 3.2mm, with Short-circuit protection, cable length 1m, Black, 16*6*1000mm, 0.024kg",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_CNS_CFI8B_191024160013384759.jpg",
    title:
      "CANYON Rotating magnetic lightning charging cable (no data transfer), USB2.0, Power output 5V/2A, OD 3.2mm, with Short-circuit protection, cable length 1m, Black, 16*6*1000mm, 0.024kg",
    description:
      "CANYON Rotating magnetic lightning charging cable (no data transfer), USB2.0, Power output 5V/2A, OD 3.2mm, with Short-circuit protection, cable length 1m, Black, 16*6*1000mm, 0.024kg",
    price: "52 Lei",
    category: "accessories"
  },
  {
    alt:
      "CANYON Universal 4xUSB AC charger (in wall) with over-voltage protection, Input 100V-240V, Output 5V-5A, with Smart IC, black glossy color+orange plastic part of USB, 96.8*52.48*28.5mm, 0.09kg",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_CNE_CHA06B_190228150009276527.jpg",
    title:
      "CANYON Universal 4xUSB AC charger (in wall) with over-voltage protection, Input 100V-240V, Output 5V-5A, with Smart IC, black glossy color+orange plastic part of USB, 96.8*52.48*28.5mm, 0.09kg",
    description:
      "CANYON Universal 4xUSB AC charger (in wall) with over-voltage protection, Input 100V-240V, Output 5V-5A, with Smart IC, black glossy color+orange plastic part of USB, 96.8*52.48*28.5mm, 0.09kg",
    price: "54 Lei",
    category: "accessories"
  },
  {
    alt:
      "CANYON Rotating magnetic Type C charging cable (no data transfer), USB2.0, Power output 5V/2A, OD 3.2mm, with Short-circuit protection, cable length 1m, Black, 16*6*1000mm, 0.024kg",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_CNS_USBC8B_191024112445981218.jpg",
    title:
      "CANYON Rotating magnetic Type C charging cable (no data transfer), USB2.0, Power output 5V/2A, OD 3.2mm, with Short-circuit protection, cable length 1m, Black, 16*6*1000mm, 0.024kg",
    description:
      "USB Type-C Charging Cable With Magnetic Rotating System\n\nAre you tired of looking for your discharged smartphone by touch – at night or in your car? Just put the connector into the USB Type-C slot, and the round magnetic contact of the wire will “find” it on your desktop, under a car seat, on a couch or in a chair. Besides, this charging method is protective and dirt-proof. You can charge two smartphones at the same time by connecting one wire to two different magnetic connectors, regardless of their standard. An ideal solution for those who value speed, convenience, and functionality!\n\nFeatures:\n• USB Type-C connector with magnetic connection\n• Dual charging\n• USB Type-C - USB A 2.0; 5V / 2A bandwidth\n• Short-circuit protection\n• 1m cable length\n• High quality braided cable\n• Light indicator\n• The magnet is so strong that the cable can “find” the connector by itself\n• The cable will help to quickly find a smartphone in a dark room or in a car\n• The connection is totally safe and protected against short circuits\n• Allows you to charge 2 devices at the same time\n• Sliding angle of the connector, the wire does not bend or break\n• Light indicator for convenient usage in the dark\n \n\n ",
    price: "55 Lei",
    category: "accessories"
  },
  {
    alt: "Hub USB LogiLink UA0085 - 4 porturi ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/h/u/hub_usb_4_porturi_logilink_ua0085_1.jpg",
    title: "Hub USB LogiLink UA0085 - 4 porturi ",
    description:
      "Hub USB LogiLink cu 4x porturi USB 2.0, viteza de transfer: pana la 480 Mbps, alimentare externa (5V/ 2A), culoare negru.",
    price: "59 Lei",
    category: "accessories"
  },
  {
    alt: 'Rack extern LogiLink UA0256 pentru HDD/ SSD 2.5", USB 3.0 - Black',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/l/o/logilink_ua0256.jpg",
    title: 'Rack extern LogiLink UA0256 pentru HDD/ SSD 2.5", USB 3.0 - Black',
    description:
      'Rack extern LogiLink UA0256 din plastic pentru SSD/HDD S-ATA de 2.5" (9.5mm) cu conectare pe USB 3.0.',
    price: "59 Lei",
    category: "accessories"
  },
  {
    alt: "Cablul date monitor VGA - VGA Cablexpert CC-PPVGA-10M-B - 10m ",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/c/cc-ppvga-10m-b.jpg",
    title: "Cablu date monitor VGA - VGA (T/T) Cablexpert CC-PPVGA-10M-B - 10m",
    description:
      "Cablul de date VGA - VGA permite conectarea a doua dispozitive cu interfata VGA.",
    price: "65 Lei",
    category: "accessories"
  },
  {
    alt: "Hub USB Akyga AK-AD-52 USB type C - 4x USB 3.0",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/4/9/491_2_.jpg",
    title: "Hub USB Akyga AK-AD-52 USB type C - 4x USB 3.0",
    description:
      "Hub USB Akyga cu 4 porturi USB 3.0 și cu conector USB type C, culoare negru, lungimea cablului este 20 cm.",
    price: "69 Lei",
    category: "accessories"
  },
  {
    alt: "Hama HDMI High speed Ethernet cable, 5m",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_HAMA00056509_200309150007727566.jpg",
    title: "Hama HDMI High speed Ethernet cable, 5m",
    description: "Hama HDMI High speed Ethernet cable, 5m",
    price: "71 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter - Mini DisplayPort to DisplayPort",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_13627_05_200504180014246923_1.jpg",
    title: "Dell Adapter - Mini DisplayPort to DisplayPort",
    description: "Dell Adapter - Mini DisplayPort to DisplayPort",
    price: "74 Lei",
    category: "accessories"
  },
  {
    alt:
      'Rack extern A-Data AED600-U31-CBK pentru HDD/ SSD 2.5", USB 3.1 - Black',
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/a/-/a-data_aed600-u31-cbk.jpg",
    title:
      'Rack extern A-Data AED600-U31-CBK pentru HDD/ SSD 2.5", USB 3.1 - Black',
    description:
      'Rack extern A-Data AED600-U31-CBK pentru HDD/ SSD de 2.5" (7mm/ 9.5mm), cu conectare pe USB 3.1.Rezistent la praf, apa si socuri.   ',
    price: "75 Lei",
    category: "accessories"
  },
  {
    alt: "LOGITECH USB Unifying Receiver - 2.4GHZ - EMEA - STANDALONE",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_910_005931_200519160017881878.jpg",
    title: "LOGITECH USB Unifying Receiver - 2.4GHZ - EMEA - STANDALONE",
    description: "LOGITECH USB Unifying Receiver - 2.4GHZ - EMEA - STANDALONE",
    price: "77 Lei",
    category: "accessories"
  },
  {
    alt: "Cablu HDMI - HDMI T/T, Cablexpert CC-HDMI4-10M, 10m - Black",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/c/a/cablexpert_cc-hdmi4-10m.jpg",
    title: "Cablu HDMI - HDMI T/T, Cablexpert CC-HDMI4-10M, 10m - Black",
    description:
      "Acest cablu permite conectarea a doua dispozitive cu interfata HDMI.",
    price: "90 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter USB-C to USB-A 3.0",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_ABNE_05_200429160020724943_1.jpg",
    title: "Dell Adapter USB-C to USB-A 3.0",
    description: "Dell Adapter USB-C to USB-A 3.0",
    price: "93 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter - DisplayPort to VGA",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_ABEL_05_170628160009320878_1.jpg",
    title: "Dell Adapter - DisplayPort to VGA",
    description: "Dell Adapter - DisplayPort to VGA",
    price: "108 Lei",
    category: "accessories"
  },
  {
    alt: "HDD Dock Extern i-tec U3HDDOCK",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/i/-/i-tec-u3hddock-main.jpg",
    title: "HDD Dock Extern i-tec U3HDDOCK",
    description:
      'HDD Dock Extern i-tec U3HDDOCK cu interfata USB 3.0 pentru dispozitivele de stocare SATA cu dimensiunile 2.5" sau 3.5". Suporta doar un singur dispozitiv SATA concomitent.',
    price: "115 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter - DisplayPort to HDMI 2.0 (4K),Kit",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_492_BBXU_05_200422160013374107_1.jpg",
    title: "Dell Adapter - DisplayPort to HDMI 2.0 (4K),Kit",
    description: "Dell Adapter - DisplayPort to HDMI 2.0 (4K),Kit",
    price: "134 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter - HDMI to VGA",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_ABZX_05_170116150613790198_1.jpg",
    title: "Dell Adapter - HDMI to VGA",
    description: "Dell Adapter - HDMI to VGA",
    price: "143 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter - USB-C to HDMI",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_ABMZ_05_200213080249501849_1.jpg",
    title: "Dell Adapter - USB-C to HDMI",
    description: "Dell Adapter - USB-C to HDMI",
    price: "165 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter - USB 3.0 to Ethernet",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_ABBT_05_141022160014757978_1.jpg",
    title: "Dell Adapter - USB 3.0 to Ethernet",
    description: "Dell Adapter - USB 3.0 to Ethernet",
    price: "168 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter- USB-C to DisplayPort",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_ACFC_05_200429160018270093_1.jpg",
    title: "Dell Adapter- USB-C to DisplayPort",
    description: "Dell Adapter- USB-C to DisplayPort",
    price: "173 Lei",
    category: "accessories"
  },
  {
    alt: "LOGITECH Bluetooth Audio Adapter Bluebox II 933",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_980_000912_150623080030061585_2.jpg",
    title: "LOGITECH Bluetooth Audio Adapter Bluebox II 933",
    description: "LOGITECH Bluetooth Audio Adapter Bluebox II 933",
    price: "197 Lei",
    category: "accessories"
  },
  {
    alt: "Kit - E5 90W Type-C AC Adapter (EUR)",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_450_AGOQ_05_181221150010706288.jpg",
    title: "Kit - E5 90W Type-C AC Adapter (EUR)",
    description: "Kit - E5 90W Type-C AC Adapter (EUR)",
    price: "234 Lei",
    category: "accessories"
  },
  {
    alt: "Dell Adapter - USB-C to Dual USB-A with Power Delivery",
    src:
      "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/ASB_470_AEGX_05_200512071344184953_1.jpg",
    title: "Dell Adapter - USB-C to Dual USB-A with Power Delivery",
    description: "Dell Adapter - USB-C to Dual USB-A with Power Delivery",
    price: "256 Lei",
    category: "accessories"
  }
];

for (var i = 0; i < products.length; i++) {
  products[i].id = chance.guid();
  let priceString = products[i].price.split(" ");
  products[i].cartPrice = parseInt(priceString[0], 10);
  products[i].cartQuantity = 1;
  products[i].specification = chance.paragraph({sentences: 25});
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
// console.log(products);

productsRouter.get("/", function (request, response) {
  response.send(products);
});

// route parameter
productsRouter.get("/:productId", function (request, response) {
  const productId = request.params.productId;

  const product = products.find(function (p) {
    return p.id === productId;
  });

  if (product) {
    return response.send(product);
  }

  return response.send("Not found.");
});

productsRouter.post("/", function (request, response) {
  const body = request.body;

  const newProduct = {
    id: chance.guid(), // global unique id
    name: body.name,
    author: body.author,
    quantity: body.quantity || 0,
  };

  products.push(newProduct);

  response.send(newProduct);
});

productsRouter.delete("/:productId", function (request, response) {
  const productId = request.params.productId;

  // immutable - NU iti modifica array-ul initial
  products = products.filter(p => p.id !== productId);

  response.send(productId);
});

productsRouter.patch("/:productId", (req, res) => {
  const productId = req.params.productId;
  const body = req.body;

  let product = products.find(p => p.id === productId);

  if (!product) {
    return res.send("Not found.");
  }

  Object.assign(product, body);

  res.send(product);
});

module.exports = productsRouter;
