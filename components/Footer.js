import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className="container">
          <div className="row">
            <div className="col">
            <img src="/instagram.svg" className={styles.logo} />
            </div>
            <div className="col">
            <img src="/vimeo.svg" className={styles.logo} />
            </div>
            <div className="col">
            <img src="/behance.svg" className={styles.logo} />
            </div>
            <div className="col">
            <img src="/linkedin.svg" className={styles.logo} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
