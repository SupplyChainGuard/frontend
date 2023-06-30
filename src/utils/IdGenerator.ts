import random from "random";

export default function getRandomId() {
  return random.int(0, 1000000000);
}