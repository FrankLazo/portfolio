export interface AppContextInterface
{
	openedMenuBar:  boolean;
	toggleMenuBar:  Function;
	handleMenuBar:  Function;
	appLanguage:    string;
	toggleLanguage: Function;
}

// USER INTERFACE

export interface MenuBar
{
	work:     string;
	contact:  string;
	language: string;
}

export interface AppMenuBar
{
	english: MenuBar;
	spanish: MenuBar;
}

export interface UserInterface
{
	appMenuBar: AppMenuBar;
}

// HOME PAGE

export interface HomeDescription
{
	english: string;
	spanish: string;
}

export interface HomeJob
{
	phrase1: string;
	phrase2: string;
	phrase3: string;
}

export interface HomeSubTitle
{
	english: HomeJob;
	spanish: HomeJob;
}

export interface HomeData
{
	title:       string;
	subtitle:    HomeSubTitle;
	description: HomeDescription;
}

// CONTACT PAGE

export interface PersonalData
{
	email:    string;
	phone:    string;
	location: string;
}

export interface SocialLinks
{
	github:   string;
	linkedin: string;
}

export interface ContactData
{
	personalData: PersonalData;
	socialLinks:  SocialLinks;
}

// APP

export interface AppData
{
	userInterface: UserInterface;
	home:          HomeData;
	contact:       ContactData;
}
