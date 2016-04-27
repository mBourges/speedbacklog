// import Auth0Lock from 'auth0-lock';
// import LocalStorage from 'local-storage';
// import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './app/constants';
import appComponent from './app';

// import './app/styles.scss';
// import '../node_modules/react-lookup/dist/style.css';


main();

function main() {
	const app = _generateAppContainerElement();
	// const localToken = LocalStorage.get('id_token');
	
	// try {
	// 	return authorizeAppAccess(localToken, (err, profile) => {
	// 		if (err) {
	// 			LocalStorage.remove('id_token');
	// 			LocalStorage.remove('profile');
	// 		}
			
	// 		return appComponent(app);
	// 	});
	// } catch(error) {
	// 	LocalStorage.remove('id_token');
	// 	LocalStorage.remove('profile');

		return appComponent(app);
	// }
}

function _generateAppContainerElement() {
	const app = document.createElement('div');
	
	app.setAttribute("id", "app");
	document.body.appendChild(app);
	
	return app;
}

// function authorizeAppAccess(token, callback) {
// 	const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN);
	
// 	return lock.getProfile(token, callback);
// }