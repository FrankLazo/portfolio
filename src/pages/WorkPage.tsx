import { useContext, useState } from 'react';
import AppContext from '../store/AppContext';
import appData from '../data/appData';
import { projectImages } from '../helpers/projectImages';

const WorkPage = () =>
{
	const { projects } = appData;
	const { handleMenuBar, appLanguage } = useContext( AppContext );
	const [ projectNumber, setProjectNumber ] = useState( 0 );

	const handleChangeProject = ( steps : number ) =>
	{
		setProjectNumber(
			( projects.length + projectNumber + steps ) % projects.length
		);
	};

	return (
		<div
			className="work-page fadeIn"
			onClick={ () => handleMenuBar() }
			>
			<div className="work-gallery">
				<img
					src={ projectImages( `./${ projects[ projectNumber ].imageName }` ) }
					alt={ projects[ projectNumber ].imageName }
					/>
			</div>

			<div className="work-main">
				<div className="project-info">
					<div className="project-data">
						<h1 className="project-title">
						{
							// @ts-ignore
							projects[ projectNumber ].title[ appLanguage ]
						}
						</h1>
						<p className="project-description">
						{
							projects[ projectNumber ].personal
							&& (
								<span>(Personal Project) </span>
							)
						}
						{
							// @ts-ignore
							projects[ projectNumber ].description[ appLanguage ]
						}
						</p>
						<p className="project-date">
						{
							// @ts-ignore
							projects[ projectNumber ].date
						}
						</p>
					</div>

					<div className="project-links">
						<a
							target="_blank"
							rel="noreferrer"
							href={ projects[ projectNumber ].urlRepository }
							>
							<div className="project-icon icon-repository"></div>
						</a>

						<a
							target="_blank"
							rel="noreferrer"
							href={ projects[ projectNumber ].urlWebsite }
							>
							<div className="project-icon icon-website"></div>
						</a>
					</div>
				</div>

				<div className="work-navigation">
					<button
						className="button-prev-page"
						onClick={ () => handleChangeProject( -1 ) }
						>
						<span className="left-arrow"></span>
					</button>

					<div className="pagination">
						{ `${ projectNumber + 1 } / ${ projects.length }` }
					</div>

					<button
						className="button-next-page"
						onClick={ () => handleChangeProject( 1 ) }
						>
						<span className="right-arrow"></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default WorkPage;
