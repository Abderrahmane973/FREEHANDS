import React from 'react' 
import { useRef } from 'react'

 function Home() {
  const Contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })}
    return (
        <div>
<>

 {/* navigation */}
 <header className="navigation bg-tertiary" >
    <nav className="navbar navbar-expand-xl navbar-light text-center py-3">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
            loading="prelaod"
            decoding="async"
            className="img-fluid"
            width={160}
            src="assets/images/FreeHands3.png"
            alt="Wallet"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {" "}
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {" "}
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item ">
              {" "}
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item ">
              {" "}
              <a className="nav-link" href="/How-it-work">
                How It Works
              </a>
            </li>
            <li className="nav-item ">
              {" "}
              <a className="nav-link" href="/Services">
                Services
              </a>
            </li>
            <li className="nav-item ">
              {" "}
              <a onClick={() => scrollToSection(Contact)} className="nav-link">
              Contact
               </a>
            </li>
            <li className="nav-item dropdown">

              {" "}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item " href="/blog">
                    Blog
                  </a>
                </li>
               
                <li>
                  <a className="dropdown-item " href="/service-details">
                    Service Details
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/faq">
                    FAQ's
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/legal">
                    Legal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/terms">
                    Terms &amp; Condition
                  </a>
                </li>
                <li>
                  <a className="dropdown-item " href="/privacy-policy">
                    Privacy &amp; Policy
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* account btn */}{" "}
          <a href="/Login" className="btn btn-primary ms-2 ms-lg-3">
            Log In
          </a>
          {/* account btn */}{" "}
          <a href="/CF" className="btn btn-primary ms-2 ms-lg-3">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  </header>
  {/* /navigation */}
  <div
    className="modal applyLoanModal fade"
    id="applyLoan"
    tabIndex={-1}
    aria-labelledby="applyLoanLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-bottom-0">
          <h4 className="modal-title" id="exampleModalLabel">
            How much do you need?
          </h4>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">
          <form action="#!" method="post">
            <div className="row">
              <div className="col-lg-6 mb-4 pb-2">
                <div className="form-group">
                  <label htmlFor="loan_amount" className="form-label">
                    Amount
                  </label>
                  <input
                    type="number"
                    className="form-control shadow-none"
                    id="loan_amount"
                    placeholder="ex: 25000"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-4 pb-2">
                <div className="form-group">
                  <label htmlFor="loan_how_long_for" className="form-label">
                    How long for?
                  </label>
                  <input
                    type="number"
                    className="form-control shadow-none"
                    id="loan_how_long_for"
                    placeholder="ex: 12"
                  />
                </div>
              </div>
              <div className="col-lg-12 mb-4 pb-2">
                <div className="form-group">
                  <label htmlFor="loan_repayment" className="form-label">
                    Repayment
                  </label>
                  <input
                    type="number"
                    className="form-control shadow-none"
                    id="loan_repayment"
                    disabled=""
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-4 pb-2">
                <div className="form-group">
                  <label htmlFor="loan_full_name" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control shadow-none"
                    id="loan_full_name"
                  />
                </div>
              </div>
              <div className="col-lg-6 mb-4 pb-2">
                <div className="form-group">
                  <label htmlFor="loan_email_address" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control shadow-none"
                    id="loan_email_address"
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="btn btn-primary w-100">
                  Get Your Loan Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</>





<>
  <section className="banner bg-tertiary position-relative overflow-hidden">
    <div className="container">
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="block text-center text-lg-start pe-0 pe-xl-5">
            <h1 className="text-capitalize mb-4">
            Get high-quality solutions to grow your business fast
            </h1>
            <p className="mb-4">
              
              <br />
              
            </p>{" "}
            <div className="col-0">

            <div className="input-group">
  <input
    className="form-control shadow-none bg-white"
    id="search-query"
    name="s"
    type="search"
    placeholder="Search for any service..."
    autoComplete="off"
  />
  <button className="btn btn-primary px-3 ">
    <i className="fa-solid fa-magnifying-glass fa-sm"></i>
  </button>
</div>




</div>
            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ps-lg-5 text-center">
            <img
              loading="lazy"
              decoding="async"
              src="assets/images/banner/banner3.png"
              alt="banner image"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="has-shapes">
      <svg
        className="shape shape-left text-light"
        viewBox="0 0 192 752"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-30.883 0C-41.3436 36.4248 -22.7145 75.8085 4.29154 102.398C31.2976 128.987 65.8677 146.199 97.6457 166.87C129.424 187.542 160.139 213.902 172.162 249.847C193.542 313.799 149.886 378.897 129.069 443.036C97.5623 540.079 122.109 653.229 191 728.495"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-55.5959 7.52271C-66.0565 43.9475 -47.4274 83.3312 -20.4214 109.92C6.58466 136.51 41.1549 153.722 72.9328 174.393C104.711 195.064 135.426 221.425 147.449 257.37C168.829 321.322 125.174 386.42 104.356 450.559C72.8494 547.601 97.3965 660.752 166.287 736.018"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-80.3302 15.0449C-90.7909 51.4697 -72.1617 90.8535 -45.1557 117.443C-18.1497 144.032 16.4205 161.244 48.1984 181.915C79.9763 202.587 110.691 228.947 122.715 264.892C144.095 328.844 100.439 393.942 79.622 458.081C48.115 555.123 72.6622 668.274 141.552 743.54"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-105.045 22.5676C-115.506 58.9924 -96.8766 98.3762 -69.8706 124.965C-42.8646 151.555 -8.29436 168.767 23.4835 189.438C55.2615 210.109 85.9766 236.469 98.0001 272.415C119.38 336.367 75.7243 401.464 54.9072 465.604C23.4002 562.646 47.9473 675.796 116.838 751.063"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
      <svg
        className="shape shape-right text-light"
        viewBox="0 0 731 746"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1794 745.14C1.80036 707.275 -5.75764 666.015 8.73984 629.537C27.748 581.745 80.4729 554.968 131.538 548.843C182.604 542.703 234.032 552.841 285.323 556.748C336.615 560.64 391.543 557.276 433.828 527.964C492.452 487.323 511.701 408.123 564.607 360.255C608.718 320.353 675.307 307.183 731.29 327.323"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M51.0253 745.14C41.2045 709.326 34.0538 670.284 47.7668 635.783C65.7491 590.571 115.623 565.242 163.928 559.449C212.248 553.641 260.884 563.235 309.4 566.931C357.916 570.627 409.887 567.429 449.879 539.701C505.35 501.247 523.543 426.331 573.598 381.059C615.326 343.314 678.324 330.853 731.275 349.906"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M89.8715 745.14C80.6239 711.363 73.8654 674.568 86.8091 642.028C103.766 599.396 150.788 575.515 196.347 570.054C241.906 564.578 287.767 573.629 333.523 577.099C379.278 580.584 428.277 577.567 465.976 551.423C518.279 515.172 535.431 444.525 582.62 401.832C621.964 366.229 681.356 354.493 731.291 372.46"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M128.718 745.14C120.029 713.414 113.678 678.838 125.837 648.274C141.768 608.221 185.939 585.788 228.737 580.659C271.536 575.515 314.621 584.008 357.6 587.282C400.58 590.556 446.607 587.719 482.028 563.16C531.163 529.111 547.275 462.733 591.612 422.635C628.572 389.19 684.375 378.162 731.276 395.043"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M167.564 745.14C159.432 715.451 153.504 683.107 164.863 654.519C179.753 617.046 221.088 596.062 261.126 591.265C301.164 586.452 341.473 594.402 381.677 597.465C421.88 600.527 464.95 597.872 498.094 574.896C544.061 543.035 559.146 480.942 600.617 443.423C635.194 412.135 687.406 401.817 731.276 417.612"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M817.266 289.466C813.108 259.989 787.151 237.697 759.261 227.271C731.372 216.846 701.077 215.553 671.666 210.904C642.254 206.24 611.795 197.156 591.664 175.224C555.853 136.189 566.345 75.5336 560.763 22.8649C552.302 -56.8256 498.487 -130.133 425 -162.081"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M832.584 276.159C828.427 246.683 802.469 224.391 774.58 213.965C746.69 203.539 716.395 202.246 686.984 197.598C657.573 192.934 627.114 183.85 606.982 161.918C571.172 122.883 581.663 62.2275 576.082 9.55873C567.62 -70.1318 513.806 -143.439 440.318 -175.387"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M847.904 262.853C843.747 233.376 817.789 211.084 789.9 200.659C762.011 190.233 731.716 188.94 702.304 184.292C672.893 179.627 642.434 170.544 622.303 148.612C586.492 109.577 596.983 48.9211 591.402 -3.74766C582.94 -83.4382 529.126 -156.746 455.638 -188.694"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M863.24 249.547C859.083 220.07 833.125 197.778 805.236 187.353C777.347 176.927 747.051 175.634 717.64 170.986C688.229 166.321 657.77 157.237 637.639 135.306C601.828 96.2707 612.319 35.6149 606.738 -17.0538C598.276 -96.7443 544.462 -170.052 470.974 -202"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
    </div>
  </section>

  
    

  <section className="section">
   
   <div className="container">
      <div className="row">
       <div className="col-lg-4 col-md-6">
          <div >
            <h1>Our online and offline services</h1>
            
          </div>
         </div>
       </div>
    </div>
      
    <div className="container">
      <div className="row">
       
      <div className="row">
  {/* Design */}
  <div className="col-lg-4 col-md-6 service-item">
    <a className="text-black" href="service-details1">
      <div className="block">
        <span className="colored-box text-center h3 mb-4">
          <i className="fas fa-paint-brush"></i>
        </span>
        <h3 className="mb-3 service-title">Graphic Design</h3>
        <p className="mb-0 service-description">
          logos creation , professional banners, infographics and visual aids.
        </p>
      </div>
    </a>
  </div>
       
  {/* Développement Web */}
  <div className="col-lg-4 col-md-6 service-item">
    <a className="text-black" href="service-details">
      <div className="block">
        <span className="colored-box text-center h3 mb-4">
          <i className="fas fa-code"></i>
        </span>
        <h3 className="mb-3 service-title">Web devlopment</h3>
        <p className="mb-0 service-description">
        Creation of websites, applications and e-commerce solutions.
        </p>
      </div>
    </a>
  </div>

  {/* Rédaction et Traduction */}
  <div className="col-lg-4 col-md-6 service-item">
    <a className="text-black" href="/Service-Details2">
      <div className="block">
        <span className="colored-box text-center h3 mb-4">
          <i className="fas fa-pen"></i>
        </span>
        <h3 className="mb-3 service-title">Editing and Translation</h3>
        <p className="mb-0 service-description">
        Article writing, SEO content creation and multilingual translation.
        </p>
      </div>
    </a>
  </div>

  {/* Marketing Digital */}
  <div className="col-lg-4 col-md-6 service-item">
    <a className="text-black" href="/Service-Details3">
      <div className="block">
        <span className="colored-box text-center h3 mb-4">
          <i className="fas fa-chart-line"></i>
        </span>
        <h3 className="mb-3 service-title">Digital Marketing </h3>
        <p className="mb-0 service-description">
        SEO, online advertising, social media management and advertising campaigns.
        </p>
      </div>
    </a>
  </div>

  {/* finance and accounting */}
  <div className="col-lg-4 col-md-6 service-item">
    <a className="text-black" href="/Service-Details4">
      <div className="block">
        <span className="colored-box text-center h3 mb-4">
          <i className="fas fa-coins"></i>
        </span>
        <h3 className="mb-3 service-title">Finance and Accounting</h3>
        <p className="mb-0 service-description">
        Thousands of pros are ready to help with invoicing, tax returns, bookkeeping, and more.
        </p>
      </div>
    </a>
  </div> 

 {/* Legal */}
 <div className="col-lg-4 col-md-6 service-item">
    <a className="text-black" href="/Service-Details5">
      <div className="block">
        <span className="colored-box text-center h3 mb-4">
          <i className="fas fa-gavel"></i>
        </span>
        <h3 className="mb-3 service-title">Legal</h3>
        <p className="mb-0 service-description">
        Hundreds of independent professionals to help you create, navigate, and translate legal documents; register a trademark; or get general advice.
        </p>
      </div>
    </a>
    </div>

 </div>
    </div>
    </div>
  </section>
  {/*
  <section className="about-section section bg-tertiary position-relative overflow-hidden">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <div className="section-title">
            <p className="text-primary text-uppercase fw-bold mb-3">
              About Ourselves
            </p>
            <h1>Fast Funding &amp; A Flexible Payment</h1>
            <p className="lead mb-0 mt-4"></p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consv
              allis quam aliquet integer eget magna ullam corper intesager
              vulutate aenean nunc quis a urna morbi id vitae. Vulpuate nisl
            </p>
            <p>
              sed morbi sit ut placerat eges aeftas et. Pellen tesque tristisque
              magnis augue gravida pulvinar placerat. Tellus massa pretra
              scelerisque leo. In volutpat arcu nunc nisl et, viverra faucisfbus
            </p>
            <p />{" "}
            <a className="btn btn-primary mt-4" href="about">
              Know About Us
            </a>
          </div>
        </div>
        <div className="col-lg-7 text-center text-lg-end">
          <img
            loading="lazy"
            decoding="async"
            src="assets/images/about-us.png"
            alt="About Ourselves"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
    <div className="has-shapes">
      <svg
        className="shape shape-left text-light"
        width={381}
        height={443}
        viewBox="0 0 381 443"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M334.266 499.007C330.108 469.108 304.151 446.496 276.261 435.921C248.372 425.346 218.077 424.035 188.666 419.32C159.254 414.589 128.795 405.375 108.664 383.129C72.8533 343.535 83.3445 282.01 77.7634 228.587C69.3017 147.754 15.4873 73.3967 -58.0001 40.9907"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M349.584 485.51C345.427 455.611 319.469 433 291.58 422.425C263.69 411.85 233.395 410.538 203.984 405.823C174.573 401.092 144.114 391.878 123.982 369.632C88.1716 330.038 98.6628 268.513 93.0817 215.09C84.62 134.258 30.8056 59.8999 -42.6819 27.494"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M364.904 472.013C360.747 442.114 334.789 419.503 306.9 408.928C279.011 398.352 248.716 397.041 219.304 392.326C189.893 387.595 159.434 378.381 139.303 356.135C103.492 316.541 113.983 255.016 108.402 201.593C99.9403 120.76 46.1259 46.4028 -27.3616 13.9969"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M380.24 458.516C376.083 428.617 350.125 406.006 322.236 395.431C294.347 384.856 264.051 383.544 234.64 378.829C205.229 374.098 174.77 364.884 154.639 342.638C118.828 303.044 129.319 241.519 123.738 188.096C115.276 107.264 61.4619 32.906 -12.0255 0.500103"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
      <svg
        className="shape shape-right text-light"
        width={406}
        height={433}
        viewBox="0 0 406 433"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M101.974 -86.77C128.962 -74.8992 143.467 -43.2447 146.175 -12.7857C148.883 17.6734 142.273 48.1263 139.087 78.5816C135.916 109.041 136.681 141.702 152.351 167.47C180.247 213.314 240.712 218.81 289.413 238.184C363.095 267.516 418.962 340.253 430.36 421.687"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M118.607 -98.5031C145.596 -86.6323 160.101 -54.9778 162.809 -24.5188C165.517 5.94031 158.907 36.3933 155.72 66.8486C152.549 97.3082 153.314 129.969 168.985 155.737C196.881 201.581 257.346 207.077 306.047 226.451C379.729 255.783 435.596 328.52 446.994 409.954"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M135.241 -110.238C162.23 -98.3675 176.735 -66.7131 179.443 -36.254C182.151 -5.79492 175.541 24.6581 172.354 55.1134C169.183 85.573 169.948 118.234 185.619 144.002C213.515 189.846 273.98 195.342 322.681 214.716C396.363 244.048 452.23 316.785 463.627 398.219"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M151.879 -121.989C178.867 -110.118 193.373 -78.4638 196.081 -48.0047C198.789 -17.5457 192.179 12.9074 188.992 43.3627C185.821 73.8223 186.586 106.483 202.256 132.251C230.153 178.095 290.618 183.591 339.318 202.965C413.001 232.297 468.867 305.034 480.265 386.468"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
    </div>
  </section>
  <section className="section">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-5">
          <div className="section-title">
            <p className="text-primary text-uppercase fw-bold mb-3">
              Difference Of Us
            </p>
            <h1>
              What Makes Us <br /> Different Form Other?
            </h1>
            <div className="content mb-0 mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consv
                allis quam aliquet integer eget magna ullam corper intesager
                peent esque urna. Ac eu fringilla intea dger egadv estas ut. Sed
                vulutate aenean nunc quis a urna morbi id vitae. Vulpuate nisl
              </p>
              <p>
                sed morbi sit ut placerat eges aeftas et. Pellen tesque
                tristisque magnis augue gravida pulvinar placerat. Tellus massa
                pretra scelerisque leo. In volutpat arcu nunc nisl et, viverra
                faucisfbus egestas. In habitasse sagittis, convallis ut commodo
                amet, odio sagittis. Maecenas massa turpis duis felis, massa.
                Morbi feugiat.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
            <div className="d-block d-sm-flex align-items-center m-2">
              <div className="icon me-4 mb-4 mb-sm-0">
                {" "}
                <i
                  className="fas fa-shield-alt mt-4"
                  style={{ fontSize: 36 }}
                />
              </div>
              <div className="block">
                <h3 className="mb-3">Fast And Secure Process</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing. Portaa
                  nulla congue sed aliquam id adipiscing auue
                </p>
              </div>
            </div>
          </div>
          <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
            <div className="d-block d-sm-flex align-items-center m-2">
              <div className="icon me-4 mb-4 mb-sm-0">
                {" "}
                <i
                  className="fas fa-blender-phone mt-4"
                  style={{ fontSize: 36 }}
                />
              </div>
              <div className="block">
                <h3 className="mb-3">Quick Question Answers</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing. Portaa
                  nulla congue sed aliquam id adipiscing auue
                </p>
              </div>
            </div>
          </div>
          <div className="difference-of-us-item p-3 rounded mr-0 me-lg-4">
            <div className="d-block d-sm-flex align-items-center m-2">
              <div className="icon me-4 mb-4 mb-sm-0">
                {" "}
                <i
                  className="fas fa-money-bill-alt mt-4"
                  style={{ fontSize: 36 }}
                />
              </div>
              <div className="block">
                <h3 className="mb-3">We Get You Your Cash Quick</h3>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing. Portaa
                  nulla congue sed aliquam id adipiscing auue
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="homepage_tab position-relative">
    <div className="section container">
      <div className="row justify-content-center">
        <div className="col-lg-8 mb-4">
          <div className="section-title text-center">
            <p className="text-primary text-uppercase fw-bold mb-3">
              Difference Of Us
            </p>
            <h1>Get Know The Basics Simple Pricing And Payments</h1>
          </div>
        </div>
        <div className="col-lg-10">
          <ul
            className="payment_info_tab nav nav-pills justify-content-center mb-4"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item m-2" role="presentation">
              {" "}
              <a
                className="nav-link btn btn-outline-primary effect-none text-dark active"
                id="pills-how-much-can-i-recive-tab"
                data-bs-toggle="pill"
                href="#pills-how-much-can-i-recive"
                role="tab"
                aria-controls="pills-how-much-can-i-recive"
                aria-selected="true"
              >
                How Much Can I Recive?
              </a>
            </li>
            <li className="nav-item m-2" role="presentation">
              {" "}
              <a
                className="nav-link btn btn-outline-primary effect-none text-dark "
                id="pills-how-much-does-it-costs-tab"
                data-bs-toggle="pill"
                href="#pills-how-much-does-it-costs"
                role="tab"
                aria-controls="pills-how-much-does-it-costs"
                aria-selected="true"
              >
                How Much Does It Costs?
              </a>
            </li>
            <li className="nav-item m-2" role="presentation">
              {" "}
              <a
                className="nav-link btn btn-outline-primary effect-none text-dark "
                id="pills-how-do-i-repay-tab"
                data-bs-toggle="pill"
                href="#pills-how-do-i-repay"
                role="tab"
                aria-controls="pills-how-do-i-repay"
                aria-selected="true"
              >
                How Do I Repay?
              </a>
            </li>
          </ul>
          <div
            className="rounded shadow bg-white p-5 tab-content"
            id="pills-tabContent"
          >
            <div
              className="tab-pane fade show active"
              id="pills-how-much-can-i-recive"
              role="tabpanel"
              aria-labelledby="pills-how-much-can-i-recive-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-0">
                  <div className="content-block">
                    <h3 className="mb-4">How Much Can I Recive?</h3>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consec tetasssur adipiscing
                        elit. Tellus integer proin nisl pretium, vestibulum
                        dictum blandit risus. Nisl commodo
                      </p>
                      <p>
                        turpis vivamus donec. Id congue vesti bualum odio
                        dignissim at quisque viverra. Non semper in sed quisque
                        dui. Platea posuere ullamcorper id fames ut sed urna
                        cursus eget. Neque, vel
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                  <div className="image-block text-center">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="assets/images/payment-info.png"
                      alt="How Much Can I Recive?"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade "
              id="pills-how-much-does-it-costs"
              role="tabpanel"
              aria-labelledby="pills-how-much-does-it-costs-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-0">
                  <div className="content-block">
                    <h3 className="mb-4">How Much Does It Costs?</h3>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consec tetasssur adipiscing
                        elit. Tellus integer proin nisl pretium, vestibulum
                        dictum blandit risus. Nisl commodo
                      </p>
                      <p>
                        turpis vivamus donec. Id congue vesti bualum odio
                        dignissim at quisque viverra. Non semper in sed quisque
                        dui. Platea posuere ullamcorper id fames ut sed urna
                        cursus eget. Neque, vel
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                  <div className="image-block text-center">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="assets/images/illustration-2.png"
                      alt="How Much Does It Costs?"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade "
              id="pills-how-do-i-repay"
              role="tabpanel"
              aria-labelledby="pills-how-do-i-repay-tab"
            >
              <div className="row align-items-center">
                <div className="col-md-6 order-1 order-md-0">
                  <div className="content-block">
                    <h3 className="mb-4">How Do I Repay?</h3>
                    <div className="content">
                      <p>
                        Lorem ipsum dolor sit amet, consec tetasssur adipiscing
                        elit. Tellus integer proin nisl pretium, vestibulum
                        dictum blandit risus. Nisl commodo
                      </p>
                      <p>
                        turpis vivamus donec. Id congue vesti bualum odio
                        dignissim at quisque viverra. Non semper in sed quisque
                        dui. Platea posuere ullamcorper id fames ut sed urna
                        cursus eget. Neque, vel
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-0 order-md-1 mb-5 mt-md-0">
                  <div className="image-block text-center">
                    <img
                      loading="lazy"
                      decoding="async"
                      src="assets/images/illustration-1.png"
                      alt="How Do I Repay?"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="has-shapes">
        <svg
          className="shape shape-left text-light"
          width={290}
          height={709}
          viewBox="0 0 290 709"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-119.511 58.4275C-120.188 96.3185 -92.0001 129.539 -59.0325 148.232C-26.0649 166.926 11.7821 174.604 47.8274 186.346C83.8726 198.088 120.364 215.601 141.281 247.209C178.484 303.449 153.165 377.627 149.657 444.969C144.34 546.859 197.336 649.801 283.36 704.673"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
          <path
            d="M-141.434 72.0899C-142.111 109.981 -113.923 143.201 -80.9554 161.895C-47.9878 180.588 -10.1407 188.267 25.9045 200.009C61.9497 211.751 98.4408 229.263 119.358 260.872C156.561 317.111 131.242 391.29 127.734 458.631C122.417 560.522 175.414 663.463 261.437 718.335"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
          <path
            d="M-163.379 85.7578C-164.056 123.649 -135.868 156.869 -102.901 175.563C-69.9331 194.256 -32.086 201.934 3.9592 213.677C40.0044 225.419 76.4955 242.931 97.4127 274.54C134.616 330.779 109.296 404.957 105.789 472.299C100.472 574.19 153.468 677.131 239.492 732.003"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
          <path
            d="M-185.305 99.4208C-185.982 137.312 -157.794 170.532 -124.826 189.226C-91.8589 207.919 -54.0118 215.597 -17.9666 227.34C18.0787 239.082 54.5697 256.594 75.4869 288.203C112.69 344.442 87.3706 418.62 83.8633 485.962C78.5463 587.852 131.542 690.794 217.566 745.666"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
        </svg>
        <svg
          className="shape shape-right text-light"
          width={474}
          height={511}
          viewBox="0 0 474 511"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M601.776 325.899C579.043 348.894 552.727 371.275 520.74 375.956C478.826 382.079 438.015 355.5 412.619 321.6C387.211 287.707 373.264 246.852 354.93 208.66C336.584 170.473 311.566 132.682 273.247 114.593C220.12 89.5159 155.704 108.4 99.7772 90.3769C53.1531 75.3464 16.3392 33.2759 7.65012 -14.947"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
          <path
            d="M585.78 298.192C564.28 319.945 539.378 341.122 509.124 345.548C469.472 351.341 430.868 326.199 406.845 294.131C382.805 262.059 369.62 223.419 352.278 187.293C334.936 151.168 311.254 115.417 275.009 98.311C224.74 74.582 163.815 92.4554 110.913 75.3971C66.8087 61.1784 31.979 21.3767 23.7639 -24.2362"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
          <path
            d="M569.783 270.486C549.5 290.99 526.04 310.962 497.501 315.13C460.111 320.592 423.715 296.887 401.059 266.641C378.392 236.402 365.963 199.965 349.596 165.901C333.24 131.832 310.911 98.1265 276.74 82.0034C229.347 59.6271 171.895 76.4848 122.013 60.4086C80.419 47.0077 47.5905 9.47947 39.8431 -33.5342"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
          <path
            d="M553.787 242.779C534.737 262.041 512.691 280.809 485.884 284.722C450.757 289.853 416.568 267.586 395.286 239.173C373.993 210.766 362.308 176.538 346.945 144.535C331.581 112.533 310.605 80.8723 278.502 65.7217C233.984 44.6979 180.006 60.54 133.149 45.4289C94.0746 32.8398 63.2303 -2.41965 55.9568 -42.8233"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
          <path
            d="M537.791 215.073C519.964 233.098 499.336 250.645 474.269 254.315C441.41 259.126 409.422 238.286 389.513 211.704C369.594 185.13 358.665 153.106 344.294 123.17C329.923 93.2337 310.293 63.6078 280.258 49.4296C238.605 29.7646 188.105 44.5741 144.268 30.4451C107.714 18.6677 78.8538 -14.3229 72.0543 -52.1165"
            stroke="currentColor"
            strokeMiterlimit={10}
          />
        </svg>
      </div>
    </div>
  </section> 
  */}
  <section className="section testimonials overflow-hidden bg-tertiary">
  <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center">
            <p className="text-primary text-uppercase fw-bold mb-3">
              User Testimonials
            </p>
            <h1 className="mb-4">Trusted By 1.2K+ People - Thousands of Satisfied Freelancers and Clients</h1>
            <p className="lead mb-0">
              Join our community of freelancers and businesses who collaborate daily to bring their projects to life.
            </p>
          </div>
        </div>
      </div>
      <div className="row position-relative">
        {[
          { name: "Alex Dupont", role: "Web Developer", text: "Thanks to this platform, I found multiple projects as a freelance developer. It's simple and efficient!" },
          { name: "Sophie Martin", role: "Writer & Translator", text: "I was able to connect with companies worldwide and offer my writing and translation services. An amazing experience!" },
          { name: "Thomas Berger", role: "Entrepreneur", text: "I needed a graphic designer for my startup and found an amazing talent in just a few hours. Highly recommend!" },
          { name: "Emily Johnson", role: "Marketing Specialist", text: "This platform helped me scale my business and find amazing clients globally." },
          { name: "Michael Lee", role: "Graphic Designer", text: "Freelancing has never been easier! I landed my first project within a day of signing up." },
          { name: "Laura Smith", role: "SEO Expert", text: "Great platform to find clients and grow professionally in the digital marketing industry!" }
        ].map((user, index) => (
          <div key={index} className="col-lg-4 col-md-6 pt-1">
            <div className="shadow rounded bg-white p-4 mt-4">
              <div className="d-block d-sm-flex align-items-center mb-3">
                <img
                  loading="lazy"
                  decoding="async"
                  src="assets/images/icon123.jpg"
                  alt={user.name}
                  className="img-fluid rounded-circle"
                  width={65}
                  height={66}
                />
                <div className="mt-3 mt-sm-0 ms-0 ms-sm-3">
                  <h4 className="h5 mb-1">{user.name}</h4>
                  <p className="mb-0">{user.role}</p>
                </div>
              </div>
              <div className="content">
                "{user.text}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="has-shapes">
      <svg
        className="shape shape-left text-light"
        width={290}
        height={709}
        viewBox="0 0 290 709"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-119.511 58.4275C-120.188 96.3185 -92.0001 129.539 -59.0325 148.232C-26.0649 166.926 11.7821 174.604 47.8274 186.346C83.8726 198.088 120.364 215.601 141.281 247.209C178.484 303.449 153.165 377.627 149.657 444.969C144.34 546.859 197.336 649.801 283.36 704.673"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-141.434 72.0899C-142.111 109.981 -113.923 143.201 -80.9554 161.895C-47.9878 180.588 -10.1407 188.267 25.9045 200.009C61.9497 211.751 98.4408 229.263 119.358 260.872C156.561 317.111 131.242 391.29 127.734 458.631C122.417 560.522 175.414 663.463 261.437 718.335"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-163.379 85.7578C-164.056 123.649 -135.868 156.869 -102.901 175.563C-69.9331 194.256 -32.086 201.934 3.9592 213.677C40.0044 225.419 76.4955 242.931 97.4127 274.54C134.616 330.779 109.296 404.957 105.789 472.299C100.472 574.19 153.468 677.131 239.492 732.003"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-185.305 99.4208C-185.982 137.312 -157.794 170.532 -124.826 189.226C-91.8589 207.919 -54.0118 215.597 -17.9666 227.34C18.0787 239.082 54.5697 256.594 75.4869 288.203C112.69 344.442 87.3706 418.62 83.8633 485.962C78.5463 587.852 131.542 690.794 217.566 745.666"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
      <svg
        className="shape shape-right text-light"
        width={731}
        height={429}
        viewBox="0 0 731 429"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1794 428.14C1.80036 390.275 -5.75764 349.015 8.73984 312.537C27.748 264.745 80.4729 237.968 131.538 231.843C182.604 225.703 234.032 235.841 285.323 239.748C336.615 243.64 391.543 240.276 433.828 210.964C492.452 170.323 511.701 91.1227 564.607 43.2553C608.718 3.35334 675.307 -9.81661 731.29 10.323"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M51.0253 428.14C41.2045 392.326 34.0538 353.284 47.7668 318.783C65.7491 273.571 115.623 248.242 163.928 242.449C212.248 236.641 260.884 246.235 309.4 249.931C357.916 253.627 409.887 250.429 449.879 222.701C505.35 184.248 523.543 109.331 573.598 64.0588C615.326 26.3141 678.324 13.8532 731.275 32.9066"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M89.8715 428.14C80.6239 394.363 73.8654 357.568 86.8091 325.028C103.766 282.396 150.788 258.515 196.347 253.054C241.906 247.578 287.767 256.629 333.523 260.099C379.278 263.584 428.277 260.567 465.976 234.423C518.279 198.172 535.431 127.525 582.62 84.8317C621.964 49.2292 681.356 37.4924 731.291 55.4596"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M128.718 428.14C120.029 396.414 113.678 361.838 125.837 331.274C141.768 291.221 185.939 268.788 228.737 263.659C271.536 258.515 314.621 267.008 357.6 270.282C400.58 273.556 446.607 270.719 482.028 246.16C531.163 212.111 547.275 145.733 591.612 105.635C628.572 72.19 684.375 61.1622 731.276 78.0432"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M167.564 428.14C159.432 398.451 153.504 366.107 164.863 337.519C179.753 300.046 221.088 279.062 261.126 274.265C301.164 269.452 341.473 277.402 381.677 280.465C421.88 283.527 464.95 280.872 498.094 257.896C544.061 226.035 559.146 163.942 600.617 126.423C635.194 95.1355 687.406 84.8167 731.276 100.612"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
    </div>

  </section>

  <div><section className="section" ref={Contact}>
    <div className="container">
      <div className="row justify-content-center">                                                                                                                                                                                           <div className="col-lg-4 mt-4 mt-lg-0">
          <div className="col-lg-6">
            <div className="block mx-0 mx-lg-3 mt-0">
              <h4 className="h5">  Contact Us </h4>
              <div className="content">
                Call Us We Will Be Happy To Help
                <br /> 
                <a href="mailto:freehands@gmail.com">freehands@gmail.com</a>
                <br /><a href="tel:+213 21 23 45 67">+213 21 23 45 67</a>
                <br />
                Sunday - Thursday
                <br />
                8AM TO 5PM Algeria Time
              </div>
            </div>
            <div className="block mx-0 mx-lg-3 mt-4">
              <h4 className="h5">Algeria Office</h4>
              <div className="content">
                Street.
                <br />
                K7A 1C2.
                <br />
                Tlemcen
              </div>
            </div> </div>
        </div>
      </div>
    </div>
  </section></div>
  
</>


<footer className="section-sm bg-tertiary">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">Service</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/service-details">Personal loans</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">Home Equity Loans</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">Student Loans</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">Mortgage Loans</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">Payday Loans</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">About</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/Benefits">Benefits</a>
            </li>
            <li className="mb-2">
              <a href="/Careers">Careers</a>
            </li>
            <li className="mb-2">
              <a href="/OurStory">Our Story</a>
            </li>
            <li className="mb-2">
              <a href="/Team">Team</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">Help</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 col-md-12 newsletter-form">
        <div style={{ backgroundColor: "#F4F4F4", padding: 35 }}>
          <h5 className="mb-4 text-primary font-secondary">Subscribe</h5>
          <div className="pe-0 pe-xl-5">
            <form
              action="#!"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control shadow-none bg-white border-end-0"
                  placeholder="Email address"
                />{" "}
                <span className="input-group-text border-0 p-0">
                  <button
                    className="input-group-text border-0 bg-primary"
                    type="submit"
                    name="subscribe"
                    aria-label="Subscribe for Newsletter"
                  >
                    <i className="fas fa-arrow-right" />
                  </button>
                </span>
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_463ee871f45d2d93748e77cad_a0a2c6d074"
                  tabIndex={-1}
                />
              </div>
            </form>
          </div>
          <p className="mb-0">
            Lorem 
          </p>
        </div>
      </div>
    </div>
    <div className="row align-items-center mt-5 text-center text-md-start">
      <div className="col-lg-4">
        <a href="index">
          <img
            loading="prelaod"
            decoding="async"
            className="img-fluid"
            width={160}
            src="assets/images/Freehands3.png"
            alt="Wallet"
          />
        </a>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <ul className="list-unstyled list-inline mb-0 text-lg-center">
          <li className="list-inline-item me-4">
            <a className="text-black" href="privacy-policy">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item me-4">
            <a className="text-black" href="/terms">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
        <ul className="list-unstyled list-inline mb-0 social-icons">
          <li className="list-inline-item me-3">
            <a
              title="Explorer Facebook Profile"
              className="text-black"
              href="https://facebook.com/"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a
              title="Explorer Twitter Profile"
              className="text-black"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a
              title="Explorer Instagram Profile"
              className="text-black"
              href="https://instagram.com/"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
 




        </div>
    )
    
 }

 export default Home