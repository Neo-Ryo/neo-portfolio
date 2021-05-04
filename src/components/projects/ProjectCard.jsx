import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({
  title,
  description,
  picture,
  link,
  isDeployed,
}) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.module}>
        <img src={picture} alt={title} className={styles.picture} />
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {isDeployed ? (
          <a className={styles.link} href={link} rel='external' target='_blank'>
            {link}
          </a>
        ) : (
          <p className={styles.disabled}>
            this project is currently disabled...
          </p>
        )}
      </div>
    </div>
  );
}
