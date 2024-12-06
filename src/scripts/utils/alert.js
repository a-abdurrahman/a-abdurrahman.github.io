import Swal from 'sweetalert2';

const success = Swal.mixin({
  title: 'Success!',
  text: 'Request is successful',
  icon: 'success',
});
const fail = Swal.mixin({
  title: 'Whoops!',
  icon: 'error',
});

export { success, fail };