import { useState } from "react";
import { ReactNodeLike } from "prop-types";
import classNames from "classnames";
import * as s from "./tippin-button.module.scss";

type TippinButtonProps = {
  userName: string;
  // AES_KEY?: string;
  // AES_IV?: string;
  // apiOrigin?: string;
  // baseUrlWS?: string;
  // debugLogFn?: () => void;
  // basePrefix?: string;
  subPath?: string;
  children: ReactNodeLike;
};

const closeButtonImage = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDZMNiAxOCIgc3Ryb2tlPSIjMUIxQjFGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA2TDE4IDE4IiBzdHJva2U9IiMxQjFCMUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=`;

export default function TippinButton(
  {
    userName,
    // AES_KEY,
    // AES_IV,
    // apiOrigin,
    // baseUrlWS,
    // debugLogFn,
    // basePrefix,
    subPath,
    children,
  }: TippinButtonProps,
): JSX.Element {
  const [showModalTippin, setShowModalTippin] = useState(false);

  return (
    <div>
      <button
        type="button"
        className={s.buttonTippinFilled}
        onClick={() => setShowModalTippin(true)}
      >
        {children}
      </button>
      {/* TODO: Sort out a11y issues with modal overlay. */}
      <div
        className={classNames(s.modalTippinContainer, { [s.showModalTippin]: showModalTippin })}
        onClick={() => setShowModalTippin(false)}
      >
        <div className={s.modalTippinContent}>
          {/* eslint-disable-next-line max-len */}
          {/* TODO: Consider if closeButtonTippin should be a button or not due to existence of click event. */}
          <div
            className={s.closeButtonTippin}
            onClick={() => setShowModalTippin(false)}
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
  // AES_KEY: `83W6V!31SP82J1#9T3W2V!81S!8PY1$9`,
  // AES_IV: `to1qcxmsq938l7fb`,
  // apiOrigin: `https://api.tippin.me`,
  // baseUrlWS: `wss://api.tippin.me/v2_ws`,
  // debugLogFn: () => {},
  // basePrefix: `/`,
  subPath: `https://tippin.me/`,
};
