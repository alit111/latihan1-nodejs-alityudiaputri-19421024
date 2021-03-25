// array

// const listNilai = ['A' , 'B', 'C']
// console.log(listNilai[2])

const DataMahasiswa = [
    {
        nama : 'Alit yudia putri',
        npm : '19421024',
        prodi : 'Informatika'
    },
    {
        nama : 'bram',
        npm : '4444444',
        prodi : 'informatika'
    
    }   
    
    
    ]
    
    // console.log(DataMahasiswa[0].npm)
    
    for (let i in DataMahasiswa) {
        console.log(DataMahasiswa[i].nama + ' - ' + DataMahasiswa[i].npm + ' - ' + DataMahasiswa[i].prodi )
    }