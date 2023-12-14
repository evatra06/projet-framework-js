class Qcm {
  #id;
  #name;
  #password;
  #subject;
  #matiere;
  #nbpoints;
  #questions;

  constructor(qcmToCreate) {
    this.#id = qcmToCreate.id;
    this.#name = qcmToCreate.name;
    this.#password = qcmToCreate.theme;
    this.#subject = qcmToCreate.subject;
    this.#matiere = qcmToCreate.author;
    this.#nbpoints = qcmToCreate.nbpoints;
    this.#questions = qcmToCreate.questions || [];
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get theme() {
    return this.#password;
  }

  get subject() {
    return this.#subject;
  }

  get author() {
    return this.#matiere;
  }

  get nbpoints() {
    return this.#nbpoints;
  }

  get questions() {
    return this.#questions;
  }

  addQuestion(question) {
    this.#questions.push(question);
  }

  toJSON(key) {
    console.log(key);
    return {
      id: this.#id,
      name: this.#name,
      theme: this.#password,
      subject: this.#subject,
      author: this.#matiere,
      nbpoints: this.#nbpoints,
      questions: this.#questions,
    };
  }
}

module.exports = Qcm;
