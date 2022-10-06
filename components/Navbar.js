import React from 'react'
import styles from '../styles/Home.module.css'
// import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link'

const Navbar = () => {
  return (
    // <nav className={styles.mainnav}>
    //     <ul>
    //       <Link href='/'><a><li>Home</li></a></Link>
    //       <Link href='/about'><a><li>About</li></a></Link>
    //       <Link href='/blog'><a><li>Blog</li></a></Link>
    // <Link href='/contact'><a><li>Contact</li></a></Link>
    //     </ul>
    //   </nav>

    <nav className="navbar navbar-expand-md b-4 navbar-dark bg-dark">
      <div className={styles.navimg}>
        <img src="/logo1.png" alt="" />
      </div>
      <div className="navcenter navbar-collapse collapse justify-content-center" id="collapsingNavbar">
        <ul className="navbar-nav">
          <Link className="nav-item" href="/"><a className="nav-link" >home</a></Link>
          <Link className="nav-item" href="/blog">
            <a className="nav-link" >Blogs</a>
          </Link>
          <Link className="nav-item" href="/about">
            <a className="nav-link" >About</a>
          </Link>
          <Link className="nav-item" href="/contact">
            <a className="nav-link" >Contact</a>
          </Link>
        </ul>



      </div>
      <div className="d-flex w-15 order-0">
        <a className="navbar-brand mr-1" href="#">SeriesHunter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar