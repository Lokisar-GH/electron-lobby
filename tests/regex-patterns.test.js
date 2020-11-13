const regexPatterns = require("../regex-patterns");

test("ACCEPTED", () => {
	const input = "user";
	const expected = [input, "user"];
	const result = regexPatterns["ACCEPTED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("ADDBOT", () => {
	const input = "12 battle1 user active 255";
	const expected = [input, "12", "battle1", "user", "active", "255"];
	const result = regexPatterns["ADDBOT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("ADDBOT2", () => {
	const input = "12 battle1 user active 255 dll";
	const expected = [input, "12", "battle1", "user", "active", "255", "dll"];
	const result = regexPatterns["ADDBOT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("ADDSTARTRECT", () => {
	const input = "1 left top right bottom";
	const expected = [input, "1", "left", "top", "right", "bottom"];
	const result = regexPatterns["ADDSTARTRECT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("ADDUSER", () => {
	const input = "username CA 0 0";
	const expected = [input, "CA", "0", "0"];
	const result = regexPatterns["ADDUSER"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("ADDUSER2", () => {
	const input = "username CA 0 0 0";
	const expected = [input, "username", "CA", "0", "0", "0"];
	const result = regexPatterns["ADDUSER"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("AGREEMENT", () => {
	const input = "agreement goes here";
	const expected = [input, input];
	const result = regexPatterns["AGREEMENT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("AGREEMENTEND", () => {
	expect(regexPatterns["AGREEMENTEND"]).toBe(false);
});

test("BATTLECLOSED", () => {
	const input = "1";
	const expected = [input, "1"];
	const result = regexPatterns["BATTLECLOSED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("BATTLEOPENED", () => {
	const input = "4437 0 0 BlackHoleHost6 71.2.10.1 8626 10 0 0 -1213614804";
	const expected = [
		input,
		"4437",
		"0",
		"0",
		"BlackHoleHost6",
		"71.2.10.1",
		"8626",
		"10",
		"0",
		"0",
		"-1213614804",
	];
	const result = regexPatterns["BATTLEOPENED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("BATTLEOPENED2", () => {
	const input =
		"4437 0 0 BlackHoleHost6 71.2.10.1 8626 10 0 0 -1213614804 Spring 104.0";
	const expected = [
		input,
		"4437",
		"0",
		"0",
		"BlackHoleHost6",
		"71.2.10.1",
		"8626",
		"10",
		"0",
		"0",
		"-1213614804",
		"Spring 104.0",
	];
	const result = regexPatterns["BATTLEOPENED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("BATTLEOPENED3", () => {
	const input =
		"4437 0 0 BlackHoleHost6 71.2.10.1 8626 10 0 0 -1213614804 Spring 104.0\tCoastline_Dry_V1";
	const expected = [
		input,
		"4437",
		"0",
		"0",
		"BlackHoleHost6",
		"71.2.10.1",
		"8626",
		"10",
		"0",
		"0",
		"-1213614804",
		"Spring 104.0",
		"Coastline_Dry_V1",
	];
	const result = regexPatterns["BATTLEOPENED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("BATTLEOPENED4", () => {
	const input =
		"4437 0 0 BlackHoleHost6 71.2.10.1 8626 10 0 0 -1213614804 Spring 104.0\tCoastline_Dry_V1\tThe BlackHoleHost - Conflict";
	const expected = [
		input,
		"4437",
		"0",
		"0",
		"BlackHoleHost6",
		"71.2.10.1",
		"8626",
		"10",
		"0",
		"0",
		"-1213614804",
		"Spring 104.0",
		"Coastline_Dry_V1",
		"The BlackHoleHost - Conflict",
	];
	const result = regexPatterns["BATTLEOPENED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("BATTLEOPENED5", () => {
	const input =
		"4437 0 0 BlackHoleHost6 71.2.10.1 8626 10 0 0 -1213614804 Spring 104.0\tCoastline_Dry_V1\tThe BlackHoleHost - Conflict\tBalanced Annihilation V9.46";
	const expected = [
		input,
		"4437",
		"0",
		"0",
		"BlackHoleHost6",
		"71.2.10.1",
		"8626",
		"10",
		"0",
		"0",
		"-1213614804",
		"Spring 104.0",
		"Coastline_Dry_V1",
		"The BlackHoleHost - Conflict",
		"Balanced Annihilation V9.46",
	];
	const result = regexPatterns["BATTLEOPENED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("BATTLEOPENED6", () => {
	const input =
		"4437 0 0 BlackHoleHost6 71.2.10.1 8626 10 0 0 -1213614804 Spring 104.0\tCoastline_Dry_V1\tThe BlackHoleHost - Conflict\tBalanced Annihilation V9.46\t__battle__1234";
	const expected = [
		input,
		"4437",
		"0",
		"0",
		"BlackHoleHost6",
		"71.2.10.1",
		"8626",
		"10",
		"0",
		"0",
		"-1213614804",
		"Spring 104.0",
		"Coastline_Dry_V1",
		"The BlackHoleHost - Conflict",
		"Balanced Annihilation V9.46",
		"__battle__1234",
	];
	const result = regexPatterns["BATTLEOPENED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("BRIDGEDCLIENTFROM", () => {
	const input = "CA 1 externalUser";
	const expected = [input, "CA", "1", "externalUser"];
	const result = regexPatterns["BRIDGEDCLIENTFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CHANGEEMAILACCEPTED", () => {
	expect(regexPatterns["CHANGEEMAILACCEPTED"]).toBe(false);
});

test("CHANGEEMAILDENIED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["CHANGEEMAILDENIED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CHANGEEMAILREQUESTACCEPTED", () => {
	expect(regexPatterns["CHANGEEMAILREQUESTACCEPTED"]).toBe(false);
});

test("CHANGEEMAILREQUESTDENIED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["CHANGEEMAILREQUESTDENIED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CHANNEL", () => {
	const input = "chanName 21";
	const expected = [input, "chanName", "21"];
	const result = regexPatterns["CHANNEL"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CHANNEL2", () => {
	const input = "chanName 21 topic goes here";
	const expected = [input, "chanName", "21", "topic goes here"];
	const result = regexPatterns["CHANNEL"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CHANNELMESSAGE", () => {
	const input = "chanName serverMessage";
	const expected = [input, "chanName", "serverMessage"];
	const result = regexPatterns["CHANNELMESSAGE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CHANNELTOPIC", () => {
	const input = "chanName userName";
	const expected = [input, "chanName", "userName"];
	const result = regexPatterns["CHANNELTOPIC"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CHANNELTOPIC2", () => {
	const input = "chanName userName new change topic";
	const expected = [input, "chanName", "userName", "new change topic"];
	const result = regexPatterns["CHANNELTOPIC"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CLIENTBATTLESTATUS", () => {
	const input = "userName ready 255";
	const expected = [input, "userName", "ready", "255"];
	const result = regexPatterns["CLIENTBATTLESTATUS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CLIENTIPPORT", () => {
	const input = "userName 127.123.33 8200";
	const expected = [input, "userName", "127.123.33", "8200"];
	const result = regexPatterns["CLIENTIPPORT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CLIENTS", () => {
	const input = "chanName";
	const expected = [input, "chanName"];
	const result = regexPatterns["CLIENTS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CLIENTS2", () => {
	const input = "chanName player1 player2 player3";
	const expected = [input, "chanName", "player1 player2 player3"];
	const result = regexPatterns["CLIENTS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CLIENTSFROM", () => {
	const input = "chan bridge";
	const expected = [input, "chan", "bridge"];
	const result = regexPatterns["CLIENTSFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CLIENTSFROM2", () => {
	const input = "chan bridge client1 client2";
	const expected = [input, "chan", "bridge", "client1 client2"];
	const result = regexPatterns["CLIENTSFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("CLIENTSTATUS", () => {
	const input = "userName ready";
	const expected = [input, "userName", "ready"];
	const result = regexPatterns["CLIENTSTATUS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("COMPFLAGS", () => {
	const input = "a";
	const expected = [input, "a"];
	const result = regexPatterns["COMPFLAGS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("COMPFLAGS2", () => {
	const input = "a b";
	const expected = [input, "a", "b"];
	const result = regexPatterns["COMPFLAGS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("COMPFLAGS3", () => {
	const input = "a b cd";
	const expected = [input, "a", "b", "cd"];
	const result = regexPatterns["COMPFLAGS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("DENIED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["DENIED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("DISABLEUNITS", () => {
	const input = "unit1 unit2 unit3 unit4";
	const expected = [input, input];
	const result = regexPatterns["DISABLEUNITS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("ENABLEALLUNITS", () => {
	expect(regexPatterns["ENABLEALLUNITS"]).toBe(false);
});

test("ENABLEUNITS", () => {
	const input = "unit1 unit2 unit3 unit4";
	const expected = [input, input];
	const result = regexPatterns["ENABLEUNITS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("ENDOFCHANNELS", () => {
	expect(regexPatterns["ENDOFCHANNELS"]).toBe(false);
});

test("FAILED", () => {
	expect(regexPatterns["FAILED"]).toBe(false);
});

test("FORCEQUITBATTLE", () => {
	expect(regexPatterns["FORCEQUITBATTLE"]).toBe(false);
});

test("HOSTPORT", () => {
	const input = "8200";
	const expected = [input, input];
	const result = regexPatterns["HOSTPORT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("IGNORE", () => {
	const input = "username";
	const expected = [input, "username"];
	const result = regexPatterns["IGNORE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("IGNORE2", () => {
	const input = "username reason to ignore";
	const expected = [input, "username", "reason to ignore"];
	const result = regexPatterns["IGNORE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("IGNORELIST", () => {
	const input = "username";
	const expected = [input, "username"];
	const result = regexPatterns["IGNORELIST"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("IGNORELIST2", () => {
	const input = "username reason to ignore";
	const expected = [input, "username", "reason to ignore"];
	const result = regexPatterns["IGNORELIST"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("IGNORELISTBEGIN", () => {
	expect(regexPatterns["IGNORELISTBEGIN"]).toBe(false);
});

test("IGNORELISTEND", () => {
	expect(regexPatterns["IGNORELISTEND"]).toBe(false);
});

test("JOIN", () => {
	const input = "chanName";
	const expected = [input, input];
	const result = regexPatterns["JOIN"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINBATTLEFAILED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["JOINBATTLEFAILED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINBATTLEREQUEST", () => {
	const input = "userName 123.12.123";
	const expected = [input, "userName", "123.12.123"];
	const result = regexPatterns["JOINBATTLEREQUEST"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINED", () => {
	const input = "chanName userName";
	const expected = [input, "chanName", "userName"];
	const result = regexPatterns["JOINED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINEDBATTLE", () => {
	const input = "12 userName";
	const expected = [input, "12", "userName"];
	const result = regexPatterns["JOINEDBATTLE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINEDBATTLE2", () => {
	const input = "12 userName scriptpassword";
	const expected = [input, "12", "userName", "scriptpassword"];
	const result = regexPatterns["JOINEDBATTLE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINEDFROM", () => {
	const input = "chanName bridge userName";
	const expected = [input, "chanName", "bridge", "userName"];
	const result = regexPatterns["JOINEDFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINFAILED", () => {
	const input = "chanName";
	const expected = [input, "chanName"];
	const result = regexPatterns["JOINFAILED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JOINFAILED2", () => {
	const input = "chanName reason goes here";
	const expected = [input, "chanName", "reason goes here"];
	const result = regexPatterns["JOINFAILED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("JSON", () => {
	const input = "{ json goes here }";
	const expected = [input, input];
	const result = regexPatterns["JSON"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("KICKFROMBATTLE", () => {
	const input = "10 userName";
	const expected = [input, "10", "userName"];
	const result = regexPatterns["KICKFROMBATTLE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("LEFT", () => {
	const input = "chanName userName";
	const expected = [input, "chanName", "userName"];
	const result = regexPatterns["LEFT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("LEFT2", () => {
	const input = "chanName userName reason goes here";
	const expected = [input, "chanName", "userName", "reason goes here"];
	const result = regexPatterns["LEFT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("LEFTBATTLE", () => {
	const input = "21 userName";
	const expected = [input, "21", "userName"];
	const result = regexPatterns["LEFTBATTLE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("LEFTFROM", () => {
	const input = "chan userName";
	const expected = [input, "chan", "userName"];
	const result = regexPatterns["LEFTFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("LOGININFOEND", () => {
	expect(regexPatterns["LOGININFOEND"]).toBe(false);
});

test("MOTD", () => {
	const input = "motd goes here";
	const expected = [input, input];
	const result = regexPatterns["MOTD"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("OK", () => {
	expect(regexPatterns["OK"]).toBe(false);
});

test("OPENBATTLE", () => {
	const input = "13";
	const expected = [input, input];
	const result = regexPatterns["OPENBATTLE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("OPENBATTLEFAILED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["OPENBATTLEFAILED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("PONG", () => {
	expect(regexPatterns["PONG"]).toBe(false);
});

test("REDIRECT", () => {
	const input = "123.1231.222 8200";
	const expected = [input, "123.1231.222", "8200"];
	const result = regexPatterns["REDIRECT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("REGISTRATIONACCEPTED", () => {
	expect(regexPatterns["REGISTRATIONACCEPTED"]).toBe(false);
});

test("REGISTRATIONDENIED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["REGISTRATIONDENIED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("REMOVEBOT", () => {
	const input = "13 botName";
	const expected = [input, "13", "botName"];
	const result = regexPatterns["REMOVEBOT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("REMOVESCRIPTTAGS", () => {
	const input = "key1 key2 key3";
	const expected = [input, input];
	const result = regexPatterns["REMOVESCRIPTTAGS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("REMOVESTARTRECT", () => {
	const input = "5";
	const expected = [input, input];
	const result = regexPatterns["REMOVESTARTRECT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("REMOVEUSER", () => {
	const input = "userName";
	const expected = [input, input];
	const result = regexPatterns["REMOVEUSER"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("REQUESTBATTLESTATUS", () => {
	expect(regexPatterns["REQUESTBATTLESTATUS"]).toBe(false);
});

test("RESENDVERIFICATIONACCEPTED", () => {
	expect(regexPatterns["RESENDVERIFICATIONACCEPTED"]).toBe(false);
});

test("RESENDVERIFICATIONDENIED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["RESENDVERIFICATIONDENIED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("RESETPASSWORDACCEPTED", () => {
	expect(regexPatterns["RESETPASSWORDACCEPTED"]).toBe(false);
});

test("RESETPASSWORDDENIED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["RESETPASSWORDDENIED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("RESETPASSWORDREQUESTACCEPTED", () => {
	expect(regexPatterns["RESETPASSWORDREQUESTACCEPTED"]).toBe(false);
});

test("RESETPASSWORDREQUESTDENIED", () => {
	const input = "reason goes here";
	const expected = [input, input];
	const result = regexPatterns["RESETPASSWORDREQUESTDENIED"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("RING", () => {
	const input = "userName";
	const expected = [input, input];
	const result = regexPatterns["RING"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAID", () => {
	const input = "chanName userName";
	const expected = [input, "chanName", "userName"];
	const result = regexPatterns["SAID"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAID2", () => {
	const input = "chanName userName user message";
	const expected = [input, "chanName", "userName", "user message"];
	const result = regexPatterns["SAID"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDEX", () => {
	const input = "chanName userName";
	const expected = [input, "chanName", "userName"];
	const result = regexPatterns["SAIDEX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDEX2", () => {
	const input = "chanName userName user message";
	const expected = [input, "chanName", "userName", "user message"];
	const result = regexPatterns["SAIDEX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDFROM", () => {
	const input = "chan userName";
	const expected = [input, "chan", "userName"];
	const result = regexPatterns["SAIDFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDFROM2", () => {
	const input = "chan userName user message";
	const expected = [input, "chan", "userName", "user message"];
	const result = regexPatterns["SAIDFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDPRIVATE", () => {
	const input = "userName";
	const expected = [input, "userName"];
	const result = regexPatterns["SAIDPRIVATE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDPRIVATE2", () => {
	const input = "userName user message";
	const expected = [input, "userName", "user message"];
	const result = regexPatterns["SAIDPRIVATE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDPRIVATEEX", () => {
	const input = "userName";
	const expected = [input, "userName"];
	const result = regexPatterns["SAIDPRIVATEEX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAIDPRIVATEEX2", () => {
	const input = "userName user message";
	const expected = [input, "userName", "user message"];
	const result = regexPatterns["SAIDPRIVATEEX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAYPRIVATE", () => {
	const input = "userName";
	const expected = [input, "userName"];
	const result = regexPatterns["SAYPRIVATE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAYPRIVATE2", () => {
	const input = "userName user message";
	const expected = [input, "userName", "user message"];
	const result = regexPatterns["SAYPRIVATE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAYPRIVATEEX", () => {
	const input = "userName";
	const expected = [input, "userName"];
	const result = regexPatterns["SAYPRIVATEEX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SAYPRIVATEEX2", () => {
	const input = "userName user message";
	const expected = [input, "userName", "user message"];
	const result = regexPatterns["SAYPRIVATEEX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SERVERMSG", () => {
	const input = "message goes here";
	const expected = [input, input];
	const result = regexPatterns["SERVERMSG"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SERVERMSG2", () => {
	const input = "message goes here";
	const expected = [input, input];
	const result = regexPatterns["SERVERMSG"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SERVERMSGBOX", () => {
	const input = "message goes here";
	const expected = [input, input];
	const result = regexPatterns["SERVERMSGBOX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SERVERMSGBOX2", () => {
	const input = "message goes here\turl goes here";
	const expected = [input, "message goes here", "url goes here"];
	const result = regexPatterns["SERVERMSGBOX"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("SETSCRIPTTAGS", () => {
	const input = "tags go here";
	const expected = [input, input];
	const result = regexPatterns["SETSCRIPTTAGS"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("UDPSOURCEPORT", () => {
	const input = "8200";
	const expected = [input, input];
	const result = regexPatterns["UDPSOURCEPORT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("UNBRIDGEDCLIENTFROM", () => {
	const input = "CA 33 userName";
	const expected = [input, "CA", "33", "userName"];
	const result = regexPatterns["UNBRIDGEDCLIENTFROM"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("UNIGNORE", () => {
	const input = "userName";
	const expected = [input, input];
	const result = regexPatterns["UNIGNORE"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("UPDATEBATTLEINFO", () => {
	const input = "11 2 0 12333";
	const expected = [input, "11", "2", "0", "12333"];
	const result = regexPatterns["UPDATEBATTLEINFO"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("UPDATEBATTLEINFO2", () => {
	const input = "11 2 0 12333 map name";
	const expected = [input, "11", "2", "0", "12333", "map name"];
	const result = regexPatterns["UPDATEBATTLEINFO"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});

test("UPDATEBOT", () => {
	const input = "11 battlename active 255";
	const expected = [input, "11", "battlename", "active", "255"];
	const result = regexPatterns["UPDATEBOT"].exec(input);
	expect(result).toEqual(expect.arrayContaining(expected));
});
