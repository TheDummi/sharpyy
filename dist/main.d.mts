/** @format */
declare enum Styles {
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
    txRainbow = 254,
    bgRainbow = 255
}
declare function style(text: string, ...style: Array<keyof typeof Styles | Styles>): string;
declare function link(name: string, url: URL, ...styles: Array<keyof typeof Styles | Styles>): string;

export { Styles, style as default, link, style };
