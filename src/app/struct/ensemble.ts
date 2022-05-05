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
    scores?: number[];
    name: string;
    description: string;
    image?: string;
    type: string;
    location?: Location;
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
    videoStart?:number;
    videoEnd?:number;
    parts?: Part[];
}

export interface Part {
    partID: number;
    partFamiliy: string;
    partName: string;
    partPath: string;
    recordings?: Recording[];
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
    scoreID:number;
    partID:number;
    name: string;
    base64: string;
}

export interface fullScoreRecording {
    id: number;
    scoreID: number;
    recordingParts: Recording[];
}

