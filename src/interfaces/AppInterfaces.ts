export interface AppContextInterface
{
	openedMenuBar:  boolean;
	toggleMenuBar:  Function;
	handleMenuBar:  Function;
	appLanguage:    string;
	toggleLanguage: Function;
}

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

export interface AppData
{
	userInterface: UserInterface;
}
