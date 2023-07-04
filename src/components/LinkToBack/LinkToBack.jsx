
import { SlActionUndo } from "react-icons/sl";
import { Link } from './LinkToBack.styled';

export const LinkToBack = () => {
  return (
    <Link to="/">
      <SlActionUndo />
      <span>Back</span>
    </Link>
  );
};
