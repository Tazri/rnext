import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/icons/logoutIcon.svg";
import useAuth from "../../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();
  const { setAuth } = useAuth();

  function handleLogout() {
    setAuth({});
    navigate("/login");
  }
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={LogoutIcon} alt="logout" />
    </button>
  );
}
