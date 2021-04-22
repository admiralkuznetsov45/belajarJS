/*
//Values and Variables
let js = "amazing";
if (js === "amazing") alert("Javascript is Fun") //alert pop up

console.log("Hello World")
console.log(40+39-33)

//Konvensi Penamaan yang benar dan diperbolehkan
let userName = "John";
let PI = 3.1415 ; 
let nama_Bapak = "Joko";


//Tipe Data
//Cek tipe data boolean
let jsituSeru = true;
console.log(typeof jsituSeru); //boolean
console.log(typeof 5); //Number
console.log(typeof 's') //String
let ayam;
console.log(typeof ayam) //undefinied
console.log(typeof null) //object


//Let Const and Var
//let untuk berubah2
let sate = 5;
sate = 15;
console.log(sate)

//const untuk yang tidak berubah-ubah
const lahir = 1992;

//var , Jangan Pernah digunakan
var sate = 22;


//pengurangan , pertambahan
const sekarang = 2040;
const usiaDawe = sekarang - 2019;
const usiaRani = sekarang - 2018;

console.log(usiaDawe,usiaRani);

//perkalian dan perpangkatan
console.log(usiaDawe * 4 , usiaDawe / 10 , 2**2)

//concenate alias penggabungan
const dawe = 'Ayam';
const dawe1 = 'Bakar';
console.log(dawe + '' +dawe1)

//Assignment Operator
let x =  10 + 5;
x += 10;
x *= 5;
x++;
x--;
x--;
console.log(x);

//Comparison Operator
console.log(usiaDawe > usiaRani); // > , < , >=  , <=
console.log(usiaRani >= 18);

const isFullAge = usiaRani >= 18;

console.log(sekarang - 1991 > sekarang - 2018);


//Operator Precedence
//Merupakan Sebuah Operator yang digunakan untuk menghitung berdasarkan urutan , spt dalam matematika
const sekarang = 2050;
const usiaDawe = sekarang - 1991; 
const usiaRani = sekarang - 2019 ; 

console.log(sekarang - 1991 . sekarang - 2019);

let x,y;
x = y = 25 - 10 - 5 ; //dari kiri ke kanan untuk pengurangan x = y = 10
console.log(x,y);

const rataRataUsia = (usiaRani + usiaDawe) / 2 ; //yang dikurungin lalu dibagi
console.log(usiaDawe,usiaRani,rataRataUsia); 

//untuk urutan level perhitungannya ada di MDN


//Assignment Pertama Segmen 1 
//Values and Variables
//let country = 'Indonesia';
//let continent = 'Asia';
let population = 250000000; 

//console.log(country , continent , population);

//Data Types 
//let isIsland = true ;
let language ;
//console.log(typeof isIsland ,typeof population ,typeof country ,typeof language );

//Let , Const and Var
language ='Bahasa Indonesia';
const continent = 'Asia';
const country = 'Indonesia';
const isIsland = true ;
//isIsland = false ; //tidak bisa karena sudah diset sebagai const 
console.log(isIsland) 

//Basic Operators
console.log(population / 2);
population++;
console.log(population);
let finlandPop = 6000000;
console.log(population > finlandPop);
let average = 33000000 ; 
console.log(population <= average);
let description = country + " " + "memiliki"+ " " + population + " " 
+ "serta terletak di benua" + " " + continent  ; 
console.log(description);

//CODING CHALLENGE BMI
//Menghitung Perbandingan BMI John dan Mark
//Berat Badan dan Tinggi Badan Mark Pertama
let markHeight = 1.69;
let markWeight = 78;

////Berat Badan dan Tinggi Badan John Pertama
let johnHeight = 1.95;
let johnWeight = 92 ;

//Rumus Hitung BMI
let BMI1 = markWeight / markHeight **2;
let BMI2 = johnWeight / (johnHeight*johnHeight);
//Perbandingan BMI
const perbandingan = BMI1 > BMI2;
//Output
console.log(BMI1 , BMI2) 
console.log(perbandingan); //true


//String and Template Literals
//Template Literals merupakan sekelompok cara untuk penulisan string
const nama = 'Dawe';
const usia = 19;
const kerja = 'Software Developer';
const lahir = 2001 ; 
const sekarang = 2020 ; 

//Awalnya 
const dawe = "Nama Saya" + " " + nama + " " + "Usia Saya " + (sekarang-lahir)
+ " Dan pekerjaan saya adalah " + kerja ;
console.log(dawe)

//Template Literals String
const dawe1 = `Nama Saya ${nama} dan usia saya ${sekarang-lahir} Dan pekerjaan saya adalah ${kerja}`;
console.log(dawe1)

//Regular String
console.log('Halo ini adalah string standard')

//Multiline String
console.log('String ini \n\
memiliki multiple \n\
line');

//Challenge String dan Template Literals
let population = 250000000 ;
let country = 'Indonesia' ; 
let continent = 'Asia' ;
let description = `${country} terletak pada Benua ${continent} serta memiliki populasi sebesar ${population} penduduk`;
console.log(description);


//IF Else Statement
//Merupakan cara untuk mengecek kondisi 
//If Statement
const usia = 19;
const batas = usia >=18;

//Fungsi IF
if (batas) {
    console.log("Memenuhi Syarat");
}

//Fungsi IF ELSE
const umur = 12;
if(umur >= 15){
    console.log("Bisa memenuhi syarat");
} else {
    const sisa = 18 - umur ; 
    console.log(`Maka Tunggu ${sisa} Tahun lagi untuk bisa mengemudi`);
}

//Challenge If Else
let population = 250000000;
const rataRata = population >= 33000000;
if(rataRata ){
    console.log("Penduduk Indonesia diatas rata-rata ");
} else {
    console.log("Penduduk Indonesia dibawah rata-rata");
}


//Challenge Coding #2
let markHeight = 1.69;
let markWeight = 78;

////Berat Badan dan Tinggi Badan John Pertama
let johnHeight = 1.95;
let johnWeight = 92 ;

//Rumus Hitung BMI
let BMI1 = markWeight / markHeight **2;
let BMI2 = johnWeight / (johnHeight*johnHeight);
//Perbandingan BMI
const perbandingan = BMI1 > BMI2;
//Output
if (BMI1>BMI2){
    console.log(`Mark BMI (${BMI1})is higher than John(${BMI2})`)
}
else {
    console.log(`John BMI(${BMI2}) is higher than Mark(${BMI1})`)
}


//Type Coercion dan Type Conversion
//Type Conversion = Mengubah suatu tipe data ke tipe data yang lain
//Type Coercion = Mengubah tipe data ke tipe data yg lain secara otomatis dan menggabungkan

//Type Conversion
const isiTahun = '1991';
//Convert jadi Integer dan tidak jadi integer
console.log(Number(isiTahun),isiTahun);
console.log(Number(isiTahun) + 19); //ditambah

//Hasil NaN = Not of Number karena bukan Integer alias invalid 
console.log(Number(`Dawe`));
//Masih Number cuman Invalid aja
console.log(typeof NaN);

//Mengubah Integer menjadi String 
console.log(String(15),15)

//Type Coercion
//Apabila String dan Integer digabungkan maka semuanya akan menjadi String
console.log('Aku berusia ' + 15 + ' Tahun');
//Mirip Template Literals yg mengubah semua jadi String
//Apabila String ditambah maka Type Coercion akan berjalan
console.log('44'+'44');
//Apabila String dikurang maka Type Coercion akan tidak berjalan alias jadi Integer
console.log('44'-'33'-10);
//Perkalian dan Pembagian tidak bisa Type Coercion
console.log(4*2,4/2);
//Untuk Perbandingan juga dalam bentuk Integer

let n = '1' + 1 ; //11
n = n - 1 ; //10
console.log(n);

console.log(2+3+4+'5');
console.log('10'-'4'-1 +'3');

//Challenge Type Coercion
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

//Truthy and Falsy Values 
//Falsy Values merupakan bukan false tapi jadi false apabila berusaha diconvert dlm Boolean
// 5 Falsy Values ada  0.'',undefined,null,NaN
//Apabila angka string yg bukan kosong maka jadi true apabila diconvert dlm boolean

//Testing
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(Jonas));
console.log(Boolean({}));
console.log(Boolean(''));

//Type Coercion Boolean bekerja apabila dibandingkan ataupun dicheck dengan IF Else
const uang = 100;
if (money){
    console.log("Jangan Dihabiskan Uangnya");
} else {
    console.log("Cari Pekerjaan");
}

let height = 0;
if (height){
    console.log("Height nya Defined");
} else {
    console.log("Height nya Undefined");
}

//Equality Operators ==(Loose) vs === (Strict)
const usia = '19';
if (usia === 19) console.log("You Just Become Adult");
//Convert jadi String apabila Loose
if (usia == 19) console.log("You Just Become Adult");
//Type Coercion Dilakukan pada Loose Equaity Operator   
console.log('11'==11);

//General Role for Clean Code , Hindari penggunaan Loose Operator , Selalu gunakan Strict Operator , Untuk menghindari Bug
//Lebih baik convert manual ketimbang bergantung pada Type Coercion 

const favourite = prompt("Whats Your Favorite Number ?");
console.log(favourite);
console.log(typeof favourite); //String

//Strict Equality Operator
if (favourite === 23){
    console.log('Cool ! 23 is Amazing Number');
} else if (favourite === 7){
    console.log("7 is also cool number")
}
else if (favourite === 9){
    console.log("9 is also cool number")
} else {
    console.log("Bukan 23 7 9 ");
}

//Loose Equality Operator
if(favourite !== 23) console.log("Ok Bukan semua angka itu");

//Kalau Angka 23 dalam Number maka output nya "Cool ! 23 is Amazing Number" 
//Kalau Angka 23,9,7 dlm String maka output nya "Bukan 23 7 dan 9" serta " Ok Bukan semua angka itu"

//Challenge Equality Operators ==(Loose) vs === (Strict)
const numNeighbours = prompt("How many neighbour counties does your country have ?");
if (numNeighbours == 1){
    console.log('Only 1 Border');
} else if (numNeighbours > 1){
    console.log("Neighbour more than 1")
}
else {
    console.log("No Borders");
}


//Logical Operators
//Menggunakan AND OR dan NOT

const punyaSim = true ;
const penglihatanOke = true ;

console.log(punyaSim && penglihatanOke);
console.log(punyaSim || penglihatanOke);
console.log(!punyaSim);

const capek = false ; 
if (punyaSim && penglihatanOke && !capek){
    console.log("Bisa Menyetir");
} else {
    console.log("Nggak usah nyetir");
}


//Challenge Logical Operators
const language = "english" ; 
const population = 30 ; 
const isIsland = true;

if (language === 'english' && population < 50 && !isIsland){
    console.log("Maka Negara ini pas untuk anda tinggali");
} else {
    console.log("Pergi sana chuck");
}


//Coding Challenge #3
let dolphins = (96+108+89)/3
let koalas = (88+91+110)/3

if (dolphins > koalas && dolphins >= 100){
    console.log("Dolphins Winner");
} else if (koalas > koalas && dolphins >= 100){
    console.log("Koalas Wins");
} else if (koalas == dolphins){
    console.log("draw");
} else {
    console.log("Kalah semua");
}*/

//The Switch Statement
//Switch merupakan alternative dari if else , untuk membandingkan nilai

