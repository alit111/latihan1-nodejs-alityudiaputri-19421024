function hitungNilai (nilai1, nilai2) {
    return nilai1 + nilai2
    
}
const hasil = hitungNilai(14, 100000)
// console.log(hasil)

const buatNasi = (beras, air) => {
 if (beras) {
     console.log('beras ok')
 } else {
     console.log('Mohon Masukan Beras')
 }
 if (air) {
     console.log ('air ok')
 } else {
     console.log('Mohon Masukan Air')
 }
}

buatNasi('Beras', 'air')