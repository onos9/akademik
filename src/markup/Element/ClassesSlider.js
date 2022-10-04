import React, { Component } from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import pic1 from './../../images/classes/pic1.jpg';
import pic2 from './../../images/classes/pic2.jpg';
import pic3 from './../../images/classes/pic3.jpg';


function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className="owl-next" onClick={onClick} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className="owl-nav">
			<div className=" owl-prev " onClick={onClick} />
		</div>
	);
}
const latestBlog = [
	{
		image: pic1, 
		class: 'Grade 1', 
		ageBracket: '6 – 7yrs', 
		classSize: 25, 
		aims: 'to help pupils master literacy and numeracy skills', 
		objectives: '1. Write and recognize upper and lower case letters,2. Match letters to their sounds, 3. Write and recognize upper and lower case letters, 4. Match letters to their sounds, 5. Form new words from blending of sounds, 6. Compose simple sentences'
	},
	{ 
		image: pic2, 
		class: 'Grade 2', 
		ageBracket: '7–8yrs',
		classSize: 25,
		aims: 'To read, write and calculate effortlessly',
		objectives: '1. Write and read effortlessly, 2. Calculate solve basic mathematic problem, 3. Compose more complex sentence, 4. Spell many new words'
	},
	{ 
		image: pic3, 
		class: 'Grade 3', 
		ageBracket: '8–9yrs',
		classSize: 25,
		aims: 'Gain basic writing, editing and summary skills in addition to solving complex mathematic problem.',
		objectives: '1. Analyze poetry, 2. Engage in collaborative discussions, 3. Solve basic mathematical equations, 4. Classify sentences based on types, 5. Write short story with beginning, middle and end'
	},
	{ 
		image: pic1, 
		class: 'Grade 4', 
		ageBracket: '9–10yrs',
		classSize: 25,
		aims: 'To clearly demonstrate basic knowledge of the main core subjects of English, Maths, science',
		objectives: '1. Solve word problem, 2. Show understanding between subject verb agreement, 3. Experiment with poetry, 4. Use punctuation correctly, 5. Measure distance using map scales'
	},
]
class ClassesSlider extends Component {
	render() {
		var settings = {
			arrows: true,
			slidesToShow: 3,
			infinite: true,
			autoPlay: true,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
					}
				},
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
					}
				}
			]
		};
		return (
			<Slider className="blog-carousel owl-carousel owl-theme dots-none sprite-nav owl-btn-center-lr " {...settings}>
				{latestBlog.map((item, index) => (
					<div className="item p-2" key={index}>
						<div className="class-item">
							<div className="class-media">
								<img src={item.image} alt="" />
								<p>
									<span>Age Bracket: </span>{item.ageBracket}
								</p>
							</div>
							<div className="class-info">
								<h4><Link to={"./classes-details"}>{item.class}</Link></h4>
								<p> <span>Aims: </span>
									{item.aims}<br/>
									<span>Objectives: </span>
									{item.objectives}
									</p>
								<ul className="schedule">
									<li className="bg-blue class-size"><span>Class Size</span> <span>{item.classSize}</span> </li>
									<li className="bg-green years-old"><span>Years Old</span> <span>{item.ageBracket}</span> </li>
									<li className="bg-orange tution"><span>Enrollment Fee</span> <span>N2000</span> </li>
								</ul>
							</div>
						</div>
					</div>
				))}
			</Slider>
		)
	}
}
export default ClassesSlider;