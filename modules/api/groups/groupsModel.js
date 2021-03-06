const mongoose = require('mongoose');
const groupsSchema = require('./groupsSchema');
let groupsModel = mongoose.model('groups', groupsSchema);

const findByIdGroup = (idgroup, callback) => {
    try
    {
        groupsModel.findById(id, (err, doc) => {
            if (err) {
                callback(err);
            } else {
                callback(null, doc);
            }
        })
    }
    catch(err)
    {
        callback(err);
    }
}

const findAllGroup = async ({}) => {
    try
    {
        return await groupsModel.find({}).exec();
    }
    catch(err)
    {
        return null;
    }
}

const getAllGroup = (callback) => {
    groupsModel.find({}).exec(function (err, group) {
        callback(group, err);
    });
};


module.exports = {
    findByIdGroup, findAllGroup,getAllGroup
}