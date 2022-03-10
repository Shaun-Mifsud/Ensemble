export interface Ensemble{
    id:number;
    picture:string;
    name:string;
    visibility:string;
    description?:string;
}

export interface Event{
    id:number;
    ensembleID:number;
    name:string;
    description:string;
    type:string;
    location?:string;
    date?:string; // TO BE CHANGED TO type Date
}

export interface EventHasScore{
    eventID:number;
    scoreID:number;
}

export interface Score{
    id: number;
    userID:number;
    ensembleID?:number;
    type:string;
    name: string;
    composer:string;
    description?:string;
    instruments?:string; // to remove since 'parts' is used
    fullScorePath?:string;
    videoPath?:string;
    parts?:Part[];
}

export interface Part{
    partID:number;
    partFamiliy:string;
    partName:string;
    partPath:string;
}

export interface User{
    id:number;
    picture?:string;
    name:string;
    email:string;
    password:string;
    phoneNumber?:number;
    instrument?:string[];
}

export interface Recording{
    id:number;
    name:string;
    path:string;
}
