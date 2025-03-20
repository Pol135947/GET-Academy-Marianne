
const model ={
    app:{}, 

    inputs: {},

    data: {} // items:
}

// avoid repetitions as much as possible


const bedroom = {
    app: {
        currentMode: "show",
    },

    inputs: {
        
    },

    dimensions: { // millimeters
        room: {
            length:5180, 
            height:3200,
            width:2980,
        },
        // bed related
        bed: {
            length: 2000,
            height: 400,
            width: 1600,
        },
        bedframe: {
            length: bedroom.dimensions.bed.length+200,
            height: 1700,
            width: bedroom.dimensions.bed.width+50,
            plankWidth: 70,
        },
        headboard:{
            vertical:[{
                length:bedroom.dimensions.bedframe.length,
                height:1000,
                width:50,
            }],
            horizontal:[{
                length:300,
                height:20,
                width:bedroom.dimensions.headboard.length,
            }]

        },
        // box stairs
        boxStairs: {
            number: 4,
            length: 600,
            width: bedroom.dimensions.bedframe.width/4,
            height: bedroom.dimensions.bedframe.height/5,
        },

        // closet related stuff

        // version A

        openClosetA:{
            length: 600,
            width: bedroom.dimensions.bedframe.width,
            height: 1930,
            innerBox:{
                number:4,
                length:bedroom.dimensions.openClosetA.length-20,
                width:bedroom.dimensions.openClosetA.width/2-(bedroom.dimensions.openClosetA.borderThickness.outer+bedroom.dimensions.openClosetA.borderThickness.inner/2),
                height:900,
            },
            borderThickness: {
                outer: 50,
                inner: 30,
            },
        },

        drawerA:{
            length:bedroom.dimensions.openClosetA.length,
            width:600,
            height:bedroom.dimensions.boxStairs.height*3,
        },

        // version B
        
        openClosetB:{
            length: 600,
            width: bedroom.dimensions.bedframe.width,
            height: 1000,
            innerBox:{
                number:2,
                length:bedroom.dimensions.openClosetA.length-20,
                width:bedroom.dimensions.openClosetA.width/2-(bedroom.dimensions.openClosetB.borderThickness.outer+bedroom.dimensions.openClosetB.borderThickness.inner/2),
                height:900,
            },
            borderThickness: {
                outer: 20,
                inner: 20,
            },
        },

        shelf1:{
            length: bedroom.dimensions.openClosetB.length,
            width: bedroom.dimensions.openClosetB.width,
            height: bedroom.dimensions.boxStairs.height,
            borderThickness: 20,
        },
        shelf2:{
            length: bedroom.dimensions.openClosetB.length,
            width: bedroom.dimensions.boxStairs.width*3,
            height: bedroom.dimensions.boxStairs.height,
            borderThickness: 20,
        },

        drawerB:{
            length:bedroom.dimensions.openClosetA.length,
            width:600,
            height:bedroom.dimensions.boxStairs.height*3,
        },

        door: {
            length: 675,
            height: 2000,
            width: 30,
            doorframes: [
                { id: 'left', height: bedroom.dimensions.door.height+75, length: 10, width: 75 },
                { id: 'right',  height: bedroom.dimensions.door.height+75, length: 10, width: 75 },
                { id: 'top',  height: 75, length: 10, width: bedroom.dimensions.door.length+75*2 },
            ]
        },
        bedHole: {
            length: bedroom.dimensions.bedframe.length-100,
            height: bedroom.dimensions.bedframe.height- bedroom.dimensions.bedframe.plankWidth,
            width: bedroom.dimensions.bedframe.width-20,
        },
        bookshelf:{
            length: 30, 
            height:bedroom.dimensions.bedframe.height/2,
            width:bedroom.dimensions.bedframe.width,
        },
    }
}