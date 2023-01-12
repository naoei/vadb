/** @module Tag Contains the parent class for all tags. */



export type TagDatatype = {tag: string, description: string}
/** Represents a tag. */
export class Tag {
    tag: string
    description: string

    constructor(tag: string, description: string) {
        this.tag = tag
        this.description = description
    }


    toData(): TagDatatype {
        return {tag: this.tag, description: this.description}
    }

    static fromData(data: TagDatatype) {
        return new this(data.tag, data.description);
    }
}
