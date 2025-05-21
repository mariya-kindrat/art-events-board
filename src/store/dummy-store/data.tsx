
type Event = {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  date: string;
  time: string;
  location: string;
}

type Events = Event[];

export const SLIDER_DATA = [
  {
    id: 1,
    title: "Plan Your Event",
    image: "/events/slider.jpeg",
  },
  {
    id: 2,
    title: "Best time spend with us",
    image: "/events/slider2.jpeg",
  },
  {
    id: 3,
    title: "Modern and Luxurious",
    image: "/events/IMG_8628.jpeg",
  }

];
export const FUTURE_EVENTS_DATA: Events = [
  {
    id: 1,
    title: "A Journey Through Creativity",
    image: "/events/artshampane/IMG_8626.jpeg",
    category: "brunches",
    description: "Join us for an immersive experience that celebrates the beauty of creativity and self-expression.",
    price: 100,
    date: "12/04/2025",
    time: "10:00 AM - 5:00 PM",
    location: "Art Gallery, Main Street, City",
  },
  {
    id: 2,
    title: "A Visual Symphony",
    category: "brunches",
    image: "/events/flover/IMG_7555.jpeg",
    description: "Come and witness a stunning display of color and creativity at our upcoming event. ",
    price: 150,
    date: "15/06/2025",
    time: "11:00 AM - 6:00 PM",
    location: "Cultural Center, Elm Street, City",
  },
  {
    id: 3,
    title: "Modern Art Redefined",
    category: "workshops",
    image: "/events/sanvalentine/IMG_6723.jpeg",
    description: "This showcase will feature cutting-edge artworks that challenge traditional boundaries and invite you to explore new perspectives.",
    price: 120,
    date: "20/08/2025",
    time: "1:00 PM - 8:00 PM",
    location: "Art Studio, Oak Avenue, City",
  },
  {
    id: 4,
    title: "A Modern Exhibition",
    category: "workshops",
    image: "/events/newyear/IMG_2430.jpeg",
    description: "Explore the future of sculpture at this groundbreaking event. Featuring works from renowned and emerging artists, this exhibition will challenge your perception of form and space.",
    price: 130,
    date: "05/09/2025",
    time: "9:00 AM - 4:00 PM",
    location: "Sculpture Park, Pine Road, City",
  },
  {
    id: 5,
    title: "Music Meets Visuals",
    category: "workshops",
    image: "/events/flover/IMG_7601.jpeg",
    description: "Experience the fusion of music and visual art in this unique event. Enjoy live performances accompanied by stunning visual displays that bring the music to life.",
    price: 90,
    date: "10/10/2025",
    time: "6:00 PM - 10:00 PM",
    location: "Concert Hall, Maple Street, City",
  },
  {
    id: 6,
    title: "A Light Art Festival",
    category: "workshops",
    image: "/events/artshampane/IMG_8620.PNG",
    description: "Witness the city come alive with light at this spectacular festival. Featuring light installations, projections, and interactive displays, this event is perfect for all ages.",
    price: 50,
    date: "25/11/2025",
    time: "7:00 PM - 11:00 PM",
    location: "Downtown Plaza, City Center",
  },
  {
    id: 7,
    title: "Art on a Plate",
    category: "workshops",
    image: "/events/sanvalentine/welcome.jpeg",
    description: "Indulge in a feast for the senses at this culinary art event. Enjoy gourmet dishes inspired by famous artworks, prepared by top chefs.",
    price: 200,
    date: "15/12/2025",
    time: "5:00 PM - 9:00 PM",
    location: "Grand Hotel, Sunset Boulevard, City",
  },
  {
    id: 8,
    title: "Dance and Expression",
    category: "workshops",
    image: "/events/artshampane/IMG_2590.JPG",
    description: "Celebrate the art of movement with performances by world-class dancers. This event will feature a mix of classical and contemporary dance styles.",
    price: 110,
    date: "20/01/2026",
    time: "3:00 PM - 7:00 PM",
    location: "Dance Theater, Birch Avenue, City",
  },
  {
    id: 9,
    title: "Art For Uck",
    category: "exhibitions",
    image: "/events/artshampane/IMG_2479.jpg",
    description: "Featuring paintings, sculptures, and installations, this event is a must-see for nature lovers.",
    price: 20,
    date: "15/10/2025",
    time: "10:00 AM - 6:00 PM",
    location: "Miami,Fl",
  },
  {
    id: 10,
    title: "Victoria Droniv arts exhibition",
    category: "exhibitions",
    image: "/events/exheb.jpeg",
    description: "My arts",
    price: 40,
    date: "28/07/2025",
    time: "10:00 AM - 6:00 PM",
    location: "Palm Coast, Flagler beach",
  },
  {
    id: 11,
    title: "Ocean Art Night",
    category: "brunches",
    image: "/events/ocean.jpeg",
    description: "An immersive sunset gathering for women, where art meets inner peace. Surrounded by ocean waves and seashell stillness, we paint, reflect, and connect — not only with beauty, but with ourselves. A soulful evening of creative flow, feminine energy, and quiet magic. Come to slow down, breathe deeper, and let the ocean speak to your spirit.",
    price: 80,
    date: "07/06/2025",
    time: "6:00 PM - 9:00 PM",
    location: "Flagler Beach",
  }
];


type EventDetails = {
  id: number;
  slug: string;
  title: string;
  image: string;
  description: string;
  color: string;
}
export const EVENTS_CATEGORIES: EventDetails[] = [
  {
    id: 1,
    slug: "brunches",
    title: "Brunches",
    image: "/events/artshampane/IMG_2590.JPG",
    description: "Join us for an immersive experience that celebrates the beauty of creativity and self-expression. This event will showcase a diverse range of artistic talents, from painting and sculpture to music and dance. Discover the stories behind the art and connect with fellow enthusiasts in a vibrant atmosphere.",
    color: "#FF5733",
  },
  {
    id: 2,
    slug: "workshops",
    title: "Workshops",
    image: "/events/offer.jpeg",
    description: "Come and witness a stunning display of color and creativity at our upcoming event. This exhibition will feature a curated selection of artworks that explore the interplay of color, form, and emotion. Engage with artists and learn about their inspirations while enjoying live performances and interactive installations.",
    color: "#FFBD33",
  },
  {
    id: 3,
    slug: "exhibitions",
    title: "Exhibitions",
    image: "/events/artshampane/slide.jpeg",
    description: "Step into a world of imagination and innovation at our modern art event. This showcase will feature cutting-edge artworks that challenge traditional boundaries and invite you to explore new perspectives. Join us for thought-provoking discussions, workshops, and a chance to connect with emerging artists.",
    color: "#33FF57",
  }

]

export type GalleryEvent = {
  id: string;
  title: string;
  cover: string;
  images: string[];
};

export const GALLERY_EVENTS: GalleryEvent[] = [
  {
    id: "san-valentine",
    title: "San Valentine",
    cover: "/events/sanvalentine/welcome.jpeg",
    images: [
      "/events/sanvalentine/img.jpeg"

    ],
  },
  {
    id: "new-year",
    title: "New Year",
    cover: "/events/newyear/new1.jpeg",
    images: [
      "/events/newyear/new2.jpeg",
      "/events/newyear/new3.jpeg",
      "/events/newyear/new4.jpeg",
      "/events/newyear/new5.jpeg"
    ],
  },

];