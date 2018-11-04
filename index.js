/**
 * TP-Link Switch Testing
 */
const uuid = require('uuid/v4');
const {
    login
} = require('tplink-cloud-api');

async function main() {
    const tplink = await login('', '');

    const dl = await tplink.getDeviceList();

    console.log(dl);

    let plug1 = tplink.getHS110("Trainwreck Plug");
    console.log(plug1);

    let plug2 = tplink.getHS110("Trainwreck Plug 2");
    console.log(plug2)

    let powerUsage1 = await plug1.getPowerUsage();
    console.log('Power Usage 1: ', powerUsage1);

    let powerUsage2 = await plug2.getPowerUsage();
    console.log('Power Usage 2:', powerUsage2);

}

main();