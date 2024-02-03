import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const plannedVisits = [
  {
    day: "Day 1",
    activities: [
      "Piccadilly Circus",
      "Regent Street",
      "Soho",
      "Oxford Street",
      "Mayfair",
      "Marylebone",
    ],
    imageSrc: "/images/piccadilly_circus.jpg",
  },
  {
    day: "Day 2",
    activities: [
      "Green Park",
      "Buckingham Palace",
      "St James' Park",
      "Westminster Palace",
      "Trafalgar Square",
      "National Gallery",
    ],
    imageSrc: "/images/westminster_palace.jpg",
  },
  {
    day: "Day 3",
    activities: [
      "Tower Bridge",
      "Borough Market",
      "Tate Modern",
      "St Paul's Cathedral",
      "Bank of England",
      "Southbank",
      "London Eye",
      "Westminster Bridge",
    ],
    imageSrc: "/images/tower_bridge.jpg",
  },
];

const thingsToRememberInLondon = [
  // in Turkish
  "Yanınıza şemsiye almayı unutmayın.",
  "Metroya kredi karti ile binebilirsiniz.",
  "Trafik soldan akar.",
  "Stansted Havaalanı'ndan Londra'ya trenle gitmek isterseniz Stansted Express'i kullanabilirsiniz.",
  "Ama Uber en kolayı.",
];

// tailwind classes for nice shadow around an image
// 

const IndexPage = () => {
  return (
    <div className="bg-uk-blue min-h-screen flex items-center justify-center">
      <div className="text-center">
        <StaticImage
          alt="London"
          className="rounded-lg shadow-sm shadow-white"
          src="../images/london.jpeg"
        />
        <h1 className="text-4xl text-uk-red font-bold mb-4">
          Londra'ya Hoşgeldiniz Gençler 🇬🇧
        </h1>
        <StaticImage
          alt="Gencler"
          src="../images/oz_ve_ozancan.jpg"
          className="rounded-lg w-80 mx-auto mb-4 "
        />
        <p className="text-lg text-white mb-8">
          Sizler için üç günlük bir Londra turu planladık. Aşağıdaki günlere
          tıklayarak planlarımızı inceleyebilirsiniz.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plannedVisits.map((visit, index) => (
            <Card
              key={index}
              day={visit.day}
              activities={visit.activities}
              imageSrc={visit.imageSrc}
            />
          ))}
        </div>
        <h2 className="text-2xl text-uk-red font-bold mt-8 mb-4">
          Londra'da Unutulmaması Gerekenler
        </h2>
        <ul className="text-lg text-white mb-8">
          {thingsToRememberInLondon.map((thing, index) => (
            <li key={index}>{thing}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Card = ({ day, activities, imageSrc }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-london-blue">{day}</h2>
      <img src={imageSrc} alt={`${day} Image`} className="mb-4 rounded-lg" />
      <p className="text-london-blue">
        <strong>Activities:</strong>
      </p>
      <ul className="list-disc pl-4 mb-4">
        {activities.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
