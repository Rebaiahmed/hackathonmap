if (self.CavalryLogger) { CavalryLogger.start_js(["Zp4VZ"]); }

__d("CrStLoadProjectsFromAllBusinessesActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"LOAD_PROJECTS_FROM_ALL_BUSINESSES"}}),null);
__d("CrStShowMigrateToBusinessTourActionFlux",[],(function(a,b,c,d,e,f){"use strict";e.exports={actionType:"CrStShowMigrateToBusinessTourActionPlugin"}}),null);
__d("AdsDialog_DEPRECATED.react",["invariant","AdsControlledDialog_DEPRECATED.react","React","ReactLayeredComponentMixin_DEPRECATED"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"AdsDialog_DEPRECATED",mixins:[b("ReactLayeredComponentMixin_DEPRECATED")],propTypes:babelHelpers["extends"]({},b("AdsControlledDialog_DEPRECATED.react").propTypes,{clickableTrigger:a.element.isRequired}),getInitialState:function(){return{dialogShown:!1}},UNSAFE_componentWillMount:function(){this._validateTrigger(this.props.clickableTrigger)},UNSAFE_componentWillReceiveProps:function(a){a.clickableTrigger!==this.props.clickableTrigger&&this._validateTrigger(a.clickableTrigger)},_validateTrigger:function(a){a.props.onClick&&g(0,4649)},showDialog:function(){this.setState({dialogShown:!0})},hideDialog:function(){this.isMounted()&&(this.setState({dialogShown:!1}),this.props.onDialogHideCallback&&this.props.onDialogHideCallback())},render:function(){return b("React").cloneElement(this.props.clickableTrigger,{onClick:this.showDialog})},renderLayers:function(){return{dialog:b("React").createElement(b("AdsControlledDialog_DEPRECATED.react"),babelHelpers["extends"]({},this.props,{dialogShown:this.props.dialogShown||this.state.dialogShown,onDialogHideCallback:this.hideDialog}),this.props.children)}}});e.exports=c}),null);
__d("AdsHelpTraySpinner.react",["cx","CenteredContainer.react","FDSSpinner.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("CenteredContainer.react"),{className:"_2ffv"},b("React").createElement(b("FDSSpinner.react"),null))};return c}(b("React").Component);e.exports=a}),null);
__d("CrStCopyableLink.react",["cx","fbt","EventEmitter","Link.react","React","ReactDOM","SUIButton.react","UserAgent"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i="RESET_EVENT",j=new(b("EventEmitter"))();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={clicked:!1},d.$1=null,d.$2=function(){var a=b("ReactDOM").findDOMNode(d.refs.urlField);a.focus();a.select();document.execCommand("copy");d.setState({clicked:!0});d.props.onClickCopy&&setTimeout(d.props.onClickCopy,1)},c)||babelHelpers.assertThisInitialized(d)}c.reset=function(){j.emit(i)};var d=c.prototype;d.componentDidMount=function(){var a=this;this.$1=j.addListener(i,function(){a.setState({clicked:!1})})};d.componentWillUnmount=function(){this.$1&&this.$1.remove()};d.render=function(){return b("UserAgent").isBrowser("Safari")?b("React").createElement(b("Link.react"),{href:this.props.href,target:"_blank"},this.props.href):b("React").createElement("div",null,b("React").createElement("input",{className:"_2hd0",disabled:this.props.disabled,readOnly:"readonly",ref:"urlField",value:this.props.href}),b("React").createElement(b("SUIButton.react"),{autoFocus:!0,disabled:this.props.disabled,label:this.state.clicked?h._("Copied"):h._("Copy URL"),use:"confirm",onClick:this.$2}))};return c}(b("React").Component);e.exports=a}),null);
__d("FreightSansWebfont",["cx","FreightSansWebfontConfig","UserAgent","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("FreightSansWebfontConfig").isSupported,i=b("FreightSansWebfontConfig").useFullVersion,j=b("FreightSansWebfontConfig").styles,k=b("FreightSansWebfontConfig").weights,l={"default":(a={},a[k.LIGHT]=(c={},c[j.ITALIC]="_2_bl",c[j.NORMAL]="_2_bk",c),a[k.BOOK]=(d={},d[j.ITALIC]="_2_bu",d[j.NORMAL]="_2_bt",d),a[k.NORMAL]=(f={},f[j.ITALIC]="_2_bu",f[j.NORMAL]="_2_bt",f),a[k.MEDIUM]=(g={},g[j.ITALIC]="_2_bw",g[j.NORMAL]="_2_bv",g),a[k.SEMIBOLD]=(c={},c[j.ITALIC]="_2_by",c[j.NORMAL]="_2_bx",c),a[k.BOLD]=(d={},d[j.ITALIC]="_2_c7",d[j.NORMAL]="_2_bz",d),a[k.BLACK]=(f={},f[j.ITALIC]="_2_c9",f[j.NORMAL]="_2_c8",f),a),full:(g={},g[k.LIGHT]=(c={},c[j.ITALIC]="_5kai",c[j.NORMAL]="_5kal",c),g[k.BOOK]=(d={},d[j.ITALIC]="_5kam",d[j.NORMAL]="_5kb2",d),g[k.NORMAL]=(f={},f[j.ITALIC]="_5kam",f[j.NORMAL]="_5kb2",f),g[k.MEDIUM]=(a={},a[j.ITALIC]="_5kb3",a[j.NORMAL]="_5kni",a),g[k.SEMIBOLD]=(c={},c[j.ITALIC]="_5knj",c[j.NORMAL]="_5knk",c),g[k.BOLD]=(d={},d[j.ITALIC]="_5knl",d[j.NORMAL]="_5knm",d),g[k.BLACK]=(f={},f[j.ITALIC]="_5knn",f[j.NORMAL]="_5kno",f),g),oldIE:(a={},a[k.LIGHT]=(c={},c[j.ITALIC]="_5i9s",c[j.NORMAL]="_5i9r",c),a[k.BOOK]=(d={},d[j.ITALIC]="_5i9u",d[j.NORMAL]="_5i9t",d),a[k.NORMAL]=(f={},f[j.ITALIC]="_5i9u",f[j.NORMAL]="_5i9t",f),a[k.MEDIUM]=(g={},g[j.ITALIC]="_5i9x",g[j.NORMAL]="_5i9w",g),a[k.SEMIBOLD]=(c={},c[j.ITALIC]="_5ia3",c[j.NORMAL]="_5i9z",c),a[k.BOLD]=(d={},d[j.ITALIC]="_5ial",d[j.NORMAL]="_5ia4",d),a[k.BLACK]=(f={},f[j.ITALIC]="_5ian",f[j.NORMAL]="_5iam",f),a),oldIEFull:(g={},g[k.LIGHT]=(c={},c[j.ITALIC]="_5knp",c[j.NORMAL]="_5knq",c),g[k.BOOK]=(d={},d[j.ITALIC]="_5knr",d[j.NORMAL]="_5kof",d),g[k.NORMAL]=(f={},f[j.ITALIC]="_5knr",f[j.NORMAL]="_5kof",f),g[k.MEDIUM]=(a={},a[j.ITALIC]="_5kog",a[j.NORMAL]="_5kok",a),g[k.SEMIBOLD]=(c={},c[j.ITALIC]="_5kom",c[j.NORMAL]="_5kon",c),g[k.BOLD]=(d={},d[j.ITALIC]="_5kt1",d[j.NORMAL]="_5kt2",d),g[k.BLACK]=(f={},f[j.ITALIC]="_5kt3",f[j.NORMAL]="_5kt4",f),g)};a={getCSSClass:function(a,c,d){var e=(c===j.ITALIC?"_30qb":"")+(c===j.NORMAL?" _30qa":"")+(a===k.LIGHT?" _30qc":"")+(a===k.NORMAL||a===k.BOOK?" _30qd":"")+(a===k.MEDIUM?" _30qe":"")+(a===k.SEMIBOLD?" _30qf":"")+(a===k.BOLD?" _30qj":"")+(a===k.BLACK?" _30qk":"");if(h||i){var f;b("UserAgent").isBrowser("IE < 9")?(f=i?l.oldIEFull:l.oldIE,d=!0):f=i?l.full:l["default"];e=b("joinClasses")(e,f[a][c],d?null:"_2_ca")}else e=b("joinClasses")(e,"_30q9");return e}};e.exports=a}),null);
__d("FreightSansDiv.react",["FreightSansWebfont","React","getObjectValues","joinClasses","FreightSansWebfontConfig"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("FreightSansWebfontConfig").styles;d=b("FreightSansWebfontConfig").weights;f=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){var a=this.props,c=a.className,d=a.fontweight,e=a.fontstyle,f=a.liningfigures;a=babelHelpers.objectWithoutPropertiesLoose(a,["className","fontweight","fontstyle","liningfigures"]);c=b("joinClasses")(c,b("FreightSansWebfont").getCSSClass(d,e,f));return b("React").createElement("div",babelHelpers["extends"]({},a,{className:c}))};return c}(b("React").Component);f.defaultProps={fontstyle:c.NORMAL,fontweight:d.NORMAL,liningfigures:!0};f.propTypes={fontstyle:a.oneOf(b("getObjectValues")(c)),fontweight:a.oneOf(b("getObjectValues")(d)),liningfigures:a.bool};e.exports=f}),null);
__d("CrStLightDiv.react",["FreightSansDiv.react","React"],(function(a,b,c,d,e,f){"use strict";a=function(a){return b("React").createElement(b("FreightSansDiv.react"),{className:a.className,fontweight:"light"},a.children)};e.exports=a}),null);
__d("AdsCrStTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(){__p&&__p();function a(){this.$1={}}var c=a.prototype;c.log=function(){b("GeneratedLoggerUtils").log("logger:AdsCrStLoggerConfig",this.$1,b("Banzai").BASIC)};c.logVital=function(){b("GeneratedLoggerUtils").log("logger:AdsCrStLoggerConfig",this.$1,b("Banzai").VITAL)};c.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:AdsCrStLoggerConfig",this.$1,{signal:!0})};c.clear=function(){this.$1={};return this};c.getData=function(){return babelHelpers["extends"]({},this.$1)};c.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};c.setAdAccountID=function(a){this.$1.ad_account_id=a;return this};c.setBusinessID=function(a){this.$1.business_id=a;return this};c.setEventData=function(a){this.$1.event_data=a;return this};c.setEventType=function(a){this.$1.event_type=a;return this};c.setFakeID=function(a){this.$1.fake_id=a;return this};c.setLongSessionID=function(a){this.$1.long_session_id=a;return this};c.setMockupFormat=function(a){this.$1.mockup_format=a;return this};c.setMockupID=function(a){this.$1.mockup_id=a;return this};c.setMockupPageName=function(a){this.$1.mockup_page_name=a;return this};c.setSessionID=function(a){this.$1.session_id=a;return this};c.setTime=function(a){this.$1.time=a;return this};c.setWeight=function(a){this.$1.weight=a;return this};return a}();c={ad_account_id:!0,business_id:!0,event_data:!0,event_type:!0,fake_id:!0,long_session_id:!0,mockup_format:!0,mockup_id:!0,mockup_page_name:!0,session_id:!0,time:!0,weight:!0};e.exports=a}),null);
__d("CrStLogger",["AdsCrStTypedLogger","AdsSelectedAccountIDGetter","CrStFixedData","CrStLoggerRuntimeConfig","URIInitDataUtil"],(function(a,b,c,d,e,f){"use strict";a={forEvent:function(a){a=new(b("AdsCrStTypedLogger"))().setSessionID(b("CrStLoggerRuntimeConfig").sessionID).setEventType(a);b("CrStFixedData").getPageLocation()==="CRST_HOME"&&(a.setAdAccountID(b("AdsSelectedAccountIDGetter").get({})),a.setBusinessID(b("URIInitDataUtil").getBusinessID()));return a}};e.exports=a}),null);
__d("crStRowSelectionSelector",["AdsStoreUtils","CrStRowSelectionStore"],(function(a,b,c,d,e,f){"use strict";e.exports=b("AdsStoreUtils").toSelector(b("CrStRowSelectionStore"))}),null);
__d("crStNumMockupsSelector",["adsCreateSelector","crStRowSelectionSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateSelector")([b("crStRowSelectionSelector")],function(a){a=a.selectedIDs;return a.count()},{name:e.id});e.exports=a}),null);
__d("CrStGalleryItemTag",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CANVAS:"CANVAS",CAROUSEL:"CAROUSEL",COLLECTION:"COLLECTION",IMAGE:"IMAGE",INSTAGRAM_STORY:"INSTAGRAM_STORY",INSTAGRAM_STORY_CAROUSEL:"INSTAGRAM_STORY_CAROUSEL",SLIDESHOW:"SLIDESHOW",VERTICAL_VIDEO:"VERTICAL_VIDEO",VIDEO:"VIDEO",VIDEO360:"360VIDEO",SHORT_VIDEO:"SHORT_VIDEO",LONG_VIDEO:"LONG_VIDEO"})}),null);
__d("crStIsPersonalAccount",["AdsCMURLParams","URI"],(function(a,b,c,d,e,f){"use strict";a=function(){return!(b("AdsCMURLParams").BUSINESS_ID in b("URI").getRequestURI().getQueryData())};e.exports=a}),null);
__d("CrStNUXStore",["invariant","AdsDataAtom","CrStFeatures","CrStGalleryFeatures","CrStGalleryItemTag","CrStLoadProjectsFromAllBusinessesActionFlux","CrStShowMigrateToBusinessTourActionFlux","FluxReduceStore","SimpleNUXMessage","crStIsPersonalAccount","crStNumMockupsSelector","mapObject"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getInitialState=function(){var a;return a={},a["379466019116547"]="SHOW",a["1962905610616960"]="DONT_SHOW",a["677366185785209"]="DONT_SHOW",a["393093704439360"]="DONT_SHOW",a["125455191444648"]="DONT_SHOW",a["495125194240549"]=b("CrStFeatures").adAccountsCollaboration?"SHOW":"DONT_SHOW",a["1346563065437380"]="DONT_SHOW",a["285052618622049"]="DONT_SHOW",a["2229903497236974"]="DONT_SHOW",a["2032911540264858"]="DONT_SHOW",a["183444695832620"]="DONT_SHOW",a["255866331566255"]="DONT_SHOW",a["1686331124782399"]="DONT_SHOW",a["166447457306163"]="DONT_SHOW",a["135323193980326"]="DONT_SHOW",a["904117749711668"]="SHOW",a["502885896576282"]="DONT_SHOW",a["1747146378889382"]="DONT_SHOW",a};d.reduce=function(a,c){c=this.$CrStNUXStore1(a,c);b("mapObject")(c,function(a,c){a==="SEEN"&&!b("SimpleNUXMessage").hasUserSeenMessage(c)&&b("SimpleNUXMessage").markMessageSeenByUser(c)});return babelHelpers["extends"]({},a,c)};d.$CrStNUXStore1=function(a,c){__p&&__p();var d;a=c.action;switch(a.type){case"CrStActionTypes.MARK_SIMPLE_NUX_MESSAGE_SEEN":b("SimpleNUXMessage").markMessageSeenByUser(a.nuxType);this.__emitChange();if(a.nuxType==="166447457306163"){var e;return e={},e["135323193980326"]="SHOW",e}return{};case"CrStActionTypes.SELECT_FORMAT":return this.getInitialState();case"CrStActionTypes.CREATIVE_SAVED":return e={},e["1747146378889382"]="SHOW",e;case"CrStActionTypes.PREVIEW_ON_MOBILE":return e={},e["1747146378889382"]="SEEN",e;case"CrStActionTypes.PREVIEW_ON_MOBILE_INTRO_SHOWN":return e={},e["1747146378889382"]="SEEN",e;case"CrStActionTypes.DONT_SHOW_MOBILE_PREVIEW_INTRO":return e={},e["904117749711668"]="SEEN",e;case"CrStActionTypes.SHARE_CREATIVE_DELIVERY_UPDATED":return e={},e["502885896576282"]=b("SimpleNUXMessage").hasUserSeenMessage("379466019116547")?"SHOW":"DONT_SHOW",e["379466019116547"]=c.action.isDeliverable?"DONT_SHOW":"SHOW",e;case"CrStActionTypes.TOGGLE_ROW_SELECTION":return e={},e["1346563065437380"]=c.action.toggle==="SELECT"?"SHOW":"DONT_SHOW",e["183444695832620"]=c.action.toggle==="SELECT"&&b("crStNumMockupsSelector")()>=1&&b("SimpleNUXMessage").hasUserSeenMessage("1346563065437380")?"SHOW":"DONT_SHOW",e;case"CrStGalleryActionTypes.SELECT_TAG":return c={},c["255866331566255"]=b("CrStGalleryFeatures").supportedItemTags.includes(b("CrStGalleryItemTag").SHORT_VIDEO)&&a.selectedTag===b("CrStGalleryItemTag").VIDEO?"SHOW":"DONT_SHOW",c;case"CrStGalleryActionTypes.REMOVE_TAG":if([b("CrStGalleryItemTag").SHORT_VIDEO,b("CrStGalleryItemTag").LONG_VIDEO].includes(a.removedTag)){return e={},e["255866331566255"]="SHOW",e}return c={},c["255866331566255"]="DONT_SHOW",c;case"CrStGalleryActionTypes.RESET_TAGS":return e={},e["255866331566255"]="DONT_SHOW",e;case"CrStGalleryActionTypes.EXPAND_FILTER_MENU":return c={},c["255866331566255"]="DONT_SHOW",c;case"CrStActionTypes.BUSINESS_USERS_BATCH_LOADED":return e={},e["1962905610616960"]="SHOW",e;case"CrStActionTypes.PROJECTS_LOADED":return c={},c["125455191444648"]=a.projects.length?"DONT_SHOW":"SHOW",c["393093704439360"]=!b("SimpleNUXMessage").hasUserSeenMessage("1962905610616960")||a.projects.length?"DONT_SHOW":"SHOW",c;case"CrStActionTypes.SWITCH_TO_GRID_VIEW":return e={},e["2032911540264858"]="SHOW",e;case b("CrStLoadProjectsFromAllBusinessesActionFlux").actionType:c=a.businessesWithProjects.length>0;e=b("SimpleNUXMessage").hasUserSeenMessage("2229903497236974");return d={},d["677366185785209"]=c?"DONT_SHOW":"SHOW",d["166447457306163"]=c&&e?"SHOW":"DONT_SHOW",d["135323193980326"]=c&&b("SimpleNUXMessage").hasUserSeenMessage("166447457306163")?"SHOW":"DONT_SHOW",d;case b("CrStShowMigrateToBusinessTourActionFlux").actionType:return e={},e["1686331124782399"]="SHOW",e["166447457306163"]="DONT_SHOW",e["135323193980326"]="DONT_SHOW",e;case"CrStActionTypes.SAVED_CREATIVES_LOADED":return c={},c["285052618622049"]=b("SimpleNUXMessage").hasUserSeenMessage("495125194240549")&&b("crStIsPersonalAccount")()&&a.creatives.length>0?"SHOW":"DONT_SHOW",c["2229903497236974"]=(!b("crStIsPersonalAccount")()||b("SimpleNUXMessage").hasUserSeenMessage("285052618622049"))&&!b("SimpleNUXMessage").hasUserSeenMessage("2032911540264858")&&a.creatives.length>0?"SHOW":"DONT_SHOW",c}return{}};d.shouldShow=function(a){var c=this.getState()[a];c!=null||g(0,560,a);return c==="SHOW"&&!b("SimpleNUXMessage").hasUserSeenMessage(a)};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("FBExcelLoggerEventCategories",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({EXCEL:"excel",FLUX_ACTION:"action",FLUX_ACTION_ERROR:"action_errors",GENERAL_ERROR:"general_errors",INSIGHTS_API:"insights_api",INSIGHTS_API_ERROR:"insights_api_error",OFFICE_JS_ERROR:"office_js_error",WARNING:"warning"});e.exports=a}),null);
__d("FBExcelLogger",["AdsExcelClientEnvironment","AdsExcelLoginDataManager","AdsExcelLoginStore","AdsUnifiedLoggingLogger","FBExcelLoggerEventCategories"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.call(this,"fame",{errorHandling:!0,moduleInfo:!0,throttling:{enabled:!0},crash:{enabled:!0},heartbeat:!1})||this}var d=c.prototype;d.init=function(){};d.log=function(c,d,e){c=c||b("FBExcelLoggerEventCategories").EXCEL;e=e||{};e.accessToken=b("AdsExcelLoginStore").getAccessToken()||b("AdsExcelLoginDataManager").validateAndLoadAccessToken()||"logged_out_fake_access_token";var f=b("AdsExcelClientEnvironment").getEnvironment();e.excel_app_client_type=f.application;e.excel_app_client_version=f.version;e.excel_app_client_locale=f.locale;e.excel_app_client_platform=f.platform;a.prototype.log.call(this,c,d,e)};d.logFluxActionContextMap=function(a,c,d){this.log(b("FBExcelLoggerEventCategories").FLUX_ACTION,a,(a={},a[c]=d,a))};return c}(b("AdsUnifiedLoggingLogger"));e.exports=new a()}),null);
__d("PubXActionTypes",["keyMirrorRecursive"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirrorRecursive")({INIT_FROM_URL:"",NAVIGATE_TO:"",UPDATE_AD_IMAGE_SEARCH:"",UPDATE_URL_PARAMS:"",PLACEMENT:{APPEAL_SUCCESS:"",APPEAL_ERROR:"",SAVE_SUCCESS:"",SAVE_ERROR:"",UPDATE_SUCCESS:"",UPDATE_ERROR:"",UPDATE_DRAFT:""},PLACEMENT_CREATION_FORM:{SHOW_FORM:"",VALIDATE_FORM:"",VALIDATE_FORM_OFF:""},PLACEMENT_GROUP:{APPEAL_SUCCESS:"",APPEAL_ERROR:"",LOAD_SUCCESS:"",LOAD_ERROR:"",UPDATE_DRAFT:"",SAVE_DRAFT:"",CREATE_DRAFT:"",SAVE_SUCCESS:"",SAVE_ERROR:"",DELETE_SUCCESS:"",DELETE_ERROR:"",CREATE_SUCCESS:"",CREATE_ERROR:""},PLACEMENT_MANAGEMENT:{ARCHIVE_PLACEMENT_ERROR:"",ARCHIVE_PLACEMENT_SUCCESS:"",EXPORT_LIST:"",REACTIVATE_PLACEMENT_ERROR:"",REACTIVATE_PLACEMENT_SUCCESS:""},EXPORT:{EXPORT_DEAL_STATS_ERROR:"",EXPORT_DEAL_STATS_SUCCESS:"",EXPORT_DEAL_STATS_RELOAD:"",EXPORT_STATS_RELOAD:"",ADD_BREAKDOWN:"",REMOVE_BREAKDOWN:""},CUSTOM_METRICS:{UPDATE_PERFORMANCE_METRICS:"",UPDATE_TABLE_METRICS:"",UPDATE_DEAL_METRICS:"",UPDATE_ADSPACE_PRICE_SETTINGS_METRICS:""},DEAL:{ADVERTISER_PAGE_INPUT_CHANGE:"",CLEAR_DRAFT_STORE:"",CLOSE_APPROVAL_DIALOG:"",CLOSE_NOTIFICATION:"",CREATE_DRAFT_DEAL:"",CREATE_DEAL:"",CREATE_ERROR:"",CREATE_SUCCESS:"",CREATIVE:{DELETE_CTA:"",IMPORT_FROM_LIBRARY:"",VIDEO_DESELECT:"",VIDEO_UPLOAD_START:"",VIDEO_UPLOAD_PROGRESS:"",VIDEO_UPLOAD_SUCCESS:"",VIDEO_UPLOAD_CANCEL:"",VIDEO_UPLOAD_ERROR:"",VIDEO_ENCODING_SUCCESS:"",UPDATE_CTA:""},DELETE_ERROR:"",DELETE_SUCCESS:"",DESELECT_ALL_PLACEMENTS:"",DESELECT_ALL_PAGES:"",GET_ADVERTISERS_ERROR:"",GET_ADVERTISERS_SUCCESS:"",GET_ALL_DEALS_ERROR:"",GET_ALL_DEALS_SUCCESS:"",GET_ALL_PLACEMENTS_ERROR:"",GET_ALL_PLACEMENTS_SUCCESS:"",GET_BUSINESS_STATS_ERROR:"",GET_BUSINESS_STATS_SUCCESS:"",GET_DEAL_DETAILS_ERROR:"",GET_DEAL_DETAILS_SUCCESS:"",GET_DEAL_OVERLAPPING_ERROR:"",GET_DEAL_OVERLAPPING_SUCCESS:"",GET_PAGE_STATS_ERROR:"",GET_PAGE_STATS_SUCCESS:"",GET_PAGE_TIME_SERIES_STATS_ERROR:"",GET_PAGE_TIME_SERIES_STATS_SUCCESS:"",GET_STATS_SUCCESS:"",GET_STATS_ERROR:"",GET_TIME_SERIES_STATS_ERROR:"",GET_TIME_SERIES_STATS_SUCCESS:"",POPULATE_DRAFT_DEAL:"",SELECT_DEAL_PAGES:"",SET_ALL_ERRORS:"",SET_BOOKED_IMPRESSIONS:"",SET_SELECTED_PLACEMENTS:"",SET_SELECTED_PAGES:"",SET_TOTAL_ESTIMATED_IMPRESSIONS:"",SET_THIRD_PARTY_INTEGRATED_DEAL:"",SET_TRENDS_SEARCH_QUERY:"",SHOW_FORM:"",TABLE:{UPDATE_SEARCH_QUERY:"",TOGGLE_ALL_DEALS_FOR_EXPORT:"",TOGGLE_SELECTED_DEAL_FOR_EXPORT:""},TOGGLE_SELECTED_PLACEMENT:"",TOGGLE_SELECTED_PAGE:"",UPDATE_ADVERTISER:"",UPDATE_ADVERTISER_ID:"",UPDATE_ADVERTISER_PAGE_ID:"",UPDATE_BUDGET:"",UPDATE_DATE_RANGE:"",UPDATE_DRAFT_DEAL:"",UPDATE_END_TIME:"",UPDATE_ERROR:"",UPDATE_FILTER_BY:"",UPDATE_IMPRESSIONS:"",UPDATE_NAME:"",UPDATE_DEAL:"",UPDATE_PRICE:"",UPDATE_DEAL_STATUS:"",UPDATE_START_TIME:"",UPDATE_STATUS_ERROR:"",UPDATE_STATUS_SUCCESS:"",UPDATE_SUCCESS:"",UPDATE_TARGETING:"",UPDATE_THIRD_PARTY_ADS:"",UPDATE_VIEW_TAGS:"",UPDATE_ACTION_URL:"",UPDATE_ADVERTISER_CONSENT:""},SUBNAV:{SELECT_TAB:""},PAYOUT:{START_PAYOUT_CHANGE:"",CANCEL_PAYOUT_CHANGE:"",COMPLETE_PAYOUT_CHANGE:""},INSIGHTS_BREAKDOWN:{EXPORT:{ADD_BREAKDOWN:"",REMOVE_BREAKDOWN:""},ADD_LOCATION:"",REMOVE_LOCATION:"",SET_PAGE_SEARCH_QUERY:"",SET_SELECTED_PLACEMENTS:"",SET_SELECTED_PAGES:"",UPDATE_DATE_RANGE:""},OPPORTUNITY_CALCULATOR:{ADD_LOCATION:"",REMOVE_LOCATION:"",SET_PAGE_SEARCH_QUERY:"",SET_SELECTED_PLACEMENTS:"",SET_SELECTED_PAGES:"",UPDATE_DATE_RANGE:""},USER_AD_ACCOUNTS_LOADED:"",USER_AD_ACCOUNTS_ERROR:"",SEARCH_REVIEW_SESSION:""});e.exports=a}),null);
__d("PubXEventsLoggerColumn",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ACTION_TYPE:"action_type",ACTIVE_PAGE_URI:"active_page_uri",ACTIVE_PAGE_URI_NO_IDS:"active_page_uri_no_ids",ACTIVE_PAGE_URI_PATH:"active_page_uri_path",ACTIVITY_ID:"activity_id",ACTUAL_EVENT_TIME:"actual_event_time",AD_ID:"ad_id",AN_PLATFORM:"an_platform",APP_ID:"app_id",BLOCKLIST_MODIFIED_ITEM_ID:"blocklist_modified_item_id",BUSINESS_ID:"business_id",COMPONENT:"component",COMPONENT_LOAD_TIME:"component_load_time",COUNTRY_GROUP_ID:"country_group_id",CPM_TARGET_OPTIMIZATION_DATA:"cpm_target_optimization_data",CUSTOM_METRICS:"custom_metrics",DATE_RANGE:"date_range",ERROR_LINE:"error_line",ERROR_MESSAGE:"error_message",ERROR_SCRIPT:"error_script",ERROR_STACK_TRACE:"error_stack_trace",ERROR_TYPE:"error_type_string",FB_TRACE_ID:"fb_trace_id",FEATURE_RATING_ID:"feature_rating_id",FEATURE_RATING_RESPONSE:"feature_rating_response",FILTER:"fliter",FILTER_NAME:"filter_name",GK_7_DAYS_DEFAULT:"gk_7_days_default",IS_EMPLOYEE:"is_employee",MIGRATION_PROPERTIES:"migration_properties",NEXT_PAGE_URL:"next_page_url",NOTIFICATION_ACTION:"notification_action",NOTIFICATION_ACTION_URL:"notification_action_url",NOTIFICATION_CONTENT_ID:"notification_content_id",NOTIFICATION_ID:"notification_id",NOTIFICATION_SETTINGS_GROUP_AND_CHANNEL:"notification_settings_group_and_channel",PLACEMENT_DRAFT:"placement_draft",PLACEMENT_GROUP_ID:"placement_group_id",PLACEMENT_ID:"placement_id",PROPERTY_ID:"property_id",QUERY_IDS:"query_ids",REF:"ref",SESSION_ID:"session_id",SORT_OPTIONS:"sort_options",SURVEY_STATE:"survey_state",TIME_SINCE_LOAD:"time_since_load",TIME_SINCE_NAVIGATION_START:"time_since_navigation_start",TRANSITION_COUNT:"transition_count",UNOBFUSCATED_STACK_TRACE:"unobfuscated_stack_trace",WINDOW_HEIGHT:"window_height",WINDOW_WIDTH:"window_width"})}),null);
__d("PubXPerformanceStore",["AdsDataAtom","AdsPerfTiming","FluxStore","PubXActionTypes","PubXEventsLoggerColumn","PubXLoggerStoreUtils","clearTimeout","gkx","setImmediate","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=2e3,h={componentsLoading:0,componentsLoaded:0,debounceTimeoutID:null,displayFinished:!1,initTime:b("AdsPerfTiming").start,invalidState:!1,timeTaken:0,transitionIndex:-1,transitionTime:0},i=b("gkx")("779516");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__getActionTypes=function(){return i?[b("PubXActionTypes").INIT_FROM_URL,b("PubXActionTypes").NAVIGATE_TO,b("PubXActionTypes").UPDATE_URL_PARAMS]:null};d.__onDispatch=function(a){a=a.action;switch(a.type){case b("PubXActionTypes").INIT_FROM_URL:this.$PubXPerformanceStore1(h.initTime);break;case b("PubXActionTypes").UPDATE_URL_PARAMS:case b("PubXActionTypes").NAVIGATE_TO:this.$PubXPerformanceStore1(Date.now());break}};d.componentLoading=function(a){__p&&__p();var c;if(h.invalidState)return;b("PubXLoggerStoreUtils").log((c={},c[b("PubXEventsLoggerColumn").COMPONENT]=a,c),"PERFORMANCE.COMPONENT_LOADING");if(h.displayFinished)return;this.$PubXPerformanceStore2();a=h.componentsLoaded;c=h.componentsLoading;if(c<a){this.$PubXPerformanceStore3();return}h.componentsLoading=c+1};d.componentLoaded=function(a,c,d){__p&&__p();if(h.transitionIndex!==c)return;if(h.invalidState)return;b("PubXLoggerStoreUtils").log((c={},c[b("PubXEventsLoggerColumn").COMPONENT_LOAD_TIME]=d,c[b("PubXEventsLoggerColumn").COMPONENT]=a,c),"PERFORMANCE.COMPONENT_LOADED");if(h.displayFinished)return;d=h.componentsLoaded+1;a=h.componentsLoading;if(d>a){this.$PubXPerformanceStore3();return}h.componentsLoaded=d;h.timeTaken=Date.now()-h.transitionTime;d===a&&this.$PubXPerformanceStore4()};d.componentLoadCancel=function(a,c){__p&&__p();if(h.transitionIndex!==c)return;if(h.invalidState)return;this.$PubXPerformanceStore2();c=h.componentsLoaded;var d=h.componentsLoading-1;if(d<0){this.$PubXPerformanceStore3();return}h.componentsLoading=d;c===d&&this.$PubXPerformanceStore4();b("PubXLoggerStoreUtils").log((c={},c[b("PubXEventsLoggerColumn").COMPONENT]=a,c),"PERFORMANCE.COMPONENT_LOAD_CANCEL")};d.$PubXPerformanceStore1=function(a){if(!h.invalidState&&!h.displayFinished){var b=h.componentsLoaded,c=h.componentsLoading,d=h.timeTaken;c>0&&(b!==c?this.$PubXPerformanceStore5():this.$PubXPerformanceStore6(d))}h.transitionTime=a;h.transitionIndex++;this.$PubXPerformanceStore7();h.timeTaken=Date.now()-a;this.$PubXPerformanceStore4()};d.$PubXPerformanceStore8=function(){this.$PubXPerformanceStore2(),h.displayFinished=!0};d.$PubXPerformanceStore7=function(){this.$PubXPerformanceStore2(),h.componentsLoading=0,h.componentsLoaded=0,h.debounceTimeoutID=null,h.displayFinished=!1,h.invalidState=!1,h.timeTaken=0};d.$PubXPerformanceStore3=function(){var a=this;b("setImmediate")(function(){a.$PubXPerformanceStore9()});this.$PubXPerformanceStore2();h.debounceTimeoutID=null;h.invalidState=!0};d.$PubXPerformanceStore4=function(){var a=this;this.$PubXPerformanceStore2();var c=b("setTimeout")(function(){return a.$PubXPerformanceStore10(h.transitionIndex)},g);h.debounceTimeoutID=c};d.$PubXPerformanceStore2=function(){b("clearTimeout")(h.debounceTimeoutID)};d.$PubXPerformanceStore10=function(a){h.transitionIndex===a&&this.$PubXPerformanceStore6(h.timeTaken)};d.getTransitionIndex=function(){return h.transitionIndex};d.setPerformanceLogData=function(a){var c=a[b("PubXEventsLoggerColumn").TIME_SINCE_LOAD],d=a[b("PubXEventsLoggerColumn").TIME_SINCE_NAVIGATION_START];return babelHelpers["extends"]({},a,(a={},a[b("PubXEventsLoggerColumn").TIME_SINCE_LOAD]=(c=c)!=null?c:Date.now()-h.initTime,a[b("PubXEventsLoggerColumn").TIME_SINCE_NAVIGATION_START]=(c=d)!=null?c:Date.now()-h.transitionTime,a[b("PubXEventsLoggerColumn").TRANSITION_COUNT]=h.transitionIndex,a))};d.$PubXPerformanceStore5=function(){b("PubXLoggerStoreUtils").log({},"PERFORMANCE.DISPLAY_CANCELED"),this.$PubXPerformanceStore8()};d.$PubXPerformanceStore6=function(a){var c,d=h.transitionTime+a-h.initTime;b("PubXLoggerStoreUtils").log((c={},c[b("PubXEventsLoggerColumn").TIME_SINCE_LOAD]=d,c[b("PubXEventsLoggerColumn").TIME_SINCE_NAVIGATION_START]=a,c),"PERFORMANCE.DISPLAY_DONE");this.$PubXPerformanceStore8()};d.$PubXPerformanceStore9=function(){b("PubXLoggerStoreUtils").log({},"PERFORMANCE.DISPLAY_FAIL"),this.$PubXPerformanceStore8()};return c}(b("FluxStore"));a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("PubXSimpleReduceStore",["FluxReduceStore","shallowEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.areEqual=function(a,c){return b("shallowEqual")(a,c)};return c}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=a}),null);
__d("PubXURIStore",["AdsDataAtom","AdsInterfacesRouteConstants","PubXActionTypes","PubXSimpleReduceStore","PubXURLParams","adsCreateStoreSelector","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var f=arguments.length,g=new Array(f),h=0;h<f;h++)g[h]=arguments[h];return(c=d=a.call.apply(a,[this].concat(g))||this,d.getNextPage=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").NEXT_PAGE]},e.id),d.getAppID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").APP_ID]},e.id),d.getBusinessID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return b("nullthrows")(d.getState()[b("PubXURLParams").BUSINESS_ID])},e.id),d.getNullableBusinessID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").BUSINESS_ID]},e.id),d.getPageID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").PAGE_ID]||0},e.id),d.getRoute=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState().route},e.id),d.getPlacementID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").PLACEMENT_ID]},e.id),d.getAdSpaceID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){var a;return(a=d.getState()[b("PubXURLParams").AD_SPACE_ID])!=null?a:d.getState()[b("PubXURLParams").PLACEMENT_GROUP_ID]},e.id),d.getPlatform=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").PLATFORM]},e.id),d.getValidPlatform=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").PLATFORM]},e.id),d.getPropertyID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").PROPERTY_ID]},e.id),d.getCountrySegmentID=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").COUNTRY_SEGMENT_ID]},e.id),d.getDeliveryChannel=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("PubXURLParams").DELIVERY]},e.id),d.getFragment=b("adsCreateStoreSelector")([babelHelpers.assertThisInitialized(d)],function(){return d.getState()[b("AdsInterfacesRouteConstants").FRAGMENT_IN_PARAMS]},e.id),c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.getInitialState=function(){var a;return a={},a[b("PubXURLParams").APP_ID]=null,a[b("PubXURLParams").BUSINESS_ID]=null,a[b("PubXURLParams").DEAL_ID]=null,a[b("PubXURLParams").PAGE]=null,a[b("PubXURLParams").AD_SPACE_ID]=null,a[b("PubXURLParams").PAGE_ID]=null,a[b("PubXURLParams").PLACEMENT_GROUP_ID]=null,a[b("PubXURLParams").PLACEMENT_ID]=null,a[b("PubXURLParams").PLATFORM]=null,a[b("PubXURLParams").PROPERTY_ID]=null,a[b("PubXURLParams").DELIVERY]=null,a[b("PubXURLParams").NEXT_PAGE]=null,a[b("PubXURLParams").COUNTRY_SEGMENT_ID]=null,a.route=null,a};d.reduce=function(a,c){c=c.action;switch(c.type){case b("PubXActionTypes").INIT_FROM_URL:case b("PubXActionTypes").NAVIGATE_TO:case b("PubXActionTypes").UPDATE_URL_PARAMS:var d=c.params;c=c.route;return babelHelpers["extends"]({},this.getInitialState(),{route:c},d)}return a};d.getDealID=function(){return this.getState()[b("PubXURLParams").DEAL_ID]};d.getPage=function(){return this.getState()[b("PubXURLParams").PAGE]};d.__getParam=function(a){return this.getState()[a]};return c}(b("PubXSimpleReduceStore"));e.exports=new a(b("AdsDataAtom"))}),null);
__d("PubXLoggerStoreUtils",["Banzai","PubXEventsLoggerColumn","PubXLoggerRuntimeConfig","PubXPerformanceStore","PubXURIStore","PubXURLParams","URI","URIInitDataUtil","mapObject"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g={BANZAI_ROUTE:"ads_pubx_events",getStores:function(){return[b("PubXPerformanceStore"),b("PubXURIStore")]},log:function(a,c,d){__p&&__p();var e={};b("PubXURIStore").getAppID()!=null&&(e[b("PubXEventsLoggerColumn").APP_ID]=b("PubXURIStore").getAppID());b("PubXURIStore").getState()[b("PubXURLParams").BUSINESS_ID]!=null&&(e[b("PubXEventsLoggerColumn").BUSINESS_ID]=b("PubXURIStore").getBusinessID());b("PubXURIStore").getPlacementID()!=null&&(e[b("PubXEventsLoggerColumn").PLACEMENT_ID]=b("PubXURIStore").getPlacementID());b("PubXURIStore").getCountrySegmentID()!=null&&(e[b("PubXEventsLoggerColumn").COUNTRY_GROUP_ID]=b("PubXURIStore").getCountrySegmentID());b("PubXURIStore").getAdSpaceID()!=null&&(e[b("PubXEventsLoggerColumn").PLACEMENT_GROUP_ID]=b("PubXURIStore").getAdSpaceID());b("PubXURIStore").getPropertyID()!=null&&(e[b("PubXEventsLoggerColumn").PROPERTY_ID]=b("PubXURIStore").getPropertyID());b("PubXURIStore").getPlatform()!=null&&(e[b("PubXEventsLoggerColumn").AN_PLATFORM]=b("PubXURIStore").getPlatform());e=b("PubXPerformanceStore").setPerformanceLogData(e);e[b("PubXEventsLoggerColumn").WINDOW_HEIGHT]=window.innerHeight;e[b("PubXEventsLoggerColumn").WINDOW_WIDTH]=window.innerWidth;e[b("PubXEventsLoggerColumn").ACTION_TYPE]=c;e[b("PubXEventsLoggerColumn").ACTUAL_EVENT_TIME]=Date.now();e[b("PubXEventsLoggerColumn").SESSION_ID]=b("PubXLoggerRuntimeConfig").sessionID;c=h(window.location.href);var f=c.uri,i=c.uriPath;c=c.uriWithoutIDs;e[b("PubXEventsLoggerColumn").ACTIVE_PAGE_URI]=f;e[b("PubXEventsLoggerColumn").ACTIVE_PAGE_URI_NO_IDS]=c;e[b("PubXEventsLoggerColumn").ACTIVE_PAGE_URI_PATH]=i;f=babelHelpers["extends"]({},e,a);b("URIInitDataUtil").getShowLog();b("Banzai").post(g.BANZAI_ROUTE,f,d)},setErrorLogData:function(a,c){a[b("PubXEventsLoggerColumn").ERROR_STACK_TRACE]=c.stack,a[b("PubXEventsLoggerColumn").ERROR_TYPE]=c.name,a[b("PubXEventsLoggerColumn").ERROR_SCRIPT]=c.script,a[b("PubXEventsLoggerColumn").ERROR_LINE]=c.line,a[b("PubXEventsLoggerColumn").ERROR_MESSAGE]=c.message,a[b("PubXEventsLoggerColumn").FB_TRACE_ID]=c._originalError!=null?c._originalError.fbtrace_id:"UNKNOWN"}},h=function(a){var c=new(b("URI"))(a),d=c.getPath().replace(/\/$/,""),e=b("mapObject")(c.getQueryData(),function(a,b){return b.endsWith("_id")?"":a});c=c.setQueryData(e).setProtocol("").setDomain("").setPort("").toString();return{uri:a,uriPath:d,uriWithoutIDs:c}};e.exports=g}),null);
__d("sdk.UA",[],(function(a,b,c,d,e,f){__p&&__p();a=navigator.userAgent;var g={iphone:/\b(iPhone|iP[ao]d)/.test(a),ipad:/\b(iP[ao]d)/.test(a),android:/Android/i.test(a),nativeApp:/FBAN\/\w+;/i.test(a),nativeAndroidApp:/FB_IAB\/\w+;/i.test(a),nativeInstagramApp:/Instagram/i.test(a),nativeMessengeriOSApp:/MessengerForiOS/i.test(a),nativeMessengerAndroidApp:/Orca\-Android/i.test(a),ucBrowser:/UCBrowser/i.test(a)},h=/Mobile/i.test(a),i={ie:NaN,firefox:NaN,chrome:NaN,webkit:NaN,osx:NaN,edge:NaN,operaMini:NaN,ucWeb:NaN};b=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(a);if(b){i.ie=b[1]?parseFloat(b[1]):b[4]?parseFloat(b[4]):NaN;i.firefox=b[2]||"";i.webkit=b[3]||"";if(b[3]){c=/(?:Chrome\/(\d+\.\d+))/.exec(a);i.chrome=c?c[1]:"";d=/(?:Edge\/(\d+\.\d+))/.exec(a);i.edge=d?d[1]:""}}f=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(a);f&&(i.osx=f[1]);b=/(?:Opera Mini\/(\d+(?:\.\d+)?))/.exec(a);b&&(i.operaMini=b[1]);c=/(?:UCWEB\/(\d+(?:\.\d+))?)/.exec(a);c&&(i.ucWeb=c[1]||"2.0");function j(a){return String(a).split(".").map(function(a){return parseFloat(a)})}var k={};Object.keys(i).map(function(a){var b=function(){return parseFloat(i[a])};b.getVersionParts=function(){return j(i[a])};k[a]=b});Object.keys(g).map(function(a){k[a]=function(){return g[a]}});k.mobile=function(){return g.iphone||g.ipad||g.android||h};k.mTouch=function(){return g.android||g.iphone||g.ipad};k.facebookInAppBrowser=function(){return g.nativeApp||g.nativeAndroidApp};k.inAppBrowser=function(){return g.nativeApp||g.nativeAndroidApp||g.nativeInstagramApp};k.mBasic=function(){return!!(i.ucWeb||i.operaMini)};k.instagram=function(){return g.nativeInstagramApp};k.messenger=function(){return g.nativeMessengeriOSApp||g.nativeMessengerAndroidApp};e.exports=k}),null);