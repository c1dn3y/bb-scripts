/** @param {NS} ns */
export async function main(ns) {
var hackedServers = ['n00dles', 'zer0', 'neo-net', 'computek', 'avmnite-02h', 'silver-helix', 'sigma-cosmetics', 'max-hardware', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'iron-gym'];
var arrayLength = hackedServers.length;


var i = 0;
for (;hackedServers[i];) { 	
	var serverMaxRam = [];		
	serverMaxRam[i] = ns.getServerMaxRam(hackedServers[i]);	

	await ns.scp("early-hack-template.js", hackedServers[i]);
	
	if (serverMaxRam[i] = 4) {
		ns.exec("early-hack-template.js", hackedServers[i], 1);
	}	
	if (serverMaxRam[i] = 8) {
		ns.exec("early-hack-template.js", hackedServers[i], 2);
	}
	if (serverMaxRam[i] = 16) {
		ns.exec("early-hack-template.js", hackedServers[i], 4);
	}
	if (serverMaxRam[i] = 32) {
		ns.exec("early-hack-template.js", hackedServers[i], 8);
	}
	if (serverMaxRam[i] = 64) {
		ns.exec("early-hack-template.js", hackedServers[i], 16);
	}
	i++
}
}
