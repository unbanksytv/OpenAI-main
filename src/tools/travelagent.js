import {
	ViewListIcon,
} from '@heroicons/react/solid'


const obj = {

	title: "Travel Agent",
	desc: "I want you to act as a travel guide. I will write you my location and you will suggest a place to visit near my location. In some cases, I will also give you the type of places I will visit. You will also suggest me places of similar type that are close to my first location. ",
	category: "Personal",
	Icon: ViewListIcon,
	// tags: [],
	permissions: ['user'],
	
	fromColor: "gray-500",
	toColor: "gray-500",

	to: "/ai/travelagent",
	api: "/ai/travelagent",

	output: {
		title: "Hello Ser",
		desc: "The following destination seems like a good idea",
		Icon: false,
		color: "blue",
	},

	prompts: [{
		title:"Entry Text",
		desc: "A sentence to understand where you would love to live the life.",
		// n: 1,
		prompts: [{ 
				title: "Content", 
				attr: "content",  
				value: "", 
				placeholder: "When doing an your taxes, it's important to...", 
				label: "",
				type: "textarea",
				maxLength: 600,
				// max: 100,
				min: 3,
				required: true,
				error: "",
				example: "Aloha, let's go discover some places to Live The Life ",
			},
		],
		example: {
			output: "Aloha ser, let's go visit a museum, enjoy some fine dining, and discover a 5-star place to sleep ",
			// outputs: [
			// 	"The sun is very old, over 4.5 billion years",
			// 	"At 10,000 degrees, sun is also very hot",
			// 	"Gasses called coronal mass ejections erupt from the sun",
			// ],
			// Icon: RefreshIcon,
			color: "blue",
		}
	}]
		
}

export default obj

