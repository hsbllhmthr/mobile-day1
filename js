// URL API 1
https://indonesia-public-static-api.vercel.app/api/heroes


//TRY URL REST API
const url = 
'https://jsonplaceholder.typicode.com/posts/1'; fetch(url)
.then(res => res.json()) .then(data => { console.log('✅ Judul:', data.title); console.log('📝 Isi:', data.body); })
.catch(err => console.error('❌ Error:', err));

//GET

fetch('https://indonesia-public-static-api.vercel.app/api/heroes')
  .then(res => res.json())
  .then(data => console.log("Data diterima:", data));

//POST

fetch('https://indonesia-public-static-api.vercel.app/api/heroes', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Pahlawan Baru",
    birth_year: 1900,
    description: "Deskripsi pahlawan"
  })
})
.then(res => res.json())
.then(data => console.log("Berhasil ditambah:", data));

//PUT

  fetch('https://indonesia-public-static-api.vercel.app/api/heroes/1', { // Harus ada ID-nya
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Nama Terupdate",
    birth_year: 1901,
    description: "Deskripsi baru yang menggantikan deskripsi lama secara utuh"
  })
});

//PATCH

fetch('https://indonesia-public-static-api.vercel.net/api/heroes/1', {
  method: 'PATCH',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    description: "Hanya mengubah deskripsi ini saja" 
  })
});

//DELETE

fetch('https://indonesia-public-static-api.vercel.app/api/heroes/1', {
  method: 'DELETE'
})
.then(res => console.log("Data berhasil dihapus"));
