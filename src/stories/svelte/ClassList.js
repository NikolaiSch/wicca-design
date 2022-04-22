export default class ClassList {
    constructor() {
        this.darkMode = false

        /**
         * @type {string[]}
         */
        this.dark = []

        /**
         * @type {string[]}
         */
        this.light = []

        /**
         * @type {string[]}
         */
        this.both = []

    }

    toString() {
        if (this.darkMode) {
            return `${this.both.join(" ")} ${this.dark.join(" ")}`.trim()
        } else {
            return `${this.both.join(" ")} ${this.light.join(" ")} dark:${this.dark.join(" dark:")}`.trim()
        }
    }

    /**
     * @param {string[] | string} classes
     */
    lightAppend(classes) {
        if (Array.isArray(classes)) {
            this.light = this.light.concat(classes)
        } else if (typeof(classes) == "string") {
            this.light.push(classes)
        } else {
            throw Error("Not a string or a list")
        }
    }

    /**
     * @param {string[] | string} classes
     */
    darkAppend(classes) {
        if (Array.isArray(classes)) {
            this.dark = this.dark.concat(classes)
        } else if (typeof(classes) == "string") {
            this.dark.push(classes)
        } else {
            throw Error("Not a string or a list")
        }
    }

    /**
     * @param {string[] | string} classes
     */
    bothAppend(classes) {
        if (Array.isArray(classes)) {
            this.both = this.both.concat(classes)
        } else if (typeof(classes) == "string") {
            this.both.push(classes)
        } else {
            throw Error("Not a string or a list")
        }
    }


    /**
     * @param {string | string[]} lightClass
     * @param {string | string[]} darkClass
     */
    bothClassAppend(lightClass, darkClass) {
        this.lightAppend(lightClass)
        this.darkAppend(darkClass)
    }

    /**
     * @param {string | string[]} classes
     */
    appendToBoth(classes) {
        this.bothAppend(classes)
    }

    setTheme(theme) {
        this.darkMode = theme == "dark"
    }
}