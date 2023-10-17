// import  OpenBook  from "../../../assets/book-open-01.svg";
import Star from "../../../assets/star.svg";
// import Heart  from "../../../assets/heart.svg";
// import LikeHeart  from "../../../assets/heart-hover.svg";
import Reviews from "../Reviews/Reviews";
import Button from "../LevelsButtons/Button";

const Card = ({ item }) => {
  console.log(item);
  const {
    avatar_url,
    name,
    surname,
    languages,
    lesson_info,
    conditions,
    lessons_done,
    rating,
    price_per_hour,
    experience,
    reviews,
    levels,
  } = item;
  return (
    <div>
      <div>
        {" "}
        <img src={avatar_url} alt="avatar" />
      </div>
      <ul>
        <li>Lessons online</li>
        <li>
          Lessons done: <p>{lessons_done}</p>
        </li>
        <li>
          {" "}
          Rating: <p>{rating}</p>
        </li>
        <li>
          Price / 1 hour: <p>{price_per_hour}</p>
        </li>
      </ul>

      <h4>Languages</h4>
      <h2>{`${name} ${surname}`}</h2>
      <p>Speaks: {`${languages}`}</p>
      <p>Lesson Info: {`${lesson_info}`}</p>
      <p>Conditions: {`${conditions}`}</p>
      <button>Read more</button>
      <p>{experience}</p>
      {reviews.map((el) => (
        <Reviews el={el} />
      ))}
      {levels.map((el) => (
        <Button title={el} />
      ))}
    </div>
  );
};

export default Card;
