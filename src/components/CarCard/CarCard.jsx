import { useState } from "react";
import PropTypes from "prop-types";
import numberWithCommas from "../../helpers/numberWithCommas";
import FavIcon from "../FavIcon/FavIcon";
import ModalCarDetails from "../modal/ModalCarDetails";


const CarCard = ({ car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    functionalities,
    rentalPrice,
    rentalCompany,
    address,
    mileage,
  } = car;

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const splittedAddress = address.split(" ");

  const city = splittedAddress[3].slice(0, splittedAddress[3].length - 1);

  const mileageString = numberWithCommas(mileage);

  return (
    <div className="flex flex-col w-[274px] ">
      <div className="flex relative justify-center items-center rounded-xl overflow-hidden mb-3.5 h-[268px] w-[274px]">
        <FavIcon id={id} />
        <img
          className="w-full h-full max-w-none object-cover"
          src={img}
          alt="Car photo"
        ></img>
      </div>
      <div className="flex justify-between mb-2">
        <p className="text-base font-medium leading-6 text-primaryt max-h-6 overflow-hidden">
          {make} <span className="text-accent">{model}</span>, {year}
        </p>
        <p>{rentalPrice}</p>
      </div>
      <p className="text-xs font-normal leading-4.5 text-secondaryt max-h-8 overflow-hidden">
        {city} | {splittedAddress[4]} | {rentalCompany} |{type} | {model} |{" "}
        {mileageString} | {functionalities[0]}
      </p>
      <button
        onClick={() => toggleModal()}
        type="button"
        className="inline-flex w-full justify-center px-24 py-3 rounded-lg bg-accent text-sm text-white leading-5 mt-8 hover:bg-hover"
      >
        Learn more
      </button>
      {showModal && <ModalCarDetails car={car} />}
    </div>
  );
};

export default CarCard;

CarCard.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    functionalities: PropTypes.arrayOf(PropTypes.string).isRequired,
    rentalPrice: PropTypes.string.isRequired,
    rentalCompany: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    mileage: PropTypes.number.isRequired,
  }).isRequired,
};
