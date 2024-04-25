import styles from "../components/galeria.module.css";
import { imagenes } from "../assets/images.json";
import React, { useState } from "react";
const { galeria, contenedor, lightbox, visible } = styles;

export const Galeria = () => {
  const [handleLightbox, setHandleLightbox] = useState(false);
  const lightboxClass = handleLightbox ? `${lightbox} ${visible}` : lightbox;
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  const verLightbox = ({ target }: React.MouseEvent<HTMLImageElement>) => {
    const { src, alt } = target as HTMLImageElement;
    setHandleLightbox(true);
    setImage(src);
    setAlt(alt);
  };

  const ocultarLightbox = (e: React.MouseEvent) => {
    e.stopPropagation();
    setHandleLightbox(false);
  };

  return (
    <>
      <article className={galeria}>
        {imagenes.map(({ src, alt, id }) => (
          //<a href={`images/${id}`} key={id}>
          <img
            className={contenedor}
            data-src={src}
            src={`${src}?tr=w-300`}
            alt={alt}
            key={id}
            onClick={verLightbox}
          />
          //</a>
        ))}
      </article>
      <article className={lightboxClass} onClick={ocultarLightbox}>
        <button onClick={ocultarLightbox}>x</button>
        <img
          src={`${image}?tr=w-800`}
          alt={alt}
          onClick={(e) => {
            e.stopPropagation();
          }}
        />
      </article>
    </>
  );
};
