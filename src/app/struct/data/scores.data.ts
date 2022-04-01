import {Score} from "../ensemble"

export const SCORES: Score[] =[
    //A flat
    {
        id: 1,
        userID:1,
        type:'interactive',
        name: "A Flat",
        composer:"Shaun Mifsud",
        instruments:"Piano", // to be removed, flat.io instrument will be used instead
        fullScorePath:"/assets/musicXML/aflat.musicxml",
        videoPath:"Hv4Jylc_Kq4",
    },

    //G minor
    {
        id: 2,
        userID:1,
        type:'interactive',
        name: "G minor",
        composer:"Shaun Mifsud",
        instruments:"Piano", // to be removed, flat.io instrument will be used instead
        fullScorePath:"/assets/musicXML/G_Minor.xml",
    },
    
    //march 13
    {
        id: 3,
        userID:1,
        ensembleID:1,
        eventID:2,
        type:'static',
        name: "March Op.13",
        composer:"Shaun Mifsud",
        instruments:"Piano", // to be removed
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!',
        fullScorePath:'/assets/pdf/march13/march 13.pdf',
        parts:[{
            partID:1,
            partFamiliy:'brass',
            partName:'Trumpet I',
            partPath:"/assets/pdf/march13/March 13-Bb_Trumpet_1.pdf"
        },
        {
        partID:2,
        partFamiliy:'brass',
        partName:'Trumpet II',
        partPath:"/assets/pdf/march13/March 13-Bb_Trumpet_2.pdf"
        }
        ,
        {
        partID:3,
        partFamiliy:'woodwind',
        partName:'Alto Saxophone',
        partPath:"/assets/pdf/march13/March 13-Alto_Saxophone.pdf"
        }
        ,
        {
        partID:4,
        partFamiliy:'brass',
        partName:'Baritone Horn',
        partPath:"/assets/pdf/march13/March 13-Baritone_Horn.pdf"
        }
        ,
        {
        partID:5,
        partFamiliy:'percussion',
        partName:'Bass Drum',
        partPath:"/assets/pdf/march13/March 13-Bass_Drum.pdf"
        
        }
        ,
        {
        partID:6,
        partFamiliy:'woodwind',
        partName:'Bb Clarinet 1',
        partPath:"/assets/pdf/march13/March 13-Bb_Clarinet_1.pdf"
        }
        ,
        {
        partID:7,
        partFamiliy:'woodwind',
        partName:'Bb Clarinet 2',
        partPath:"/assets/pdf/march13/March 13-Bb_Clarinet_2.pdf"
        }
        ,
        {
        partID:8,
        partFamiliy:'brass',
        partName:'Bb Tuba',
        partPath:"/assets/pdf/march13/March 13-Bb_Tuba.pdf"
        }
        ,
        {
        partID:9,
        partFamiliy:'percussion',
        partName:'Cymbals',
        partPath:"/assets/pdf/march13/March 13-Cymbal.pdf"
        }
        ,
        {
        partID:10,
        partFamiliy:'brass',
        partName:'Euphonium',
        partPath:"/assets/pdf/march13/March 13-Euphonium.pdf"
        }
        ,
        {
        partID:11,
        partFamiliy:'woodwind',
        partName:'Flute',
        partPath:"/assets/pdf/march13/March 13-Flute.pdf"
        }
        ,
        {
        partID:12,
        partFamiliy:'brass',
        partName:'Horn in F I',
        partPath:"/assets/pdf/march13/March 13-Horn_in_F_1.pdf"
        }
        ,
        {
        partID:13,
        partFamiliy:'brass',
        partName:'Horn in F II',
        partPath:"/assets/pdf/march13/March 13-Horn_in_F_2.pdf"
        }
        ,
        {
        partID:14,
        partFamiliy:'percussion',
        partName:'Snare Drum',
        partPath:"/assets/pdf/march13/March 13-Snare_Drum.pdf"        
        }
        ,
        {
        partID:15,
        partFamiliy:'woodwind',
        partName:'Tenor Saxophone',
        partPath:"/assets/pdf/march13/March 13-Tenor_Saxophone.pdf"        
        }
        ,
        {
        partID:16,
        partFamiliy:'brass',
        partName:'Trombone I',
        partPath:"/assets/pdf/march13/March 13-Trombone_1.pdf"        
        }
        ,
        {
        partID:17,
        partFamiliy:'brass',
        partName:'Trombone II',
        partPath:"/assets/pdf/march13/March 13-Trombone_2.pdf"  
        }
        ,
        {
        partID:18,
        partFamiliy:'brass',
        partName:'Trombone III',
        partPath:"/assets/pdf/march13/March 13-Trombone_3.pdf" 
        }
        ,
        {
        partID:19,
        partFamiliy:'brass',
        partName:'Horn in F III',
        partPath:"/assets/pdf/march13/March 13-Horn_in_F_3.pdf"        
        }
    ]

    },
    // smyphony No 5 - Beethoven
    {
        id:4,
        userID:1,
        ensembleID:3,
        type:'static',
        name:'Symphony No. 5',
        composer:'L.V Beethoven',
        fullScorePath:'/assets/pdf/sympNo5/fullScore.pdf',
        parts:[{
            partID:1,
            partFamiliy:'string',
            partName:'Violin I',
            partPath:"/assets/pdf/sympNo5/violin1.pdf",
            recordingID:21
        },
        {
            partID:2,
            partFamiliy:'string',
            partName:'Violin II',
            partPath:"/assets/pdf/sympNo5/violin2.pdf"
        },
        {
            partID:3,
            partFamiliy:'string',
            partName:'Viola',
            partPath:"/assets/pdf/sympNo5/viola.pdf",
            recordingID:22
        },
        {
            partID:4,
            partFamiliy:'string',
            partName:'Cello',
            partPath:"/assets/pdf/sympNo5/cello.pdf"
        },
        {
            partID:5,
            partFamiliy:'string',
            partName:'Double Bass',
            partPath:"/assets/pdf/sympNo5/cello.pdf"
        },
        {
            partID:6,
            partFamiliy:'brass',
            partName:'Trumpet in C I',
            partPath:"/assets/pdf/sympNo5/trumpetC1.pdf"
        },
        {
            partID:7,
            partFamiliy:'brass',
            partName:'Trumpet in C II',
            partPath:"/assets/pdf/sympNo5/trumpetC2.pdf"
        },
        {
            partID:8,
            partFamiliy:'brass',
            partName:'Trumpet in Bb II',
            partPath:"/assets/pdf/sympNo5/trumpetB2.pdf"
        },
        {
            partID:9,
            partFamiliy:'brass',
            partName:'Trumpet in Bb I',
            partPath:"/assets/pdf/sympNo5/trumpetB1.pdf"
        },
        {
            partID:10,
            partFamiliy:'percussion',
            partName:'Timpani',
            partPath:"/assets/pdf/sympNo5/timpani.pdf"
        },
        {
            partID:12,
            partFamiliy:'woodwind',
            partName:'Piccolo',
            partPath:"/assets/pdf/sympNo5/piccolo.pdf"
        },
        {
            partID:12,
            partFamiliy:'woodwind',
            partName:'Oboe II',
            partPath:"/assets/pdf/sympNo5/oboe2.pdf"
        },
        {
            partID:13,
            partFamiliy:'woodwind',
            partName:'Oboe I',
            partPath:"/assets/pdf/sympNo5/oboe1.pdf"
        },
        {
            partID:14,
            partFamiliy:'brass',
            partName:'Horn in F II',
            partPath:"/assets/pdf/sympNo5/hornInF2.pdf"
        },
        {
            partID:15,
            partFamiliy:'brass',
            partName:'Horn in F I',
            partPath:"/assets/pdf/sympNo5/hornInF1.pdf"
        },
        {
            partID:16,
            partFamiliy:'brass',
            partName:'Horn in E I',
            partPath:"/assets/pdf/sympNo5/hornInE1.pdf"
        },
        {
            partID:17,
            partFamiliy:'brass',
            partName:'Horn in E II',
            partPath:"/assets/pdf/sympNo5/hornInE2.pdf"
        },
        {
            partID:18,
            partFamiliy:'woodwind',
            partName:'Flute II',
            partPath:"/assets/pdf/sympNo5/flute2.pdf"
        },
        {
            partID:19,
            partFamiliy:'woodwind',
            partName:'Flute I',
            partPath:"/assets/pdf/sympNo5/flute1.pdf"
        },
        {
            partID:20,
            partFamiliy:'woodwind',
            partName:'Contra Bassoon',
            partPath:"/assets/pdf/sympNo5/contraBassoon.pdf"
        },
        {
            partID:21,
            partFamiliy:'woodwind',
            partName:'Clarinet in Bb II',
            partPath:"/assets/pdf/sympNo5/clarinetB2.pdf"
        },
        {
            partID:22,
            partFamiliy:'woodwind',
            partName:'Clarient I',
            partPath:"/assets/pdf/sympNo5/clarinetB1.pdf"
        },
        {
            partID:23,
            partFamiliy:'woodwind',
            partName:'Bassoon II',
            partPath:"/assets/pdf/sympNo5/bassoon2.pdf"
        },
        {
            partID:24,
            partFamiliy:'woodwind',
            partName:'Bassoon I',
            partPath:"/assets/pdf/sympNo5/bassoon1.pdf"
        },
        {
            partID:25,
            partFamiliy:'brass',
            partName:'Trombones',
            partPath:"/assets/pdf/sympNo5/trombones.pdf"
        },
        
    ]
        
    }
]




