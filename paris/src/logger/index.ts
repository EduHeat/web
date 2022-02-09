import morgan from "morgan";

export default function logger() {
  return morgan('dev');
}
