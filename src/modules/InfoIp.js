const mongoose = require("mongoose");

const InfoIpSchema=mongoose.Schema
({
    ip: {type: String, require: true},
    lat: {type: String, require: true},
    lon: {type: String, require: true},
    isp: {type: String, require: true}
},{
    collection: "InfoIps",
    timestamps: true
})


const InfoIp= mongoose.model("InfoIp",InfoIpSchema);

module.exports=InfoIp