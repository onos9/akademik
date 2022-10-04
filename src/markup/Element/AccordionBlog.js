import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion,Card, } from 'react-bootstrap';
	
const defaultAccordion = [
	{
	  title: 'How do I enroll as a parent?',
	  text:
		`You go to the school's admin block, get the admission form, fill and submit it with the necessary documents then proceed to payment of tuition. N/B: Children seeking admission into Kindergarten Two to Grade six will need to write a diagnostic test. Upon making that test, then payment for tuition can be made.`,
	},
	{
	  title: 'How is the payment system',
	  text:
		`Payment for tuition can be made in the bank or via a bank app transfer for which receipt must be generated as proof of payment. 

		N/B: Payment for a new intake should be wholesome. 
		
		N/B: All fees both for new and returning pupils should be paid before resumption.`,
	},
	{
	  title: 'How much is the school form?',
	  text:
		`The school form is currently sold at very discounted price for N2500.`,
	},
	{
	  title: 'What is the appropriate time for daily delivery and pickup of children?',
	  text:
		`Children are to resume school daily from 7 to 8am.		
		All children are to be picked on or before 2:30 latest.
		A fine of 1000 will be required of the parent everytime you pick a child late from school.`,
	},
	{
	  title: 'What curriculum does the school run?',
	  text:
		`We are a Christian school that runs the British curriculum with a Nigerian blend.`,
	},
		
]	
const AccordionBlog = () => {
	const [activeDefault, setActiveDefault] = useState(0)
	return(
		<Accordion className="accordion faq-box"  defaultActiveKey="-1">
			{defaultAccordion.map((d, i) => (
			   <Card key={i}>
					<div className="card-header ">
						<Accordion.Toggle as={Link} to={"#"} variant="link"
							className={` ${ activeDefault === i ? '' : 'collapsed'}`}
							onClick={() =>
								setActiveDefault(activeDefault === i ? -1 : i)
							} eventKey={`${i}`}>	
							 {d.title}		
						</Accordion.Toggle>
					</div>
				<Accordion.Collapse eventKey={`${i}`} className="">
				  <Card.Body >
					{d.text}
					</Card.Body>
				</Accordion.Collapse>
			  </Card>
			))}
		</Accordion>	
	)
}
export {defaultAccordion};
export default AccordionBlog;