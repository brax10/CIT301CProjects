import {publicDecrypt} from "crypto";
export class Document {
    constructor(public id: string, public name: string, public description: string, public url: string) {};
}
