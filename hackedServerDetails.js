/** @param {NS} ns */
export async function main(ns) {
	var hackedServers = ['n00dles', 'zer0', 'neo-net', 'computek', 'avmnite-02h', 'silver-helix', 'sigma-cosmetics', 'max-hardware', 'joesguns', 'nectar-net', 'hong-fang-tea', 'harakiri-sushi', 'iron-gym', 'omega-net', 'foodnstuff', 'CSEC', 'phantasy', 'crush-fitness', 'computek'];
	var arrayLength = hackedServers.length;

	const row = '%-20s | %8s | %12s | %12s | %12s | %12s';
	ns.tprint(row, 'Server Name', 'Server RAM', 'Used RAM', 'Hacking Skill', 'Security Level', 'Money');
	ns.tprintf(row, '---------', '-------', '------', '-------', '------', '-------');

	var i = 0;
	for (; hackedServers[i];) {
		var serverMaxRam = [];
		var serverHackingSkill = [];
		var serverSecLevel = [];
		var serverMoney = [];
		var serverUsedRam = [];
		serverMaxRam[i] = ns.getServerMaxRam(hackedServers[i]);
		serverHackingSkill[i] = ns.getServerRequiredHackingLevel(hackedServers[i]);
		serverSecLevel[i] = ns.getServerSecurityLevel(hackedServers[i]);
		serverMoney[i] = ns.getServerMoneyAvailable(hackedServers[i]);
		serverUsedRam[i] = ns.getServerUsedRam(hackedServers[i]);

		ns.tprint(row, hackedServers[i], serverMaxRam[i], serverUsedRam[i], serverMaxRam[i], serverHackingSkill[i], serverSecLevel[i], serverMoney[i]);
		i++
	}
}
