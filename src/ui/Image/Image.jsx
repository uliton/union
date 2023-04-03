import React, { useState } from 'react';
import defaultImg from './img.png';
import './Image.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ImageModal } from '../../components/ImageModal/ImageModal';

export const Image = ({
  src = defaultImg,
  link = '',
  name = 'Union Stone',
  project_id,
  projects = false,
  gallery = false,
  project = false,
}) => {
  const [modalStatus, setModalStatus] = useState(false);

  // scroll disable
  modalStatus ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto';

  const handeClick = () => {
    setModalStatus(true)
  }

  const correctName = name.split('_').join(' ');
  console.log(correctName)

  return (
    <div
      className={classNames('image-container', {
        'image-container--projects': projects,
        'image-container--gallery': gallery,
        'image-container--project': project,
      })}
    >
      {link.length
      ? (
        <Link
          to={link}
          className={classNames('image-container__container', {
            'image-container__container--projects': projects,
          })}
          data-content={name}
        >
          <img
            src={src}
            alt={name}
            title={name}
            className='image-container__img'
          />
        </Link>
      )
      : (
        <div
          className={classNames('image-container__container', {
            'image-container__container--projects': projects,
          })}
          data-content={correctName}
          onClick={handeClick}
        >
          <img
            src={src}
            alt={name}
            title={correctName}
            className={classNames('image-container__img', {
              'image-container__img--gallery': gallery
            })}
          />
        </div>
      )}

      {modalStatus && (
        <ImageModal
          src={src}
          setModalStatus={setModalStatus}
          project_id={project_id}
        />
      )}
    </div>
  );
};
