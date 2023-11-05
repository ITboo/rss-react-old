import { ReactElement } from "react";

import "./Details.css";

export interface DetailsProps {
  children: ReactElement;
  setModal: () => void;
}

function Details({ children, setModal }: DetailsProps) {
  return (
    <div className="modal">
      <div className="modal__overlay" onClick={setModal}></div>
      <div className="modal__wrapper">{children}</div>
    </div>
  );
}

export default Details;
