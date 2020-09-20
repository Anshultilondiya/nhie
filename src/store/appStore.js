import { observable, action } from 'mobx';
// import questions from './questons';
class appStore {
    @observable username = '';
    @observable gamecode = '';
    // @observable questions = questions;

    @action addCred = (name, code) => {
        this.username = name;
        this.gamecode = code;
    };
}
var store = new appStore();

export default store;
