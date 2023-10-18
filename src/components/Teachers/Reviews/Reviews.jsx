import Star  from "../../../assets/star.jsx";
import User from "../../../assets/user.jsx"

import { CommentStyled, ImgWrp, MoreInfoWrp, NameStyled, NameWrp, RatingWrp } from "./ReviewsStyled";

const Reviews = ({ el }) => {
  console.log(el);
  const { comment, reviewer_name, reviewer_rating } = el;

  return (
    <MoreInfoWrp>
      <NameWrp>
        <ImgWrp>
           <User/>
        </ImgWrp>
        <div>
          <NameStyled>{reviewer_name}</NameStyled>
          <RatingWrp>
            <Star/>
            <p>{`${reviewer_rating}.0`}</p>
          </RatingWrp>
        </div>
      </NameWrp>
      <CommentStyled>{comment}</CommentStyled>
    </MoreInfoWrp>
  );
};

export default Reviews;
