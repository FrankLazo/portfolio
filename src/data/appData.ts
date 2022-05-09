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
};

export default appData;
