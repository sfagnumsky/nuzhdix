// ==UserScript==
// @name              nuzhdixTheGreatKnopka
// @namespace         nuzhdix
// @version           2.2.8.0.5
// @description       Opisanie. Opisal?
// @author            dik&dok
// @require           http://raw.githubusercontent.com/rndtrash/nushdiki.js/master/nushdiki.js
// @include           *://ru-minecraft.ru/forum/showtopic-*
// @downloadUrl       https://github.com/sfagnumsky/nuzhdix/raw/dungeonmaster/i-love-cats.user.js
// @updateUrl          https://github.com/sfagnumsky/nuzhdix/raw/dungeonmaster/i-love-cats.user.js
// ==/UserScript==
'use strict';
// Thanks ivan2020 ili kak tam tebya zovut for original nushdiki.js
var knopqa = document.createElement('li');
knopqa.title = "Нуждик!";
var fatcock = document.createElement('span');
fatcock.onclick = function () {if (document.getElementById('text_msg').value=="") document.getElementById('text_msg').value+=random_nushdik(); else document.getElementById('text_msg').value+="\n"+random_nushdik();}
fatcock.style.height = '24px';
fatcock.style.position = 'relative';
fatcock.style.background = 'url("http://live.staticflickr.com/65535/49908501406_51565e8549_o.png") left no-repeat';
fatcock.style.cursor = 'pointer';
document.getElementsByClassName('bbcode_forum')[0].append(knopqa);
var razdelitel = document.createElement('li');
razdelitel.className = 'separator';
knopqa.before(razdelitel);
knopqa.append(fatcock);
var mne = document.createElement('li');
mne.title = "Мне повезет!";
var povezet = document.createElement('span');
povezet.onclick = function () {document.getElementById('text_msg').value+="\n"+random_nushdik();document.getElementsByClassName('b01')[0].click();}
povezet.style.height = '24px';
povezet.style.position = 'relative';
povezet.style.background = 'url("http://live.staticflickr.com/65535/49909448202_52ef1f1038_o.png") left no-repeat';
povezet.style.cursor = 'pointer';
knopqa.after(mne);
mne.append(povezet);
