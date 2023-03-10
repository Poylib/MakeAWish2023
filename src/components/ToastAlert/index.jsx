import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

const ToastAlert = () => {
  return <Toast position={'bottom-center'} autoClose={2000} closeButton={false} limit={1} newestOnTop={false} closeOnClick={false} rtl={false} pauseOnFocusLoss hideProgressBar draggable={false} theme='dark' />;
};

const Toast = styled(ToastContainer)`
  bottom: 22%;

  .Toastify__toast {
    width: 90%;
    margin: 0 auto;
    border-radius: 40px;
    text-align: center;
  }
`;

export default ToastAlert;
