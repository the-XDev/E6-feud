export class Tag{
    str : string;
    originalTagName : string;
    category : string;
    count : number;
    isRevealed : boolean;

    constructor(str : string,category:string, count : number, isRevealed : boolean){
        this.originalTagName = str;
        this.category = category;
        this.count = count;
        this.isRevealed = isRevealed;
        // replace all characters except - and _ with █
        this.str = str.replace(/[^-_]/g,"█");

    }

    reveal(){
        this.isRevealed = true;
        this.str = this.originalTagName;
    }
}