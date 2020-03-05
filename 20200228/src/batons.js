import * as d3 from 'd3'; // poser des questions sur ça ??? 
import DATAS from 'data/preparedata.js';
const DB = new DATAS();
let datas = DB.clearData();
const body = d3.select('body');