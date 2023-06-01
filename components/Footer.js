import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div class="container">
          <div class="row">
            <div class="col">
            <img src="/icons8-fb.svg" alt="Fb Logo" className={styles.logo} />
            </div>
            <div class="col">
            <img src="/icons8-linkedin.svg" alt="Linkedin Logo" className={styles.logo} />
            </div>
            <div class="col">
            <img src="/logo-netlify.svg" alt="Netlify Logo" className={styles.logo} />
            </div>
          </div>
          <div class="row">
            <p>icons by <a target="_blank" href="https://icons8.com">Icons8</a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
