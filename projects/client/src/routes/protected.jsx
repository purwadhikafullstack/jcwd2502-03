
import "./protected.css";

export default function Protected({ children, adminPage, kasirPage }) {

  return (
    <>
      {loading ? (
        <>
Loading...
        </>
      ) : (
        children
      )}
    </>
  );
}
