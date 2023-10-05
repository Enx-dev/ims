import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

function generateStars(num: number) {
  const stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(StarFilledIcon);
  }
  for (let i = 0; i < 5 - num; i++) {
    stars.push(StarIcon);
  }
  return stars;
}

export default generateStars;
