import Swal from "sweetalert2";

export const successAlert = (message: string) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const errorAlert = (message: string) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
