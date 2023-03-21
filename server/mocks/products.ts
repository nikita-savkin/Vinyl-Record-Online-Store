const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/vinyl-online-store.appspot.com/o';

const products = [
  {
    artist: 'joy division',
    album: 'unknown pleasures',
    label: 'mofi',
    storageImgUrl: `${baseUrl}/covers%2Funknown-pleasures.jpeg?alt=media&token=23e0b00b-af05-4bdd-8f1b-715e0a0c9f08`,
    price: 50,
    genre: ['punk', 'rock'],
    year: '60',
    desc: "Essentially, 'Unknown Pleasures' is not just one of the great British albums of all time, it's a cultural cornerstone that spans languages, interests and disciplines like precious few others. That widespread relevance means Joy Division's first album has become far more crucial than when it was released in June 1979.",
  },
  {
    artist: 'pink floyd',
    album: 'animals',
    label: 'analogue productions',
    storageImgUrl: `${baseUrl}/covers%2Fanimals.jpeg?alt=media&token=39b86bc5-1c94-438e-a4d0-97a53569ebb2`,
    price: 62,
    genre: ['rock', 'progressive rock'],
    year: '70',
    desc: "Loosely based on George Orwell's political fable Animal Farm, the album's lyrics describe various classes in society as different kinds of animals: the predatory dogs, the despotic ruthless pigs, and the \"mindless and unquestioning” herd of sheep.",
  },
  {
    artist: 'pink floyd',
    album: 'the dark side of the moon',
    label: 'analogue productions',
    storageImgUrl: `${baseUrl}/covers%2Fthe-dark-side-of-the-moon.png?alt=media&token=a3cf8fea-7ee2-4d10-9fff-f05cc2732216`,
    price: 41,
    genre: ['rock', 'progressive rock'],
    year: '70',
    desc: "Dark Side of the Moon is a concept album that discusses the philosophical and physical ideas that can lead to a person's insanity, and ultimately, an unfulfilled life.",
  },
  {
    artist: 'pink floyd',
    album: 'the wall',
    label: 'diverse vinyl',
    storageImgUrl: `${baseUrl}/covers%2Fthe-wall.jpeg?alt=media&token=db4e045a-31cf-4b6d-a881-172ba50385ad`,
    price: 44,
    genre: ['rock', 'progressive rock'],
    year: '70',
    desc: 'The Wall is the eleventh studio album by the English progressive rock band Pink Floyd, released on 30 November 1979 by Harvest/EMI and Columbia/CBS Records. It is a rock opera that explores Pink, a jaded rock star whose eventual self-imposed isolation from society forms a figurative wall.',
  },
  {
    artist: 'pink floyd',
    album: 'wish you were here',
    label: 'everest classic records',
    storageImgUrl: `${baseUrl}/covers%2Fwish-you-were-here.jpg?alt=media&token=305a513d-1a8b-42c5-aa23-8c7bdddbac33`,
    price: 50,
    genre: ['rock', 'progressive rock'],
    year: '70',
    desc: "Wish You Were Here is Floyd's second album with a conceptual theme, mostly at Roger Waters' direction. It reflects his feeling that the camaraderie that had served the band was, by then, largely absent.",
  },
  {
    artist: 'doors',
    album: 'doors',
    label: 'everest classic records',
    storageImgUrl: `${baseUrl}/covers%2Fthe-doors.jpeg?alt=media&token=c2a564f5-5e94-45be-b80b-3221ddeec277`,
    price: 38,
    genre: ['rock', 'psychedelic Rock'],
    year: '60',
    desc: 'The Doors were an American rock band formed in 1965, known for their unique sound and the charismatic presence of their lead singer, Jim Morrison. Their self-titled debut album, "The Doors," was released in 1967 and quickly became a classic of the era, featuring some of the band\'s most iconic tracks.',
  },
  {
    artist: 'doors',
    album: 'l.a. woman',
    label: 'everest classic records',
    storageImgUrl: `${baseUrl}/covers%2Fthedoors_lawoman_8sey.jpg?alt=media&token=24d26033-0405-4c55-92f0-822f64ba8b34`,
    price: 38,
    genre: ['rock', 'psychedelic rock'],
    year: '60',
    desc: '"L.A. Woman" is the sixth and final studio album by The Doors, released in 1971, just three months before the death of their lead singer, Jim Morrison. It\'s widely considered one of their greatest achievements, with a more bluesy and gritty sound that reflects the band\'s roots in the American music tradition.',
  },
  {
    artist: 'michael jackson',
    album: 'thriller',
    label: 'gearbox records',
    storageImgUrl: `${baseUrl}/covers%2Fthriller.jpg?alt=media&token=5c028e24-edd3-4651-b1af-1665d58a087a`,
    price: 35,
    genre: ['pop', 'r&b'],
    year: '80',
    desc: '"Thriller" is the sixth studio album by Michael Jackson, released in 1982. It is widely regarded as one of the greatest albums of all time, and is credited with redefining pop music for the 1980s. The album\'s title track, "Thriller," is one of Jackson\'s most iconic songs, with its horror-themed music video becoming a cultural phenomenon.',
  },
  {
    artist: 'madonna',
    album: 'ray of light',
    label: 'gearbox records',
    storageImgUrl: `${baseUrl}/covers%2Fray-oflight.jpeg?alt=media&token=7551bfc5-3570-48cf-bebc-20b666c88528`,
    price: 30,
    genre: ['pop', 'r&b'],
    year: '90',
    desc: '"Ray of Light" is the seventh studio album by Madonna, released in 1998. It marks a departure from her earlier pop sound, as Madonna experimented with electronic dance music and spiritual themes. The album was a critical and commercial success, earning Madonna numerous awards and widespread acclaim.',
  },
  {
    artist: 'beatles',
    album: "sgt. pepper's lonely hearts club band",
    label: 'mofi',
    storageImgUrl: `${baseUrl}/covers%2Fsgt-pepper.jpeg?alt=media&token=a6992e18-d768-4857-a706-f51f5333d617`,
    price: 56,
    genre: ['pop', 'rock'],
    year: '60',
    desc: '"Sgt. Pepper\'s Lonely Hearts Club Band" is the eighth studio album by The Beatles, released in 1967. Widely regarded as one of the most influential albums in the history of rock music, it marked a major turning point in the band\'s career as they shifted towards more experimental and psychedelic sounds.',
  },
  {
    artist: 'beatles',
    album: 'rubber soul',
    label: 'nimbus west',
    storageImgUrl: `${baseUrl}/covers%2Frubber-soul.jpeg?alt=media&token=42ad121f-7354-470b-95b3-0a16ae5a08a6`,
    price: 61,
    genre: ['pop', 'rock'],
    year: '60',
    desc: '"Rubber Soul" is the sixth studio album by The Beatles, released in 1965. It marked a significant departure from the band\'s earlier sound, as they moved away from the straightforward rock and roll of their earlier albums and began experimenting with new instruments and song structures.',
  },
  {
    artist: 'nirvana',
    album: 'in utero',
    label: 'nimbus west',
    storageImgUrl: `${baseUrl}/covers%2Fin-utero.jpg?alt=media&token=3d1c85f8-7d21-4914-80b8-f8acab467357`,
    price: 47,
    genre: ['rock', 'grunge'],
    year: '90',
    desc: '"In Utero" is the third and final studio album by Nirvana, released in 1993. It marked a departure from the polished production of their previous album, "Nevermind," and showcased a more raw and abrasive sound.',
  },
  {
    artist: 'nirvana',
    album: 'bleach',
    label: 'thorens',
    storageImgUrl: `${baseUrl}/covers%2Fbleach.jpg?alt=media&token=2f18ea96-30bd-47b3-9131-2d1072029c49`,
    price: 39,
    genre: ['rock', 'grunge'],
    year: '80',
    desc: '"Bleach" is the debut studio album by Nirvana, released in 1989. It is known for its raw, aggressive sound and is considered a seminal album in the development of grunge music. The album features tracks such as "Negative Creep" and "About a Girl," which showcase frontman Kurt Cobain\'s songwriting talents and distinctive vocal style. The album\'s lo-fi production and heavy guitar riffs helped establish Nirvana\'s signature sound, which would go on to influence a generation of musicians.',
  },
  {
    artist: 'metallica',
    album: 'master of puppets',
    label: 'thorens',
    storageImgUrl: `${baseUrl}/covers%2Fmaster-of-puppets.jpeg?alt=media&token=d562f0b7-0e83-41fd-a001-f55adf336963`,
    price: 36,
    genre: ['metal'],
    year: '80',
    desc: '"Master of Puppets" is the third studio album by Metallica, released in 1986. It is widely regarded as one of the greatest heavy metal albums of all time and helped establish Metallica as one of the most influential bands in the genre.',
  },
  {
    artist: 'metallica',
    album: 'death magnetic',
    label: 'diverse vinyl',
    storageImgUrl: `${baseUrl}/covers%2Fdeath-magnetic.webp?alt=media&token=b9cfa68a-b55d-4c13-ae6e-1947d1fa8140`,
    price: 36,
    genre: ['metal'],
    year: '00',
    desc: '"Death Magnetic" is the ninth studio album by Metallica, released in 2008. It marked a return to the band\'s thrash metal roots after several albums with a more experimental sound.',
  },
  {
    artist: 'king crimson',
    album: 'in the court of the crimson king',
    label: 'diverse vinyl',
    storageImgUrl: `${baseUrl}/covers%2Fin-the-court-of-the-crimson-king.png?alt=media&token=caaa85eb-474b-4d11-9cbe-eb17e8630bcc`,
    price: 78,
    genre: ['progressive rock'],
    year: '60',
    desc: '"In the Court of the Crimson King" is the debut studio album by King Crimson, released in 1969. It is widely regarded as a landmark album in the progressive rock genre, with its innovative use of instruments and unconventional song structures.',
  },
  {
    artist: 'fleetwood mac',
    album: 'rumours',
    label: 'impex records',
    storageImgUrl: `${baseUrl}/covers%2Frumors.jpg?alt=media&token=3b2a61a5-4770-4a46-ab0d-02a5b886d248`,
    price: 35,
    genre: ['pop', 'rock'],
    year: '70',
    desc: '"Rumours" is the eleventh studio album by Fleetwood Mac, released in 1977. It is one of the best-selling albums of all time, and is known for its catchy melodies, intricate harmonies, and confessional lyrics that explore the personal relationships within the band.',
  },
  {
    artist: 'marvin gaye',
    album: "what's going on",
    label: 'impex records',
    storageImgUrl: `${baseUrl}/covers%2Fwhats-going-on.jpg?alt=media&token=f5a0ba46-1865-433d-a113-555706a602a2`,
    price: 32,
    genre: ['soul'],
    year: '70',
    desc: '"What\'s Going On" is the eleventh studio album by Marvin Gaye, released in 1971. It is widely regarded as a landmark album in soul music and is known for its socially conscious lyrics that address issues such as war, poverty, and racism.',
  },
  {
    artist: 'rolling stones',
    album: 'let it bleed',
    label: 'impex records',
    storageImgUrl: `${baseUrl}/covers%2Flet-it-bleed.jpeg?alt=media&token=692ebef3-5ace-4241-8537-74c0745fc802`,
    price: 30,
    genre: ['rock'],
    year: '70',
    desc: '"Let It Bleed" is the eighth studio album by The Rolling Stones, released in 1969. It is known for its fusion of blues, country, and rock and roll influences, as well as its exploration of darker themes.',
  },
];

export default products;
