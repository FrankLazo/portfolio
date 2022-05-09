import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import appData        from '../data/appData';
import { AppMenuBar } from '../interfaces/AppInterfaces';
import AppContext     from '../store/AppContext';

const Header = () =>
{
	const {
		openedMenuBar,
		toggleMenuBar,
		appLanguage,
		toggleLanguage,
	} = useContext( AppContext );

	const menu : AppMenuBar = appData.userInterface.appMenuBar;
	const { pathname } = useLocation();

	return (
		<header className="app-header">
			<nav className="navbar">
				<div className={ `navbar-brand navbar-item navbar-item-${ pathname !== '/contact' ? 'brand' : 'light' }` }>
					<NavLink
						exact
						to="/"
						activeClassName="active-class-brand">
							Frank Lazo
					</NavLink>
				</div>

				<div className="navbar-menu">
					<ul className={ `navbar-end ${ openedMenuBar && 'show-menu' }` }>
						<li className={ `navbar-item navbar-item-${ pathname !== '/contact' ? 'dark' : 'light' }` }>
							<NavLink
								to="/work"
								activeClassName={ `active-class-${ pathname !== '/contact' ? 'dark' : 'light' }` }>
							{
								// @ts-ignore
								menu[ appLanguage ].work
							}
							</NavLink>
						</li>

						<li className={ `navbar-item navbar-item-${ pathname !== '/contact' ? 'dark' : 'light' }` }>
							<NavLink
								to="/contact"
								activeClassName={ `active-class-${ pathname !== '/contact' ? 'dark' : 'light' }` }>
							{
								// @ts-ignore
								menu[ appLanguage ].contact
							}
							</NavLink>
						</li>

						<li className={ `navbar-item navbar-item-${ pathname !== '/contact' ? 'dark' : 'light' }` }>
							<button
								className="navbar-button"
								onClick={ () => toggleLanguage() }
								>
							{
								// @ts-ignore
								menu[ appLanguage ].language
							}
							</button>
						</li>
					</ul>

					<div
						className="burger-menu"
						onClick={ () => toggleMenuBar() }>
						<div className={ `burger-icon ${ openedMenuBar && 'close-icon' }` }></div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
