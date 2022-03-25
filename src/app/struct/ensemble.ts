export interface Ensemble {
    id: number;
    picture: string;
    name: string;
    visibility: string;
    description?: string;
}

export interface Location{
    lat:number;
    lng:number;
}

export interface Event {
    id: number;
    ensembleID?: number;
    scoreID?: number;
    name: string;
    description: string;
    type: string;
    location?: Location[];
    date: string; 
    time: string;
}

export interface EventHasScore {
    eventID: number;
    scoreID: number;
}

export interface Score {
    id: number;
    userID: number;
    ensembleID?: number;
    eventID?: number;
    type: string;
    name: string;
    composer: string;
    description?: string;
    instruments?: string; // to remove since 'parts' is used
    fullScorePath?: string;
    videoPath?: string;
    parts?: Part[];
}

export interface Recording{
    id:number;
    partID:number;
}

export interface Part {
    partID: number;
    partFamiliy: string;
    partName: string;
    partPath: string;
    recordingID?: number;
}

export interface User {
    id: number;
    picture?: string;
    name: string;
    email: string;
    password: string;
    phoneNumber?: number;
    instrument?: string[];
}

export interface Recording {
    id: number;
    name: string;
    path: string;
}
