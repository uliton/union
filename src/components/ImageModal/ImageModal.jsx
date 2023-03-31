import React, { useContext, useState } from "react";
import classNames from "classnames";
import { getTranslation, Language } from "../../functions/language";
import { Close } from "../../images/icons/Close";
import { Button } from "../../ui/Button/Button";

export const ImageModal = ({ src, setModalStatus, project_id }) => {
  const lang = useContext(Language);
  const MOCK = getTranslation(lang);
  const [unmount, setUnmount] = useState(false);

  const handleExitClick = () => {
    setUnmount(true);
  };

  const modalUnmount = () => {
    if (unmount) {
      setModalStatus(false);
    }
  };

  return (
    <div
      id="image-modal"
      className={classNames('image-modal', {
        'image-modal--unmount': unmount
      })}
      onAnimationEnd={modalUnmount}
    >
      <div
        className="image-modal__close"
        onClick={handleExitClick}
      >
        <Close />
      </div>

      <div className="image-modal__body">
        <img
          src={src}
          alt="Union Stone"
          className="image-modal__img"
        />
      </div>

      <Button
        content={MOCK.gallery_modal_button}
        imageModal={true}
        link={`/portfolio/${project_id}`}
      />
    </div>
  );
};
