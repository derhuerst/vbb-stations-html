'use strict'

const skeleton = (content) => {
	return `
<!DOCTYPE html>
<html lang="de">
<head>
	<meta charset="utf-8"/>
	<title>list of VBB stations</title>
	<meta name="generator" content="https://github.com/derhuerst/vbb-stations-html">
	<meta name="referrer" content="origin-when-cross-origin">

	<link rel="profile" href="http://osprotocol.com">
	<meta property="os:repo" content="https://github.com/derhuerst/vbb-stations-html">
	<meta property="os:rcs_type" content="git">
	<meta property="os:src" content="git@github.com:derhuerst/vbb-stations-html.git">

	<meta name="viewport" content="initial-scale=1,user-scalable=yes,width=device-width">
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<main>${content}</main>
	<footer id="footer" class="section">
		<p>The data is licensed as <a href="https://creativecommons.org/licenses/by/3.0/de/">CC-BY <code>3.0</code></a> by <i>Verkehrsverbund Berlin Brandenburg GmbH</i>.</p>
		<p><a href="https://github.com/derhuerst/vbb-stations-html"><abbr title="Free Open Source Software">FOSS</abbr></a> made with <span class="love">❤</span> by <a href="http://jannisr.de">@derhuerst</a>.</p>
	</footer>
</body>
</html>
`
}

module.exports = skeleton
