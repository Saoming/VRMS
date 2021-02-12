export class Email {
  static isValid(value) {
    const pattern = /\b[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}\b/i;
    return value.search(pattern) !== -1;
  }
}

export const SkillsValidation =  ( value ) => {
    const pattern = /^[a-zA-Z_ ]*$/;
    return value.match(pattern);
}