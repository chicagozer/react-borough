export class Borough {

    public valuation: number;
    public name: string;
    public count: number;

    constructor(name: string, valuation: number, count: number) {
        this.name = name;
        this.valuation = valuation;
        this.count = count;
    }

}
