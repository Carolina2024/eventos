import { Button } from "react-bootstrap";

/* el componente recibe prop icon como argumento */
const SocialButton = ({ icon }) => {
  return (
    <Button variant="btn btn-outline-dark rounded-circle p-3 m-2">
      <i className={`fab ${icon}`}></i>
    </Button>
  );
};

export default SocialButton;