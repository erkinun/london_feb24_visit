import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

const plannedVisits = [
  {
    day: "Cuma",
    activities: [
      "Piccadilly Circus",
      "Regent Street",
      "Soho",
      "Oxford Street",
      "Mayfair",
      "Marylebone",
      "Saat 8'de yemek @Smokestak Shoreditch",
    ],
    imageSrc: "../images/piccadilly.jpg",
    staticImage: (
      <StaticImage src="../images/piccadilly.jpg" alt="Piccadilly" />
    ),
  },
  {
    day: "Cumartesi",
    activities: [
      "Green Park",
      "Buckingham Palace",
      "St James' Park",
      "Westminster Palace",
      "Trafalgar Square",
      "National Gallery",
      "6:30'da Öz'un doğum günü kutlaması @The Twenty Two Mayfair",
    ],
    imageSrc: "/images/westminster_palace.jpg",
    staticImage: (
      <StaticImage src="../images/westminster.jpeg" alt="Westminster Palace" />
    ),
  },
  {
    day: "Pazar",
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
    staticImage: (
      <StaticImage src="../images/tower_bridge.png" alt="Tower Bridge" />
    ),
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

// TODO create a sticky navigation bar
const Navigation = () => {
  return (
    <nav className="sticky top-0 p-4 z-50">
      <ul className="flex gap-2 justify-center text-white opacity-75">
        <li>
          <a href="#gencler">Misafirlerimiz</a>
        </li>
        <li>
          <a href="#cuma">Cuma</a>
        </li>
        <li>
          <a href="#cumartesi">Cumartesi</a>
        </li>
        <li>
          <a href="#pazar">Pazar</a>
        </li>
        <li>
          <a href="#things-to-remember">Notlar</a>
        </li>
      </ul>
    </nav>
  );
};

const IndexPage = () => {
  return (
    <div className="bg-uk-blue ">
      <Navigation />
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-4xl text-uk-red font-bold mb-4">
            Londra'ya Hoşgeldiniz Gençler 🇬🇧
          </h1>
          <div className="px-4">
            <StaticImage
              alt="London"
              className="rounded-lg shadow-sm shadow-white"
              src="../images/london.jpeg"
            />
          </div>

          <h2 id="gencler" className="text-white text-2xl">
            Değerli Misafirlerimiz! 🎉
          </h2>
          <StaticImage
            alt="Gencler"
            src="../images/oz_ve_ozancan.jpg"
            className="rounded-lg w-80 mx-auto mb-4 "
          />
          <p className="text-lg text-white mb-8">
            Sizler için üç günlük bir Londra turu planladık. Aşağıdaki günlere
            bakarak planlarımızı inceleyebilirsiniz. Ayrıca Londra'da
            unutulmaması gerekenler kısmını da incelemenizi öneririz. 🎈
            Değişiklik isteklerinizi müdüriyetimize iletebilirsiniz. 📝
          </p>
          <div className="flex flex-col gap-8 px-4">
            {plannedVisits.map((visit, index) => (
              <Card
                key={index}
                day={visit.day}
                activities={visit.activities}
                imageSrc={visit.imageSrc}
                staticImage={visit.staticImage}
              />
            ))}
          </div>

          <h2
            id="things-to-remember"
            className="text-2xl text-uk-red font-bold mt-8 mb-4"
          >
            Londra'da Unutulmaması Gerekenler
          </h2>

          <ul className="text-lg text-white mb-8 last:font-bold">
            {thingsToRememberInLondon.map((thing, index) => (
              <li className="last:text-red-500" key={index}>
                {thing}
              </li>
              // last item to be bold
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Card = ({ day, activities, staticImage }) => {
  return (
    <div
      id={day.toLowerCase()}
      className="bg-uk-red bg-opacity-80 text-white p-6 rounded-lg shadow-md flex flex-col gap-2 items-center"
    >
      <h2 className="text-xl font-semibold mb-4">{day}</h2>

      {staticImage}

      <p className="text-xl">
        <strong>Gezi Planımız 🗺️</strong>
      </p>
      <ul className="list-none p-4 mb-4 bg-slate-200 rounded w-full lg:w-1/2 flex flex-col gap-2 ">
        {activities.map((activity, index) => (
          <li className="text-uk-blue last:font-bold" key={index}>
            {activity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
