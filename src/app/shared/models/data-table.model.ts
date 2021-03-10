export interface ICustomer {
    id?: number;
    name?: string;
    country?: ICountry;
    representative?: IRepresentative;
    date?: string | Date;
    company?: string;
    status?: string;
    activity?: number;
}

export interface IStatus {
    label?: string;
    value?: string;
}

export interface ICountry {
    name?: string;
    code?: string;
}

export interface IRepresentative {
    name?: string;
    image?: string;
}

export interface ITableColumn {
    field?: string;
    header?: string;
}
