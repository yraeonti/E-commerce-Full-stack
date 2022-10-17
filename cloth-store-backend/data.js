


 const products = [
    {id: 1,
     name: "TRYST MINI DRESS BLACK",
     img: [{image: '../images/blackdress.png', active: "active"}, {image: '../images/blackdress.png'}, {image:  '../images/blackdress3.png'},],
     image: '../images/blackdress.png', 
     image2: '../images/blackdress2.png',
     image3:  '../images/blackdress3.png',
     category: "dresses",
     stars: 4,
     price: 240.00,
     brand: "KEEPSAKE",
     Details: `MAIN: 98% POLYESTER 2% ELASTANE,Invisible zipper at side
     -Full lining
     -Textured mid
     -weight stretch crepe
     -Fitted
     -Features; Off the shoulder
     -Cut out detail
     -Ruching detail
     -Woven`,
     care: `WASH AND DRY GARMENT TURNED INSIDE OUT - 
     COLD DELICATE MACHINE WASH WITH LIKE COLOURS - 
     DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM IRON INSIDE OUT - DO NOT DRYCLEAN`
    },

    {id: 2,
     name: "GLARE SHORT BUTTER",
     img: [{image: '../images/butter.png'}, {image: '../images/butter2.png'}, {image:  '../images/butter3.png'},],
     image: '../images/butter.png',
     image2: '../images/butter2.png',
     image3: '../images/butter3.png',
     category: "sets",
     stars: 4,
     price: 80.00,
     brand: "THE FIFTH",
     details: `-MAIN: 100% COTTON
     - Relaxed fit
     - Elastic waistband with drawstring
     - In seam pockets
     - Patchwork seaming with contrast terry
     - Mid
     -weight track fabric`,
     care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },

    {id: 3,
     name: "DESTINATION MIDI DRESS IVORY DESTINATION",
     img: [{image: '../images/desti.png'}, {image: '../images/desti2.png'}, {image:  '../images/desti3.png'},],
     image: '../images/desti.png',
     image2: '../images/desti2.png',
     image3: '../images/desti3.png',
     category: "dresses",
     stars: 4,
     price: 250.00,
     brand: "FINDERS KEEPERS",
     details: `-MAIN: 90% VISCOSE 10% POLYAMIDE
     -Fit and flare style
     -Cutaway waist
     -Fixed rouleau tie crossover back
     -Gathering detail at bust, waist and shoulder
     -Wide hem
     -Lightweight woven fabric
     -Fully lined
     -Invisible zipper closure
     -Destination inspired print`,
     care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },
    {id: 4,
     name: "DESTINATION SHORT IVORY DESTINATION",
     img: [{image: '../images/ivory.png'}, {image: '../images/ivory2.png'}, {image:  '../images/ivory3.png'},],
     image: '../images/ivory.png', 
     image2: '../images/ivory2.png', 
     image3: '../images/ivory3.png',
     category: "sets",
     stars: 3,
     price: 120,
     brand: "FINDERS KEEPERS",
     details: `-MAIN: 90% VISCOSE 10% POLYAMIDE
     -Wide leg short
     -Fitted waistband
     -Feature belt with self covered buckle
     -Pockets at side seam
     -Lightweight woven fabric
     -Fully lined
     -Invisible zipper closure
     -Destination inspired print`,
     care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },
    {id: 5,
     name: "NEW DIRECTION DRESS ECRU BOTANIC",
     img: [{image: '../images/maxi.png'}, {image: '../images/maxi2.png'}, {image:  '../images/maxi3.png'},],
     image: '../images/maxi.png',
     image2:  '../images/maxi2.png', 
     image3: '../images/maxi3.png',
     category: "dresses",
     stars: 4.5,
     price: 260.00,
     brand: "C/MEO COLLECTIVE",
     details: `-MAIN: 55% LINEN 45% VISCOSE
     -Centre lapped zip
     -Fully lined
     -Medium weight linen
     -Fit and flare
     -Elasticated straps
     -Gathered keyhole cutout
     -Woven`,
     care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },
    {id: 6,
     name: "FAR FROM MIDI SKIRT BLACK DESERT FLORAL",
     img: [{image: '../images/midi.png'}, {image: '../images/midi2.png'}, {image:  '../images/midi3.png'},],
     image: '../images/midi.png', 
     image2: '../images/midi2.png', 
     image3: '../images/midi3.png',
     category: "skirts",
     stars: 3.5,
     price: 240.00,
     brand: "C/MEO COLLECTIVE",
     details: `- MAIN: 55% LINEN 45% VISCOSE
     - Soft linen blend fabric
     - Mini A-line skirt with midi overlay skirt
     - Fully lined`,
     care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },

    {id: 7,
    name: "BURNOUT TOP PAPAYA",
    img: [{image: '../images/papaya.png'}, {image: '../images/papaya2.png'}, {image:  '../images/papaya3.png'},],
    image: '../images/papaya.png', 
    image2: '../images/papaya2.png', 
    image3: '../images/papaya3.png',
    category: "tops",
    stars: 5,
    price: 120.00,
    brand: "FINDERS KEEPERS",
    details: `-MAIN: 75% VISCOSE 25% POLYESTER
    -Halter neck top
    -Tie at neck and waist
    -Adjustable ring trim
    -Terry toweling check fabric
    -Fully lined
    -Woven`,
    care: `CARE
    WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },
    {id: 8,
    name: "ROSETTA LONG SLEEVE KNIT DRESS FLAMINGO MARLE",
    img: [{image: '../images/pinkdress.png'}, {image: '../images/pinkdress2.png'}, {image:  '../images/pinkdress3.png'},],
    image: '../images/pinkdress.png', 
    image2: '../images/pinkdress2.png',
    image3: '../images/pinkdress3.png',
    category: "dresses",
    stars: 4,
    price: 240.00,
    brand: "KEEPSAKE",
    details: `-MAIN: 72% VISCOSE 28% POLYAMIDE
    -Unlined
    -Soft mid
    -weight stretch knit
    -Fit and flare
    -Features; V neckline
    -Collar
    -Knit`,
    care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD HAND WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT RUB - DO NOT BLEACH - DO NOT TUMBLE DRY - PULL TO SHAPE - DRY FLAT IN SHADE - WARM IRON INSIDE OUT - DO NOT DRY CLEAN`
    },
    {id: 9,
    name: "TUSCANY LONG SLEEVE MINI DRESS CREME PAISLEY",
    img: [{image: '../images/tuscany.png'}, {image: '../images/tuscany2.png'}, {image:  '../images/tuscany3.png'},],
    image: '../images/tuscany.png', 
    image2: '../images/tuscany2.png',
    image3: '../images/tuscany3.png',
    category: "dresses",
    stars: 2.5,
    price: 380.00,
    brand: "KEEPSAKE",
    details: `-MAIN: 100% VISCOSE
    -Keyhole in front with self
    -covered button
    -Separate slip lining
    -Soft light
    -weight georgette
    -A
    -line
    -Features; Frill detail
    -Adjustable tie at waist
    -Woven`,
    care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },

    {id: 10,
    name: "CANDESCENT JEAN VINTAGE SPLICED",
    img: [{image: '../images/vintage.png'}, {image: '../images/vintage2.png'}, {image:  '../images/vintage3.png'},],
    image: '../images/vintage.png',
    image2:  '../images/vintage2.png', 
    image3: '../images/vintage3.png',
    category: "jeans",
    stars: 4.5,
    price: 130.00,
    brand: "THE FIFTH",
    details: `-MAIN: 100% COTTON
    - Relaxed fit
    - Tapered leg
    - Fly front zipper closure
    - Front & back pockets
    - Contrast panel seams
    - Feature Fifth patch
    - Mid
    -weight denim`,
    care: `WASH SEPARATELY BEFORE FIRST USE - THIS COLOUR WILL CONTINUE TO FADE - WASH AND DRY GARMENT TURNED INSIDE OUT - COLD MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT RUB - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM IRON - DO NOT DRYCLEAN`
    },
    {id: 11,
    name: "KOI MINI DRESS PORCELAIN",
    img: [{image: '../images/whitedress.png'}, {image: '../images/whitedress2.png'}, {image:  '../images/whitedress3.png'},],
    image: '../images/whitedress.png', 
    image2: '../images/whitedress2.png',
    image3:  '../images/whitedress3.png',
    category: "dresses",
    stars: 3,
    price: 370.00,
    brand: "KEEPSAKE",
    details: `-MAIN: 100% ORGANIC COTTON
    -Button and buttonholes at front
    -Full lining
    -Soft mid
    -weight 100% cotton
    -In seam pockets
    -A
    -line
    -Features; Trim detail
    -Detachable tie
    -Pin tuck detail
    -Woven`,
    care: `WASH AND DRY GARMENT TURNED INSIDE OUT - COLD DELICATE MACHINE WASH WITH LIKE COLOURS - DO NOT SOAK - DO NOT BLEACH - DO NOT TUMBLE DRY - LINE DRY IN SHADE WITHOUT DELAY - WARM STEAM IRON INSIDE OUT TO ORIGINAL SHAPE - DO NOT DRYCLEAN`
    },
    

    
]

module.exports = products