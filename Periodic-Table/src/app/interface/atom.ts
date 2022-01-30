export interface Atom {
    atomicNumber: number;
    symbol: string;
    name: string;
    atomicMass: any;
    electronicConfiguration: string,
    electronegativity: Number,
    atomicRadius: Number,
    ionRadius: string,
    vanDerWaalsRadius: Number,
    ionizationEnergy: Number,
    electronAffinity: Number,
    oxidationStates: string,
    standardState: string,
    bondingType: string,
    meltingPoint: Number,
    boilingPoint: Number,
    density: Number,
    groupBlock: string,
    yearDiscovered: Number,
    block: string,
    cpkHexColor: string
    period: number;
    group: number;
    color?:string;
}
