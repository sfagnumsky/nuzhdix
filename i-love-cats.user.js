// ==UserScript==
// @name         nuzhdixTheGreatKnopka
// @namespace    nuzhdix
// @version      2.2.8.0.1
// @description Opisanie. Opisal?
// @author       dik&dok
// @match        *://ru-minecraft.ru/forum/showtopic-*
// @grant        none
// @downloadUrl http://github.com/sfagnumsky/nuzhdix/raw/dungeonmaster/i-love-cats.user.js
// @updateUrl http://github.com/sfagnumsky/nuzhdix/raw/dungeonmaster/i-love-cats.user.js 
// ==/UserScript==


'use strict';
import * as nuzhd from 'http://raw.githubusercontent.com/rndtrash/nushdiki.js/master/nushdiki.js';
// Thanks ivan2020 ili kak tam tebya zovut for original nushdiki.js
var knopqa = document.createElement('li');
knopqa.title = "Нуждик!";
var fatcock = document.createElement('span');
fatcock.onclick = document.getElementById('text_msg').value+="\n"+nuzhd.random_nushdik();
