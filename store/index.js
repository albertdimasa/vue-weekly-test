/* eslint-disable eqeqeq */
export const state = () => ({
  data: {},
  list: [
    {
      title: 'Version Control and Branch Management (Git)',
      summary:
        'Operasi dasar untuk menggunakan Git yaitu git add, git commit, git fetch, n git push, git diff, dan git stash. Ada juga git log, git checkout, git reset untuk inspecting repository. Pembuatan branch untuk pemula/dasar dan bagaimana best practice-nya, serta mempelajari bagaimana konflik bisa terjadi dalam pembuatan branch. Menginstall Git pada perangkat masing - masing kemudian memahami alur kerja git lalu.',
      step: [
        'Membuat repository baru dengan nama latihan_git.',
        'Cloning repository tersebut ke perangkat sendiri.',
        'Membuat branch baru dengan nama develop.',
        'Kemudian membuat fitur baru dengan cara membuat branch terlebih dahulu yaitu starting_index.',
        'Melakukan merge branch develop dan starting_index.',
        'Menambahkan fitur baru lagi dengan cara membuat branch baru terlebih dahulu yaitu title_paragraph.',
        'Melakukan merge branch develop dan title_paragraph.',
      ],
      project_url: 'https://github.com/albertdimasa/latihan_git',
    },
    {
      title: 'Introduction UI/UX',
      summary:
        'UX adalah sesuatu yang bisa kita rasakan ketika memakai produk(website). Lean UX Design Thinking ada 5 Tahap yaitu Empathize, Define, Ideate, Prototype, dan Validate. Dimana proses Prototype dan Validate akan sering diulang. Pentingnya user persona untuk mengetahui apa tujuan kita mendesign dan untuk siapa kita mendesign. UI adalah visual yang digunakan user untuk berinteraksi dengan product. 4 Pilar dalam UI adalah Konsisten, Simpel, Typography yang bagus, dan Feedback yang jelas. Kemudian ada istilah prototype yang memiliki 3 pilar yaitu representasi, presisi, dan interaktif. Dimana prototype berguna untuk melihat bagaimana produk tersebut akan berjalan.',
      step: [
        'Sebelum mengerjakan praktikum saya mengulangi video dan materi yang ada agar bisa membedakan apa itu UI/UX. Kemudian mencari pada sumber - sumber lain yang ada di internet, baik itu artikel/video.',
      ],
      project_url: '',
    },
    {
      title: 'Figma',
      summary:
        'Cara design UI/UX menggunakan figma, mulai dari keuntungan dan kerugiaan menggunakan figma. Bagaimana untuk membuat dan mengatur frame baru, membuat simple grid, color style, meng-import foto, cara menggunakan auto layout, membuat component, scrolling element, fixed element, hover states, menambahkan overlay, dan prototype di figma. Trik menggunakan figma ketika pengerjaan task yang diberikan.',
      step: [
        'Hal pertama yang dilakukan adalah membedah secara cepat dari design yang ada, mulai dari header, section, dan footer.',
        'Kemudian membedah warna yang digunakan dan bagian yang lebih detail, seperti button.',
        'Membuat frame yang digunakan, disini saya menggunakan frame desktop dengan layout grlumn, opacity: 10%, margin:40, dan gutter:40 setelah itu menyalin halaman tersebut menjadi 3 yaitu halaman home, feed kelas, dan semua kelas.',
        'Membuat component dengan warna yang sesuai, mulai dari button dan element - element yang berulang dalam design yang didapatkan.',
        'Disini saya memperkirakan ukuran font, karena saya hanya dapat mengetahui jenis font tersebut. Dalam design ini saya menggunakan Nunito Sans dan Quicksand.',
        'Setelah membedah lebih detail, total component yang saya buat ada 5 yaitu header, footer, button primary, kelas card, dan testimoni user. Untuk component terpisah dalam page yang berbeda dengan nama page component.',
        'Pada page Primary berisi halaman yang akan tampil saat prototyping. Ada dropdown menu dan juga button hover.',
      ],
      project_url:
        'https://www.figma.com/file/QrlsV3ixNPZ4kshZTTVMfC/Section-4---Figma?node-id=0%3A1',
    },
    {
      title: 'HTML',
      summary:
        'Apa itu HTML yaitu sebuah standar yang digunakan untuk menampilkan halaman web. Memiliki kepanjangan Hypertext Markup Language. Kegunaannya antara lain: Membuat struktur halaman web, mengatur tampilan dan isi halaman web, dll. Mengetahui HTML Editor yaitu notepad, notepad++, visual studio code, atom, dan sublime text. Mempelajari tag html contohnya head, body, div dan juga mempelajari tag untuk styling, list, table, serta tag untuk membuat form.',
      step: [
        'Membuat template html dengan menggunakan snippets yang tersedia di VS Code yaitu html:5.',
        'Mengisi body dengan element h1, h2, paragraph, h3, unordered list, dan ordered list.',
        'Pada bagian tulisan Form Sign Up dibungkus dengan tag link dengan snippets a.',
        'Membuat template html dengan menggunakan snippets yang tersedia di VS Code yaitu html:5.',
        'Mengisi body dengan element h1, h2, lalu form. Pada tag form ada first name, last name, gender, n:ationality, language spoken, bio, dan tombol sign up. tiap elementnya saya bungkus dengan tag div agar ada j:arak dengan element berikutnya.',
        'Pada first name dan last name memiliki input type text, gender memiliki input type radio, nationality m:emiliki input type select agar dapat menjadi dropdown , language spoken memiliki input type checkbox, bio m:emiliki input type text dengan textarea cols 35 & rows 8, yang terakhir ada tombol sign up dengan input t:ype submit.',
        'Tiap div memiliki tag label dan input.',
        'Form input diarahkan ke welcome.html.',
        'Membuat template html dengan menggunakan snippets yang tersedia di VS Code yaitu html:5.',
        'Mengisi body dengan element h1 & h3.',
      ],
      project_url: '',
    },
    {
      title: 'CSS',
      summary:
        'CSS (Cascading Style Sheets) adalah bahasa styling dimana fungsinya untuk menghias halaman website seperti memberi warna, ukuran, font, background, lebar, tinggi, posisi, dll. CSS dapat langsung diberikan pada element html atau namanya inline CSS, ditulis didalam tag style dan diletakkan pada satu file html tersebut atau namanya internal CSS, dan yang terakhir yaitu external CSS yaitu ditulis pada satu file .css yang nantinya akan dipanggil di file html yang ingin menggunakan file css tersebut. Mengetahui CSS selector yang dapat menggunakan Id (#) dan Class (.), CSS Grouping untuk mengelompokkan elemen yang memiliki style yang sama, CSS Font untuk styling font dan import font yang diinginkan dari internet, CSS Margin dan padding untuk memberikan jarak pada elemen, CSS Background untuk memberikan background pada elemen, CSS Link seperti :hover :active :visited, CSS Transisi untuk memberikan animasi, CSS Table untuk membuat table, CSS Display seperti flex inline-block, dan masih banyak yang lain.',
      step: [
        'Import font Slabo27px kemudian memberikan style.',
        'Styling kotak merah dan biru hal yang sesuai (width, padding, display). Kedua kotak ini menggunakan display inline-block.',
        'Kemudian membuat kotak hijau. Agar melengkung diberikan border radius sebanyak 20px.',
        'Membuat komponen html yang dibutuhkan kemudian barulah styling dengan CSS.',
        'Header terdiri dari logo yang sudah disediakan dan navbar yang menggunakan tag ul.',
        'Kemudian tidak lupa untuk set background sesuai gambar yang diberikan.',
        'Membuat section content yang terdiri h2 untuk Featured Posts dan ada tag div yang berisi content.',
        'Responsive disini saya menggunakan CSS Tricks dari youtube yang ketika widthnya kurang dari 858px maka akan memunculkan 3 bar di pojok kanan dan ketika di klik akan memunculkan navbar dari sisi kiri.',
        'Terakhir adalah pembuatan footer.',
      ],
      project_url: '',
    },
    {
      title: 'Bootstrap',
      summary:
        'Pengaplikasian Bootstrap dalam membuat halaman website sederhana dan struktur folder pembuatan website. Kustomisasi dalam pengaplikasian bootstrap agar sesuai keinginan. Alhasil menggunakan 2 style file CSS, satu untuk bootstrap dan satunya untuk kustomisasi. Mempelajari CSS lebih dalam dan triknya.',
      step: [
        'Sebelum mengerjakan, saya melihat dan memahami assets yang diberikan.',
        'Cek warna dan font yang digunakan.',
        'Import bootstrap CDN di file html.',
        'Membuat struktur html tiap bagian mulai dari header lalu menyesuaikan tampilannya.',
        'Mengatur responsive, walaupun belum 100% bagus.',
      ],
      project_url: '',
    },
    {
      title: 'Javascript Refreshment',
      summary:
        'Apa itu Javascript, pengertian dan penggunaan var let const, pengertian values dan references, destructing, method (concat, map, foreach, slice, filter, reduce), control flow, perbedaan function biasa dan arrow function, class (constructor, method, attributes. extend), async wait, dan DOM. Lebih spesifik pada Control Flow adalah bagaimana kita bisa mengatur flow dari program kita dimana pada pengulangan ada for, while, do while dan untuk pengondisian ada if, if else, switch, block, break, continue, throw, try catch. Materi DOM yang terbagi pembahasannya ada selection method, manipulation, dan event. Contoh pada selection method ada getElementById dimana akan mendapatkan id dari file html yang dipilih dan masih ada banyak selection method yang lain. Lalu pada DOM Manipulation contohnya ada .innerHTML untuk mengganti isi dari tag yang diseleksi. Terakhir, ada DOM Event contoh onclick atau onchange. Seperti onclick adalah bagaimana yang terjadi ketika pengguna mengklik sesuatu.',
      step: [
        'Mempelajari materi yang diberikan.',
        'Membaca semua task Javascript Refreshment.',
        'Mengerjakan yang mudah terlebih dahulu.',
        'Kemudian mencari referensi lain untuk soal yang susah.',
      ],
      project_url: '',
    },
    {
      title: 'Clean Code',
      summary:
        'Apa dan kenapa harus dengan clean code, 9 karakteristik clean code, KISS, DRY, dan refactoring. Clean code adalah bagaimana kode program mudah dibaca oleh programmer lain dan yang mengerjakan clean code tidak harus programmer yang bersangkutan. Kenapa code harus clean yaitu agar mudah untuk berkolaborasi dan lebih cepat mengembangkan fitur baru. Karakteristik dari clean code yaitu penamaan mudah dipahami, mudah dieja dan dicari, singkat namun mendeskripsikan konteks, konsisten, hindari penambahan konteks yang tak perlu, komentar, function, gunakan konvensi, dan formatting. Prinsip Clean Code yaitu KISS (Keep It So Simple), DRY (Don`t Repeat Yourself), dan ada refactoring yaitu proses restrukturisasi untuk mencapai KISS dan DRY.',
      step: [
        'Memahami soal yang telah diberikan',
        'Memahami code apabila bisa dipahami',
        'Menuliskan saran agar code dapat dikategorikan clean code',
      ],
      project_url: '',
    },
    {
      title: 'Frontend Fundamental',
      summary:
        'HTML, CSS, Javascript secara singkat dan lebih dalam mengenai Node js, NPM, dan Git.Penulisan variabel yang baik adalah menggunakan camel case dan uppercase. Lalu juga menggunakan intonasi pertanyaan (bila dibutuhkan). Misalkan _hasEncryption, areEqual, dll_. Aturan fungsi gunakan camel case dengan kata kerja didepannya. Misalkan _getName, getAllData, dll_. Aturan class gunakan pascal case dan kata benda. Misalkan _SoftawareDeveloper_.Node Js adalah runtime javascript dimana dapat menjalankan file javascript (.js) dimanapun, tanpa terbatas browser. NPM adalah Node Package Manager yang dapat menginstall dan uninstall package, mengelola versi dan dependensi yang diperlukan. NPM berguna untuk mengatur package yang berjalan dengan Node js. Git adalah version control system. Bertujuan untuk tracking file ketika mengalami perubahan.',
      step: [
        'Mengerjakan latihan 1 dengan membuat file html yang dilengkapi css internal.',
        'Membuat struktur file html sesuai contoh.',
        'Memberikan style pada tiap div.',
        'Mengatur media query sesuai task.',
        'Membuat repository baru.',
        'Cloning repository di lokal komputer.',
        'Copy file latihan 1 yang telah dibuat.',
        'Menjalankan perintah _git add ._ untuk memindahkan pada staging area.',
        'Menjalankan perintah _git commit -m "Menambahkan file latihan"_ untuk memindahkan pada commit area.',
        'Menjalankan perintah _git push -u origin main_ untuk push ke github repository dan membuat branch dengan nama _main_',
      ],
      project_url: '',
    },
    {
      title: 'Vue Fundamental',
      summary:
        'Apa itu Vue, vue setup dan resources, dasar - dasar vue, vue directive, events dan method, computed properties dan watchers, component. Vue adalah sebuah framework yang memudahkan untuk membuat aplikasi pada bagian frontend dengan kelebihannya dokumentasi lengkap dan rapi. Cara menggunakan vue bisa menggunakan salah satu dari 2 cara yaitu dengan Vue CDN dan Vue CLI. Dasar - dasar vue ada 3 yaitu vue instance adalah instance vue baru dengan fungsi vue, vue data binding adalah syntaks berbasi html yang dapat mengikat DOM dengan dasar rendering dari vue instance dengan ada 3 jenis vue data binding yaitu di dalam konten (menggunakan kurung kurawal), di atribut elemen (menggunakan _v-bind_), pada elemen HTML (menggunakan _v-html_), dan ada vue reactivity dimana ada data yang berubah tanpa harus memuat ulang halaman interface maka data akan berubah otomatis. Bab selanjutnya ada vue directive yaitu atribut khusus yang diawali dengan _v-_ yang berfungsi untuk menjalankan perintah/ekspresi javascript di dalam atribut, seperti v-bind, v-if, v-else-if, v-else, v-on. Events dan method adalah memantau events dan menggunakan methods (fungsi/kumpulan fungsi). Computed Properties adalah bagaimana menangani fungsi yang kompleks. Watcher di vue js adalah fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu nilai tersebut berubah. Component adalah vue instance yang dapat digunakan kembali dengan nama yang telah kita definisikan. Kita bisa menggunakan komponen ini sebagai kustom elemen di dalam instance root vue yang dibuat dengan new Vue.',
      step: [
        'Membuat file struktur html dan menginput CDN Vue js.',
        'Membuat new Vue berupa array listTodo yang kosong dan methods untuk menambahkan data baru ke array listTodo dan reset input.',
        'Membuat ordered list yang akan mengeluarkan data di listTodo menggunakan v-for.',
        'Input menggunakan v-model:value untuk mendapatkan data.',
        'Pada button tambahkan ada sebuah v-on:click atau yang saya tulis @click dan memanggil methods tambahkan.',
        'Pada text Hebat memiliki kondisi v-if ketika panjang array listTodo lebih dari atau sama dengan 4 maka baru muncul text Hebat!.',
        'Disini saya sedikit menambahkan styling pada list yaitu text-transform capitalize.',
      ],
      project_url: '',
    },
  ],
})

export const mutations = {
  setData(state, payload) {
    state.data = state.list.find((item, id) => id == payload)
  },
}
export const actions = {
  getData(store, index) {
    console.log(index)
    store.commit('setData', index)
  },
}
