import {publicDecrypt} from "crypto";
export class Document {
    constructor(public id, public name, public description, public url, public children) {};
}
