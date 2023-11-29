import { useEffect, useState } from "react";
// import "./protected.css";
import { useNavigate } from "react-router-dom";

export default function Protected({
  children,
  ownerPage,
  adminPage,
  customerPage,
}) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(localStorage.getItem("role"));
  // console.log(user);

  const nav = useNavigate();

  useEffect(() => {
    if (user === "Owner" && ownerPage)
      return (
        setTimeout(() => {
          setLoading(false);
        }, 1000),
        nav("/admin/dashboard")
      );
    if (user === "Customer" && customerPage)
      return (
        setTimeout(() => {
          setLoading(false);
        }, 1000),
        nav("/")
      );
    if (user === "Warehouse Admin" && adminPage)
      return (
        setTimeout(() => {
          setLoading(false);
        }, 1000),
        nav("admin/dashboard")
      );

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [children]);

  return <>{loading ? <>Loading...</> : children}</>;
}
