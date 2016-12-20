var lorixiia = {};
lorixiia.gen = function(namae ,imelu ,bits ,pp){
	var o = {
		userIds: [{name:namae, email:imelu}],
		numBits:bits,
		passphrase:pp
	};

	openpgp.generateKey(o).then(function(key) {
    	var priv = key.privateKeyArmored;
		console.log("Private key generated!\n"+priv);
    	var pub = key.publicKeyArmored;
		console.log("Public key generated!\n"+pub);
	});
}
