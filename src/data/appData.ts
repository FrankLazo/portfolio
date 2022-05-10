import { AppData } from '../interfaces/AppInterfaces';

const appData : AppData = {
	userInterface: {
		appMenuBar: {
			english: {
				work:     'Work',
				contact:  'Contact',
				language: 'Español',
			},
			spanish: {
				work:     'Proyectos',
				contact:  'Contacto',
				language: 'English',
			},
		},
	},
	home: {
		title: 'Frank Lazo',
		subtitle: {
			english: {
				phrase1: 'Front',
				phrase2: 'end ',
				phrase3: 'developer',
			},
			spanish: {
				phrase1: 'Desarrollador ',
				phrase2: 'Front',
				phrase3: 'end',
			},
		},
		description: {
			english: 'HTML, CSS, JavaScript, React JS',
			spanish: 'HTML, CSS, JavaScript, React JS',
		},
	},
	contact: {
		personalData: {
			email: 'flavet.89@gmail.com',
			phone: '( +51 ) 974570560',
			location: 'Lima, Perú',
		},
		socialLinks: {
			github: 'https://github.com/FrankLazo',
			linkedin: 'https://www.linkedin.com/in/frank-lazo-88bb8821a/',
		},
	},
	projects: [
		{
			id: 1,
			date: '2021-11',
			title: {
				english: 'Manu\'s Elegance website',
				spanish: 'Sitio web para Manu\'s Elegance',
			},
			personal: false,
			description: {
				english: 'Web design and development from scratch. Frontend development with Vanilla JS and backend development with PHP and SQL.',
				spanish: 'Diseño y desarrollo del sitio desde cero. Desarrollo frontend con Vanilla JS y desarrollo backend con PHP y SQL.',
			},
			urlWebsite: 'https://www.manuselegance.com/',
			urlRepository: 'https://github.com/FrankLazo/manuscode',
			imageName: 'manus-elegance.jpg',
		},
		{
			id: 2,
			date: '2021-12',
			title: {
				english: 'Todo List',
				spanish: 'Lista de Tareas',
			},
			personal: true,
			description: {
				english: 'First project with React. Components, hooks and LocalStorage.',
				spanish: 'Primer proyecto con React. Creación de componentes, uso de hooks y del almacenamiento local.',
			},
			urlWebsite: 'https://first-react-lazodev.netlify.app/',
			urlRepository: 'https://github.com/FrankLazo/tasks-manager',
			imageName: 'first-react-project.jpg',
		},
		{
			id: 3,
			date: '2021-12',
			title: {
				english: 'Gif expert app',
				spanish: 'Gif expert app',
			},
			personal: true,
			description: {
				english: 'Project from React course by Fernando Herrera in Udemy.',
				spanish: 'Proyecto realizado en el curso de React con Fernando Herrera en Udemy.',
			},
			urlWebsite: 'https://gifexpert-react-lazodev.netlify.app/',
			urlRepository: 'https://github.com/FrankLazo/react/tree/master/src/fernando-herrera/04-gif-expert-app',
			imageName: 'gif-expert-app.jpg',
		},
		{
			id: 4,
			date: '2022-01',
			title: {
				english: 'Heroes app',
				spanish: 'Heroes app',
			},
			personal: true,
			description: {
				english: 'Project from React course by Fernando Herrera in Udemy.',
				spanish: 'Proyecto realizado en el curso de React con Fernando Herrera en Udemy.',
			},
			urlWebsite: 'https://heroes-react-lazodev.netlify.app/',
			urlRepository: 'https://github.com/FrankLazo/react/tree/master/src/fernando-herrera/06-heroes-app',
			imageName: 'heroes-app.jpg',
		},
		{
			id: 5,
			date: '2022-02',
			title: {
				english: 'Tic-tac-toe game',
				spanish: 'Tic-tac-toe game',
			},
			personal: true,
			description: {
				english: 'First React project using TypeScript.',
				spanish: 'Primer proyecto de React usando TypeScript.',
			},
			urlWebsite: 'https://tictactoe-ts-react-lazodev.netlify.app/',
			urlRepository: 'https://github.com/FrankLazo/react-typescript/tree/master/src/02-tic-tac-toe',
			imageName: 'tic-tac-toe.jpg',
		},
	],
};

export default appData;
