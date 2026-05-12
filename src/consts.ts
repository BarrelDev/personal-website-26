// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Visvam Rajesh | Portfolio';
export const SITE_DESCRIPTION =
	'Computer Science & Robotics student at Carnegie Mellon University. Developer, researcher, and FRC team president.';
export const SITE_AUTHOR = 'Visvam Rajesh';
export const SITE_URL = 'https://visvamrajesh.com';

export const SOCIAL_LINKS = {
	github: 'https://github.com/BarrelDev/',
	linkedin: 'https://www.linkedin.com/in/visvam/',
	email: 'mailto:visvamrajesh@outlook.com',
};

export const NAV_LINKS = [
	{ href: '/projects', label: 'projects' },
	{ href: '/research', label: 'research' },
	{ href: '/cv', label: 'cv' },
	// { href: '/blog', label: 'blog' },
	{ href: '/about', label: 'about' },
];

// Page metadata
export const PAGES = {
	projects: {
		title: 'Projects | Visvam Rajesh',
		description: 'A collection of my software development, robotics, and machine learning projects.',
		heading: 'my projects',
		subheading:
			'A collection of software projects spanning robotics, machine learning, web development, and game design.',
	},
	research: {
		title: 'Research | Visvam Rajesh',
		description: 'Publications and research in pathfinding algorithms and robotics.',
		heading: 'research & publications',
		subheading: 'My research focuses on pathfinding algorithms and autonomous systems.',
	},
	cv: {
		title: 'CV | Visvam Rajesh',
		description: 'Curriculum Vitae - Experience, education, and skills.',
	},
	about: {
		title: 'About | Visvam Rajesh',
		description: 'Learn more about Visvam Rajesh - student, developer, and robotics enthusiast.',
	},
	// blog: {
	// 	title: 'Blog | Visvam Rajesh',
	// 	description: 'Thoughts on software development, robotics, and research.',
	// },
};

// Homepage section content
export const HOME_SECTIONS = {
	featuredProjects: {
		heading: 'featured projects',
		subheading:
			'here are some of my recent projects spanning robotics, machine learning, and software development.',
		cta: 'view all projects',
	},
	latestResearch: {
		heading: 'latest research',
		subheading: 'my recent publication in pathfinding algorithms',
		cta: 'view research page',
	},
	currentActivities: {
		heading: "what i'm doing now",
	},
};

// Hero section content
export const HERO = {
	greeting: "hi, i'm",
	intro: "i'm a",
	ctaProjects: 'view projects',
	ctaResume: 'download resume',
};
