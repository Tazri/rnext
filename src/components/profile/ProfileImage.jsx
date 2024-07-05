import { useRef } from "react";
import { actions } from "../../action";
import { useAxios } from "../../hooks/useAxios";
import { useProfile } from "../../hooks/useProfile";
import EditIcon from "./../../assets/icons/edit.svg";
import DemoImage from "./../../assets/images/avatars/avatar_1.png";

export default function ProfileImage() {
  const { state, dispatch } = useProfile();
  const api = useAxios();
  const fileUploadRef = useRef();
  function handleImageUpload(event) {
    event.preventDefault();
    fileUploadRef.current.addEventListener("change", updateImageDisplay);
    fileUploadRef.current.click();
  }

  async function updateImageDisplay() {
    try {
      const formData = new FormData();

      for (const file of fileUploadRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${
          state?.user?.id
        }/avatar`,
        formData
      );

      if (response.status === 200) {
        dispatch({ type: actions.profile.IMAGE_UPDATED, data: response.data });
      }
    } catch (err) {
      dispatch({ type: actions.profile.DATA_FETCH_ERROR, error: err.message });
    }
  }

  const imagePath = state?.user?.avatar;
  const imgUrl = imagePath
    ? `${import.meta.env.VITE_SERVER_BASE_URL}/${imagePath}`
    : DemoImage;

  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      <img
        className="max-w-full rounded-full"
        src={imgUrl}
        alt={state?.user?.firstName}
      />

      <form>
        <button
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          type="submit"
          onClick={handleImageUpload}
        >
          <img src={EditIcon} alt="edit" />
        </button>
        <input type="file" id="file" name="file" hidden ref={fileUploadRef} />
      </form>
    </div>
  );
}
