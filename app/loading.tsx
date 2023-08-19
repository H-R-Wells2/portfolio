import HashLoader from "react-spinners/HashLoader";

type Props = {};

const loading = (props: Props) => {
  return (
    <div>
      <HashLoader size={100} color="#5EEAD4" />
    </div>
  );
};

export default loading;
