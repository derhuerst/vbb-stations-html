'use strict'

const getStations = require('vbb-stations')
const sortBy = require('lodash.sortby')
const linesAt = require('vbb-lines-at')
const colors = require('vbb-util/lines/colors')
const products = require('vbb-util/products')
const h = require('hyperscript')

const render = require('./lib/render')
const skeleton = require('./lib/skeleton')

// todo: move this into lib or an npm module
const colorOfLine = (line) => {
	let color = {fg: '#fff', bg: '#555'}

	if (colors[line.product] && colors[line.product][line.name]) {
		color = colors[line.product][line.name]
	} else if (products[line.product]) {
		// todo: what about the U4?
		color = {fg: '#fff', bg: products[line.product].color}
	}

	return color
}

const stations = sortBy(getStations('all'), 'id')
const rows = []
for (let station of stations) {
	const lines = linesAt[station.id]
	.map((line) => Object.assign(colorOfLine(line), line))

	rows.push(render(station, lines))
}

const table = h('table', {}, [
	h('thead', {}, [
		h('tr', {}, [
			h('th', {}, 'id'),
			h('th', {}, 'name'),
			h('th', {}, 'lines')
		])
	]),
	h('tbody', {}, rows)
])
process.stdout.write(skeleton(table.outerHTML))
