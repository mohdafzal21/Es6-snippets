//objects

var obj = {};

var Tweet = [
    {
        profilePhoto: String,
        handleBar : String,
        postedTime: Date.now(),
        description : String,
        comments: ['name1','name'],
        like : Number,
        message: String,
        commentsProfile: function(){
            alert(' my profilePhoto'+ this.profilePhoto)
        }
    }
];

///



function identify(){
    return name.toUpperCase();
}

var me = {
    name : 'Afzal'
};