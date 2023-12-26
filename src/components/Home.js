import React, { useRef, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logo from '../../src/assets/logo.png'
import Profile from '../assets/profile.jpg'
import Oscar from '../assets/oscar.jpg'
import { FaSquareXTwitter, FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { RiStarSFill } from "react-icons/ri";
import { BsBagHeart, BsCupHot, BsTelephoneInboundFill } from "react-icons/bs";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoCloseCircle, IoLocation } from "react-icons/io5";
import { FaAward } from "react-icons/fa";
import { MdPriceChange } from "react-icons/md";
import { FcCustomerSupport } from "react-icons/fc";
// images for cards
import clientneed from '../assets/card/test.png'
import research from '../assets/card/research.png'
import creation from '../assets/card/creation.png'
import typography from '../assets/card/typography.png'
import color from '../assets/card/color.png'
import Layout from '../assets/card/layout.png'
import print from '../assets/card/print.png'
import images from '../assets/card/imge.png'
import client from '../assets/card/feedback.png'
// images for swiper
import logo1 from '../assets/logos/logo1.jpg'
import logo2 from '../assets/logos/logo2.jpg'
import logo3 from '../assets/logos/logo3.jpg'
import logo4 from '../assets/logos/logo4.jpg'
import logo5 from '../assets/logos/logo5.jpg'
import logo6 from '../assets/logos/logo6.jpg'
import logo7 from '../assets/logos/logo7.jpg'
import user from '../assets/profile/user.png'
import Contact from '../assets/profile/contact.png'
import '../../src/home.css'

function Home() {
  let data = [
    {
      id: 1,
      imgSrc: logo1,
    },
    {
      id: 2,
      imgSrc: logo2,
    },
    {
      id: 3,
      imgSrc: logo3,
    },
    {
      id: 4,
      imgSrc: logo4,
    },
    {
      id: 5,
      imgSrc: logo5,
    },
    {
      id: 6,
      imgSrc: logo6,
    },
    {
      id: 7,
      imgSrc: logo7,
    }
  ]
  const [model, setModel] = useState(false);
  const [temimgSrc, setTemImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTemImgSrc(imgSrc);
    setModel(true);
  }
  const Home = useRef();
  const About = useRef();
  const Services = useRef();
  const Project = useRef();
  const scrollHandler = (elmRef) => {
    console.log(elmRef);
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: 'smooth' });
  }

  return (
    <>
      <div className='row' ref={Home}>
        <div className='col-sm-12'>
          <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home"><img src={Logo} className='logo_size' alt='logo' /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#link" className='link-color' onClick={() => scrollHandler(Home)}>Home</Nav.Link>
                  <Nav.Link href="#link" className='link-color' onClick={() => scrollHandler(About)}>About</Nav.Link>
                  <Nav.Link href="#link" className='link-color' onClick={() => scrollHandler(Services)}>Services</Nav.Link>
                  <Nav.Link href="#link" className='link-color' onClick={() => scrollHandler(Project)}>Project</Nav.Link>
                  <Nav.Link href="#link" className='link-color' >Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </div>
      <div className='container mt-4'>
        <div className='row '>
          <div className='col-sm-4 off-set-2'>
            <img src={Profile} alt='profile' className='img-fluid' data-aos="flip-left" data-aos-duration="3000" />
          </div>
          <div className='col-sm-4  custom-offset offset-2' >
            <div className='text-align' data-aos="flip-right" data-aos-duration="3000">
              <h3 className='custom-font2'>Hello</h3>
              <h2 className='custom-font2'>I am a <span className='text-success custom-font1'>logo </span> <span className='text-warning custom-font1'>Designer</span></h2>
              <h3 className='mt-2 custom-font2'>Transforming visions into logos</h3>
              <button className='btn btn-outline-warning  px-4 mt-4  pt-2 ' ref={About}>Hire me</button>
            </div>
          </div>
        </div>

        {/* About me section */}
        <div className='row margin_bottom_higlight'>
          <div className='col-sm-12 text-center' data-aos="fade-right" data-aos-duration="3000">
            <h2> <span className='about-warning custom-font1'>About</span> <span className='text-warning custom-font2'>Me</span> </h2>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-4'>
            <span className=''> <img src={Oscar} className='img img-fluid custom-border-img' alt='oscar' /></span>
          </div>
          <div className='col-sm-7'>
            <h2 className='custom-font2'>My name is Oscar</h2>
            <h3 className='address'>From United State, America</h3>
            <p className='experience'>
              As a logo designer, I craft visual identities that encapsulate brand essence. With a keen eye for aesthetics and a deep understanding of brand psychology, I translate concepts into impactful designs. My experience involves meticulous research, conceptualization, and iterative design processes. Collaborating closely with clients, I fuse creativity with strategic thinking to deliver memorable and versatile logos that resonate with target audiences, ensuring they are timeless, scalable, and reflective of brand values. I continuously refine my skills, staying updated on design trends and tools to produce innovative and purposeful logos that leave a lasting impression.</p>
            <FaSquareXTwitter className='icon-color' />
            <FaSquareFacebook className='icon-color' />
            <FaLinkedin className='icon-color' />
          </div>
        </div>

        {/* Services  */}
        <div className='row margin_bottom_higlight' data-aos="fade-left" data-aos-duration="3000" ref={Services}>
          <div className='col-sm-12 text-center'>
            <h2> <span className='about-warning custom-font1'>Get</span> <span className='text-warning custom-font2'>Services</span> </h2>
          </div>
        </div>

        {/* cards */}
        <div className='row' >
          <div className='col-md-4 '>
            <div className='bg-white px-3 py-4   custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={clientneed} alt='web' className='img img-fluid' />
              <div className='location-back px-4 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Understanding Client Needs</h4>
                <p className='custom-font2'> They begin by understanding the client's requirements, objectives, and target audience for the project</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='bg-white px-3 py-4  custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={research} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Research & Conceptualization</h4>
                <p className='custom-font2'>conduct research on the industry, audience preferences, and design trends. Based on this, they develop initial concepts and ideas.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='bg-white px-3 py-4  custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={creation} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Visual Elements</h4>
                <p className='custom-font2'> use software like Adobe Photoshop, Illustrator, or other specialized tools to create visual elements such as logos, illustrations.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-md-4 '>
            <div className='bg-white px-3 py-4   custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={typography} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Typography</h4>
                <p className='custom-font2'> select and manipulate fonts to enhance the visual impact of the design. They consider readability and the overall feel of the design.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='bg-white px-3 py-4  custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={color} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Color Theory</h4>
                <p className='custom-font2'> utilize their understanding of color theory to choose appropriate color schemes that evoke the desired emotions.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='bg-white px-3 py-4  custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={Layout} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Layout Design</h4>
                <p className='custom-font2'>Our graphic designers are passionate about creating stunning designs that captivate audiences and elevate brands.</p>
              </div>
            </div>
          </div>
        </div>

        <div className='row mt-4'>
          <div className='col-md-4 '>
            <div className='bg-white px-3 py-4   custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={print} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Print and Media</h4>
                <p className='custom-font2'>create designs suitable for both print and digital media (websites, social media graphics, mobile apps).</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='bg-white px-3 py-4  custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={images} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Image Manipulation</h4>
                <p className='custom-font2'> edit and enhance images to fit the design requirements using software like Adobe Photoshop or similar tools.</p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='bg-white px-3 py-4  custom-border-card' data-aos="zoom-in" data-aos-duration="2000">
              <img src={client} alt='web' className='img img-fluid' />
              <div className='location-back px-3 pt-3 pb-2'>
                <h4 className='text-warning custom-font2'>Client Collaboration & Feedback</h4>
                <p className='custom-font2'> collaborate with clients, taking feedback and making necessary revisions to meet the client's expectations.</p>
              </div>
            </div>
          </div>
        </div>



        {/* Protfolio */}
        <div className='row margin_bottom_higlight' ref={Project}>
          <div className='col-sm-12 text-center mb-4' data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
            <h2> <span className='about-warning custom-font1'>Previous</span> <span className='text-warning custom-font2'>Work</span> </h2>
          </div>
        </div>
        {/* Swipper Gallexry */}
        <div className={model ? "model open" : "model"}>
          <img src={temimgSrc} alt='model img' />
          <IoCloseCircle onClick={() => setModel(false)} />
        </div>
        <div className='gallery' >
          {data.map((item, index) => {
            return (
              <div className='pics' key={index}>
                <img src={item.imgSrc} alt='pics' style={{ width: '100%' }} onClick={() => getImg(item.imgSrc)} data-aos="flip-up" data-aos-duration="3000" />
              </div>
            )
          })}
        </div>
      </div>
      {/* Recent work section */}
      <div className='row bg-white py-3 px-3'>
        <div className='col-sm-12 text-center mb-4'>
          <h2> <span className='about-warning  custom-font1'>Project </span> <span className='text-warning custom-font2'>Completed</span> </h2>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='location-back text-center py-3 mb-2' data-aos="fade-right" data-aos-duration="3000">
            <BsBagHeart className='work-done' />
            <h3 className=' custom-font2 mt-3'>Work Completed</h3>
            <h4 className='mt-2  '>1.5k</h4>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='location-back  text-center py-3 mb-2' data-aos="fade-down" data-aos-duration="3000">
            <HiOutlineEmojiHappy className='work-done' />
            <h3 className=' custom-font2 mt-3'>Happy Clients</h3>
            <h4 className='mt-2  '>1.5k</h4>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='location-back  text-center py-3 mb-2' data-aos="fade-up" data-aos-duration="3000">
            <BsCupHot className='work-done' />
            <h3 className=' custom-font2 mt-3'>Cup of coffe</h3>
            <h4 className='mt-2 '>10k</h4>
          </div>
        </div>
        <div className='col-sm-6 col-md-3'>
          <div className='location-back   text-center py-3 mb-2' data-aos="fade-left" data-aos-duration="3000">
            <FaAward className='work-done' />
            <h3 className='custom-font2 mt-3'>Awards</h3>
            <h4 className='mt-2 '>15</h4>
          </div>
        </div>
      </div>
      <div className='row margin_bottom_higlight'>
        <div className='col-sm-12 text-center' data-aos="fade-right" data-aos-duration="3000">
          <h2> <span className='about-warning custom-font1'>Clients</span> <span className='text-warning custom-font2'>Review</span> </h2>
        </div>
      </div>
      <div className=' py-3 '>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-xs-12 col-md-4 card-neo'>
              <div className='neomorphisum text-center px-5 py-5 m-5' data-aos="zoom-in" data-aos-duration="2000">
                <div className='profile-png'>
                  <img src={user} alt='profile' className='user img img-fluid mb-2' /> <br />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <p className='review-p mt-3 p-3 custom-font2'>Working with [Designer's Name] has been an absolute pleasure, and I'm delighted to share my experience regarding the outstanding web design services provided.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-xs-12 col-md-4 card-neo'>
              <div className='neomorphisum text-center px-5 py-5 m-5' data-aos="zoom-in" data-aos-duration="2000">
                <div className='profile-png'>
                  <img src={user} alt='profile' className='user img img-fluid mb-2' /> <br />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <p className='review-p mt-3 p-3 custom-font2'>Working with [Designer's Name] has been an absolute pleasure, and I'm delighted to share my experience regarding the outstanding web design services provided.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-xs-12 col-md-4 card-neo'>
              <div className='neomorphisum text-center px-5 py-5 m-5' data-aos="zoom-in" data-aos-duration="2000">
                <div className='profile-png'>
                  <img src={user} alt='profile' className='user img img-fluid mb-2' /> <br />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <p className='review-p mt-3 p-3 custom-font2'>Working with [Designer's Name] has been an absolute pleasure, and I'm delighted to share my experience regarding the outstanding web design services provided.</p>
                </div>
              </div>
            </div>
            <div className='col-sm-6 col-xs-12 col-md-4 card-neo'>
              <div className='neomorphisum text-center px-5 py-5 m-5' data-aos="zoom-in" data-aos-duration="2000">
                <div className='profile-png'>
                  <img src={user} alt='profile' className='user img img-fluid mb-2' /> <br />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <RiStarSFill className='text-warning' />
                  <p className='review-p mt-3 p-3 custom-font2'>Working with [Designer's Name] has been an absolute pleasure, and I'm delighted to share my experience regarding the outstanding web design services provided.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row margin_bottom_higlight'>
        <div className='col-sm-12 text-center' data-aos="fade-right" data-aos-duration="3000">
          <h2> <span className='about-warning custom-font1'>Contact</span> <span className='text-warning custom-font2'>Me</span> </h2>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6 col-md-3'>
            <div className='location-back text-center p-3'>
              <IoLocation className='location' />
              <h4 className='mt-3 custom-font2 font-weight-bold '>New York</h4>
              <p className='custom-font2'>Location</p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='location-back text-center p-3'>
              <BsTelephoneInboundFill className='location' />
              <h4 className='mt-3 custom-font2 font-weight-bold'>+923177122177</h4>
              <p className='custom-font2'>Contact</p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='location-back text-center p-3'>
              <MdPriceChange className='location' />
              <h4 className='mt-3 custom-font2 font-weight-bold'>30$/hr</h4>
              <p className='custom-font2'>Dollar</p>
            </div>
          </div>
          <div className='col-sm-6 col-md-3'>
            <div className='location-back text-center p-3'>
              <FcCustomerSupport className='location' />
              <h4 className='mt-3 custom-font2 '>24/7</h4>
              <p className='custom-font2 '>support</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container mt-4 mb-4'>
        <div class="row mt-4 pt-4">
          <div className='col-sm-4'>
            <img src={Contact} className='img img-fluid' />
          </div>
          <div className='col-sm-4 contact-margin'>
            <input type="text" class="form-control custom-input mb-5 custom-font2" placeholder="Full name" />
            <input type="email" class="form-control custom-input mb-5" placeholder=" Email" />
          </div>
          <div className='col-sm-4 contact-margin'>
            <input type="text" class="form-control custom-input mb-5 custom-font2" placeholder="Location" />
            <input type="number" class="form-control custom-input mb-5 custom-font2" placeholder="Contact Number" />
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6 offset-sm-4'>
            <textarea typeof='text' className='form-control custom-input mb-3 custom-font2' placeholder='Enter Yor brief details here'></textarea>
          </div>
          <div className='col-sm-2'>
            <button className='btn btn-submit-widht custom-font2 text-center'> Submit</button>
          </div>
        </div>

      </div>
      <div className='footer text-center mt-5'>
        <p className='custom-font2'>All right reserved 2024</p>
      </div>
    </>
  )
}

export default Home