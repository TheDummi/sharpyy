var Styles = /* @__PURE__ */ ((Styles2) => {
  Styles2[Styles2["normal"] = 0] = "normal";
  Styles2[Styles2["bold"] = 1] = "bold";
  Styles2[Styles2["dim"] = 2] = "dim";
  Styles2[Styles2["italic"] = 3] = "italic";
  Styles2[Styles2["underline"] = 4] = "underline";
  Styles2[Styles2["inverse"] = 7] = "inverse";
  Styles2[Styles2["invisible"] = 8] = "invisible";
  Styles2[Styles2["strikethrough"] = 9] = "strikethrough";
  Styles2[Styles2["underlines"] = 21] = "underlines";
  Styles2[Styles2["txGray"] = 30] = "txGray";
  Styles2[Styles2["txRed"] = 31] = "txRed";
  Styles2[Styles2["txGreen"] = 32] = "txGreen";
  Styles2[Styles2["txYellow"] = 33] = "txYellow";
  Styles2[Styles2["txBlue"] = 34] = "txBlue";
  Styles2[Styles2["txMagenta"] = 35] = "txMagenta";
  Styles2[Styles2["txCyan"] = 36] = "txCyan";
  Styles2[Styles2["txWhite"] = 37] = "txWhite";
  Styles2[Styles2["bgGray"] = 40] = "bgGray";
  Styles2[Styles2["bgRed"] = 41] = "bgRed";
  Styles2[Styles2["bgGreen"] = 42] = "bgGreen";
  Styles2[Styles2["bgYellow"] = 43] = "bgYellow";
  Styles2[Styles2["bgBlue"] = 44] = "bgBlue";
  Styles2[Styles2["bgMagenta"] = 45] = "bgMagenta";
  Styles2[Styles2["bgCyan"] = 46] = "bgCyan";
  Styles2[Styles2["bgWhite"] = 47] = "bgWhite";
  Styles2[Styles2["txRainbow"] = 254] = "txRainbow";
  Styles2[Styles2["bgRainbow"] = 255] = "bgRainbow";
  return Styles2;
})(Styles || {});
function style(text, ...style2) {
  let string = text;
  if (style2.includes(254 /* txRainbow */) || style2.includes("txRainbow")) {
    const rainbow = [31 /* txRed */, 33 /* txYellow */, 32 /* txGreen */, 34 /* txBlue */, 36 /* txCyan */, 35 /* txMagenta */];
    string = text.match(/.{0,6}/g)?.map(
      (string2) => string2.split("").map((char, i) => `\x1B[${rainbow[i]}m${char}`).join("")
    ).join("");
  }
  if (style2.includes(255 /* bgRainbow */) || style2.includes("bgRainbow")) {
    const rainbow = [41 /* bgRed */, 43 /* bgYellow */, 42 /* bgGreen */, 44 /* bgBlue */, 46 /* bgCyan */, 45 /* bgMagenta */];
    string = text.match(/.{0,6}/g)?.map(
      (string2) => string2.split("").map((char, i) => `\x1B[${rainbow[i]}m${char}`).join("")
    ).join("");
  }
  return style2.map((style3) => `\x1B[${Styles[style3] || 0}m`).join("") + string + "\x1B[0m";
}

export { Styles, style as default };
