// import Star  from "../../../assets/star.svg";

const Reviews = ({ comment, reviewer_name, reviewer_rating }) => {
  return (
    <div>
      <img src="" alt="avatar" />
      <p>{reviewer_name}</p>
       <p>{reviewer_rating}</p>
      <p>{comment}</p>
    </div>
  );
};

export default Reviews;
