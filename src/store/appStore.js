import { observable } from 'mobx';

class appStore {
    @observable username = '';
    @observable questions = [];
}

var store = new appStore();

export default store;
