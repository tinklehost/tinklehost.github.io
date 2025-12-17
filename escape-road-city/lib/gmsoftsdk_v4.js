(function (_0x50d049, _0x43a300) {
  const _0x46817d = _0x50d049();
  while (true) {
    try {
      const _0x52c306 = parseInt(_0x47a4(561, -0x23)) / 0x1 + parseInt(_0x47a4(1126, 0x3cb)) / 0x2 * (parseInt(_0x47a4(1836, 0x72b)) / 0x3) + parseInt(_0x47a4(1119, 0x60f)) / 0x4 + parseInt(_0x47a4(712, 0x4e2)) / 0x5 + -parseInt(_0x47a4(499, 0x146)) / 0x6 * (parseInt(_0x47a4(608, 0x2e2)) / 0x7) + -parseInt(_0x47a4(952, 0x3a9)) / 0x8 * (parseInt(_0x47a4(617, 0xc7)) / 0x9) + parseInt(_0x47a4(651, 0x166)) / 0xa * (-parseInt(_0x47a4(661, 0x2cf)) / 0xb);
      if (_0x52c306 === _0x43a300) {
        break;
      } else {
        _0x46817d.push(_0x46817d.shift());
      }
    } catch (_0x27369f) {
      _0x46817d.push(_0x46817d.shift());
    }
  }
})(_0x4193, 0xecfe2);
let list_api_host = ["https://api.azgames.io/", "https://api.1games.io/"];
let api_host = list_api_host[0];
let _gameKey = config.gameId;
window.GMDEBUG = {};
window.GMDEBUG["LOADED SDK"] = Date.now();
window.GMSOFT_OPTIONS = {
  'enableAds': false,
  'debug': false,
  'gameId': _gameKey,
  'pubId': '',
  'unlockTimer': 0x3c,
  'timeShowInter': 0x3c,
  'hostindex': 0x1
};
window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
window.GMSOFT_OPTIONS.sourceHtml = "RHhrUUVRZGJid2xBUVF4ZEZSTUtBQmtBRkVNTkRsc0FNRThPVmdnQUd3OFpFaEFPT0J0UVR4NFM=";
function _0x26c8de(_0xef43cd, _0x1a72e0) {
  return _0x47a4(_0x1a72e0 - 0x46, _0xef43cd);
}
window.GMSOFT_OPTIONS.sdkversion = 0x4;
window.GMSOFT_OPTIONS.adsDebug = true;
window.GMSOFT_OPTIONS.game = null;
window.GMSOFT_OPTIONS.promotion = null;
function _0x1ce052(_0x4a19a7, _0x3c282e) {
  return _0x47a4(_0x3c282e - 0x99, _0x4a19a7);
}
window.GMSOFT_OPTIONS.allow_play = "yes";
let _gameId = window.GMSOFT_OPTIONS.gameId;
function _0x47a4(_0x34b012, _0x45bfb9) {
  const _0x4193b6 = _0x4193();
  _0x47a4 = function (_0x47a4cc, _0x3f0855) {
    _0x47a4cc = _0x47a4cc - 0x16e;
    let _0x4f7ce9 = _0x4193b6[_0x47a4cc];
    return _0x4f7ce9;
  };
  return _0x47a4(_0x34b012, _0x45bfb9);
}
function _0x170291() {
  let _0x11e76e = new Date();
  let _0x37fd93 = _0x11e76e.getTime() + _0x11e76e.getTimezoneOffset() * 0xea60;
  let _0x56e751 = window.location.hostname;
  window.GMSOFT_OPTIONS.domainHost = window.location.hostname;
  let _0x26b92f = api_host + "api/infov2";
  let _0x49d576 = 'no';
  if (isDiffHost()) {
    if (document.referrer) {
      let _0x23d356 = document.referrer;
      _0x56e751 = _0x23d356.match(/:\/\/(.[^/]+)/)[0x1];
    }
    _0x49d576 = "yes";
  }
  let _0x15b2b7 = 'd=' + _0x56e751 + "&gid=" + _gameId + "&hn=" + window.location.hostname + "&ts=" + _0x37fd93 + "&ie=" + _0x49d576;
  let _0x1cf134 = btoa(_0x15b2b7);
  let _0xb30f3e = "lib/infov2.json";
  let _0x277b7a = httpGet(_0xb30f3e);
  const _0x34996a = JSON.parse(_0x277b7a);
  window.GMDEBUG.LOADED_SDK_SUCCESS = Date.now();
  window.GMSOFT_MSG = _0x277b7a;
  window.GMDEBUG.site_info = _0x34996a;
  if (typeof _0x34996a.enable_ads !== "undefined" && _0x34996a.enable_ads !== '') {
    window.GMSOFT_OPTIONS.enableAds = !!(_0x34996a.enable_ads == "yes");
  }
  if (typeof _0x34996a.hostindex !== "undefined" && _0x34996a.hostindex !== '') {
    window.GMSOFT_OPTIONS.hostindex = _0x34996a.hostindex;
  }
  if (typeof _0x34996a.adsDebug !== "undefined" && _0x34996a.adsDebug !== '') {
    window.GMSOFT_OPTIONS.adsDebug = !!(_0x34996a.adsDebug == "yes");
  }
  if (typeof _0x34996a.debug_mode !== "undefined" && _0x34996a.debug_mode !== '') {
    window.GMSOFT_OPTIONS.enableDebug = _0x34996a.debug_mode;
    if (window.GMSOFT_OPTIONS.enableDebug != "yes") {
      console.log = function () {};
    }
  }
  if (typeof _0x34996a.unlock_time !== "undefined" && _0x34996a.unlock_timer >= 0x0) {
    window.GMSOFT_OPTIONS.unlockTimer = _0x34996a.unlock_timer;
  }
  if (typeof _0x34996a.pub_id !== "undefined" && _0x34996a.pub_id !== '') {
    window.GMSOFT_OPTIONS.pubId = _0x34996a.pub_id;
  }
  if (typeof _0x34996a.timeShowInter !== "undefined" && _0x34996a.timeShowInter >= 0x0) {
    window.GMSOFT_OPTIONS.timeShowInter = _0x34996a.timeShowInter;
  }
  if (typeof _0x34996a.timeShowReward !== "undefined" && _0x34996a.timeShowReward >= 0x0) {
    window.GMSOFT_OPTIONS.timeShowReward = _0x34996a.timeShowReward;
  }
  if (typeof _0x34996a.game !== "undefined") {
    window.GMSOFT_OPTIONS.game = _0x34996a.game;
  }
  if (typeof _0x34996a.promotion !== "undefined") {
    window.GMSOFT_OPTIONS.promotion = _0x34996a.promotion;
  }
  if (typeof _0x34996a.sdkType !== "undefined" && _0x34996a.pub_id !== '') {
    window.GMSOFT_OPTIONS.sdkType = _0x34996a.sdkType;
  }
  if (_0x34996a.promotion) {
    window.GMSOFT_OPTIONS.promotion = _0x34996a.promotion;
  }

  window.GMSOFT_OPTIONS.allow_embed = "yes";
  window.GMSOFT_OPTIONS.allow_host ="yes";
  window.GMSOFT_OPTIONS.allow_play = "yes";
  if (_0x34996a.game) {
    let _0x416751 = _0x34996a.game;
    window.GMSOFT_OPTIONS.game = _0x416751;
    let _0x3edb3e = "<style>#theGameBox,body,html{position:absolute;top:0;left:0;width:100%;height:100%;padding:0;margin:0}.gamePlayerContentSafeSize{width:1598px;height:841px;max-width:100%;position:relative}@-webkit-keyframes gamePlayerMoveRight{to{-webkit-transform:translateX(20px)}}@keyframes gamePlayerMoveRight{to{transform:translateX(20px)}}@-webkit-keyframes gamePlayerMoveLeft{to{-webkit-transform:translateX(-20px)}}@keyframes gamePlayerMoveLeft{to{transform:translateX(-20px)}}.gamePlayerPageLoader svg{z-index:-1}.gamePlayerLoadingAnim{width:100%;height:100%;display:flex;align-items:center;justify-content:center;position:absolute;top:0;left:0;z-index:100000000;background:rgba(0,0,0,.7)}.gamePlayerLoadingAnim div{box-sizing:border-box;display:block;position:absolute;width:64px;height:64px;margin:4px;animation:gamePlayerLoadingAnim 1s infinite;border-style:solid;border-color:#fff transparent transparent transparent;border-width:3px;border-radius:50%}.gamePlayerLoadingAnim div:nth-child(1){animation-delay:-.9s}.gamePlayerLoadingAnim div:nth-child(2){animation-delay:-.8s}.gamePlayerLoadingAnim div:nth-child(3){animation-delay:-.1s}@keyframes gamePlayerLoadingAnim{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.gamePlayerLoadingAnim span{font-family:roboto,sans-serif;width:100%;text-align:center;color:#fff;padding-top:150px;position:absolute;z-index:99999999999999999999}.gamePlayerTable>div{display:table-cell;vertical-align:middle;padding:10px;text-align:left;width:auto;background:#fff;color:#272727}.gamePlayerTable>div:first-child{width:1%;white-space:nowrap;font-size:22px;font-weight:600;vertical-align:top}[data-gamePlayerplayer] div video{width:100%!important;height:100%!important}[data-gamePlayerplayer] div lima-video{width:100%!important;height:100%!important}.gamePlayerContent video{left:0;top:0}.gamePlayerContent{top:0;left:0}.gamePlayerHidden{display:none!important;visibility:hidden}.gamePlayerCenterTable>div{display:table-cell;text-align:left;vertical-align:middle;font-size:22px}.gamePlayerCenterTable>div:nth-child(2){padding:10px 30px;text-align:center;display:inline-block}#gamePlayermw1jclueedb9wbbpdztq{width:100%;height:100%}#gamePlayermw1jclueedb9wbbpdztq{background-color:#000;overflow:hidden}#gamePlayermw1jclueedb9wbbpdztq{padding:inherit;box-sizing:border-box;overflow:hidden;position:relative;z-index:9999}body>#gamePlayermw1jclueedb9wbbpdztq{position:fixed!important}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerMidroll{background:rgba(0,0,0,1)}#gamePlayermw1jclueedb9wbbpdztq>div:first-child{z-index:2147483647}#gamePlayermw1jclueedb9wbbpdztq.gamePlayerNoClick>div:first-child{z-index:2147483646}#gamePlayermw1jclueedb9wbbpdztq:not(.gamePlayerAdLoaded)>div:not([class]){pointer-events:none}.gamePlayerContent{position:relative}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{display:none}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerLoadingContainer>div{width:25px;height:25px;position:absolute;top:50%;left:50%;margin-left:-15px;margin-top:-15px;animation:circle .75s linear infinite;border-width:2px;border-style:solid;border-color:rgba(252,12,12,0) #fff rgba(201,62,201,0) #fff;border-image:initial;border-radius:100%;-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;transform-origin:center!important}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes gamePlayerTicTac{0%{transform:scale(1,1)}50%{transform:scale(1.2,1.2)}100%{transform:scale(1,1)}}.gamePlayerInstallFlash>div{display:table-cell;text-align:center;vertical-align:middle;width:100%;height:100%;color:#fff;font-family:\"open sans\";font-size:18px;letter-spacing:-1px}.gamePlayerInstallFlash>div>a{display:block;text-align:center;color:#ff0;padding:10px}.gamePlayerContextMenu li{border-bottom:1px solid rgba(255,255,255,.8);padding:5px;color:rgba(255,555,255,.6);list-style-type:none;padding:10px 0;font-family:roboto;font-size:11px;text-align:left}.gamePlayerContextMenu li a{color:rgba(255,555,255,.6);font-family:roboto;font-size:11px;text-align:left;text-decoration:none}.gamePlayerContextMenu li a:hover{text-decoration:underline}.gamePlayerContextMenu li:last-child{border-bottom:none}.gamePlayerContextMenu li span{cursor:pointer;font-size:12px;display:block;text-align:left;font-weight:400;font-family:roboto}#gamePlayermw1jclueedb9wbbpdztq iframe:first-of-type{display:block!important;background:0 0!important;border:none!important}#gamePlayermw1jclueedb9wbbpdztq .gamePlayerFlashSplash embed{transform:scale(100)}.loadingButton span{opacity:0;transition:.2s}@keyframes bounceHorizontal{0%{left:-4px}100%{left:4px}}@keyframes openChest{from{background-position-x:0}to{background-position-x:-294px}}@keyframes popIn{0%{-webkit-transform:scale(0);transform:scale(0);opacity:1}70%{-webkit-transform:scale(1.2);transform:scale(1.2);opacity:1}100%{-webkit-transform:scale(1);transform:scale(1);opacity:1}}:root{--min5050:50px;--min202:20px;--min203:20px;--min405:40px;--min255:25px;--min143:14px;--min22040:150px;--min15015:150px;--min505:50px;--min364:36px;--min202:20px}@supports (padding:min(12px,13vw)){:root{--min5050:min(50px, 5vw);--min202:min(20px, 2vw);--min405:40px;--min203:min(20px, 3vh);--min405:min(40px, 5vw);--min255:min(25px, 5vw);--min143:min(14px, 3vw);--min22040:min(220px, 40vw);--min15015:min(150px, 15vw);--min505:min(50px, 5vw);--min364:min(36px, 4vh);--min202:min(20px, 2vw)}}.gamePlayerSplash *{box-sizing:border-box;font-family:Roboto,sans-serif!important;font-weight:300}.gamePlayerSplash{display:block;padding:var(--min5050);overflow:hidden;width:100%;height:100%;box-sizing:border-box;position:relative;background-color:#000;outline:0!important;transition:opacity .4s;background-repeat:no-repeat;background-position:center}.gamePlayerSplash .gamePlayerBg{display:block;width:100%;height:100%;position:absolute;top:0;left:0;z-index:1}.gamePlayerSplash .gamePlayerBg .gamePlayerBgImage{position:absolute;top:0;left:0;width:100%;height:100%;filter:blur(45px);background-size:cover;transform:scale(1.3)}.gamePlayerSplash .gamePlayerSplashContent{background:rgba(255,255,255,.4);border-radius:50px;display:block;width:100%;height:100%;z-index:10;box-shadow:0 0 0 0 #fff,10px 20px 21px rgba(0,0,0,.4);position:relative;transition:box-shadow .2s}.gamePlayerSplash .gamePlayerSplashContent:hover{box-shadow:-2px -2px 10px 1px #fff,10px 20px 21px rgba(0,0,0,.4)}.gamePlayerSplashContent .gamePlayerCenterContent{display:grid;width:100%;height:100%;grid-template-columns:2fr 1fr;box-sizing:border-box;place-items:center;padding:var(--min202)}.gamePlayerSplashContent .gamePlayerCenterContent>div{text-align:center;padding:var(--min202);width:100%}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollInfo{display:grid;width:100%;text-align:left;row-gap:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerButtons{display:inline-block;text-align:center;display:grid;row-gap:20px;width:max-content;padding:20px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA{transition:.2s;position:relative;cursor:pointer}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover{transform:scale(1.1)}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span{display:grid;grid-template-columns:auto auto;grid-gap:10px;background-color:#1c1c1c;color:#fff;border-radius:100px;padding:var(--min203) var(--min405);font-weight:400;font-size:var(--min255);box-shadow:0 0 20px rgba(0,0,0,.8);align-items:center;cursor:pointer;transition:.3s;text-transform:uppercase;user-select:none;pointer-events:none}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span{background-color:#91000a}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA span:before{display:block;content:\" \";background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAYAAADUFP50AAABKklEQVQokY2TvyvEcRjHX75dDFIGFhmuFFaLC7NFERkNBvInuCubhdtsBsUimVx28iPJarHSme4kAyU/6qVPPur6du7uqc+zPJ/3834/7+fzQR1Un9RzNavSykmAXaAMVIB7YAvopVmoFXU9skypD+qbuqZm/mMPqaxupAp59V2tqrNqkgYmUVBbSlgR6Ab2gBJwBeRqLyQNJvkA8kBPnP8GOAGyzYB/8QzMARNAF3AGTLcC7I+s11HuKXDQCBi6bwMXcd5O4BCYAVbrAYNRi8Aj0AesAMvAKzAcZIaGmTrAfWASWIim7ESp89Hh34h73KzZ0ai6pJbUF7gamePlayerdqT3GBjbga/YZwQoAGPAETAEVOs6oN6ql2pR/VaP1YFmDz2kcfVTvVNzLf0O5QcZKy4YNKUs+wAAAABJRU5ErkJggg==);background-repeat:no-repeat;background-position:center;width:15px;height:15px}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollCTA:hover span:before{animation:gamePlayerKnock .3s infinite}@keyframes gamePlayerKnock{0%{transform:translateX(0)}100%{transform:translateX(-10px)}}.gamePlayerSplashContent .gamePlayerCenterContent .gamePlayerPrerollWb span{display:inline-block;border:2px solid #1c1c1c;color:#1c1c1c;border-radius:100px;padding:15px 20px;text-transform:uppercase;font-weight:500;font-size:var(--min143);box-shadow:0 0 20px rgba(0,0,0,.8);cursor:pointer;user-select:none}.gamePlayerThumb{display:block;position:relative;border-radius:50%;overflow:hidden;box-shadow:0 5px 20px rgba(0,0,0,.4);width:var(--min22040);height:var(--min22040);transition:.3s;cursor:pointer;margin:auto}.gamePlayerThumb:hover{transform:scale(1.1);box-shadow:-2px -2px 10px 1px #fff,0 5px 40px rgba(0,0,0,.4)}.gamePlayerThumb>div{position:absolute;border-radius:50%;top:0;left:0;width:100%;height:100%;background-size:cover;background-repeat:no-repeat;background-position:center}.gamePlayerTitle{font-weight:300;font-size:var(--min364);user-select:none;color:#1c1c1c;line-height:normal}.gamePlayerTitle:after{content:\"\"!important}.gamePlayerPrerollDescription{font-weight:400;font-size:15px;user-select:none;color:#1c1c1c}.gamePlayerSplash{opacity:0}.gamePlayerPrerollCTA{position:relative}.gamePlayerSplash{opacity:1}.gamePlayerBg .gamePlayerBgImage{background-image:url(" + _0x416751.image + ")!important}.gamePlayerThumb>div{background-image:url(" + _0x416751.image + ")}@media only screen and (max-width:480px){.gamePlayerThumb{display:none}}</style> <div class=\"gamePlayerContent gamePlayerContentSafeSize\"id=theGameBox><div id=gamePlayermw1jclueedb9wbbpdztq data-gameplayerplayer=true><div class=\"gamePlayerSplash gamePlayerSplashPreroll\"><div class=gamePlayerBg><div class=gamePlayerBgImage></div></div><div class=gamePlayerSplashContent><div class=gamePlayerCenterContent><div><div class=gamePlayerPrerollInfo><div class=gamePlayerButtons><div class=gamePlayerPrerollCTA onclick=\"window.open('" + _0x416751.redirect_url + "', '_blank')\" id=btn_playgame><span>Play game</span></div></div><div class=gamePlayerTitle>" + _0x416751.name + "</div><div class=gamePlayerPrerollDescription>" + _0x416751.description + "</div></div></div><div><div class=gamePlayerThumb><div></div></div></div></div></div></div></div></div>";
    if (isDiffHost()) {
      console.log("NEU GAME DUOC EMBED");
      const _0x4a2d10 = new Date(new Date().toLocaleString('en', {
        'timeZone': "Asia/Ho_Chi_Minh"
      }));
      let _0x2af360 = new Date(_0x4a2d10.getFullYear(), _0x4a2d10.getMonth(), _0x4a2d10.getDate(), _0x4a2d10.getHours(), _0x4a2d10.getMinutes(), _0x4a2d10.getSeconds());
      let _0x1b3cd3 = new Date(_0x4a2d10.getFullYear(), _0x4a2d10.getMonth(), _0x4a2d10.getDate(), 0x6, 0x0, 0x0);
      let _0x25bae7 = new Date(_0x4a2d10.getFullYear(), _0x4a2d10.getMonth(), _0x4a2d10.getDate(), 0x14, 0x0, 0x0);
      if (_0x1b3cd3.getTime() <= _0x2af360.getTime() && _0x2af360.getTime() <= _0x25bae7.getTime()) {}
      if (_0x34996a.allow_embed != "yes") {
        let _0x5779bd = window.GMSOFT_OPTIONS.unlockTimer * 0x3e8;
        setTimeout(function () {
          document.body.innerHTML = _0x3edb3e;
        }, _0x5779bd);
      }
    } else {
      console.log("site_info_parse.allow_host ==>" + _0x34996a.allow_host);
      if (_0x34996a.allow_host != "yes") {
        console.log("site_info_parse.allo 22");
        let _0x4a2138 = window.GMSOFT_OPTIONS.unlockTimer * 0x3e8;
        setTimeout(function () {
          document.body.innerHTML = _0x3edb3e;
        }, _0x4a2138);
      }
    }
  }
  document.dispatchEvent(new CustomEvent("gmsoftSdkReady"));
}
function _0x4193() {
  const _0x342aff = ['aleSt', 'groun', 'yvEcR', 'idth:', '-colo', 'in(20', 'ser-s', 'ity:1', 'var(-', 'rButt', "f,0 5", 'T_OPT', '-min1', ';tran', "px so", 'ck;pa', 'stene', 'lign:', 'pR/Va', 'n364:', 'ntext', '://pa', 'hild(', 'lick=', '50:50', 'ad-ch', "0 #ff", 'iptio', 'lCTA:', 'ock;p', 'conds', '><div', '{posi', "yer] ", '-left', 'tom:n', '2:min', 'Ads.j', 'VOs6o', 'empla', ':min(', 'orati', 'getFu', 'Jid2x', 'y:0}.', 'ined', 'e:sol', 'api/i', '143:m', "px -2", 'yer=t', 'color', 'ateX(', 'lette', '-cont', 'tSdkR', 'r:#1c', 'ck}#g', 'uCubh', " .75s", ';grid', 'ame', 'ollWb', ':var(', 'N6ql2', 'cy-hi', '-chil', 'dAdFn', 'dth:1', 'c1c1c', "ans\";", '%;z-i', 'A:hov', 'ize:c', 'terCo', 'llYea', 'r;col', '00%}.', "q ifr", '0}.ga', 'tml{p', 'ent', 'howIn', '-box;', '_embe', 'rollD', "3s in", 'font-', '0}to{', '40px;', 'boto}', 'cal-a', 'escri', 'k!imp', 'opaci', '&ie=', '.2,1.', "ent t", " 22", 'tant;', '0deg)', '-anim', "v vid", 'or:#9', 'e;bor', 'block', "1s li", '://ap', '40px,', " -2px", '60deg', 'AVbrA', " infi", 'eHtml', 'splay', 'suppo', "rts (", 'ement', 'n{0%{', 'play:', 's=gam', "tent ", "0 0 2", '9skyp', '28iPJ', 't{pos', 'tBRkV', 'ztq.g', 'er}.g', 'le;pa', '-cell', 'top:0', '{tran', '0%;-w', 'rap;f', 'ngAni', 'UtBQm', 'on:op', 'shSpl', ':auto', 'getMi', 'g{dis', '0,0,.', 'YmUVB', 'wbbpd', 'ay:no', 'sdkTy', 'now', 'fff;c', 'ash{d', 'ge:ur', 'EQVQo', 'nceHo', 'ght:4', 'ayerM', 'h:var', 'ndex', 'lativ', 'und:#', '/div>', 'te-co', '-min2', 'cTac{', 'bpdzt', 'googl', 'redir', 'd(3){', 'rizon', 'x;mar', 'le:so', ',0,.8', 'porta', 'ct:no', '1598p', 'SafeS', 'in(50', 'items', "px, 1", 't;pad', '(--mi', '2)}10', 'ding:', 'eo{le', 'in255', 'ima-v', '2);wi', 'rAdLo', 'tive;', 'spare', 'Playe', 'd=the', 'js/ad', 'qZm/m', 'v></d', 'ff;bo', "Menu ", 'on:ce', 'llDes', " popI", 'game>', 'lay:-', " .gam", 'boto,', 'ueedb', '0px;w', 'id;bo', 'yerBg', '43:14', 'sdkve', "x 20p", ": Dev", 'll;te', 'ay:bl', 'e:cov', 'ute;t', 'x;pos', '-repe', '-radi', 'rgin:', ',1)}5', 'KzAcZ', '505:m', '30s', 'orm:u', 'ans-s', "t:\" \"", '0;z-i', 'ant}.', '647}#', '/3834', 'PCAYA', '5px;a', 'teX(2', 'ox-sh', 'ESS', 'ate(3', 'eElem', 'top}[', 'n(36p', 'ames.', "r] di", 'nt><d', "im 1s", 'ePlay', '25/wg', '18px;', 'cente', 'KUs+w', ':tabl', 'erFla', 'ADS', "0px, ", "10px ", '-webk', 'du7uq', '0px;p', 'max-c', '5,.4)', 'jHX75', 'Ho_Ch', 'eedb9', 'form:', 'humb:', '1683861aVYOEJ', 'id;wi', ':scal', 'irst-', ':150p', 'yerTh', " rgba", ", 3vh", 'famil', "s gam", 'push', 'log', '0%;he', 'db9wb', 'NJvkA', 'ation', 'kY2Tv', "ar in", '_play', 'howRe', 'min(5', '{disp', 'cluee', " span", "t ==>", 'gba(2', 'r(--m', ':0;wi', '{opac', '1c1c;', 'in:au', 'ransf', 'Prero', '-min4', '040:1', 'yes', '0%;pa', 'acity', 'y:tab', 'eGame', 'e:now', "ash e", 'ideo{', 'ow:-2', 'eAds', "5px, ", '20px}', "ces l", 'Title', 'yer', 'ize{w', 'gead2', 'e;top', 'or:#1', '.com/', 'erBgI', 'k;bor', 'Aj0Ae', 'gameI', ':11px', 'r{tex', 'verti', 'px;--', 'ion.c', 'textM', 'e-typ', '}@key', '-.8s}', ')}#ga', "AME D", 'ld(2)', 'q{pos', 'und-r', 'send', 'pe{di', "5px 2", ':bord', " 5vw)", ';curs', 'left:', 'x){.g', "ent r", 'impor', 'px;he', ';line', ':hove', 'ly:ro', 'on:no', 'adCon', 'flow:', 'sourc', '2px;f', 'late-', ';over', '</spa', '>Play', 'er;ba', 'posit', 'svg{z', '%;hei', 'e;wid', 'le-ce', 'gName', '(2){a', ':15px', "px, 2", 'th:10', 'isibi', 'n:.3s', 'ashCo', 'src', "', '_", 'ing:b', 'pJbUF', 'ign:c', 'on:.2', 'n2204', '0%{tr', 'on:un', 'g><di', 'min22', 'esour', 'den;b', ',201,', '555,2', 'refer', 'nHost', '43);b', 'i_Min', 'nf.js', 'nth-c', 'ading', '0!imp', "sh .g", "x #ff", 'name', 'f,10p', 'rInst', 'NBvIn', 'gAAAA', 'round', '100px', "H5 SD", 'e;z-i', "q .ga", 'tion:', '-spac', '0%;ov', 'user-', "px rg", '398256infosz', 'izing', 'elay:', 'Z0ai6', 'nter;', 'sform', "px 10", '1}.ga', 'align', 'in405', 'ox;pl', 'm:sca', 'h:100', 'nth', '-bloc', 'lock;', 'MXcd5', '{to{t', 'l;tex', '00%;h', 'SWIim', 'over;', 'rue><', '255:2', '?para', ')!imp', "s bou", '41px;', "px, 5", '00%;p', 'und-s', 'respo', ');--m', 'iv>a{', ':midd', ':50%;', 'ng:in', 'ily:r', 't-tra', ';--mi', 'ontex', 'ive}.', ';list', 'it-tr', 'sAMvA', 'weigh', '2px;b', 'AXaAM', 'body', 'AADUF', 'creat', 'rid;g', 'g.wgp', 'der-w', ':22px', 'ring', ':rgba', "\"wind", '6Ab2g', '}100%', 'tion-', "t vid", '1468275GXpnwK', 'y:inl', 'adBre', 'wgAds', ';disp', 'iv{bo', ';bord', "A onc", 'bind', 'ock;t', 'ash>d', '15:mi', 'iv{ba', "3) va", 'inlin', 'idden', 'ortan', 'js/wn', 'egrat', 'oboto', 'ent:c', 'h:25p', 'ayerH', 'herit', 'ial;b', 'der:2', 'pacit', 'al-al', 'gead/', 'r>div', 'trans', ')}@me', 'ransp', ';heig', "es sp", 'a-gam', 'iv{te', ',0,.4', 'le>di', 'ready', 'vw);-', 'elopm', 'Rewar', " 0 0 ", 'blank', 'aded)', ';posi', '161yiTtYT', 'in203', 'ate(0', 'umb>d', 'lay:i', "nly s", '_show', 'der-b', '}.loa', '45EPHFTl', ';padd', ');fon', 'ons{d', 'displ', 'site_', 'lity:', 'd!imp', 'n:4px', '05:40', 'R4NFM', '%{tra', 'dingA', ":1px ", 'mbed{', 'X(-10', 'match', 'der:n', '255,5', ':0;ma', 'mezon', "nt .g", 'GyzYB', 'on:ga', 'er;di', 'eLeft', '-tran', 'anima', "')\" i", 'mb{di', 'GBjbg', 'in{0%', 'eX(-2', 'epeat', '12330Ahhxkg', '.allo', '4px}}', 'ayerL', 'sizin', 'backg', 'er-ra', '.8);c', "e> <d", 'st{fr', '319wGryxi', 'parse', 'Box,b', ':bloc', 'hidde', '5vw);', 'ns:2f', "nim d", 'yfram', " 10px", 'infin', 'rflow', 'er{co', ',1)}}', 'iner>', 'PPur6', "x 21p", 'ity:0', 'k_tim', " 20px", "ent .", 'RqLyQ', 'erSpl', '&hn=', 't}.ga', " game", '.ifra', 't;tra', 'lueed', 'shCon', 'adsby', 'rmal}', 'hild{', 'afg', 'rid-t', 'lvUzq', 'pdztq', 'origi', 'px}.g', 'yermw', "nd:0 ", 'erflo', 'open', '{to{-', 'or:#f', 'n(12p', 't-dec', 'v:nth', 'dicat', 'adbre', "ader ", '6192755BOWFqG', 'paddi', " clas", 'GMDEB', 'inner', 'c;col', 'upAp5', 'domai', "0) #f", ':20px', '>div:', 'yerCe', 'hCont', 'rm:tr', 't:non', 'nimat', '}}:ro', 'JRU5E', '<span', 'span{', 'erif!', 'margi', 'ABKkl', 'moFXU', 'ertic', 'r(45p', 'nter}', '1game', '0%}.g', 'mage:', '0,0,1', 'g;bas', 'anony', 'ntent', 'x);ba', 'Ky4YN', '0,0,0', " li:l", 'lex;a', 'x:-29', 'U/6qV', '-even', 'ex:21', 'ent>d', 'iv></', 'vSykm', 'ock;w', 'llInf', 'AvopV', 'mage{', 'nseTe', 'ign:m', 'O4BCY', 'filte', 'NFERk', 'r-rad', 'ems:c', '}70%{', 'nutes', 'div{d', 'ow.op', 'MPqax', 'info_', 'Splas', 'equen', 'er-bo', ':tran', ';row-', 'imati', 'oadin', 'dispa', "lid #", 'x-siz', '1c1c1', 'line:', "spin ", 'AETAE', '0px)}', 'en}#g', 'to}.g', '2:20p', 'ayerC', 'nt;bo', 'ing-t', 'erAd', 'eplay', 'ansfo', 'unloc', 'l{bac', " auto", '20px,', 'getTi', 'ht:no', ':400;', "f tra", "enu l", ':0}.g', 'QoAGP', 'yerLo', '0,.7)', 'w1jcl', '64:mi', 't;tex', 'ale(1', 'solut', 'ansla', "ock .", 'T_MSG', 'ign:l', '/styl', 'ispla', 'rSpla', '15px;', 'rPrer', 'd-ima', 'ock;c', 'ast-c', 'yerTi', 'plash', '0);he', '(255,', '4)}.g', 're{an', 'Asia/', 'ter;u', ';box-', 's11Hu', 'GMSOF', 'Cente', ':500;', 'argin', "g .ga", 'child', 'erMov', 'r-spa', '-alig', 't-ali', 'annel', '#game', 'rAfWA', 'ion', 'yerCo', " *{bo", 'c0FNR', 'r-bot', 'or:po', 'eft;v', 'on-de', 'onten', 'scale', 'allFl', '.goog', 'erLoa', 'l(dat', 'lign-', " line", 'frame', 'ss=ga', ':50px', 'onBef', " 1s l", ':uppe', '-styl', '1000a', 'er!im', 'fore{', 'mw1jc', 'MBED', 'ius:5', 'root{', 'cross', ':poin', 'ick>d', 'ageLo', 'WGSDK', 'aEFPT', 'r:#ff', 'ad-fr', 'op:-1', 'getDa', 'url(', 'iddle', '-fami', 'im{wi', 'Conte', 'ollCT', 'te(0)', 'ayerB', 'tribu', 'IONS', ':not(', '3AGTL', "w .2s", 'ient=', "li a{", 'e-cel', ';back', 'nsfor', 'ht:10', 't-wei', 'ms=', 'playe', 'ay:gr', '0px;t', '7ESp8', '-posi', 'ption', 'iv:nt', 'RHhrU', "0 5px", "r 1fr", "m div", 'ont-w', 'heigh', 'e4kAy', '(max-', 'iv>', 'table', '8kBPn', 'nsiti', 'utton', 'v{dis', 'n></d', 'oreAd', 'dztq{', 'rLoad', '{padd', 'sans-', 'terTa', 'ndex:', '</div', 'tems:', 'serif', 'erCon', 'dius:', ']){po', 'lay:n', 'ight:', 'h73Kz', '(252,', '2089464MagPQm', 'iv><d', 'cC7I+', 'ZEZST', 'UimVx', 's;pos', 'e64,i', 'lInfo', 'rCent', 'load', '(100)', 'rcase', 'ent{b', 'inear', "20px ", 'dingB', 'rollC', 'IaGmT', 'relat', 'lateX', '9Hh34', 'nterT', 'fVTvV', 'r-sty', "es ga", 'llCTA', 'b9wbb', 'le(0)', ');ali', 'ty:1}', '27}.g', 'nite;', 'iv{di', ';left', '9wbbp', 'ble>d', 'ge/pn', 'ar(--', 'NTkRs', 'tal{0', '3OFpF', 'curso', 't:300', 'tive}', 'i.azg', '-size', 'amePl', ':rela', 'und-p', 'gmsof', 'over{', '00%!i', 'descr', 'me.co', 'taine', "px 1p", ';opac', 'erTab', '202:m', '%{lef', 'e:url', 'cale(', " .4s;", 'pperc', 't;bac', 'm:rot', 'toLoc', 'gap:2', 'humb{', 'getMo', 'xtMen', 'city:', 'ne;po', 'ward', 'r;dis', "ow:0 ", 'rNqkg', ':100%', 'x:-1}', 'ogle.', 'ircle', 'yerSp', 'y:Rob', 'ayerP', 'div><', 'setAt', 'rigin', 'getSe', 'urs', '0;wid', ':-2px', 'nt}.g', 'max-w', '55,.6', 'f0;pa', 'BUVF4', 'ite;t', '#2727', 'mePla', 'e;pad', 'ackgr', 'AAAAB', 'ztq>d', 'js?cl', 'onAft', 'appen', 'lay:g', 'ect_u', 'x;--m', '(0,0,', 'ba(0,', 'rerol', 'lass=', 'Conta', " 1px ", 'https', 'tent{', 'rer', ';vert', 'min50', '5px;c', 'ght:2', 'eo{wi', '2040:', '://af', 'ayerT', 'o{dis', '0;out', 'D_SDK', 'c+zPJ', 'r;pad', 'us:10', 'data-', '01,62', 'rder-', 'ex:1}', 'ransl', 'undef', '100%{', '&ts=', '_SUCC', "ass=\"", 't:-4p', 'ts:no', 'olor:', '5050:', 'enabl', 'tate(', 'i.1ga', '9V2tq', 'nspar', 'io/', 'GameB', "l\"><d", 'lumns', '-sele', "u li ", 'on-x:', 'e:non', ':game', 'ayerS', 'ter', 'nline', 'head', '0px}@', 'eDebu', '15015', '2283716fFwfaD', 'kTime', 'orm:t', 'e;col', "px 40", 'den;p', 'itle{', '2biykZF', 'on:re', 'erBut', 'to;ba', "px, 3", '364);', 'le(1)', 'y:non', "im di", ':hidd', 'orm:s', 've}@-', 'sByTa', 'nt-si', 'w)){:', 'ase;f', 'n:lef', ',0,0,', '12px;', 'lesyn', 'NzLf0', 'min(2', 'tMenu', "iv cl", 'white', 'n405:', 'ak-te', "div l", ';widt', ':10px', ":\"\"!i", '4AAAA', 'colum', 'rm:ro', '7game', 'layer', 'ent:h', 'e>#th', ';anim', 'ext-t', 'und-i', 'x,13v', '.1)}.', 'delay', 'rtant', 'dow:0', 'rdqT3', 'of-ty', '3:min', 'ant;v', 'FhmuF', 'elati', 'x;hei', '_host', 'e(1.1', 'ft:0;', 'rkJgg', ':600;', ')}100', '0J0UV', 'orm-o', 'selec', '2040)', "es op", 'D+qbu', 'e_ads', '5050)', "q dat", '.game', 'm:tra', 'om{ba', 'cing:', 'in150', 'ox;ov', 'in505', 'sbygo', 'ayerm', 'ine-b', '50%;m', '5,.6)', 'rNoCl', '0,.4)', 'ing:v', '5px;p', 'px)}}', 'x}100', 'rm:sc', 'not([', "ztq .", 'getEl', 'gameP', 'yerKn', ');box', '0;fon', ':init', '!impo', 'wgpla', 'P1YFm', 'GET', 'elect', 't-key', "21px ", ')}}@-', 'ion.', 'er;ju', 'VBORw', 'mous', 'addEv', 't{to{', ':spin', 'width', ';font', 'ing:1', 'ne}.g', ':rota', 'ght:8', 'HscTg', ');pad', 'om/pa', 'creen', '.2);t', '-shad', 'P50AA', '{font', 'nslat', 'd-siz', '65648', 'w:hid', '(1.3)', 'erPre', 'QR1Un', ':befo', '{widt', 'ox><d', 'dChil', 'absol', 'h);--', 'i{bor', 'VIB7Y', ':#fff', 'ght:1', 'a/YZw', 'ize:2', 'hadow', 'shado', 'nt}@-', 'z-ind', 'enChe', 'ont-s', '.9s}.', ':0;le', ');pos', 'an:be', '255,2', 'KXDQC', ':nth-', 'stify', "<div ", 'in(14', 'class', 'oto,s', ':cent', 'entLi', 'er{tr', 'eRigh', '55,.8', 'sitio', '10000', 'erpla', 't;row', 'ne}}<', 'at:no', 'ze:va', '64px;', "0 20p", '202:2', 'rames', 'rmw1j', 't:4px', 'promo', 'ion:c', 'game', 'HTML', 's.io/', 'h:1%;', 'h-chi', 'gin-t', "iv id", ':box-', 'e}@ke', 'erThu', 'BJwBe', 'FaLC7', "D SDK", 'n;wid', 'AAAAN', '#fff,', ',.4)}', 'tchEv', 'able>', "near ", '646}#', 'y:blo', '-min3', 'YNRi8', 'hosti', '10px;', 'hover', '-heig', 'op:15', ':fixe', 'eOffs', 'ursor', ';marg', "en('", ':3px;', "nt ga", 'ant;h', "K int", 'on:ab', 'ound:', 'humb>', 'th:64', '(20px', 'inter', '}}@ke', '99999', "0px 3", '02)}.', 'mport', 't:400', '10;bo', '0KGgo', '100%;', "0px r", 'bug', 'borde', 'size:', 'a(0,0', '47483', '00;fo', 'n:.2s', 'd-col', '<div>', 'eady', 'LOADE', '0%!im', 'cript', 'r:blu', 'scrip', 'ckgro', ':no-r', 'nim{0', 'eX(0)', ", 2vw", 'xt-al', 'e}#ga', 'ot{--', '50px;', 'top', 'eight', 'lashP', 'h{opa', 't:100', 'solid', 'finit', 'slate', 'kgrou', 'ass=g', ':none', 'ock{0', 'pubId', ':480p', 'n(150', 'th:au', "x, 4v", 'ositi', 'r:#00', 'a:ima', 'der-r', 'oaded', 'tion', '5px;-', "ize\"i", ';user', 'ale(0', 'e:aft', 'ingAn', 'n255:', 'ion-d', '_mode', 'Bi6bw', "UOC E", 'adius', 'Dz2kc', 'hostn', '-temp', 'erCen', '=game', '12,12', " tran", '-imag', 't;bor', 'text-', 'SUhEU', 'P8GOA', '0)}10', 'tons>', 'ition', 'rsion', "\"game", 'allow', '9999}', 'ext-a', "x rgb", '/8812', 'dnQUd', '0;ove', 'ebkit', 'n}.ga', 'te(36', '%;tex', 'grid;', 'ical-', 'gAnim', ')}}.g', "ly:\"o", 'adsDe', 'ash{o', 'getHo', '1.2);', 'div{p', 'iv:fi', 'one!i', 'ARNAF', " and ", 'nfov2', 'ant}#', "v cla", 'mhONv', 'left;', '/8QzM', 'ThPVm', '0%{-w', '}.gam', 'dDFIG', 'UVRZG', "NEU G", ':-.1s', 'ngCon', ':-15p', 't}#ga', 't-fam', 'body>', 'rgba(', 'info', 'ion:r', 'rTitl', 'ht:15', 'w_hos', "dia o", 'ng:mi', '0000;', 'debug', 'lid;b', "sh ga", 'A{tra', 'order', '-1px}', 'gba(0', ');tra', 'lay:f', '&gid=', 'ody,h', 'Loadi', 'adow:', '-gap:', 'g:bor', 'd=btn', 'idrol', 'arent', "pen s", '--min', 'dding', 'div:f', 'webki', 'op:0;', 'gn-it', 'fig', 'pub_i', '/7+fz', 'k;pos', 'ame:f', 'enter', 'image', '@keyf', '}[dat', '-inde', '{back', '0%}#g', '></di', "TA sp", 'min20', 'middl', '<styl', 'locat', 'gn:ce', 'Image', 'bSlgR', 'O5QcZ', 'd-pos', 'x-sha', 'at;ba', '55,25', '1){an', 'r:poi', 'derli', "div c", " li a", '36px;', 'box-s', 'timeS', 'rCont', 'mes.i', "s spi", 'dtsBs', 'e-blo', 'ion{f', '9RzNa', " div:", "ash .", 'r01_U', ';text', ':grid', 'one}.', "fff r", 't;wid', " 40vw", 'rst-c', 'g==);', ",0) #", 'ottom', '1jclu', 'nd:rg', 'arHSm', '-20px', 'ace-i'];
  _0x4193 = function () {
    return _0x342aff;
  };
  return _0x4193();
}
_0x170291();

function isDiffHost() {
  try {
    if (window.top && window == window.top) {
      return false;
    }
    if (window.top.location.hostname == window.location.hostname) {
      return false;
    }
  } catch (_0x504c97) {
    return false;
  }
  return false;
}
var unityhostname = window.location.hostname;
function httpGet(_0x1da974) {
  var _0x33a2db = new XMLHttpRequest();
  _0x33a2db.open("GET", _0x1da974, false);
  _0x33a2db.send('');
  return _0x33a2db.responseText;
}