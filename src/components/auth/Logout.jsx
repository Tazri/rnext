import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import LogoutIcon from "./../../assets/icons/logout.svg";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  function handleClick() {
    navigate("/login");
    setAuth({});
  }
  return (
    <button className="icon-btn" onClick={handleClick}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}
