const { Player } = require ('../models/index');

const createPlayer = (data) => Player.create(data);
const getAllPlayers = () => Player.find({is_active:true});
const getPlayer = (id) => Player.findById({ _id:id, is_active:true });
const deletePlayer = (id) => Player.findByIdAndUpdate(
    {
        _id: id,
        is_active: true,
    },
    {
        is_active: false,
    }
);
const updatePlayer = (id, data) => Player.findByIdAndUpdate(
    {
        _id: id,
        is_active: true,
    },
    {
        ...data,
    }, { new:true }
);
const getPlayerByEmail = (email) => Player.findOne({enamil, is_active})

module.exports=
{
    getAllPlayers,
    getPlayer,
    deletePlayer,
    updatePlayer,
    getPlayerByEmail,
    createPlayer,
}