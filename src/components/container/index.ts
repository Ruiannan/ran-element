import { App } from 'vue';
import ElContainer from './Container.vue';
import ELHeader from './Header.vue';

export default {
	install(app: App) {
		app.component(ElContainer.name, ElContainer);
		app.component(ELHeader.name, ELHeader);
	},
};
