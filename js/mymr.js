/**
* Myanmar Web Typography (mymr.js)
*
* Vanilla JS port of jQuery.mymr.js
* https://github.com/myanmarltt/myanmarweb
* 
* Copyright (c) 2014 Myanmar Languages, Typography and Typesetting (MLTT)
* Released under the MIT License.
*/

(function(global){

var core_version = "1.0",
    
    iso = {
      "my": "myanmar",
      "rki": "rakhine",
      "tvn": "tavoyan",
      "int": "intha",
      "ksw": "sgawKaren",
      "pwo": "westernPwoKaren",
      "kjp": "easternPwoKaren",
      "blk": "poaKaren",
      "mnw": "mon",
      "kyu": "kayah",
      "csh": "ashoChin",
      "shn": "shan",
      "kht": "khamtiShan",
      "aio": "aiton",
      "phk": "phake",
      "tle": "taiLaing",
      "pll": "shwePalaung",
      "pce": "palePalaung",
      "rbb": "rumaiPalaung"
    },

    langaugesList = [],

    characterMAP = {
      digits: {
        myanmar: {
        '0': '\u1040',
        '1': '\u1041',
        '2': '\u1042',
        '3': '\u1043',
        '4': '\u1044',
        '5': '\u1045',
        '6': '\u1046',
        '7': '\u1047',
        '8': '\u1048',
        '9': '\u1049'
        },
        shan: {
        '0': '\u1090',
        '1': '\u1091',
        '2': '\u1092',
        '3': '\u1093',
        '4': '\u1094',
        '5': '\u1045',
        '6': '\u1096',
        '7': '\u1097',
        '8': '\u1098',
        '9': '\u1099'
        }
      },
      consonants: {
        rakhine: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
        tavoyan: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
        intha: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
        myanmar: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],

        mon: ["က","ခ","ဂ","ဃ","ၚ","စ","ဆ","ဇ","ၛ","ဉ","ည","ဋ","ဌ","ဍ","ဎ","ဏ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ","ၜ","ၝ"],
        sgawKaren: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ၡ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","အ","ဧ"],
        westernPwoKaren: ["က","ခ","ဂ","ဎ","င","စ","ဆ","ဇ","ည","ၡ","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ၥ","ဟ","အ","ဧ","ၦ"],
        easternPwoKaren: ["က","ခ","င","စ","ဆ","ည","တ","ထ","ဍ","န","ၮ","ပ","ဖ","ၜ","မ","ယ","ရ","လ","ဝ","ဟ","အ"],
        poaKaren: ["က","ခ","ဂ","ဃ","င","စ","ဆ","ဇ","ဈ","ည","ဋ","ဌ","ဍ","ဎ","ဏ","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","ဠ","အ"],
        kayah: ["က","ခ","ဃ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","လ","ဝ","သ","ဟ","အ"],
        ashoChin: ["က","ခ","ဂ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","ဓ","န","ပ","ဖ","ဗ","ဘ","မ","ယ","ရ","ၡ","လ","ဝ","ဟ","အ","ဧ"],
        shan: ["ၵ","ၶ","ၷ","င","ၸ","သ","ၺ","ၹ","တ","ထ","ၻ","ၼ","ပ","ၽ","ၾ","ၿ","မ","ယ","ရ","လ","ဝ","ႀ","ႁ","ဢ"],
        khamtiShan: ["က","ၵ","ꩱ","ဂ","င","ꩡ","ꩢ","ꩣ","ꩤ","ꩥ","ꩦ","ꩧ","ꩨ","ꩩ","ၼ","တ","ထ","ၻ","ꩪ","ꩫ","ပ","ၸ","ၿ","ၹ","မ","ယ","ရ","လ","ဝ","ꩬ","ꩭ","ꩮ","ဢ","ꩯ","ႀ"],

        aiton: ["က","ၵ","င","ꩡ","ၺ","တ","ထ","ꩫ","ပ","ၸ","မ","ယ","ꩺ","လ","ဝ","ꩭ","ဢ"],
        phake: ["က","ၵ","င","ꩡ","ၺ","တ","ထ","ꩫ","ပ","ၸ","မ","ယ","ꩺ","လ","ဝ","ꩭ","ဢ"],

        // Under testing!
        taiLaing: ["က","ၵ","င","ၸ","ꩬ","ꧧ","တ","ထ","ꩫ","ပ","ꧤ","ꧨ","မ","ယ","ꩺ","လ","ဝ","ၯ","ဢ"],
        shwePalaung: ["1000","ခ","ꩾ","ဂ","င","စ","ဆ","ꩿ","ဇ","ဈ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ႎ","ႎှ","သ","ဟ","အ","ျ","ြ","ွ","ှ","္လ"],

        palePalaung: ["က","ခ","ဂ","င","စ","စှ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ဝ","ဟ","အ","ဝှ"],
        rumaiPalaung: ["က","ခ","ဂ","င","စ","ဆ","ဇ","ည","တ","ထ","ဒ","န","ပ","ဖ","ဘ","မ","ယ","ရ","လ","ႎ","ဝ","ဟ","အ"]
      },
      firstLetter: {
        sgawKaren: /^[\u1000-\u1006\u100A\u1010-\u1012\u1014-\u1016\u1018-\u101F\u1021\u1027\u1061][\u103B-\u103E\u1060]?[\u102B\u102D-\u102F\u1030\u1032\u1036\u1037\u1062]?(\u102C\u103A|\u1062\u103A|\u1063\u103A|\u1038|\u1064)?([\u1012\u1019]\u103A)?/,
        westernPwoKaren: /^[\u1000-\u1002\u1004-\u1007\u100A\u100E\u1010-\u1012\u1014-\u1016\u1018-\u101D\u101F\u1021\u1027\u1061\u1065\u1066][\u103B-\u103E\u1060]?[\u102B\u102D-\u1030\u1032\u1036\u1037\u1067\u1068]?(\u1038|\u1069\u1037?|\u106A\u1037?|\u106B\u1037?|\u106C|\u106D)?/
      },
    },

    stylesheet =  "ol.mymrol {list-style-type:none}"+
                  "ol.mymrol>li{display:block}"+
                  "ol.mymrol.parens>li:before{content: '(' attr(li-value) ') '}"+
                  "ol.mymrol.sm>li:before{content: '' attr(li-value) '။ '}"+
                  "ol.mymrol.self>li:before{content: attr(li-value) ' '}";

  /**
   * Featured cross-bowser function
   *
   */
  for(var abbr in iso) {
    langaugesList.push(abbr);
    langaugesList.push(iso[abbr]);
  }

  var sh = document.createElement('style');
  sh.id = "mymrStyle";
  sh.innerHTML = stylesheet;
  document.head.appendChild(sh);

  // Working with element's attributes
  function attr(elem, name, value){
    if(!elem.nodeType){
      throw new Error("invalid");
    }
    if( value ) return elem.setAttribute(name, value);
    else return elem.getAttribute(name);
  }

  function getChildByTagName(elem, tagName){
    var child = elem.childNodes,
        _res = [];
    for (var i = 0; i < child.length; i++) {
      if(child[i].nodeType===1&&child[i].nodeName===tagName.toUpperCase()) _res.push(child[i]);
    }
    return _res;
  }

  /**
   * Word Breaker Function
   *
   * @param {String} Content text to add work break points
   * @param {String} Language type to work out
   * @return {String} Edited content text
   */
  function wordBreaker(content, langauge){
    
    langauge = iso[langauge] || langauge;

    switch(langauge){

      case "my":
      case "rki":
      case "tvn":
      case "int":
        content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        content = content.replace(/([က-အဣ-ဧဩဪဿ၌-၏])/g, '\u200B$1');
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1021])/g, '$1$2');
        content = content.replace(/\u200B(\u1004\u103A\u1039)/g, '$1');
        content = content.replace(/\u200B([က-အ]\u103A)/g, '$1');
        content = content.replace(/(\s|\n)\u200B([က-အဣ-ဧဩဪဿ၌-၏])/g, '$1$2');
        content = content.replace(/([က-အ])\u200B([က-အ])/g, "$1$2");
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "ksw":
        content = content.replace(/([\u1000-\u1006\u100a\u1010-\u1012\u1014-\u1016\u1018-\u101f\u1021\u1027\u1061])/g, '\u200B$1');
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|\||>|[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u104A-\u104F\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E]|\u200B)\|/g, '$1');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "pwo":
        break;

      case "kjp":
        break;

      case "blk":
        break;

      case "mnw":
        content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        content = content.replace(/([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '\u200B$1');
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f]|>|\u201C|\u2018|\-|\(|\[|{|[\u2012-\u2014]|\u1039)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D])/g, '$1$2');
        content = content.replace(/\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u105A-\u105D]\u103A)/g, '$1');
        content = content.replace(/(\s|\n)\u200B([\u1000-\u1003\u1005-\u1007\u1009-\u1021\u1023\u1025\u1028-\u102A\u105A-\u105D])/g, '$1$2');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "kyu":
        break;

      case "csh":
        break;

      case "shn":
        content = content.replace(/([\u1004\u1010\u1011\u1015\u1019-\u101E\u1022\u1075-\u1081\u109E\u109F])/g, '\u200B$1');
        content = content.replace(/\u200B([\u1004\u1010\u1011\u1015\u1019-\u101C\u101E\u1022\u1075-\u1079\u107B-\u1081\u109E\u109F]\u103A)/g, '$1');
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f>\u201C\u2018\-\(\[{\u2012-\u2014])\u200B([\u1004\u1010\u1011\u1015\u1019-\u101E\u1022\u1075-\u1081\u109E\u109F])/g, '$1$2');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "kht":
        content = content.replace(/([\u1000\u1002\u1004\u1010\u1011\u1015\u1019-\u101D\u1022\u1075\u1078\u1079\u107B\u107C\u107F\u1080\uAA60-\uAA6F\uAA71-\uAA76])/g, '\u200BjQuery1');
        //Suppress unwanted breakpoints
        content = content.replace(/\u200B([\u1000\u1004\u1010\u1015\u1019\u101D\uAA65\uAA6B]\u103A)/g, '$1');
        content = content.replace(/([\u0009-\u000d\u0020\u00a0\u2000-\u200a\u2028\u2029\u202f>\u201C\u2018\-\(\[{\u2012-\u2014])\u200B([\u1000\u1002\u1004\u1010\u1011\u1015\u1019-\u101D\u1022\u1075\u1078\u1079\u107B\u107C\u107F\u1080\uAA60-\uAA6F\uAA71-\uAA76])/g, '$1$2');
        content = content.replace(/(>)[\u200B]/g, '$1');
        break;

      case "aio":
      case "phk":
        break;

      case "tle":
        break;

      case "pll":
        break;

      case "pce":
        break;

      case "rbb":
        break;

      default:
        content = content.replace(/(\u103A)(\u1037)/g, '$2$1');
        break;
    }

    return content;
  }

  /**
   * Digits Converter
   *
   * @param {String|Number} Content number or text
   * @param {String} Type of language on character map
   * @return {String} Converted text
   */
  
  function digitsConverter(content, langauge){
    content = content+[];
    var map = characterMAP.digits[langauge];
    
    function rpl(match, d){
      return map[d];
    }
    
    if(map) return content.replace(/([\d])/g, rpl);
    else return content;
  }

  /**
   * Digits to Consonants list converter
   *
   * @param {Number} Number to convert
   * @param {String} Type of language on character map
   * @return {String} Converted text
   */
  function consonantsConverter(number, langauge){
    var map = characterMAP.consonants[langauge],
        len = map.length,
        _res = "",
        _que;
        
    while(number>0){
      _que = number%len;
      _res = map[_que-1] + _res;
      number = (number-_que)/len;
    }

    return _res;

  }

  function collectionOlGenerate(collection, option){
    for (var i = 0; i < collection.length; i++) {
      olGenerate(collection[i], option);
    }
  }

  function matchOL(ol){
    var type = attr(ol, 'type');
    var lang;
    if( type && (lang = type.match(/^(?:dig-)*(\w*)$/)) && langaugesList.indexOf(lang[1]) !== -1 ){
      return true;
    } else {
      return false;
    }
  }

  /**
   * Order List Hack
   */
  function olGenerate(ol, option){

    option = option || {};

    if (ol.mymrol && !option.force) return;

    var start = option.start || parseInt(attr(ol, 'start')) || 0,
        reversed = option.reversed || attr(ol, 'reversed'),
        type = option.type || attr(ol, 'type'),
        dig = type.match(/^dig-/),
        langauge = type.match(/^(?:dig-)*(\w*)$/)[1],
        lis = getChildByTagName(ol, 'li'),
        affix = option.affix || "parens",
        i = 0, j = lis.length, c;

    langauge = iso[langauge] || langauge;

    for (; i < lis.length; i++, j--) {
      // Push child another list
      collectionOlGenerate(getChildByTagName(lis[i], 'ol'), option);
      c = reversed !== null ? j : i+start+1;

      if(dig) attr(lis[i], 'li-value', digitsConverter(c,langauge));
      else attr(lis[i], 'li-value', consonantsConverter(c, langauge));
    }
    
    ol.mymrol = "isGenerated";

  }

  /**
   * First Letter Hack
   *
   */
  function firstLetter(elem, langauge){
    
    langauge = iso[langauge] || langauge;
    var regexp, match;

    if ((regexp = characterMAP.firstLetter[langauge])) {
      match = elem.innerHTML.match(regexp);

      if( match ) {
        attr(elem, 'data-mymrfl', match[0]);
      }

    }

  }

  /** Under testing....
   */
  function getData(elem){
    if(elem.nodeType !== 1){
      return false;
    }
  }

  /**
   * MYMR Core function
   * *This is just a selector
   * Single DOM node or element collection is accepted
   */
  var mymr = function(elem){
    if(elem.nodeType && elem.nodeType !== 1){
      this.elem = elem;
      this.length = 1;
      return this;
    } else if(elem.length && elem.length > 0 && elem[0].nodeType){
      this.length = elem.length;
      for (var i = 0; i < elem.length; i++) {
        this[i] = elem[i];
      }
      return this;
    } else {
      throw new Error('Selected element is invalid!');
    }
  };

  /**
   * Extending Static methods
   */
  mymr.wordBreaker = wordBreaker;
  mymr.olGenerate = olGenerate;
  mymr.firstLetter = firstLetter;

  mymr.justGo = function(){
    var fls = document.getElementsByTagName("");
    var ols = document.getElementsByTagName("ol");
    for (var i = 0; i < ols.length; i++) {
      if(matchOL(ols[i])){
        mymr.olGenerate(ols[i]);
        attr(ols[i], 'class', attr(ols[i], 'class') + " mymrol parens");
      }
    }
  }

  /**
   * Extending Instance methods
   */
  mymr.prototype = {
    each: function(){
      var fn = arguments[0];
      for (var i = 0; i < this.length; i++) {
        fn.apply(this[i]);
      }
    },
    olGenerate: function(){
      this.each(function(){
        mymr.olGenerate(this);
      });
      return this;
    },
    firstLetter: function(){
      this.each(function(){
        mymr.firstLetter(this);
      });
      return this;
    }
  };

  // Export to global
  global.mymr = mymr;

}(this));