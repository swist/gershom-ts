import { describe, it } from 'mocha';
// const assert = require('chai').assert;
import * as chai from 'chai';
chai.use(require('chai-as-promised')); // Extension that defines the "eventually" keyword
chai.use(require('chai-string')); // Extension that provides the "string should contain" functionality


export const When = describe;
export const And = describe;
export const Then = it;

