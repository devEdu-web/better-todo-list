class Validator {
    #emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    isEmail(email) {
        if (!email.match(this.#emailRegex)) {
            throw new Error(`Email invalid`);
        } else {
            return this;
        }
    }

    isEmpty(field) {
        if (!field) {
            throw new Error(`Fields must not be empty`);
        } else {
            return this;
        }
    }

    passwordsMatch(field1, field2) {
        if (field1 !== field2) {
            throw new Error("Passwords doesn't match");
        } else {
            return this;
        }
    }

    minLength(field, length, value) {
        if (value.length < length) {
            throw new Error(`${field} must have ${length} characters`);
        } else {
            return this;
        }
    }

    maxLength(length, string) {
        if (string.length > length) {
            throw new Error(`${string} must not be longer than ${length}`);
        } else {
            return this;
        }
    }
}

module.exports = { Validator };
