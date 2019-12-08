const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomChatSchema = new Schema
({
    topic:
    {
        type: String,
        required: true,
    }
    
    Player: 
    {
        type: Schema.Types.ObjectId,
        ref: 'player'
    },
    is_active: 
    {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Chat', RoomChatSchema );