/** @param {NS} ns */
export async function main(ns) {

var servers = ['n00dles', 'zer0', 'neo-net', 'computek', 'avmnite-02h', 'silver-helix', 'sigma-cosmetics', 'max-hardware', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'iron-gym', 'omega-net', 'foodnstuff', 'CSEC', 'phantasy'];

for (var i = 0; i < servers.length; ++i) {
	var serv = servers[i];
	ns.kill("early-hack-template.js", serv);
	ns.kill("early-hack-template.script", serv);
}}
