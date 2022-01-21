'use strict';

//document.QuerySelector method adalah method yang mengembalikan elemen yang ada di dokumen yang cocok dengan selector yang terspesifikasi (class ) atau sekumpulan selector , jika tidak ada maka return null

// //mengecek kondisi konten text
// console.log(document.querySelector('.message').textContent) //Start Guessing (Sebelum Manipulasi)

// //melakukan manipulasi DOM pada konten dan id nya
//document.querySelector('.message').textContent = "Correct Number" 

// // Kalau misalkan mengganti tampilan UI biasanya bisa pake textContent , bukan pakai value (NOTES)

// console.log(document.querySelector('.message').textContent) //Start Guessing (Setelah Manipulasi)

// document.querySelector('.number').textContent = 13
// document.querySelector('.score').textContent = 10

// //textContent merupakan property yang mengembalikan nilai konten text dari node yg diigninkan pada interface


// document.querySelector('.guess').value = 14
// console.log(document.querySelector('.guess').value) // mengecek nilai nya sudah ada di console log
// //value merupakan sebuah property yang digunakan untuk mendapatkan nilai dari atribut

//EventListener

//Event Something that happen on page , mouse click key press mouse moving
//event listener , wait for certain event happen and then react to it

//membuat kombinasi angka (kombinasi 1 sampai 10)
const secretNumber = Math.trunc(Math.random() *10) +1;

//bikin score
let score = 20;
let highscore = 0

//fungsi untuk click
document.querySelector('.check').addEventListener('click' ,function(){

    //fungsi hanya jalan disini aja , hal yg terjadi ketika diclick
   const guess = Number(document.querySelector('.guess').value) //convert ke Number

    //menyimpan nya dalam log
    console.log(guess ,typeof guess)

    //jika isi kosong
    if (!guess){
        document.querySelector('.message').textContent = "No Number";
    }

    //jika sesuai angka
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number";
        //DOM untuk mengganti warna css
        document.querySelector('body').style.backgroundColor = `#60b347`;
        document.querySelector('.number').style.width = `30rem`;

        //menampilkan angka di kotak
        document.querySelector('.number').textContent = secretNumber;

        //jika skor yang dicapai lebih tinggi dari score yang ada 
        if (score > highscore){
            highscore = score 
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    //jika lebih dari angka yang ditentukan
    else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "Too High";

        if (score > 1 ){
        //skor berkurang
        score--
        //menampilkan score ke layar
        document.querySelector('.score').textContent = score;
        } else { //apabila skor dibawah 1 
            document.querySelector('.message').textContent = "You lost the game"
            document.querySelector('.score').textContent = 0;
            
        }
    }

    else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "Too Low";

        if (score > 1 ){ 
            //skor berkurang
            score--
            //menampilkan score ke layar
            document.querySelector('.score').textContent = score;
            } else { //apabila skor dibawah 1 
                document.querySelector('.message').textContent = "You lost the game"
                document.querySelector('body').style.backgroundColor = `#FF0000`;
                document.querySelector('.score').textContent = 0;
            }
    }
})

//Fungsi untuk reset again semuanya
document.querySelector('.again').addEventListener('click' ,function(){

    score = 20;
    const secretNumber = Math.trunc(Math.random() *20) +1;

    document.querySelector('.message').textContent = "Start guessing...";

    document.querySelector('.score').textContent = score;

    document.querySelector('.number').textContent = `?`;

    document.querySelector('.guess').value = ``;

    document.querySelector('body').style.backgroundColor = `#222`;

    document.querySelector('.number').style.width = `15rem`;

})