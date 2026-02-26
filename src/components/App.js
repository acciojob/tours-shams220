// import React, { useState } from "react";

// const App = () => {
//   const [tours, setTours] = useState([
//     {
//       name: "Agra Tour",
//       description:
//         "Agra is one of the most historically rich cities in India, best known for the iconic Taj Mahal, one of the Seven Wonders of the World. This tour offers you the chance to witness the breathtaking beauty of white marble architecture and learn about the eternal love story behind its creation. Apart from the Taj Mahal, you will also visit Agra Fort, a UNESCO World Heritage Site, which served as the main residence of Mughal emperors. The tour also includes exploring local markets where you can experience traditional handicrafts, marble inlay work, and authentic Mughlai cuisine. This journey combines history, culture, architecture, and food, making it an unforgettable experience for travelers of all ages.",
//       image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
//       price: 4999,
//     },
//     {
//       name: "Jaipur Tour",
//       description:
//         "Jaipur, famously known as the Pink City of India, is a destination that beautifully blends royal heritage with vibrant culture. This tour takes you through magnificent palaces such as the City Palace, which reflects the luxurious lifestyle of Rajput kings. You will also visit the iconic Hawa Mahal, known for its unique honeycomb design, and Amber Fort, which stands proudly on a hill offering breathtaking views. The tour also includes exploring colorful bazaars where you can shop for traditional jewelry, textiles, and handicrafts. Jaipur offers rich history, delicious Rajasthani cuisine, and unforgettable cultural experiences, making it one of the most loved tourist destinations in India.",
//       image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
//       price: 5999,
//     },
//     {
//       name: "Goa Tour",
//       description:
//         "Goa is India's most popular beach destination, known for its golden sandy beaches, vibrant nightlife, and relaxing atmosphere. This tour gives you the opportunity to explore famous beaches such as Baga, Calangute, and Anjuna, where you can enjoy water sports like parasailing, jet skiing, and banana rides. You will also visit historical Portuguese churches, including the Basilica of Bom Jesus, which showcases Goa’s rich colonial history. In addition to adventure and sightseeing, you can enjoy delicious seafood, beach parties, and beautiful sunsets. This tour offers the perfect combination of relaxation, adventure, and entertainment, making it ideal for families, couples, and friends.",
//       image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
//       price: 8999,
//     },
//     {
//       name: "Manali Tour",
//       description:
//         "Manali is a beautiful hill station located in the Himalayas, known for its snow-covered mountains, cool climate, and adventure activities. This tour allows you to experience breathtaking views of valleys, rivers, and forests. You will visit popular places like Solang Valley and Rohtang Pass, where you can enjoy activities such as skiing, snowboarding, and paragliding. The tour also includes visiting ancient temples, local markets, and enjoying peaceful nature walks. Manali is perfect for those who love nature, adventure, and tranquility. Whether you want relaxation or excitement, this tour offers a complete mountain experience you will never forget.",
//       image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23",
//       price: 7499,
//     },
//     {
//       name: "Kerala Tour",
//       description:
//         "Kerala, known as God's Own Country, is famous for its lush greenery, peaceful backwaters, and beautiful landscapes. This tour offers you a chance to experience houseboat rides through calm backwaters surrounded by palm trees and villages. You will also visit tea plantations, waterfalls, and wildlife sanctuaries rich in biodiversity. Kerala is also known for its traditional Ayurvedic treatments, which help relax and rejuvenate the body and mind. You can enjoy authentic South Indian cuisine and experience the local culture and traditions. This tour provides a perfect blend of relaxation, nature, and cultural experiences, making it ideal for peaceful and memorable vacations.",
//       image: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e",
//       price: 9999,
//     },
//   ]);
//   const rem = (key) => {
//     let newTours = tours.filter((v, i) => i != key);

//     setTours(newTours);
//   };
//   // const [readMore,setReadMore] = useState(false);
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const checkExpandedIndex = (i) => {
//     setExpandedIndex(expandedIndex === i ? null : i);
//   };

//   return (
//     <main id="main">
//       <div>
//         {tours.map((v, i) => (
//           <div key={i}>
//             <div>
//               <h3>name</h3>
//               <img src={v.image} alt="" style={{ height: "400px" }} />
//             </div>
//             <div>{v.name}</div>
//             <div>{v.price}</div>
//             <div>
//               {expandedIndex === i
//                 ? v.description
//                 : v.description.substring(0, 20)}{" "}
//               <button onClick={() => checkExpandedIndex(i)}>
//                 {expandedIndex == null ? "Read More" : "Read Less"}
//               </button>
//             </div>
//             <div>
//               <button onClick={() => rem(i)}>Remove</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// };
// export default App;


import React, { useState } from "react";

const initialTours = [
  {
    name: "Agra Tour",
    description:
      "Agra is one of the most historically rich cities in India, best known for the iconic Taj Mahal, one of the Seven Wonders of the World. This tour offers you the chance to witness the breathtaking beauty of white marble architecture and learn about the eternal love story behind its creation. Apart from the Taj Mahal, you will also visit Agra Fort, a UNESCO World Heritage Site, which served as the main residence of Mughal emperors.",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    price: 4999,
  },
  {
    name: "Jaipur Tour",
    description:
      "Jaipur, famously known as the Pink City of India, is a destination that beautifully blends royal heritage with vibrant culture. This tour takes you through magnificent palaces such as the City Palace and Amber Fort. You will explore colorful markets, traditional handicrafts, and enjoy authentic Rajasthani cuisine.",
    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    price: 5999,
  },
];

const App = () => {

  const [tours, setTours] = useState(initialTours);

  const [expandedIndex, setExpandedIndex] = useState(null);

  // Remove tour
  const removeTour = (index) => {
    const newTours = tours.filter((_, i) => i !== index);
    setTours(newTours);
  };

  // Toggle read more
  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Refresh tours
  const refreshTours = () => {
    setTours(initialTours);
  };

  // If no tours left
  if (tours.length === 0) {
    return (
      <div>
        <h2>No tours left</h2>
        <button onClick={refreshTours}>Refresh</button>
      </div>
    );
  }

  return (
    <main>

      {tours.map((tour, index) => (

        <div key={index} style={{ margin: "20px" }}>

          <img src={tour.image} alt="" style={{ height: "300px" }} />

          <h3>{tour.name}</h3>

          <h4>₹{tour.price}</h4>

          <p>

            {expandedIndex === index
              ? tour.description
              : tour.description.substring(0, 200) + "..."}

            <button onClick={() => toggleReadMore(index)}>

              {expandedIndex === index
                ? " Read Less"
                : " Read More"}

            </button>

          </p>

          <button onClick={() => removeTour(index)}>
            Remove
          </button>

        </div>

      ))}

    </main>
  );
};

export default App;