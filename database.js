const Bannercarousel = [
  require("./assets/carousel/slide_1.jpg"),
  require("./assets/carousel/slide_2.jpg"),
  require("./assets/carousel/slide_3.jpg"),
];

const Carousel1 = [
  {
    id: 1,
    title: "Agak Laen",
    image: require("./assets/carousel/menu_3.jpg"),
    navigation: "AgakLaen",
  },
  {
    id: 2,
    title: "Land Of Bad",
    navigation: "Land Of Bad",
    image: require("./assets/carousel/menu_1.jpg"),
  },
  {
    id: 3,

    title: "NO WAY UP",
    navigation: "NO WAY UP",
    image: require("./assets/carousel/menu_2.jpg"),
  },
  {
    id: 4,
    title: "ALI TOPAN",
    navigation: "ALI TOPAN",
    image: require("./assets/carousel/menu_4.jpg"),
  },
];

const FilmData = [
  {
    id: 1,
    title: "Land Of bad",
    jamTayang: "1 j 59 m",
    movietype: "Action, Serial",
    image: require("./assets/carousel/menu_1.jpg"),
    staricon: require("./assets/icons/Star.png"),
    starrate: 3,
    headlinebanner: require("./assets/pagecontent/landofbad.png"),
    sinopsistitle:
      "Operasi pasukan khusus di Filipina Selatan secara tidak terduga berubah jadi pertempuran sengit antara tim Delta Force dan musuh. Anggota Delta, Kinney (Liam Hemsworth) kalah dalam jumlah personil bertekad untuk keluar dan tidak meninggalkan siapapun. Satu-satunya harapan adalah lewat bimbingan Reaper (Russell Crowe) pilot drone angkatan udara AS.Operasi pasukan khusus di Filipina Selatan secara tidak terduga berubah jadi pertempuran sengit antara tim Delta Force dan musuh. Anggota Delta, Kinney (Liam Hemsworth) kalah dalam jumlah personil bertekad untuk keluar dan tidak meninggalkan siapapun. Satu-satunya harapan adalah lewat bimbingan Reaper (Russell Crowe) pilot drone angkatan udara AS.",
    pemeran: [
      {
        image: require("./assets/pagecontent/landofbad/Liam_Hemsworth_June_2016.jpg"),
        nama: "Liam Hemsworth",
      },
      {
        image: require("./assets/pagecontent/landofbad/lukehemsworth.jpg"),
        nama: "Luke Hemsworth",
      },
      {
        image: require("./assets/pagecontent/landofbad/rickywhittle.jpg"),
        nama: "Ricky Whittle",
      },
      {
        image: require("./assets/pagecontent/landofbad/russelcrowe.jpg"),
        nama: "Russel Crowe",
      },
      {
        image: require("./assets/pagecontent/landofbad/Milo Ventimiglia.jpg"),
        nama: "Milo Ventimiglia",
      },
      {
        image: require("./assets/pagecontent/landofbad/Gunner Wright.jpg"),
        nama: "Gunner Wright",
      },
    ],
    jadwal: [
      {
        hari: "Senin",
        tanggal: "17 Oktober",
        location: [
          {
            lokasi: "SETIABUDI XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 35.000",
          },
          {
            lokasi: "HOLLYWOOD XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 40.000",
          },
          {
            lokasi: "METROPOLE XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 50.000",
          },
        ],
      },
      {
        hari: "Selasa",
        tanggal: "18 Oktober",
        location: [
          {
            lokasi: "Starium 3D",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 25.000",
          },
          {
            lokasi: "KUNINGAN CITY XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 30.000",
          },
        ],
      },
      {
        hari: "Rabu",
        tanggal: "19 Oktober",
        location: [
          {
            lokasi: "ARTHA GADING XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 30.000",
          },
          {
            lokasi: "BASSURA XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 28.000",
          },
        ],
      },
      {
        hari: "Kamis",
        tanggal: "20 Oktober",
        location: [
          {
            lokasi: "CITRA XXI",
            jam: ["12:35", "14:45", "16:55"],
            harga: "Rp 38.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 25.000",
          },
        ],
      },
      {
        hari: "Jumat",
        tanggal: "21 Oktober",
        location: [
          {
            lokasi: "CITRA XXI",
            jam: ["12:35", "14:45", "16:55"],
            harga: "Rp 35.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 32.000",
          },
        ],
      },
      {
        hari: "Sabtu",
        tanggal: "22 Oktober",
        location: [
          {
            lokasi: "CITRA XXI",
            jam: ["12:35", "14:45", "16:55"],
            harga: "Rp 35.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 45.000",
          },
        ],
      },
      {
        hari: "Minggu",
        tanggal: "23 Oktober",
        location: [
          {
            lokasi: "SETIABUDI XXI",
            jam: ["17:10", "19:20", "21:30"],
            harga: "Rp 42.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:05", "14:20", "16:35", "18:50", "21:05"],
            harga: "Rp 35.000",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Agak Laen",
    jamTayang: "1 j 59 m",
    movietype: "Komedi",
    image: require("./assets/carousel/menu_3.jpg"),
    staricon: require("./assets/icons/Star.png"),
    starrate: 2,
    headlinebanner: require("./assets/pagecontent/agaklaen/Agak Laen.jpg"),
    sinopsistitle:
      "Seorang mahasiswi film berbakat tapi ketus dan gemar menilai orang dengan angka, membuat dia terancam kehilangan segalanya termasuk sahabat, cinta, bahkan mimpinya sebagai produser film, ketika kebiasaan buruknya terungkap dan menjadi cemoohan di kampusnya.",
    pemeran: [
      {
        image: require("./assets/pagecontent/agaklaen/ariekriting.jpg"),
        nama: "Arie Kriting",
      },
      {
        image: require("./assets/pagecontent/agaklaen/tissabiani.png"),
        nama: "Tissa Biani",
      },
      {
        image: require("./assets/pagecontent/agaklaen/indahpermatasari.jpg"),
        nama: "Indah Permatasari",
      },
    ],
    jadwal: [
      {
        hari: "Senin",
        tanggal: "17 Oktober",
        location: [
          {
            lokasi: "SETIABUDI XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "35.000",
          },
          {
            lokasi: "HOLLYWOOD XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 28.000",
          },
          {
            lokasi: "METROPOLE XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 28.000",
          },
        ],
      },
      {
        hari: "Selasa",
        tanggal: "18 Oktober",
        location: [
          {
            lokasi: "Starium 3D",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 28.000",
          },
          {
            lokasi: "KUNINGAN CITY XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 28.000",
          },
        ],
      },
      {
        hari: "Rabu",
        tanggal: "19 Oktober",
        location: [
          {
            lokasi: "ARTHA GADING XXI",
            jam: ["12:35", "14:45", "16:55", "19:05", "21:15"],
            harga: "Rp 28.000",
          },
          {
            lokasi: "BASSURA XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 28.000",
          },
        ],
      },
      {
        hari: "Kamis",
        tanggal: "20 Oktober",
        location: [
          {
            lokasi: "CITRA XXI",
            jam: ["12:35", "14:45", "16:55"],
            harga: "Rp 28.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 28.000",
          },
        ],
      },
      {
        hari: "Jumat",
        tanggal: "21 Oktober",
        location: [
          {
            lokasi: "CITRA XXI",
            jam: ["12:35", "14:45", "16:55"],
            harga: "Rp 25.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 30.000",
          },
        ],
      },
      {
        hari: "Sabtu",
        tanggal: "22 Oktober",
        location: [
          {
            lokasi: "CITRA XXI",
            jam: ["12:35", "14:45", "16:55"],
            harga: "Rp 32.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:30", "14:40", "16:50", "19:00", "21:10"],
            harga: "Rp 25.000",
          },
        ],
      },
      {
        hari: "Minggu",
        tanggal: "23 Oktober",
        location: [
          {
            lokasi: "SETIABUDI XXI",
            jam: ["17:10", "19:20", "21:30"],
            harga: "Rp 35.000",
          },
          {
            lokasi: "EMPORIUM PLUIT XXI",
            jam: ["12:05", "14:20", "16:35", "18:50", "21:05"],
            harga: "Rp 45.000",
          },
        ],
      },
    ],
  },
];

const dataKursi = [
  {
    seatImg_non: require("./assets/icons/kursi_non.png"),
    seatImg_active: require("./assets/icons/kursi_active.png"),
    seatImg_book: require("./assets/icons/kursi_book.png"),
    seat_left: 24,
    harga: 22000,
  },
];
export { Bannercarousel, Carousel1, FilmData, dataKursi };
