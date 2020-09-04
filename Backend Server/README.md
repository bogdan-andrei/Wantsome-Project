## A simple server used for a TodoApp assignment.

## Instalation

`npm install`
or
`yarn install`

## Running the server

`npm run start`
or
`yarn start`

## Authentication

### **POST @ /api/login** -> token: string

```js
body {
  email: String
  password String
}
```

---

## Todo CRUD

### **GET @ /api/todos** or GET @ /api/cartRounter** or GET @ /api/customProducts** 

```js
response: [
  {
    id: String
    description: String
    done: Boolean
  }
]
```

### **GET @ /api/todos/:todoId** 

```js
response: {
  id: String
  description: String
  done: Boolean
}
```

### **POST @ /api/todos** or POST @ /api/cart** -> creates a new todo or creates item into cart

```js
body: {
  id: String
  description: String
  done: Boolean
}

// the newly added todo
response: {
  id: String
  description: String
  done: Boolean
}
```

### **PATCH @ /api/todos/:todoId** -> updates a todo

```js
body: {
  description: String
  done: Boolean
}

// the updated todo
response: {
  id: String
  description: String
  done: Boolean
}
```

### **DELETE @ /api/todos/:todoId** or **DELETE @ /api/cart/:Id -> deletes the specified todo item or item from cart

```js
response: {
  todoId: String
}
```

## Custom Items 

### **GET @ /api/customProducts** -> list of custom pc products

```js
response: {
  alt: "Intel CPU Desktop Core i7-9700K (3.6GHz, 12MB, LGA1151) box"
  cartPrice: 1
  cartQuantity: 1
  category: "cpu"
  description: "Intel CPU Desktop Core i7-9700K (3.6GHz, 12MB, LGA1151) box"
  id: "805f6e12-9e4b-5755-90d7-4c97259d16e5"
  price: "1.951 Lei"
  specification: "Kofuj sudmawja ofowano kabikawud ikadevjim jizkizi raz avivezfi mabkeric nekotuh gotgov wacono kihuh cube. Fo ze rotoz bidkeuci dana kuczofma maz sicezi esahup temocho ojufu butzol ehi dejo zuepa cairise. Sa jifnim hasuwfec hikge jodaku kugmud zibaphob tucpot secazko darsozo ba uvasonvi moj tod tavol joj. Irjo jumpeb ben nilwuwkuw atbif at kigci nacsehuz nezik aladi wer ze. Tishagte di pobe se ka tezlaz cefzet catdek osi owjaga goife jipujmak reluwawoz. Turcowehe ipibazon asi juf iwfuk inunep em vez zip huget botsited ta jezozub. Ig bowihul rug gu nase hes ni unnikif ni bemhunapo tev cibo caraupu arjetgos. Ij vihcek ve bewgi maw ragtazhek apu nu na rajto tem gin fi. Zefvaw korrobdat kuhupi hejneoko hirfi tisatez ubemaji zu ri cabjo lak fozfug egawa ko ne ahovi mutviw aja. Cap bohocapil nug sig sasvubo divuv kaotowi erlokir vohtoik lawubvej vezep mohov maica cej diwtued sit lapi. Kophew zad pafwus ov kigbahi kin zicokha beducal ew illokfik argodwi gi bibetbi za owifoswe. Ifepe utubi mepegodig   gadji zojuugu buildo vuhavuj momo laje zom oduotaeg fopozok nosoli gob. Jakfo resafjul aseubgo ligu junujuf kudhik ge boke pevekwu tob niavve dopdawese vihalna wozgiupe vuruf ro. Woevo piwuko fitudas omah suwzid afo ov okvigwej mibnuwov nahaog aza digivdun fe osusihe tekuhho. Ugobu genzipjar zakupa dovzo ci utmu deaselo tepa kesigdut wer ku vibtuc. Efacubo jovu mi bi sos gaojigos ojo buc dekiva kezub nik tovluvota dadsuk esmis. Se ehwowni hiz eme varo hasboj octub ocnicmo lu adaho imipuugu bog rodewegid nun ego locevdi to poitbom. Nubo iceuwu vevpijin jumoggob da jesopama adroha vibabisem mo baf jurbuta ecni jaz ube cap. Gunuva rol emivumi sijoj zedoet witme rasetido miz bojmer kimiw vuh uzu vunwob oho irje su ri. Gorezuj ibelaptu odunid tob buzco bis jo puzkafe to vev miwe tahku huhu se. De mebuza bodo zawi cofvun kajwofug edarap iwkearu di jimteb rucfu cara rot vinulwu jose bawhav. Rulibej ug aghingad bu usatefo now colo ed loglo zimupali aszam iwizokig toak lopobbem sukodcam. Afromic ro gorbatmem bagugub   zajiw sunumi taztul nujwam da evjoaj zecizhu dujdi buava biizgej lehitase zewlodu. Urwe hivaaso wuzu haj wih usmin wi pa jinu os wineujo cewmiaw mekputew enu voh. Kunodka ubka jelega timute eppore hobtu zefeke anuj uwi ledlogsa tomumgug owafokil bofe lintuk dos."
  src: "https://www.pchouse.ro/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/A/S/xASB_BX80684I79700KSRG15_190604160013374018_1.jpg.pagespeed.ic.EE0AM-gLFZ.webp"
  title: "Intel CPU Desktop Core i7-9700K (3.6GHz, 12MB, LGA1151) box"
}

```

## Watches

### **GET @ /api/watches** -> list of watches

```js
response: [
  {
    id: "dd6e46ad-4254-5242-abf0-29b9496d445b",
    price: "$202.59",
    name: "Vacheron Constantin",
    description:
      "Si pes guguro zebitu ebiza pebdojaj decgewur ol pud mo wadnum li vetwupav etip. Alolihhon arusuz li lapku pupop tanaka giuf adowi vejsam ve kek su gek. Ovhi uzogapi nilwukjoz tis nunwaoki pofisoku jevwohti arnefjom gana govwe mopcug gowvimze bejubot ih demog.",
    image:
      "https://placeholder.pics/svg/300/289E5D-3648FE/000/Vacheron%20Constantin",
    info: {
      listingNumber: "163e90b4",
      referenceNumber: "73e38084",
      model: "Kufpaig",
      brand: "Vacheron Constantin",
      year: "1608",
      gender: "Male"
    },
    calibre: {
      powerReserve: 19,
      movement: "Automatic",
      movementPerCalibre: 1824
    },
    case: {
      material: "steel",
      diameter: 33,
      glass: "salmon"
    },
    strap: {
      material: "leather",
      braceletColor: "black"
    }
  },
  ...otherWatches
]
```

### **GET @ /api/watches/:watchId** -> details of a single watch

```js
response: {
    "id": "dd6e46ad-4254-5242-abf0-29b9496d445b",
    "price": "$202.59",
    "name": "Vacheron Constantin",
    "description": "Si pes guguro zebitu ebiza pebdojaj decgewur ol pud mo wadnum li vetwupav etip. Alolihhon arusuz li lapku pupop tanaka giuf adowi vejsam ve kek su gek. Ovhi uzogapi nilwukjoz tis nunwaoki pofisoku jevwohti arnefjom gana govwe mopcug gowvimze bejubot ih demog.",
    "image": "https://placeholder.pics/svg/300/289E5D-3648FE/000/Vacheron%20Constantin",
    "info": {
      "listingNumber": "163e90b4",
      "referenceNumber": "73e38084",
      "model": "Kufpaig",
      "brand": "Vacheron Constantin",
      "year": "1608",
      "gender": "Male"
    },
    "calibre": {
      "powerReserve": 19,
      "movement": "Automatic",
      "movementPerCalibre": 1824
    },
    "case": {
      "material": "steel",
      "diameter": 33,
      "glass": "salmon"
    },
    "strap": {
      "material": "leather",
      "braceletColor": "black"
    }
  }
```
