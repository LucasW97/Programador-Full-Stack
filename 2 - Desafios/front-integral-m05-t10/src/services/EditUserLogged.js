import { toastError } from "../helpers/ToastError";
import { toastSucess } from "../helpers/ToastSuccess";
import { setLocalStorageItem } from "../helpers/localStorage";
import { api } from "../lib/axios";

export const editUserLogged = async (formData, token, onClose) => {
  try {
    const response = await api.put("/users/edit/profile", formData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setLocalStorageItem("name", formData.name);
    toastSucess("Cadastrado com sucesso");
    onClose();
    return response;
  } catch (error) {
    const { message } = error.response.data;
    toastError(message);
  }
};
