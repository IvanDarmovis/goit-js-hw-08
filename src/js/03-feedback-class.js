export class Feedback {
  constructor(obj, storageKey) {
    this.refs = obj;
    this.storageKey = storageKey;
    this.result = {};
  }

  checkStorage() {
    if (localStorage.getItem(this.storageKey)) {
      const preloadSettings = JSON.parse(localStorage.getItem(this.storageKey));
      Object.keys(preloadSettings).forEach(el => {
        this.refs[el].value = preloadSettings[el];
        this.result[el] = preloadSettings[el];
      });
    }
  }

  onFormInput(ev) {
    const name = ev.target.name;
    const value = ev.target.value;
    this.result[name] = value;
    localStorage.setItem(this.storageKey, JSON.stringify(this.result));
  }

  onSubmitForm(ev) {
    ev.preventDefault();
    console.log(this.result);
    localStorage.removeItem(this.storageKey);
    Object.keys(this.result).forEach(el => {
      this.refs[el].value = '';
    });
  }
}
