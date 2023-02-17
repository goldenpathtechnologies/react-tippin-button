import { useState } from "react";
import { ReactNodeLike } from "prop-types";
import * as s from "./tippin-button.module.scss";

type TippinButtonProps = {
  userName: string;
  subPath?: string;
  children: ReactNodeLike;
};

const closeButtonImage = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDZMNiAxOCIgc3Ryb2tlPSIjMUIxQjFGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA2TDE4IDE4IiBzdHJva2U9IiMxQjFCMUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=`;

export default function TippinButton(
  {
    userName,
    subPath,
    children,
  }: TippinButtonProps,
): JSX.Element {
  const [showModalTippin, setShowModalTippin] = useState(false);
  const showModalTippinStyles = showModalTippin ? ` ${s.showModalTippin}` : ``;
  const modalTippinContainerStyles = `${s.modalTippinContainer}${showModalTippinStyles}`;
  const handleModalKeyDownClose = (key: string): void => {
    if ([`Escape`, `Enter`, ` `].includes(key)) {
      setShowModalTippin(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        className={s.buttonTippinFilled}
        onClick={() => setShowModalTippin(true)}
      >
        {children}
      </button>
      <div
        className={modalTippinContainerStyles}
        onClick={() => setShowModalTippin(false)}
        onKeyDown={(e) => {
          handleModalKeyDownClose(e.key);
        }}
        role="none"
        tabIndex={-1}
      >
        <div className={s.modalTippinContent}>
          <div
            className={s.closeButtonTippin}
            onClick={() => setShowModalTippin(false)}
            onKeyDown={(e) => {
              handleModalKeyDownClose(e.key);
            }}
            role="button"
            tabIndex={-1}
          >
            <img
              className={s.closeText}
              src={closeButtonImage}
              alt="Tippin modal close button"
            />
          </div>
          <iframe
            title={`Tippin user card for ${userName}`}
            src={`${subPath}${subPath.slice(-1) !== `/` ? `/` : ``}userCard?special=true&u=${userName}`}
            className={s.modalTippinContentPortal}
          />
        </div>
      </div>
    </div>
  );
}

TippinButton.defaultProps = {
  subPath: `https://tippin.me/`,
};
