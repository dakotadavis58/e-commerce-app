import { PacmanLoader } from "react-spinners";

const Loading = () => {
  return (
    <PacmanLoader animation="border" role="status">
      <span className="visually-hidden">Loading . . .</span>
    </PacmanLoader>
  );
};

export default Loading;
