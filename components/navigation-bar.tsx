import Besquare from "images/besquare.svg";

const NavigationBar = () => {
  return (
    <div className="fixed inline-flex items-center top-0 w-full bg-white shadow-md h-14 p-3">
      <Besquare className="h-5 mr-4" />
      Introduction to HTML, SCSS and JavaScript
    </div>
  );
};

export default NavigationBar;
