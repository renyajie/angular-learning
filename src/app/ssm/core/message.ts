export class Message {
    constructor(
        public code: number,
        public message: string,
        public extend: Object ) {}

    toString() {
        return `Message { code: ${this.code}, message: ${this.message}, extend: ${this.extend} }`;
    }
}
