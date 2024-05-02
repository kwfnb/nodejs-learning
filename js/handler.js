var fs = require('fs');
const { emit } = require('process');

function getPlayer() {
    var player = fs.createReadStream(__dirname + '/json/player.json');
    var dataFrom = '';
    player.on('data', function(chunk) {
        dataFrom += chunk;
        console.log(chunk.toString());
    });

    player.on('end', function() {
        console.log(dataFrom);
        emit('player', dataFrom);
    });
}