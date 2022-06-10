const config = require('./config.json');

var cf = require('cloudflare')({
  "token": config.token
});
cf.dnsRecords.browse(config.zoneId).then(resp => {
    resp.result.forEach(res => {
        cf.dnsRecords.del(config.zoneId,res.id);
        console.log(`Deleted ${res.type} record for ${res.name}`);
    })
})