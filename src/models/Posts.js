const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: 
    {
        type: String,
        required:true,
    },
    content: 
    {
        type: String,
        required: true,
    },
    Author: 
    {
        type: Schema.Types.ObjectId,
        ref: 'player',
    },
    cover:
    {
        type: String,
    },
    likes:
    {
        type: Number,
    },
    liked_by:
    {
        type: [Schema.Types.ObjectId],
        ref: 'player'
    },
    is_active:
    {
        type: Boolean,
        default: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('posts', PostSchema);