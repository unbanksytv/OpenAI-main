import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Digital Art Gallery Guide",
	desc: "I want you to act as a digital art gallery guide. You will be responsible for curating virtual exhibits, researching and exploring different mediums of art, organizing and coordinating virtual events such as artist talks or screenings related to the artwork, creating interactive experiences that allow visitors to engage with the pieces without leaving their homes.",
	category: "Content",
	Icon: MenuAlt2Icon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "yellow-400",
	toColor: "yellow-600",

	to: "/ai/writing/artguide",
	api: "/ai/writing/artguide",

	output: {
		title: "Digital Art Gallery Guide",
		desc: "The following introduction has been generated",
		// Icon: RefreshIcon,
		// color: "",
	},

	prompts: [{
		title:"Entry Text",
		desc: "My first suggestion request is I need help designing an online exhibition about avant-garde photographers.",
		// n: 1,
		prompts: [
			{ 
				title: "Title", 
				attr: "title",  
				value: "", 
				placeholder: "The Subject", 
				label: "The title you were planning to give the article.",
				// type: "textarea",
				maxLength: 150,
				// max: 100,
				min: 5,
				required: true,
				error: "",
				example: "Getting Started With Nextjs & TailwindCSS",
			},
			{ 
				title: "Audience", 
				attr: "audience",  
				value: "", 
				placeholder: "Technology, development, etc", 
				label: "Who the main group are you are writing for",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Technology, development",
			},
			{ 
				title: "Description", 
				attr: "desc",  
				value: "", 
				placeholder: "An article about how to start coding...", 
				label: "A short description of what the article will be about",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "An article about why its important to use storybook to document your progress even when working without a javascript framework to help you understand what you are doing.",
			},
			{ 
				title: "Keywords", 
				attr: "keywords",  
				value: "", 
				placeholder: "Tech, code, etc...", 
				label: "A summary of keywords that the article will consist of",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				// min: 4,
				// required: true,
				error: "",
				example: "Coding, development, nextjs, tailwindcss, js",
			},
		],
		example: {
			output: "Storybook is a development environment for UI components. It helps you iterate faster on UI code. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.\n\nI believe in Storybook’s value, and I’m sure it will improve your workflow. But I’m also going to share with you a different approach that can help you save some time without using a JavaScript framework.",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

