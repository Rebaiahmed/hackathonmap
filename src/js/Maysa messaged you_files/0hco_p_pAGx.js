if (self.CavalryLogger) { CavalryLogger.start_js(["c1O\/p"]); }

__d("TimelineAppSectionConstants",[],(function(a,b,c,d,e,f){e.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",info_all:"about",music_favs:"music",books_read:"books",books_favorite:"books",fitness_overview:"fitness",info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",info_history:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",video_movies_watch:"movies",video_tv_shows_watch:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",groups_member:"groups",photos_album:"photos",likes_restaurants:"likes",saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",places_cities:"map",place_visits_by_city:null,likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",videos_by_user:"videos",videos_user_tagged:"videos",saved_posts:"saved",saved_photo_posts:"saved",saved_products:"saved",at_work_hr_info:null,friends_with_unseen_posts:"friends",groups_mutual:"groups",saved_profiles:"saved",work_followers:"friends",work_following:"friends",saved_messages:"saved",saved_lists:"saved",saved_fundraisers:"saved",saved_jobs:"saved",lists:"lists",list_contents:"lists",saved_group_posts:"saved",saved_offers:"saved",fun_fact_answers:"did_you_know",saved_asset3ds:"saved",saved_marketplace_nearbuy_deals:"saved",stories_archive:"archive",work_bookmarked_coworkers:"friends",profile_songs:"music",about_overview:"about",about_work_and_education:"about",about_places:"about",about_contact_and_basic_info:"about",about_family_and_relationships:"about",about_details:"about",about_life_events:"about",instagram_recent_photos_collection_id:null,pokedex_recently_caught_collection_id:null,pokedex_top_catches_collection_id:null,unknown_do_not_use_this:null,followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",videos_by:"videos",videos_of:"videos"},alternateCollectionTabKeyToAppTabKey:{following:"following",followers:"followers"}}}),null);
__d("BloodDonorSettings",["DOM","DOMScroll","Run","URI","emptyFunction"],(function(a,b,c,d,e,f){a={scrollToSetting:function(a,c){var d=this;b("URI").getRequestURI().getQueryData().focus_blood_donor_settings&&b("Run").onLoad(function(){d._scrollAndFocus(a,c)})},_scrollAndFocus:function(a,c){c=c?b("emptyFunction"):function(){var c=b("DOM").scry(a,"blood_type")[0];c&&c.focus()};b("DOMScroll").scrollTo(a,500,!1,0,0,c)}};e.exports=a}),null);
__d("Optimus",["Event","Parent"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={};function h(a,c){__p&&__p();var d=c.getTarget();if(!d)return;var e=g[a];for(var f in e){var h=b("Parent").byAttribute(d,f);if(h)do{var i=e[f][h.getAttribute(f)];if(i&&i.handleOptimus(a,h,c)===!1)break}while(h=h.parentNode&&b("Parent").byAttribute(h.parentNode,f))}}function i(c,d,f,a){g[c]||(g[c]={},b("Event").listen(document.documentElement,c,h.bind(null,c))),g[c][d]||(g[c][d]={}),g[c][d][f]||(g[c][d][f]=a)}e.exports={addRelClick:function(b,a){i("click","rel",b,a)},addEventListener:i}}),null);
__d("ProfileActionBarLogger",["FBJSON","MarauderLogger","Optimus"],(function(a,b,c,d,e,f){function a(){b("Optimus").addEventListener("mouseup","data-loggable","ProfileHighQualityLogger",{handleOptimus:function(a,c,d){b("MarauderLogger").log("profile_high_quality_action",null,b("FBJSON").parse(c.getAttribute("data-store")));return!1}})}f.init=a}),null);
__d("ProfileEscapeHatch",["Arbiter","CSS","ProfileTabUtils","Run"],(function(a,b,c,d,e,f){__p&&__p();var g=[],h=!1;function i(a){g.forEach(function(c){b("CSS").conditionShow(c.getRoot(),!b("ProfileTabUtils").isOverviewTab(a))})}a=function(){"use strict";__p&&__p();function a(a){this.$1=a;g.push(this);if(!h){var c=b("Arbiter").subscribe("TimelineController/sectionKeyChange",function(a,b){return i(b[0])});b("Run").onLeave(function(){g=[],c.unsubscribe()});h=!0}}var c=a.prototype;c.getRoot=function(){return this.$1};return a}();e.exports=a}),null);
__d("TimelineURI",["BizSiteIdentifier.brands","BusinessURI.brands","ProfileTabConst","TimelineAppSectionConstants","URI","goURI"],(function(a,b,c,d,e,f){__p&&__p();var g={parseURI:function(a){__p&&__p();a=new(b("URI"))(a);var c=a.getQueryData();a=a.getPath();var d=a.split("/").slice(1);(d[0]=="people"||d[0]=="pages")&&(d=d.slice(2));var e=c.sk||d[1]||b("ProfileTabConst").TIMELINE;e==b("ProfileTabConst").WALL&&(e=b("ProfileTabConst").TIMELINE);var f=null,g=null;e==b("ProfileTabConst").TIMELINE&&(g=parseInt(d[2],10)||null,f=parseInt(d[3],10)||null);return{path:a,id:c.id||d[0],key:e,viewas:c.viewas?c.viewas:"0",filter:c.filter?c.filter:null,year:g,month:f,friendship:!!c.and}},goToProfileID:function(a){b("BizSiteIdentifier.brands").isBizSite()?b("goURI")(b("BusinessURI.brands")("/profile.php").addQueryData("id",a),!0):b("goURI")(new(b("URI"))("/"+a),!0)},getTabKeyFromURI:function(a){a=g.getSectionKeyFromURI(a);return b("TimelineAppSectionConstants").collectionTabKeyToAppTabKey[a]||a},getSectionKeyFromURI:function(a){return a.getQueryData().sk||a.getPath().split("/")[2]||b("ProfileTabConst").TIMELINE},getVanityFromURI:function(a){var b=a.getQueryData().id;return b||a.getPath().split("/")[1]},isVideoPermalink:function(a){return g.getTabKeyFromURI(a)===b("ProfileTabConst").VIDEOS&&a.getPath().split("/").filter(function(a){return!!a}).length>2}};e.exports=g}),null);
__d("ProfileNavigation",["Arbiter","CSS","DOMScroll","PageTransitions","ProfileDOMID","ProfileScriptPath","ProfileTabConst","ProfileTabUtils","ProfileTimelineUILogger","ScriptPath","TimelineController","TimelineURI","UIPagelet","URI","$","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=7,h=null,i=null;function j(a){a=k(a);a||b("Arbiter").inform("profile/onLeave");return a}function k(a){__p&&__p();var c=b("URI").getMostRecentURI(),d=b("TimelineURI").getSectionKeyFromURI(c),e=b("TimelineURI").getTabKeyFromURI(c),f=c.getQueryData();f=f.subkey;var g=b("TimelineURI").getSectionKeyFromURI(a),i=b("TimelineURI").getTabKeyFromURI(a),j=a.getQueryData(),k=j.subkey;if(r(c,a)||s(i)||s(e)||!!j.and||b("TimelineURI").isVideoPermalink(a))return!1;if(j.hc_location==="profile_browser")return!1;if(Object.prototype.hasOwnProperty.call(j,"theater")){b("Arbiter").subscribeOnce("PhotoSnowlift.CLOSE",t);return!1}if(Object.prototype.hasOwnProperty.call(j,"force-refresh"))return!1;if(b("ProfileTabUtils").normalizeTabKey(e)===b("ProfileTabUtils").normalizeTabKey(i)&&b("ProfileTabUtils").normalizeTabKey(d)===b("ProfileTabUtils").normalizeTabKey(g)&&f===k)return!1;if(b("ProfileTabUtils").isTimelineOverviewTab(e)&&b("ProfileTabUtils").isTimelineOverviewTab(i)&&f!==k){b("TimelineController").registerCurrentKey(i,k);b("PageTransitions").transitionComplete();return!0}if(!b("ProfileTabUtils").isMedleyTab(e)&&b("ProfileTabUtils").isMedleyTab(i)&&q(g)){h=g;l(g,b("ProfileTabUtils").getPageletForTabKey(i),b("ProfileTabUtils").getIDForTabKey(e),b("ProfileTabUtils").getIDForTabKey(i),j);return!0}if(!b("ProfileTabUtils").isMedleyTab(i)){b("ProfileTabUtils").isMedleyTab(e)&&(h=d);l(b("ProfileTabUtils").normalizeTabKey(i),b("ProfileTabUtils").getPageletForTabKey(i),b("ProfileTabUtils").getIDForTabKey(e),b("ProfileTabUtils").getIDForTabKey(i),j);return!0}return!1}function l(a,c,d,e,f){__p&&__p();var g=b("ge")("fbTimelineHeadline");g&&!b("DOMScroll").isCurrentlyVisible(g)&&window.scrollTo(0,0);b("CSS").hide(b("$")(d));b("Arbiter").inform("save_facebar_query",!0);g=b("ge")(e);g?(b("CSS").show(g),p(a)):m(c,a,f);d=b("ge")("pageFooter");d&&b("CSS").conditionShow(d,!b("ProfileTabUtils").isTimelineTab(a));e=f&&f.subkey?String(f.subkey):null;b("TimelineController").registerCurrentKey(a,e)}function m(a,c,d){n();var e=babelHelpers["extends"]({},i,{tab_key:c});d&&(e=babelHelpers["extends"]({},e,d));d=function(a){o(),a()};d={append:!0,displayCallback:d,finallyHandler:p.bind(null,c),usePipe:!0};b("UIPagelet").loadFromEndpoint(a,b("ProfileDOMID").MAIN_COLUMN_PERSONAL,e,d)}function n(){b("CSS").show(b("$")(b("ProfileDOMID").TAB_LOAD_INDICATOR))}function o(){b("CSS").hide(b("$")(b("ProfileDOMID").TAB_LOAD_INDICATOR))}function p(a){b("ScriptPath").set(u.getScriptPath(a),null,{entity_id:b("TimelineController").getProfileID(),profile_session_id:b("TimelineController").getSessionToken()}),b("PageTransitions").transitionComplete(),b("ProfileTimelineUILogger").logTabLoadSuccess(a)}function q(a){return h===null||a===h}function r(a,c){var d=b("TimelineURI").getVanityFromURI(a);a=a.getQueryData().id;var e=b("TimelineURI").getVanityFromURI(c);c=c.getQueryData().id;if(d&&e)return d!==e;return a&&c?a!==c:!0}function s(a){return b("ProfileTabUtils").isActivityLogTab(a)||a===b("ProfileTabConst").MEMORIAL_CONTACT||a===b("ProfileTabConst").POSTS||a===b("ProfileTabConst").TRIBUTES}function t(){b("PageTransitions").registerHandler(j,g)}var u={init:function(a){i=a.profileContextData,t()},reset:function(){i=null,h=null,b("PageTransitions").removeHandler(j)},getScriptPath:function(a){var c=b("ProfileScriptPath").path;a&&!b("ProfileTabUtils").isTimelineTab(a)&&(c+=":"+a);return c}};e.exports=u}),null);
__d("XProfileTilesLogDismissController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/profile/tiles/log/dismiss/",{section_type:{type:"Enum",required:!0,enumType:1}})}),null);
__d("ProfileTileActions",["csx","cx","AsyncRequest","CSS","Event","XProfileTilesLogDismissController","tidyEvent"],(function(a,b,c,d,e,f,g,h){a={addCollapseListeners:function(a,c){var d=a.querySelector("._3vay");d!==null&&b("tidyEvent")(b("Event").listen(d,"click",function(d){b("CSS").addClass(a,"_65tv");d=b("XProfileTilesLogDismissController").getURIBuilder().setEnum("section_type",c);new(b("AsyncRequest"))().setURI(d.getURI()).setMethod("POST").send()}))}};e.exports=a}),null);
__d("TimelineDrag",["ArbiterMixin","Event","Locale","Style","Vector","mixin"],(function(a,b,c,d,e,f){__p&&__p();a=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(b,c,d){__p&&__p();var e;e=a.call(this)||this;d=d||{};e._listenOn=d.listenOn;e._offsetInput=c;e._defaultOffset=d.default_offset;e._killClicks=d.killClicks;e._vertical=!0;e._RTLXSwitch=!1;e.setPicture(b,d);return e}var d=c.prototype;d.setPicture=function(a,c){__p&&__p();if(!a)return!1;c=c||{};this._picture=a;this._defaultOffset=c.default_offset;c.offsetInput&&(this._offsetInput=c.offsetInput);c.vertical!==void 0&&(this._vertical=c.vertical);c.height&&(this._containerHeight=c.height);c.width&&(this._containerWidth=c.width);this._vertical?(this._offsetType="top",this._eventCoord="y"):(this._RTLXSwitch=b("Locale").isRTL(),this._offsetType="left",this._eventCoord="x");this._picture.complete?this._initialLoad():this._loadListener=b("Event").listen(this._picture,"load",function(){this._loadListener.remove(),this._loadListener=null,this._initialLoad()}.bind(this))};d.destroy=function(){this._stopDrag(),this._saveOffset(),this._mousedown&&this._mousedown.remove(),this._mousedown=null,this._touch&&this._touch.remove(),this._touch=null,this._onclick&&this._onclick.remove(),this._onclick=null,this._loadListener&&this._loadListener.remove(),this._loadListener=null};d._initialLoad=function(){__p&&__p();var a=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=b("Event").listen(a,"mousedown",this._onMouseDown.bind(this));this._touch&&this._touch.remove();this._touch=b("Event").listen(a,"touchstart",this._onTouchStart.bind(this));this._vertical?this._maxOffset=this._containerHeight-this._picture.offsetHeight:this._maxOffset=this._containerWidth-this._picture.offsetWidth;this._defaultOffset!==void 0&&this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;this._killClicks&&(this._onclick=b("Event").listen(a,"click",this._onClick.bind(this)));this._saveOffset()};d._onClick=function(a){a.kill()};d._onDragStart=function(a,c){var d=parseInt(b("Style").get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=d-c[this._eventCoord];this._startDrag();a.kill()};d._onMouseDown=function(a){this._onDragStart(a,b("Vector").getEventPosition(a))};d._onTouchStart=function(a){this._onDragStart(a,b("Vector").getTouchEventPosition(a))};d._startDrag=function(){this._dragStarted||(this.inform("startdrag",this),this._dragTokens=[b("Event").listen(document.documentElement,"mouseup",this._onDragEnd.bind(this)),b("Event").listen(document.documentElement,"touchend",this._onDragEnd.bind(this)),b("Event").listen(document.documentElement,"mousemove",this._onMouseMove.bind(this)),b("Event").listen(document.documentElement,"touchmove",this._onTouchMove.bind(this))],this._dragStarted=!0)};d._saveOffset=function(){var a=parseInt(b("Style").get(this._picture,this._offsetType),10);this._RTLXSwitch?this._offsetInput.value=a+this._containerWidth-this._picture.offsetWidth:this._offsetInput.value=a};d._stopDrag=function(){this._dragStarted&&(this.inform("stopdrag",this),this._dragStarted=!1,this._dragTokens.forEach(function(a){a.remove()}),this._saveOffset())};d._onDragEnd=function(a){this._stopDrag(),a.kill()};d._setOffset=function(a){this._RTLXSwitch?a=Math.max(0,Math.min(a,-this._maxOffset)):a=Math.min(0,Math.max(a,this._maxOffset)),b("Style").set(this._picture,this._offsetType,a+"px")};d._onHandleMove=function(a,b){this._setOffset(this._pictureStartDragOffset+b[this._eventCoord]),a.kill()};d._onMouseMove=function(a){this._onHandleMove(a,b("Vector").getEventPosition(a))};d._onTouchMove=function(a){this._onHandleMove(a,b("Vector").getTouchEventPosition(a))};return c}(b("mixin")(b("ArbiterMixin")));e.exports=a}),null);
__d("TimelineCover",["csx","cx","fbt","Arbiter","Button","CSS","Dialog","DOM","DOMScroll","FileInputUploader","Focus","HTML","PageTransitions","Parent","ReloadPage","Run","Style","TimelineDrag","ge","setImmediate","tidyEvent"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();a=function(){"use strict";__p&&__p();function a(c,d,e){__p&&__p();var f=this;this.root=b("Parent").bySelector(c,"#fbProfileCover");typeof d==="object"?(this._coverHeight=d.cover_height,this._coverWidth=d.cover_width,this.previewing=d.previewing,this._isLegacy=!1):(this._isLegacy=!0,this._coverHeight=d,this.previewing=e);this._parentSection=b("Parent").byClass(this.root,"fbTimelineSection");this.cover=b("DOM").find(this.root,".cover");a.instance=this;this.editing=!1;b("Run").onBeforeUnload(this.onBeforeUnload.bind(this));this._parentSection||(this._parentSection=b("Parent").byClass(this.root,"fbEventHeader"));this.previewing&&b("setImmediate")(function(){f.editMode(),f.updateCoverImage(f.previewing)})}var c=a.prototype;c.showLoadingIndicator=function(){var a=b("ge")("fbCoverImageContainer");a&&b("CSS").addClass(a,"opaquedLoading")};c.hideLoadingIndicator=function(){var a=b("ge")("fbCoverImageContainer");a&&b("CSS").removeClass(a,"opaquedLoading")};c.onBeforeUnload=function(){if(this.isInEditMode())return i._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.")};c.isCoverImageVerticalFlow=function(a){return a===null||a===void 0?!0:!a.style.height};c.editMode=function(){__p&&__p();var a=b("DOM").find(this.root,"button.saveButton");b("Button").setEnabled(b("DOM").find(this.root,"button.cancelButton"),!0);b("Button").setEnabled(a,!0);this.hideLoadingIndicator();this._coverImage=b("DOM").scry(this.root,".coverImage")[0];if(this._coverImage){var c=b("DOM").scry(this._coverImage,".coverWrap")[0];if(c){c=b("DOM").scry(c,".coverPhotoImg")[0];this._originalIsVertical=this.isCoverImageVerticalFlow(c);this._originalOffset=b("Style").get(c,this._originalIsVertical?"top":"left")}}this._parentSection!==null&&b("CSS").addClass(this._parentSection,"fbEditCover");b("DOMScroll").scrollTo(this.root);this.previewing&&(b("DOM").remove(this._coverImage),b("CSS").show(this._coverImage));if(this._coverImage){c=b("DOM").scry(this._coverImage,".coverPhotoImg")[0];c&&this._createDragger()}this.editing=!0;b("Focus").set(a);b("Arbiter").inform("CoverPhotoEdit",{sender:this,state:"open"})};c._exitEditMode=function(){this._timelineDrag&&(this._timelineDrag.destroy(),this._timelineDrag=null),b("DOM").find(this.root,"input.hiddenPhotoID").value=null,b("Button").setEnabled(b("DOM").find(this.root,"button.cancelButton"),!1),b("Button").setEnabled(b("DOM").find(this.root,"button.saveButton"),!1),this._parentSection!==null&&b("CSS").removeClass(this._parentSection,"fbEditCover"),this.hideLoadingIndicator(),this.previewing=!1,b("Arbiter").inform("CoverPhotoEdit",{sender:this,state:"closed"}),this.editing=!1};c._createDragger=function(a){var c,d;this._isLegacy?(c=b("DOM").find(this.root,"input.photoOffsetInput"),this._originalIsVertical=!0):(d=a===void 0?this._originalIsVertical:a,c=d?b("DOM").find(this.root,"input.photoOffsetYInput"):b("DOM").find(this.root,"input.photoOffsetXInput"));this._timelineDrag=new(b("TimelineDrag"))(b("DOM").scry(this.root,".coverImage .coverPhotoImg")[0],c,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:d,killClicks:!0})};c.updateCoverImage=function(a,c){__p&&__p();this._reloadAfterNextUpdate=!0;c&&this.editMode();b("DOM").find(this.root,"input.hiddenPhotoID").value=a;b("Button").setEnabled(b("DOM").find(this.root,"button.saveButton"),!0);c&&b("DOM").replace(b("DOM").scry(this.root,".coverImage")[0],typeof c==="string"?b("HTML")(c):c);a=b("DOM").scry(b("DOM").find(this.root,".coverImage"),".coverPhotoImg")[0];c=this.isCoverImageVerticalFlow(a);var d;this._isLegacy?d=b("DOM").find(this.root,"input.photoOffsetInput"):d=c?b("DOM").find(this.root,"input.photoOffsetYInput"):b("DOM").find(this.root,"input.photoOffsetXInput");this._timelineDrag?this._timelineDrag.setPicture(a,{offsetInput:d,vertical:c}):this._createDragger(c);this._updateHeader()};c.saveUpdate=function(){window.onbeforeunload=null;var a=b("ge")("fbCoverImageContainer");b("CSS").addClass(a,"opaquedLoading");this._timelineDrag&&(this._timelineDrag.destroy(),this._timelineDrag=null)};c.cancelUpdate=function(){this._reloadAfterNextUpdate=!1,b("DOM").remove(b("DOM").scry(this.root,".coverImage")[0]),b("DOM").prependContent(this.cover,this._coverImage),this._originalOffset!==void 0&&b("Style").set(b("DOM").scry(this._coverImage,".coverPhotoImg")[0],this._originalIsVertical?"top":"left",this._originalOffset),this._exitEditMode(),this._updateHeader()};a.staticSaveComplete=function(){var b=a.getInstance();b!==null&&b.saveComplete()};c.saveComplete=function(){this._coverImage=b("DOM").scry(this.root,".coverImage")[0];var a=b("DOM").scry(this.root,"._3x7_")[0];a&&b("CSS").removeClass(a,"_3x7_");this._exitEditMode();this._updateHeader();b("PageTransitions").rewriteCurrentURI(b("PageTransitions").getCurrentURI().getUnqualifiedURI(),b("PageTransitions").getCurrentURI().removeQueryData("preview_cover"));this._reloadAfterNextUpdate&&b("ReloadPage").now()};c.isInEditMode=function(){return this.editing};c._updateHeader=function(){var a=b("DOM").scry(this.root,".coverImage")[0];if(!a)return;a=b("CSS").hasClass(a,"coverNoImage");var c=null;this._parentSection!==null&&(c=b("CSS").hasClass(this._parentSection,"noCoverImage"));a!==c&&(this._parentSection!==null&&b("CSS").conditionClass(this._parentSection,"noCoverImage",a))};a.getInstance=function(){return a.instance};a.staticUpdateCoverImage=function(b){var c=a.getInstance();c!==null&&c.updateCoverImage(null,b)};c.setupFileUpload=function(c,d,e){__p&&__p();var f=this;c.subscribe("change",function(){__p&&__p();var g=new(b("FileInputUploader"))(c.getInput()).setURI(d).setAllowCrossOrigin(!0);g.subscribe("failure",function(){a.showErrorDialog(i._("Cover Upload Failed"),i._("Uploading the new cover picture failed. Please try again."))});g.subscribe(["success","failure"],function(){f.hideLoadingIndicator(),c.clear(),b("CSS").removeClass(c.getControl(),e),c.getInput().disabled=!1});f.showLoadingIndicator();f._reloadAfterNextUpdate=!0;g.send();b("CSS").addClass(c.getControl(),e);c.getInput().disabled=!0})};a.setupFileUpload=function(b,c,d){var e=a.getInstance();e!==null&&e.setupFileUpload(b,c,d)};a.imageUploadDone=function(b,c){var d=a.getInstance();d!==null&&d.updateCoverImage(b,c)};a.showErrorDialog=function(c,d){new(b("Dialog"))().setTitle(c).setButtons(b("Dialog").OK).setBody(d).setSemiModal(!0).show();c=a.getInstance();c!==null&&c.hideLoadingIndicator()};a.initFileUploadMenu=function(b){a.showLoadingAfterFileUpload(b.getForm())};a.showLoadingAfterFileUpload=function(c){b("tidyEvent")(c.subscribe("submit",function(){var b=a.getInstance();b!==null&&b.showLoadingIndicator()}))};return a}();a.instance=null;e.exports=a}),null);
__d("TimelineNavLight",["csx","cx","invariant","Arbiter","CSS","DataStore","DOM","DOMQuery","Event","Parent","ProfileEngagementTypedLogger","ProfileOverviewDOMID","ProfileOverviewSection","ProfileTabUtils","ProfileTimelineUILogger","TimelineAppSectionConstants","destroyOnUnload","queryThenMutateDOM","requireWeak"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j="_6-7",k="_6-6",l="_529n",m="_5215",n="_9rw",o="_70k",p="._6-7",q="._6-6";a=function(){"use strict";__p&&__p();function a(c){__p&&__p();var d=this;a.$5&&i(0,5609);this.$1=c;this.$2=b("DOMQuery").scry(c,p)[0];this.$3=b("DOMQuery").scry(c,q);this.$6();b("ProfileOverviewSection").subscribe("Medley/transitionToSection",function(a,c){d.$7(c.slice(b("ProfileOverviewDOMID").PREFIX_MEDLEY.length))});var e=b("Arbiter").subscribe("TimelineController/sectionKeyChange",function(a,b){return d.$7(b[0])}),f=b("Event").listen(this.$1,"click",this.$8.bind(this));a.$5=this;b("destroyOnUnload")(function(){d.$1=null,d.$2=null,d.$3=null,f.remove(),e.unsubscribe(),d.$4&&d.$4.remove(),a.$5=null})}var c=a.prototype;c.setMoreMenuInstance=function(a){this.$4=b("Event").listen(a.getRoot(),"click",this.$9.bind(this))};a.setMoreMenuInstance=function(b){!a.$5&&i(0,5610),a.$5.setMoreMenuInstance(b)};c.$7=function(a){__p&&__p();var c=this;this.$2&&b("CSS").removeClass(this.$2,j);var d=this.$3;d&&d.some(function(d){var e=b("TimelineAppSectionConstants").collectionTabKeyToAppTabKey[a]||a,f=b("TimelineAppSectionConstants").alternateCollectionTabKeyToAppTabKey[a];if(b("DataStore").get(d,"tab-key")===e||b("DataStore").get(d,"tab-key")===f){b("CSS").addClass(d,j);c.$2=d;return!0}return!1});(b("ProfileTabUtils").isTimelineTab(a)||b("ProfileTabUtils").isTimelineOverviewTab(a))&&b("requireWeak")("ScrollColumnEvents",function(a){b("Arbiter").inform(a.EVENT_SHOULD_ADJUST)})};c.$6=function(){__p&&__p();var a=this,c=this.$3,d,e;c&&(d=c.length-1,e=c[d]);var f,g,h,i=0;b("queryThenMutateDOM")(function(){__p&&__p();var j=a.$1;if(j){j=b("Parent").byClass(j,o);j instanceof HTMLElement&&(f=j.offsetWidth)}g=e.offsetLeft;h=e.offsetWidth;for(var j=d;j>1;j--)if(c){var k=c[j];if(k.offsetLeft+k.offsetWidth>f)i++;else break}},function(){var e=a.$1;g+h>f&&e&&b("CSS").addClass(e,m);if(c)for(var j=d;j>d-i;j--)b("DOM").remove(c[j]);if(e){j=b("Parent").byClass(e,l);j!==null&&b("CSS").removeClass(j,l)}})};c.$10=function(a,c){a=b("Parent").byClass(a,c);return a?b("DataStore").get(a,"tab-key"):null};c.$8=function(a){a=this.$10(a.target,k);a&&b("ProfileTimelineUILogger").logCoverNavItemClick(a)};c.$9=function(a){a=this.$10(a.target,n);a&&b("ProfileTimelineUILogger").logCoverNavMoreItemClick(a)};a.setupProfileOverviewLogging=function(a){var c=a.dropdownMenu,d=a.profileID,e=a.profileSessionID,f=a.surface;c.onTriggerClick(function(a){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_navigation_click").setItemType("dropdown_button").setProductBucket("profile_core").setProfileIDDummy(d).setProfileSessionID(e).setSurface(f).log()});c.onMenuItemClick(function(a){new(b("ProfileEngagementTypedLogger"))().setEngagementType("timeline_navigation_click").setItemType("dropdown_menu_item").setItemSubtype(a.getValue()).setProductBucket("profile_core").setProfileIDDummy(d).setProfileSessionID(e).setSurface(f).log()})};return a}();e.exports=a}),null);
__d("TimelineSeenStateConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FT_TIMELINE_HASH_IDENTIFIER_KEY:"thid"})}),null);
__d("TimelineViewportTracking",["csx","Arbiter","Banzai","DataAttributeUtils","DOM","TimelineSeenStateConstants","TimelineViewportTrackingLogType","ViewportTracking","$","tidyEvent","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){__p&&__p();return{_stream:null,_streamDOMID:c,getDataFromConfig:function(a,c){c.isSeenStateLoggingEnabled=a.is_seen_state_logging_enabled,c.isTimetrackingEnabled=a.is_timetracking_enabled,c.vpvdDebug=!!a.vpvd_debug,c.trackingHooks=!!a.tracking_hooks,b("tidyEvent")(b("Arbiter").subscribe(["TimelineConstants/unitSegmentLoaded"],function(){c.invalidateAllStoriesCache(),c.invalidateVisibleStoriesCache()}))},getAllStories:function(){var a=b("DOM").scry(this.getStream(),"._5pat"),c=[];for(var d=0;d<a.length;d++)this.getStoryID(a[d])&&c.push(a[d]);return c},getStream:function(){this._stream||(this._stream=b("$")(this._streamDOMID));return this._stream},getStoryID:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a)||null);if(a){var c=b("TimelineSeenStateConstants").FT_TIMELINE_HASH_IDENTIFIER_KEY;return a[c]}return null},getDataToLog:function(a){a=JSON.parse(b("DataAttributeUtils").getDataFt(a));return{ft:a,log_type:b("TimelineViewportTrackingLogType").IMPRESSION}}}}var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getTimetrackingDataToLog=function(a){a=c.prototype.getTimetrackingDataToLog.call(this,a);a.log_type=b("TimelineViewportTrackingLogType").DURATION;return a};d.sendDataToLog=function(a,c,d,e){if(!c.ft)return;a={};e&&(a.retry=e);d&&(a.delay=2e3);b("Banzai").post("timeline_feed_tracking",c,a)};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};return a}(b("ViewportTracking")),j=b("viewportTrackingBuilder")(function(a,b){b=new i(h(a,b));b.init(a);return b});j.init=j.singleton.bind(j);e.exports=j}),null);