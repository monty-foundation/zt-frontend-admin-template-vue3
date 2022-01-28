import { createStore } from 'vuex';
import state from './State';
import mutations from './Mutations';

const store = createStore({
    state,
    mutations,
})
export default store;
