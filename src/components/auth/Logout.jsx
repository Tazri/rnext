import { useNavigate } from "react-router-dom";
import LogoutIcon from "./../../assets/icons/logout.svg";

export default function Logout() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login");
  }
  return (
    <button className="icon-btn" onClick={handleClick}>
      <img src={LogoutIcon} alt="Logout" />
    </button>
  );
}
