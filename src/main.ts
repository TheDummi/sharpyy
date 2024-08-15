/** @format */

export enum Styles {
	normal = 0,
	bold = 1,
	dim = 2,
	italic = 3,
	underline = 4,
	inverse = 7,
	invisible = 8,
	strikethrough = 9,
	underlines = 21,

	txGray = 30,
	txRed = 31,
	txGreen = 32,
	txYellow = 33,
	txBlue = 34,
	txMagenta = 35,
	txCyan = 36,
	txWhite = 37,

	bgGray = 40,
	bgRed = 41,
	bgGreen = 42,
	bgYellow = 43,
	bgBlue = 44,
	bgMagenta = 45,
	bgCyan = 46,
	bgWhite = 47,

	rainbow = 254,
	bgRainbow = 255,
}

function style(text: string, ...style: Array<keyof typeof Styles | Styles>) {
	let string = text;

	if (style.includes(Styles.rainbow) || style.includes('rainbow')) {
		const rainbow = [Styles.txRed, Styles.txYellow, Styles.txGreen, Styles.txBlue, Styles.txCyan, Styles.txMagenta];

		string = text
			.match(/.{0,6}/g)
			?.map((string) =>
				string
					.split('')
					.map((char, i) => `\u001b[${rainbow[i]}m${char}`)
					.join('')
			)
			.join('') as string;
	}

	if (style.includes(Styles.bgRainbow) || style.includes('bgRainbow')) {
		const rainbow = [Styles.bgRed, Styles.bgYellow, Styles.bgGreen, Styles.bgBlue, Styles.bgCyan, Styles.bgMagenta];

		string = text
			.match(/.{0,6}/g)
			?.map((string) =>
				string
					.split('')
					.map((char, i) => `\u001b[${rainbow[i]}m${char}`)
					.join('')
			)
			.join('') as string;
	}

	return style.map((style) => `\u001b[${Styles[style] || 0}m`).join('') + string + '\u001b[0m';
}

export default style;
