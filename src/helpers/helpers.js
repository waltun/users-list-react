import Swal from "sweetalert2";

// fire sweetalert
export function sweetalert(title, text, icon = "success", customClass = 'font-IRANSans', timer = 2000) {
    Swal.fire({
        title: title,
        icon: icon,
        text: text,
        customClass: customClass,
        timer: timer,
    });
}