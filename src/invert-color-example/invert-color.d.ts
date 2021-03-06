// /**
//  *  RGB object type with red, green and blue components.
//  */
// export declare type RGB = {
//     r: number;
//     g: number;
//     b: number;
// };
// /**
//  *  RGB list (array) type with red, green and blue components.
//  */
// export declare type RgbArray = [number, number, number];
// /**
//  *  Hexadecimal representation of a color.
//  */
// export declare type HexColor = string;
// /**
//  *  Color represented as hexadecimal value or as RGB object or list.
//  */
// export declare type Color = RGB | RgbArray | HexColor;
// /**
//  *  Interface for defining black and white colors; used to amplify the contrast
//  *  of the color inversion.
//  */
// export interface BlackWhite {
//     black: HexColor;
//     white: HexColor;
//     threshold?: number;
// }
// /**
//  *  Generates inverted (opposite) version of the given color.
//  *  @param {Color} color - Color to be inverted.
//  *  @param {BlackWhite|boolean} [bw=false] - Whether to amplify the inversion to
//  *  black or white. Provide an object to customize black/white colors.
//  *  @returns {HexColor} - Hexadecimal representation of the inverted color.
//  */
// declare function invert(color: Color, bw?: BlackWhite | boolean): HexColor;
// /**
//  *  Utility methods to generate inverted version of a color.
//  *  @namespace
//  */
// declare namespace invert {
//     /**
//      *  Generates inverted (opposite) version of the given color, as a RGB object.
//      *  @alias invert.asRgbObject
//      *  @param {Color} color - Color to be inverted.
//      *  @param {BlackWhite|boolean} [bw] - Whether to amplify the inversion to
//      *  black or white. Provide an object to customize black/white colors.
//      *  @returns {RGB} - RGB object representation of the inverted color.
//      */
//     function asRGB(color: Color, bw?: BlackWhite | boolean): RGB;
//     /**
//      *  Generates inverted (opposite) version of the given color, as a RGB array.
//      *  @param {Color} color - Color to be inverted.
//      *  @param {BlackWhite|boolean} [bw] - Whether to amplify the inversion to
//      *  black or white. Provide an object to customize black/white colors.
//      *  @returns {RGB} - RGB array representation of the inverted color.
//      */
//     function asRgbArray(color: Color, bw?: BlackWhite | boolean): RgbArray;
//     /**
//      *  Default luminance threshold used for amplifying inversion to black and
//      *  white.
//      *  @type {number}
//      */
//     const defaultThreshold: number;
//     /**
//      *  Alias of `.asRGB()`
//      */
//     const asRgbObject: typeof asRGB;
// }
// export default invert;




// // 简单版
// 字面量数组类型，明确提示应使用长度为 3 且类型均为数字的数组，对于明确长度的数组定义我们不应该使用 number[] 这样的不定长度数组进行声明
export type RgbArray = [number, number, number]

// 对于对象类型，我们使用 interface 替代 type 声明，方便可能的扩展和继承
export interface RGB {
  r: number
  g: number
  b: number
}

export interface BlackWhite {
  black: string
  white: string
  threshold?: number
}


export type Color = string | RgbArray | RGB
// export const invert = (color: color, bw?: boolean | BlackWhite) => string
export interface InvertColor {
  (color: Color, bw?: boolean | BlackWhite): string // interface 可以直接定义函数体
  asRGB(color: Color, bw?: boolean | BlackWhite): RGB
  asRgbArray(color: Color, bw?: boolean | BlackWhite): RgbArray
}
export const invert: InvertColor;


// API: 
// invert(color[, bw])
// invert.asRGB(color[, bw])
// invert.asRgbArray(color[, bw])



// // 导入 使用
// // Node, CommonJS
// const invert = require('invert-color');
// // ES2015, JSNext
// import invert from 'invert-color';
// // TypeScript
// import invert, { RGB, RgbArray, HexColor, BlackWhite } from 'invert-color';


// 参考: https://zhuanlan.zhihu.com/p/58123993