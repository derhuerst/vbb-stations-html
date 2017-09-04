'use strict'

const h = require('hyperscript')

const renderLine = (line) => {
	return h('span', {
		class: 'line ' + line.product,
		style: {
			'background-color': line.bg,
			color: line.fg
		}
	}, line.name || '?')
}

const renderStation = (station, lines) => {
	return h('tr', {
		id: 'station-' + station.id
	}, [
		h('td', {}, h('code', {}, station.id)),
		h('td', {}, station.name),
		h('td', {}, lines.map(renderLine))
	])
}

module.exports = renderStation
