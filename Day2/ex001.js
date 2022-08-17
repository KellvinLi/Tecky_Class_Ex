const data = [
    {
        "name": "Hong Kong",
        "topLevelDomain": [
            ".hk"
        ],
        "alpha2Code": "HK",
        "alpha3Code": "HKG",
        "callingCodes": [
            "852"
        ],
        "capital": "City of Victoria",
        "altSpellings": [
            "HK",
            "香港"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "population": 7324300,
        "latlng": [
            22.25,
            114.16666666
        ],
        "demonym": "Chinese",
        "area": 1104.0,
        "gini": 53.3,
        "timezones": [
            "UTC+08:00"
        ],
        "borders": [
            "CHN"
        ],
        "nativeName": "香港",
        "numericCode": "344",
        "currencies": [
            {
                "code": "HKD",
                "name": "Hong Kong dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "translations": {
            "de": "Hong Kong",
            "es": "Hong Kong",
            "fr": "Hong Kong",
            "ja": "香港",
            "it": "Hong Kong",
            "br": "Hong Kong",
            "pt": "Hong Kong",
            "nl": "Hongkong",
            "hr": "Hong Kong",
            "fa": "هنگ‌کنگ"
        },
        "flag": "https://restcountries.eu/data/hkg.svg",
        "regionalBlocs": [],
        "cioc": "HKG"
    }
]

const hk = data[0];

// for (let key in hk) {
//     let upperKey = key[0].toUpperCase()+key.slice(1)
//     // console.log(hk[key])
//     if (key == "currencies") {
//         for (let i of hk[key]){
//             for (let newitem in i){
//                 console.log(upperKey+"_"+newitem+": "+ i[newitem])
//     }}
// }
//     else if(key == "languages") {
//         for (let i of hk[key]){
//             for (let newitem in i){
//                 console.log(upperKey+"_"+newitem+": "+ i[newitem])
//             }       
// } }else if(key == "translations") {
    
//         for (let newitem in hk[key]){
//             console.log(upperKey+"_"+newitem+": "+ hk[key][newitem])
//         }  
     
//     } else {
//         console.log(upperKey + ": " + hk[key]);
//     }
// }

for (let key in hk) {
    let capitalizedPrefix = key.substring(0, 1).toUpperCase() + key.substring(1)

    if (Array.isArray(hk[key])) {
        // 全部都係array
        if (hk[key][0] instanceof Object) {
            for (let item of hk[key]) {
                for (let subKey in item) {
                    console.log(capitalizedPrefix + "_" + subKey + ": " + item[subKey]);
                }
            }
        } else {
            console.log(capitalizedPrefix + ": " + hk[key]);
        }
    } else if (hk[key] instanceof Object) {
        // 全部都係 object
        for (let subKey in hk[key]) {
            console.log(capitalizedPrefix + "_" + subKey + ": " + hk[key][subKey]);
        }
    } else {
        // boolean number string
        console.log(capitalizedPrefix + ": " + hk[key]);
    }
}


let output = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

output=output.filter(function(x){
   if(x %2  == 0){
    return output 

   }


}).map(function(x){
   return x * 3
})

// output = output.filter(x => x % 2 == 0).map(x => x * 3)
console.log(output[4])