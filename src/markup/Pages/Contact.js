import  React,{Fragment,useRef} from 'react';
import {Link} from 'react-router-dom';
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import PageTitle from '../Layout/PageTitle';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
		//emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
		emailjs.sendForm('service_zubfdvh', 'template_iy1pb0b', e.target, 'user_FvNIKVJ7om2PphifhzMm2')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	 };		
	return(
		<Fragment>
			<Header />
				<div className="page-content">
					<PageTitle motherMenu="Contact Us" activeMenu="Contact Us" />
					<div className="content-block">
						<div className="section-full bg-white">
							<div className="container">
								<div className="row align-items-center content-inner">
									<div className="col-lg-4 col-md-4 col-sm-6">
										<div className="icon-bx-wraper m-b30 left">
											<div className="icon-md m-b20 m-t5">
												<Link to={"#"} className="icon-cell text-blue">
													<i className="ti-headphone-alt"></i>
												</Link>
											</div>
											<div className="icon-content">
												<h4 className="dlab-tilte m-b5">Phone</h4>
												<p>
													<a href='tel:+2348068277138'>Phone 01:(+234)80 6827 7138</a><br/>
													<a href='tel:+2348030511273'>Phone 02:(+234)80 3051 1273</a>
												</p>
												{/* <a href="mailto:lla@llacedemy.ng">lla@llacedemy.ng</a>
												<p><br/>Phone 02: (+234)80 3051 1273</p> */}
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-6">
										<div className="icon-bx-wraper m-b30 left">
											<div className="icon-md m-b20 m-t5">
												<Link to={"#"} className="icon-cell text-green">
													<i className="ti-location-pin"></i>
												</Link>
											</div>
											<div className="icon-content">
												<h4 className="dlab-tilte m-b5">Address</h4>
												<p>After Shammah Plaza, Welfare Quaters, Makurdi, Benue State, Nigeria</p>
											</div>
										</div>
									</div>
									<div className="col-lg-4 col-md-4 col-sm-12">
										<div className="icon-bx-wraper m-b30 left">
											<div className="icon-md m-b20 m-t5">
												<Link to={"#"} className="icon-cell text-orange">
													<i className="ti-email"></i>
												</Link>
											</div>
											<div className="icon-content">
												<h4 className="dlab-tilte m-b5">Email</h4>
												<p><a href="mailto:lla@llacedemy.ng">lla@llacedemy.ng</a><br/></p>
											</div>
										</div>
									</div>
								</div>
								<div className="row content-inner-4">
									<div className="banner-map col-md-12">						
										<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27182.236219387898!2d8.519810170636013!3d7.674486155269995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x92e7a52e724db0c1!2sRCN%20HOME%20CELL-LIGHT%20HOUSE%20LEADING%20ACADEMY!5e0!3m2!1sen!2sng!4v1663437171723!5m2!1sen!2sng" 
											className="align-self-stretch rounded-sm border-0" style={{width:"100%", height:"600px", }} allowfullscreen 
										/>
									</div>
								</div>
								<div className="row contact-box content-inner-5">
									<div className="section-head text-center col-md-12">
										<h2 className="text-secondry">Contact Me</h2>
										<p className="m-b0">Hi! Kindly reach out to us for any questions, enquires and admission process. <i>Note: Don't forget to include the best way to reach back to you</i> </p>
									</div>
									<div className="dzFormMsg"></div>
									<form method="post" className="dzForm col-md-12" ref={form} onSubmit={sendEmail}>
										<input type="hidden" value="Contact" name="dzToDo" />
										<div className="row">
											<div className="col-md-4 col-sm-4">
												<div className="form-group">
													<input name="dzName" type="text" required className="form-control" placeholder="Enter your name" />
												</div>
											</div>
											<div className="col-md-4 col-sm-4">
												<div className="form-group">
													<input name="dzEmail" type="email" className="form-control" required  placeholder="Your Email Address" />
												</div>
											</div>
											<div className="col-md-4 col-sm-4">
												<div className="form-group">
													<input name="dzOther[Phone]" type="text" required className="form-control" placeholder="Phone" />
												</div>
											</div>
											<div className="col-md-12 col-sm-12">
												<div className="form-group">
													<textarea name="dzMessage" rows="4" className="form-control" required placeholder="Your message here"></textarea>
												</div>
											</div>
											<div className="col-md-12 col-sm-12">
												<div className="form-group">
													<div className="g-recaptcha" data-sitekey="6LefsVUUAAAAADBPsLZzsNnETChealv6PYGzv3ZN" data-callback="verifyRecaptchaCallback" data-expired-callback="expiredRecaptchaCallback"></div>
													<input className="form-control d-none" style={{display:"none"}} data-recaptcha="true" required data-error="Please complete the Captcha" / >
												</div>
											</div>
											<div className="col-md-12 col-sm-12 text-center">
												<button name="submit" type="submit" value="Submit" className="btn radius-xl btn-lg">Send Message<span></span></button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>	
			<Footer />
		</Fragment>
	)
} 
export default Contact;