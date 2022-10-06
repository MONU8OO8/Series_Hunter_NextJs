import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

// import Script from 'next/script'
// import Link from 'next/link'

// import styles1 from '../styles/Home1.module.css'
// import styles2 from '../styles/Home2.module.css'
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              {/* <img src="/1img.jpg" className="d-block w-100" alt="..." /> */}
              <Image src="/1img.jpg" alt="Picture of the author" width={1300}
      height={550}/> 
              <div className="carousel-caption d-none d-md-block">
                <h1>Series Hunter</h1>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="/2img.jpg" className="d-block w-100" alt="..." /> */}
              <Image src="/2img.jpg" alt="Picture of the author" width={1300}
      height={550}/> 
              <div className="carousel-caption d-none d-md-block">
                <h1>Series Hunter</h1>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div className="carousel-item">
              {/* <img src="/3img.jpg" className="d-block w-100" alt="..." /> */}
              <Image src="/3img.jpg" alt="Picture of the author" width={1300}
      height={550}/> 
              <div className="carousel-caption d-none d-md-block">
                <h1>Series Hunter</h1>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className={styles.container1}>
        {/* <img className={styles.bodyimg} src="/1.jpg" alt="hunting coder" /> */}
        <Head>
          <title>Series Hunter</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="keywords" content="nextjs, SeriesHunter blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* <Script src='/sc.js' strategy="lazyOnload"></Script> */}
        <main className={styles.main}>
          {/* <div className={styles.imagewrap}> */}
          {/* <Image className={styles.myImg} src="/homeimg.jfif" width={237} height={158}/> */}
          {/* <img className={styles.myImg} src="/1.jpg" width={600} height={400} alt="hunting coder" /> */}
          {/* </div> */}
          <h1 className={styles.title}>
            <span className='dummy'>&lt;Series Hunter/&gt;</span>
          </h1>

          {/* <div className={`${styles1.con} ${styles2.con}`}> */}

          <div className="row">
          <h2 className={styles.h2}>Latest Blogs</h2>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Best webseries in 2022?</h5>
                  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cum sint, id nihil incidunt non possimus placeat enim officia, voluptatum magnam quo. Possimus, odio vitae.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Best webseries in 2022?</h5>
                  <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus quos itaque cupiditate. Cupiditate fuga iste laborum distinctio iure numquam eligendi consequatur vero architecto sint?</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Best webseries in 2022?</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem saepe qui provident! Corrupti accusantium voluptas dolore accusamus doloremque. Dolore possimus tempora corporis, magnam aliquam ad.</p>
                  <a href="#" className="btn btn-primary">Read More</a>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <h2 className={styles.h2}>Latest Blogs</h2>
            <div>
              <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language used to design logic for the web. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic error voluptatum impedit!</p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div>
              <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
              <p className={styles.p}>JavaScript is the language used to design logic for the web</p>
              <button className={styles.btn}>Read More</button>
            </div>
            <div>
              <h3 className={styles.h3}>How to learn JavaScript in 2022?</h3>
              <p>JavaScript is the language used to design logic for the web</p>
              <button className={styles.btn}>Read More</button>
            </div>
          </div> */}
        </main>

        <footer className={styles.footer}>

        </footer>
      </div>
    </>
  )
}