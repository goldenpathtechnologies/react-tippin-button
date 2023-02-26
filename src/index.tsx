import React, { CSSProperties, useState } from "react";
import { ReactNodeLike } from "prop-types";
import styled, { css } from "styled-components";

type TippinButtonProps = {
  userName: string;
  subPath?: string;
  children: ReactNodeLike;
  className?: string | undefined;
  style?: CSSProperties | undefined;
};

const closeButtonImage = `data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE4IDZMNiAxOCIgc3Ryb2tlPSIjMUIxQjFGIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNNiA2TDE4IDE4IiBzdHJva2U9IiMxQjFCMUYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo=`;

type ModalContainerProps = {
  show: boolean;
};

const ModalContainer = styled.div`
  position: fixed;
  z-index: 1000;
  text-align: left;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  opacity: 0;
  visibility: hidden;
  transform: scale(1.1);
  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;
  
  ${(props: ModalContainerProps) => props.show && css`
    opacity: 1;
    visibility: visible;
    transform: scale(1.0);
    transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;
  `}
`;

const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 396px;
  height: 623px;
  border-radius: 5px;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 566px;
  right: 47px;
  width: 96px;
  height: 53px;
  line-height: 49px;
  background: white;
  font-size: 24px;
  border-radius: 56px;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: darkgray;
  }
`;

const CloseButtonImage = styled.img`
  width: 24px;
  height: 24px;
`;

const ModalContentPortal = styled.iframe`
  border: none;
  width: 396px;
  height: 623px;
`;

export default function TippinButton(
  {
    userName,
    subPath,
    children,
    className,
    style,
  }: TippinButtonProps,
): JSX.Element {
  const [showModalTippin, setShowModalTippin] = useState(false);

  const handleModalKeyDownClose = (key: string): void => {
    if ([`Escape`, `Enter`, ` `].includes(key)) {
      setShowModalTippin(false);
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModalTippin(true)}
        className={className}
        style={style}
      >
        {children}
      </button>
      <ModalContainer
        show={showModalTippin}
        onClick={() => setShowModalTippin(false)}
        onKeyDown={(e) => {
          handleModalKeyDownClose(e.key);
        }}
        role="none"
        tabIndex={-1}
      >
        <ModalContent>
          <CloseButton
            onClick={() => setShowModalTippin(false)}
            onKeyDown={(e) => {
              handleModalKeyDownClose(e.key);
            }}
            role="button"
            tabIndex={-1}
          >
            <CloseButtonImage
              src={closeButtonImage}
              alt="Tippin modal close button"
            />
          </CloseButton>
          <ModalContentPortal
            title={`Tippin user card for ${userName}`}
            src={`${subPath}${subPath.slice(-1) !== `/` ? `/` : ``}userCard?special=true&u=${userName}`}
          />
        </ModalContent>
      </ModalContainer>
    </div>
  );
}

TippinButton.defaultProps = {
  subPath: `https://tippin.me/`,
  className: undefined,
  style: undefined,
};
