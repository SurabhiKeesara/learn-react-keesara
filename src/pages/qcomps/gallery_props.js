const mariaSkłodowskaCurie = {
  name: 'Maria Skłodowska-Curie',
  imgSrc: 'szV5sdGs.jpg',
  profession: 'physicist and chemist',
  awards: [
    'Nobel Prize in Physics',
    'Nobel Prize in Chemistry',
    'Davy Medal',
    'Matteucci Medal'
  ],
  discovered: 'polonium (element)'
};

const katsukoSaruhashi = {
  name: 'Katsuko Saruhashi',
  imgSrc: 'YfeOqp2s.jpg',
  profession: 'geochemist',
  awards: [
    'Miyake Prize for geochemistry', 
    'Tanaka Prize'
  ],
  discovered: 'a method for measuring carbon dioxide in seawater'
};

function Profile({scientist}) {
  return (
      <section className="profile">
        <h2>{scientist.name}</h2>
        <img
          className="avatar"
          src={`https://i.imgur.com/${scientist.imgSrc}`}
          alt={scientist.name}
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {scientist.profession}
          </li>
          <li>
            <b>Awards: {scientist.awards.length} </b>
            {scientist.awards.join(', ')}
          </li>
          <li>
            <b>Discovered: </b>
            {scientist.discovered}
          </li>
        </ul>
      </section>
  )
}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Profile scientist={mariaSkłodowskaCurie}></Profile>
      <Profile scientist={katsukoSaruhashi}></Profile>
    </div>
  );
}
