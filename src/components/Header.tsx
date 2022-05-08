import { useContext } from 'react';
import { NavLink }    from 'react-router-dom';

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

	return (
		<header className="app-header">
			<nav className="navbar">
				<div className="navbar-brand navbar-item">
					<NavLink
						exact
						to="/"
						activeClassName="active-class">
							Frank Lazo
					</NavLink>
				</div>

				<div className="navbar-menu">
					<ul className={ `navbar-end ${ openedMenuBar && 'show-menu' }` }>
						<li className="navbar-item">
							<NavLink
								to="/work"
								activeClassName="active-class">
							{
								// @ts-ignore
								menu[ appLanguage ].work
							}
							</NavLink>
						</li>

						<li className="navbar-item">
							<NavLink
								to="/contact"
								activeClassName="active-class">
							{
								// @ts-ignore
								menu[ appLanguage ].contact
							}
							</NavLink>
						</li>

						<li className="navbar-item">
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
