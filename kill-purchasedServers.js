/** @param {NS} ns */
export async function main(ns) {

var servers = ns.getPurchasedServers();

for (var i = 0; i < servers.length;) {
	var serv = servers[i];
	ns.kill("early-hack-template.js", serv);
	ns.kill("early-hack-template.script", serv);
	++i;
}}
