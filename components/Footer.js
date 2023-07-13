import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div class="container">
          <div class="row">
            <div class="col">
            <img src="/instagram.svg" className={styles.logo} />
            </div>
            <div class="col">
            <img src="/vimeo.svg" className={styles.logo} />
            </div>
            <div class="col">
            <img src="/behance.svg" className={styles.logo} />
            </div>
            <div class="col">
            <img src="/linkedin.svg" className={styles.logo} />
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
