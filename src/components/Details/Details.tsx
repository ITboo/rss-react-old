import ReactDOM from "react-dom";
import { ReactElement } from "react";
import { useAppDispatch } from "../../app/redux/hooks/hooks";
import { closeModal } from "../../app/redux/slices/detailsSlice";

export interface DetailsProps {
  children: ReactElement;
}

function Details({ children }: DetailsProps) {
  const dispatch = useAppDispatch();

  return ReactDOM.createPortal(
    <div className="modal" data-testid="modal">
      <div className="overlay" onClick={() => dispatch(closeModal())}></div>
      <div className="modal__wrapper">{children}</div>
    </div>,
    document.body,
  );
}

export default Details;
