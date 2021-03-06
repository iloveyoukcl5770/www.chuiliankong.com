import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import NavigationBar from './components/NavigationBar.js'

import IndexPage from './components/pages/IndexPage.js'
import EducationPage from './components/pages/EducationPage.js'
import WorkPage from './components/pages/WorkPage.js'
import SkillsPage from './components/pages/SkillsPage.js'
import ProjectsPage from './components/pages/ProjectsPage.js'
import ContactPage from './components/pages/ContactPage.js'

import rootReducer from './reducers/RootReducer.js'

import {styleContent, styleGlobal, styleNavBar} from "../style/style"

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => {
	return (
		<Provider store={createStoreWithMiddleware(rootReducer)}>
			<BrowserRouter>
				<div style={styleGlobal} className="row">
					<div className="col-md-12">
						<div className="row" style={styleNavBar}>
							<NavigationBar />
						</div>
						<div className="row" style={styleContent}>
							<Switch>
								<Route path="/education" component={EducationPage} />
								<Route path="/work" component={WorkPage} />
								<Route path="/skills" component={SkillsPage} />
								<Route path="/projects" component={ProjectsPage} />
								<Route path="/contact" component={ContactPage} />
								<Route path="/" component={IndexPage} />
							</Switch>
						</div>
					</div>
				</div>
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render(<App />, document.querySelector('.container'));
