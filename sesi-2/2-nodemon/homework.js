const videoData = [
    {
        nama : 'Miss Scarlet',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false},
        ]
    },
    {
        nama : 'Mrs. White',
        present : false,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },
    {
        nama : 'Rusty',
        present : false,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    },
    {
        nama : 'Professor Plum',
        present : true,
        rooms : [
            {kitchen : false},
            {ballroom : false},
            {conservatory : false},
            {'dining room' : false},
            {'billiard room' : false},
            {library : false}
        ]
    }

]

const hasil = (status) => {
    let outfill = videoData.filter((prsent) => prsent.present
    === status );
    let total = outfill.reduce((total, prsent) => total + 
    prsent.present, 0);

    console.log(total);
    console.log(outfill);
}

hasil(true);