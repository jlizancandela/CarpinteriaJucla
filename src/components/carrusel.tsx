import { useEffect, useState } from "react";
import styles from "../components/cassusel.module.css";

export interface CarruselProps {
  images: {
    src: string;
    alt: string;
  }[];
  transition?: boolean;
}

export function Carrusel(props: CarruselProps) {
  const cuantas = props.images.length - 1;
  const [puntero, setPuntero] = useState(1);
  const [src, setSrc] = useState(props.images[0].src);
  const [alt, setAlt] = useState(props.images[0].alt);
  const [loaded, setLoaded] = useState(true);

  let loadedClass = `${styles.image}`;

  if (props.transition) {
    loadedClass = loaded
      ? `${styles.image} ${styles.loaded}`
      : `${styles.image} ${styles.unloaded}`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setLoaded(false);
        setPuntero(puntero >= cuantas ? 0 : puntero + 1);
        setSrc(props.images[puntero].src);
        setAlt(props.images[puntero].alt);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  });

  return (
    <>
      <section className={styles.container}>
        <img
          src={src}
          alt={alt}
          className={loadedClass}
          onLoad={() => {
            setLoaded(true);
          }}
        />
        <section className={styles.title}>
          <h1>Carpinteria Jucla</h1>
          <h2>ENTRA EN EL MUNDO DE LA MADERA</h2>
        </section>
        <section className={styles.text}>
          {/* <h2>Nuestra Misión:</h2> */}
          <p>
            En Carpinteria Jucla, nos esforzamos por fusionar la tradición
            artesanal con la innovación moderna.
          </p>
          <p>
            Cada proyecto es una obra de arte en sí misma, donde la calidad y la
            atención al detalle son nuestra máxima prioridad.
          </p>
        </section>
      </section>
    </>
  );
}
