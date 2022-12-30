import {
	MenuAlt2Icon,
} from '@heroicons/react/solid'


const obj = {

	title: "Digital Art Gallery Guide",
	desc: "I want you to act as a digital art gallery guide. You will be writing advise about selling fine art photography as NFTs",
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
				example: "One key aspect of curating virtual exhibits is selecting the artwork to be featured. This can involve researching different artists and mediums, considering the themes and messages you want to convey through the exhibit, and determining how the pieces will be displayed online. It can also involve coordinating with artists to obtain digital copies of their work and secure permission to feature it in the exhibit.",
			},
			{ 
				title: "Audience", 
				attr: "audience",  
				value: "", 
				placeholder: "Art Collectors", 
				label: "Who the main group are you are writing for",
				// type: "textarea",
				maxLength: 50,
				// max: 100,
				// min: 5,
				// required: true,
				error: "",
				example: "Photography, Art Curation, Auctions, NFTs",
			},
			{ 
				title: "Description", 
				attr: "desc",  
				value: "", 
				placeholder: "An article about how to guide your collectors to explore your art", 
				label: "A short description of what the article will be about",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				// min: 100,
				// required: true,
				error: "",
				example: "One key aspect of curating virtual exhibits is selecting the artwork to be featured. This can involve researching different artists and mediums, considering the themes and messages you want to convey through the exhibit, and determining how the pieces will be displayed online. It can also involve coordinating with artists to obtain digital copies of their work and secure permission to feature it in the exhibit",
			},
			{ 
				title: "Keywords", 
				attr: "keywords",  
				value: "", 
				placeholder: "Art, photography, photogrammetry, nfts", 
				label: "A summary of keywords that the article will consist of",
				// type: "textarea",
				maxLength: 100,
				// max: 100,
				// min: 4,
				// required: true,
				error: "",
				example: "Art, photography, photogrammetry, nfts",
			},
		],
		example: {
			output: "Creating interactive experiences that allow visitors to engage with the artwork can involve using a variety of digital tools and technologies, such as virtual reality, augmented reality, or interactive media platforms. This can involve research and experimentation to find the best tools and approaches to use.",
			// outputs: [],
			// Icon: RefreshIcon,
			// color: "",
		}
	}]
		
}

export default obj

