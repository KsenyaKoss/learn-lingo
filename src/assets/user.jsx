import styled from "styled-components";

const UserPlug = () => {
  return (
    <div>
      <svg
        width="44"
        height="44"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="user">
          <g clipPath="url(#clip0_193_329)">
            <rect
              width="100"
              height="100"
              rx="50"
              fill="#F3F3F3"
              fillOpacity="0.952941"
            />
            <g id="Group 1456">
              <circle
                id="Ellipse 190"
                cx="50.6392"
                cy="47.8557"
                r="15.8557"
                fill="#939FC0"
              />
              <path
                id="Ellipse 191"
                d="M89 101.688C89 96.5668 87.9912 91.4954 86.0313 86.7637C84.0714 82.032 81.1986 77.7327 77.5772 74.1112C73.9557 70.4897 69.6563 67.617 64.9247 65.657C60.193 63.6971 55.1216 62.6883 50 62.6883C44.8784 62.6883 39.807 63.6971 35.0753 65.657C30.3436 67.617 26.0443 70.4897 22.4228 74.1112C18.8013 77.7327 15.9286 82.032 13.9687 86.7637C12.0088 91.4954 11 96.5668 11 101.688L50 101.688H89Z"
                fill="#939FC0"
              />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_193_329">
            <rect width="100" height="100" rx="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default UserPlug;


const IconWrp = styled.div`
    width: 44px;
    height: 44px;

`