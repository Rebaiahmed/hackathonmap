if (self.CavalryLogger) { CavalryLogger.start_js(["Hlbxf"]); }

__d("AdsBoostedComponentAdPreviewV2PreviewAdLoadFailureDataAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentAdPreview.PREVIEW_AD_LOAD_FAILURE");e.exports=a}),null);
__d("AdsBoostedComponentAdPreviewV2PreviewAdLoadStartDataAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentAdPreview.PREVIEW_AD_LOAD_START");e.exports=a}),null);
__d("AdsBoostedComponentAdPreviewV2PreviewAdLoadSuccessDataAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentAdPreview.PREVIEW_AD_LOAD_SUCCESS");e.exports=a}),null);
__d("AdsLWIChangePreviewTypeReducerPlugin",[],(function(a,b,c,d,e,f){"use strict";a={reduce:function(a,b){return b.value}};e.exports=a}),null);
__d("AdsLWIPreviewTypeDataProviderPlugin",[],(function(a,b,c,d,e,f){"use strict";a={initialState:null};e.exports=a}),null);
__d("AdsLWIPreviewTypeDataProvider",["Laminar","AdsLWIPreviewTypeDataProviderPlugin"],(function(a,b,c,d,e,f){"use strict";e.exports=b("Laminar").__createProvider(b("AdsLWIPreviewTypeDataProviderPlugin"),"AdsLWIPreviewTypeDataProviderPlugin")}),null);
__d("AdsLWIChangePreviewTypeAction",["Laminar","AdsLWIChangePreviewTypeReducerPlugin","AdsLWIPreviewTypeDataProvider"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[b("Laminar").__createReducer(b("AdsLWIChangePreviewTypeReducerPlugin"),b("AdsLWIPreviewTypeDataProvider"),{})]},function(){return[]},"AdsLWIChangePreviewTypeActionPlugin");e.exports=a}),null);
__d("AdsLWIToggleAutomaticPlacementsDataAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"ADS_LWI.TOGGLE_AUTOMATIC_PLACEMENTS");e.exports=a}),null);
__d("AdsLWITogglePublisherPlatformAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"ADS_LWI.TOGGLE_PUBLISHER_PLATFORM");e.exports=a}),null);
__d("BoostedComponentPromotablePageLoadPromotablePageOneFailAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentPromotablePage.LOAD_PROMOTABLE_PAGE_ONE_FAIL");e.exports=a}),null);
__d("BoostedComponentPromotablePageLoadPromotablePageOneSuccessAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentPromotablePage.LOAD_PROMOTABLE_PAGE_ONE_SUCCESS");e.exports=a}),null);
__d("BoostedComponentPromotablePageLoadPromotablePagesFailAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentPromotablePage.LOAD_PROMOTABLE_PAGES_FAIL");e.exports=a}),null);
__d("BoostedComponentPromotablePageLoadPromotablePagesSuccessAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentPromotablePage.LOAD_PROMOTABLE_PAGES_SUCCESS");e.exports=a}),null);
__d("BoostedComponentPromotablePageSelectPageAction",["Laminar"],(function(a,b,c,d,e,f){"use strict";a=b("Laminar").__createAction(function(){return[]},function(){return[]},"BoostedComponentPromotablePage.SELECT_PAGE");e.exports=a}),null);
__d("AdsLWIDeliveryPlacementActions",["AdsLWIToggleAutomaticPlacementsDataAction","AdsLWITogglePublisherPlatformAction"],(function(a,b,c,d,e,f){"use strict";a={toggleAutomaticPlacements:function(a,c){b("AdsLWIToggleAutomaticPlacementsDataAction").dispatch({checked:a,promotionID:c},{line:"18",module:"AdsLWIDeliveryPlacementActions.js"})},togglePublisherPlatform:function(a,c,d){b("AdsLWITogglePublisherPlatformAction").dispatch({checked:c,publisherPlatform:a,promotionID:d},{line:"26",module:"AdsLWIDeliveryPlacementActions.js"})}};e.exports=a}),null);
__d("AdsLWIDurationSelector.react",["cx","fbt","BUIDatePicker.react","DateConsts","DateTime","FDSNumericInput.react","FDSText.react","FlexLayout.react","LocalDate","React","Timezone","suiMargin"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("DateConsts").SEC_PER_DAY;c=b("Timezone").getEnvironmentTimezoneID;var j=b("React").useCallback,k=b("React").useMemo,l=b("React").useState,m=c();function n(a){a.stopPropagation()}function o(a,b){var c=a;a<1?c=1:a>b&&(c=b);return c}function a(a){__p&&__p();var c=a.durationInDays,d=a.endTimeStampRestraint,e=a.hideNumberInput,f=a.startTimeStampRestraint,g=a.onUpdateDurationInDays;a=b("DateTime").now(m);var p=f!=null&&f!==0?f:a.startOfDay().getUnixTimestamp(),q=k(function(){return b("DateTime").create(p,m).startOfDay()},[p]);f=l(!1);var r=f[0],s=f[1],t=k(function(){return q.addDays(1)},[q]);a=q.addYears(1).getUnixTimestampSeconds();var u=d!=null&&d!==0?Math.min(d,a):a,v=k(function(){return b("DateTime").create(u,m).startOfDay()},[u]),w=(v.instant-q.instant)/i;f=k(function(){return[function(a){return a.isAfterOrEqual(b("LocalDate").fromInstant(t.instant,m))},function(a){return a.isBeforeOrEqual(b("LocalDate").fromInstant(v.instant,m))}]},[t,v]);d=j(function(a){if(a!=null){a=o(parseInt(a,10),w);g(a);r&&s(!1)}else g(-1),s(!0)},[g,w,s,r]);a=j(function(a){if(a!=null){a=Math.round((a.toDateTime(m).startOfDay().instant-q.instant)/i);a=o(a,w);g(a)}},[q,g,w]);var x=b("LocalDate").fromDateTime(q.addDays(c));return b("React").createElement("div",{"data-testid":"duration_selector",onKeyDown:n},b("React").createElement(b("FlexLayout.react"),{align:"center",className:"_3-95 _2pi2",justify:"all"},e!==!0&&b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement(b("FDSText.react"),{color:"primary",margin:"_3-8_",size:"body3"},h._("Days")),b("React").createElement("div",{className:"_7lv-"},b("React").createElement(b("FDSNumericInput.react"),{"data-testid":"duration_days_editor",label:h._("Duration, (current number of days) Element: Edit box"),labelIsHidden:!0,value:r?null:c,onChange:d}))),b("React").createElement(b("FlexLayout.react"),{align:"center"},b("React").createElement(b("FDSText.react"),{color:"primary",margin:"_3-8_",size:"body3"},h._("End date")),b("React").createElement(b("BUIDatePicker.react"),{"aria-label":h._("Ends on {date} Hint: Double-click to edit",[h._param("date",x.toString())]),className:"inlineBlock",dateRestraints:f,height:"xtall",value:x,onChange:a}))))}e.exports=a}),null);
__d("BoostedComponentAdPreviewActionsV2",["AdsBoostedComponentAdPreviewV2PreviewAdLoadFailureDataAction","AdsBoostedComponentAdPreviewV2PreviewAdLoadStartDataAction","AdsBoostedComponentAdPreviewV2PreviewAdLoadSuccessDataAction","AdsDataAtom","AdsLWIChangePreviewTypeAction","AdsPreviewApiFormats","BoostedComponentAdPreviewActionTypesV2","adsLWICurrentDialogStateSelector"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a,c){__p&&__p();var d=void 0;switch(a){case b("AdsPreviewApiFormats").DESKTOP_FEED_STANDARD:d=b("BoostedComponentAdPreviewActionTypesV2").ON_PREVIEW_AD_ON_DESKTOP_CLICK;break;case b("AdsPreviewApiFormats").MOBILE_FEED_STANDARD:d=b("BoostedComponentAdPreviewActionTypesV2").ON_PREVIEW_AD_ON_MOBILE_CLICK;break;case b("AdsPreviewApiFormats").INSTAGRAM_STANDARD:d=b("BoostedComponentAdPreviewActionTypesV2").ON_PREVIEW_AD_ON_INSTAGRAM_CLICK;break;case b("AdsPreviewApiFormats").INSTAGRAM_STORY:d=b("BoostedComponentAdPreviewActionTypesV2").ON_PREVIEW_AD_ON_INSTAGRAM_CLICK;break;case b("AdsPreviewApiFormats").AUDIENCE_NETWORK_INSTREAM_VIDEO:d=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_AUDIENCE_NETWORK_INSTREAM_VIDEO;break;case b("AdsPreviewApiFormats").MOBILE_INTERSTITIAL:d=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_MOBILE_INTERSTITIAL;break;case b("AdsPreviewApiFormats").MOBILE_NATIVE:d=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_MOBILE_NATIVE;break;default:return}b("AdsDataAtom").handleUpdateFromViewAction({type:d,instanceID:c})};c=function(a,c,d){__p&&__p();b("AdsLWIChangePreviewTypeAction").dispatch({value:a},{line:"68",module:"BoostedComponentAdPreviewActionsV2.js"});var e=void 0;switch(a){case b("AdsPreviewApiFormats").DESKTOP_FEED_STANDARD:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_DESKTOP_FEED;break;case b("AdsPreviewApiFormats").MOBILE_FEED_STANDARD:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_MOBILE_FEED;break;case b("AdsPreviewApiFormats").RIGHT_COLUMN_STANDARD:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_RHC;break;case b("AdsPreviewApiFormats").INSTAGRAM_STANDARD:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_INSTAGRAM;break;case b("AdsPreviewApiFormats").INSTAGRAM_STORY:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_INSTAGRAM;break;case b("AdsPreviewApiFormats").AUDIENCE_NETWORK_INSTREAM_VIDEO:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_AUDIENCE_NETWORK_INSTREAM_VIDEO;break;case b("AdsPreviewApiFormats").MOBILE_INTERSTITIAL:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_MOBILE_INTERSTITIAL;break;case b("AdsPreviewApiFormats").MOBILE_NATIVE:e=b("BoostedComponentAdPreviewActionTypesV2").PREVIEW_AD_ON_MOBILE_NATIVE;break;default:return}b("AdsDataAtom").handleUpdateFromViewAction({type:e,ineligibleMessage:c,instanceID:d})};d=function(a){b("adsLWICurrentDialogStateSelector")().shown&&b("AdsBoostedComponentAdPreviewV2PreviewAdLoadStartDataAction").dispatch({instanceID:a},{line:"118",module:"BoostedComponentAdPreviewActionsV2.js"})};f=function(a){b("adsLWICurrentDialogStateSelector")().shown&&b("AdsBoostedComponentAdPreviewV2PreviewAdLoadSuccessDataAction").dispatch({instanceID:a},{line:"127",module:"BoostedComponentAdPreviewActionsV2.js"})};var g=function(a,c){b("adsLWICurrentDialogStateSelector")().shown&&b("AdsBoostedComponentAdPreviewV2PreviewAdLoadFailureDataAction").dispatch({instanceID:a,exceptionMessage:c},{line:"139",module:"BoostedComponentAdPreviewActionsV2.js"})};e.exports={onPreviewLinkClick:a,onAdFormatSelect:c,loadPreviewStart:d,loadPreviewSuccess:f,loadPreviewFailure:g}}),null);
__d("AdsLWIAdPreviewBaseUnit.react",["cx","AdsLWISpinner.react","AsyncRequest","BoostedComponentAdPreviewActionsV2","CenteredContainer.react","FDSSpinner.react","React","ReactDOM","ServerHTML.react","XAdsLWIAdPreviewController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=80;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={status:"loading",preview:null},d.$5=function(a){d.$2=a;if(a!=null){a=b("ReactDOM").findDOMNode(a);a instanceof HTMLElement&&d.props.onMeasureHeight(a.clientHeight+h)}},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$3()};d.componentDidUpdate=function(a){a.creativeSpec.equals(this.props.creativeSpec)||(this.state.status!=="refreshing"&&this.setState({status:"refreshing"}),this.$4(),this.$3())};d.componentWillUnmount=function(){this.$4()};d.$3=function(){var a=this;b("BoostedComponentAdPreviewActionsV2").loadPreviewStart(this.props.instanceID);this.$1=new(b("AsyncRequest"))(b("XAdsLWIAdPreviewController").getURIBuilder().setFBID("ad_account_id",this.props.adAccountID).setEnum("ad_preview_format",this.props.adPreviewFormat).setString("creative_spec",JSON.stringify(this.props.creativeSpec.toJSON())).getURI()).setMethod("POST").setHandler(function(c){b("BoostedComponentAdPreviewActionsV2").loadPreviewSuccess(a.props.instanceID),a.setState({status:"loaded",preview:c.getPayload().markup}),a.$1=null}).setErrorHandler(function(c){b("BoostedComponentAdPreviewActionsV2").loadPreviewFailure(a.props.instanceID,c.toError().toString())});this.$1.send()};d.$4=function(){this.$1!=null&&(this.$1.abandon(),this.$1=null)};d.render=function(){var a=this.state,c=a.status;a=a.preview;return c==="loading"||a==null?b("React").createElement(b("AdsLWISpinner.react"),{height:500}):b("React").createElement("div",{className:"_6u6_"},c==="refreshing"&&b("React").createElement("div",{className:"_6shs"},b("React").createElement(b("CenteredContainer.react"),{fullHeight:!0,vertical:!0},b("React").createElement(b("FDSSpinner.react"),{size:"large"}))),b("React").createElement(b("CenteredContainer.react"),null,b("React").createElement(b("ServerHTML.react"),{blob:a,ref:this.$5})))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("AdPreviewFormatLabels",["fbt","AdsPreviewApiFormats"],(function(a,b,c,d,e,f,g){"use strict";c=(a={},a[b("AdsPreviewApiFormats").DESKTOP_FEED_STANDARD]=g._("Desktop News Feed"),a[b("AdsPreviewApiFormats").MOBILE_FEED_STANDARD]=g._("Mobile News Feed"),a[b("AdsPreviewApiFormats").INSTAGRAM_STANDARD]=g._("Instagram Feed"),a[b("AdsPreviewApiFormats").INSTAGRAM_STORY]=g._("Instagram Stories"),a[b("AdsPreviewApiFormats").INSTREAM_VIDEO_MOBILE]=g._("Facebook In-Stream Video (Mobile)"),a[b("AdsPreviewApiFormats").RIGHT_COLUMN_STANDARD]=g._("Desktop Right Column"),a[b("AdsPreviewApiFormats").AUDIENCE_NETWORK_INSTREAM_VIDEO]=g._("Audience Network In-Stream Video"),a[b("AdsPreviewApiFormats").MOBILE_INTERSTITIAL]=g._("Audience Network Interstitial"),a[b("AdsPreviewApiFormats").MOBILE_NATIVE]=g._("Audience Network Native"),a[b("AdsPreviewApiFormats").MESSENGER_MOBILE_INBOX_MEDIA]=g._("Messenger Inbox"),a[b("AdsPreviewApiFormats").MARKETPLACE_MOBILE]=g._("Mobile Marketplace"),a[b("AdsPreviewApiFormats").FACEBOOK_STORY_MOBILE]=g._("Facebook Stories"),a);e.exports={AdPreviewFormatLabels:c}}),null);
__d("AdsLWIAdditionalPreviewFormatLabels",["fbt","AdsLWIMessengerConstants"],(function(a,b,c,d,e,f,g){"use strict";a=b("AdsLWIMessengerConstants").LWI_PREVIEW_TYPE_MESSENGER;d=(c={},c[a]=g._("Welcome Message"),c);e.exports={AdsLWIAdditionalPreviewFormatLabels:d}}),null);
__d("AdsLWIAdPreviewDropdownSelector.react",["cx","fbt","AdPreviewFormatLabels","AdsLWIAdditionalPreviewFormatLabels","AdsLWIMessengerConstants","AdsLWIMessengerPreviewBackNUXContainer.react","ContextualLayerHideOnScroll","FDSDropdownSelector.react","FDSDropdownSelectorOption.react","FDSDropdownSelectorOptionGroup.react","FDSText.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("AdPreviewFormatLabels").AdPreviewFormatLabels,j=b("AdsLWIAdditionalPreviewFormatLabels").AdsLWIAdditionalPreviewFormatLabels,k=b("AdsLWIMessengerConstants").LWI_PREVIEW_TYPE_MESSENGER,l=340,m=320,n={ContextualLayerHideOnScroll:b("ContextualLayerHideOnScroll")},o=h._("Ad Previews"),p=h._("Message Previews");function q(a,c){a=a.toJS().map(function(a){return b("React").createElement(b("FDSDropdownSelectorOption.react"),{key:a,value:a},i[a])});if(c.isEmpty())return a;var d=c.toJS().map(function(a){return b("React").createElement(b("FDSDropdownSelectorOption.react"),{key:a,value:a},j[a])});return c.count()===1&&c.contains(k)?[b("React").createElement(b("FDSDropdownSelectorOptionGroup.react"),{isExpandedInitially:!0,key:"Ad Preview",label:o},a),b("React").createElement(b("FDSDropdownSelectorOptionGroup.react"),{isExpandedInitially:!0,key:"Message Preview",label:p},d)]:a.concat(d)}a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$2=function(a){c.$1=a},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){var a=q(this.props.adPreviewFormats,this.props.additionalPreviewTypes);return b("React").createElement("div",{className:"_3-95"},b("React").createElement(b("FDSText.react"),{color:"secondary",size:"meta1",weight:"bold"},h._("Preview:"))," ",b("React").createElement(b("FDSDropdownSelector.react"),{canCollapseGroups:!1,contextualLayerBehaviors:n,dropdownWidth:m,maxHeight:l,ref:this.$2,value:this.props.adPreviewType,onChange:this.props.onAdPreviewFormatSelect},a),!this.props.adPreviewFormats.isEmpty()&&this.props.additionalPreviewTypes.includes(k)&&b("React").createElement(b("AdsLWIMessengerPreviewBackNUXContainer.react"),{context:this.$1}))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("AdsLWIAdPreviewTextPlaceholder.react",["cx","FDSText.react","React"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return b("React").createElement("div",{className:"_6u6z"},b("React").createElement(b("FDSText.react"),{color:"placeholder",size:"body1"},a.alternateText))}e.exports=a}),null);
__d("AdsLWIInstagramAdPreview.react",["cx","fbt","AdsLWIAdPreviewBaseUnit.react","AdsLWIAdPreviewTextPlaceholder.react","AdsLWIStockImageUtils","AdsLWIStockImageWatermarkNotice.react","FDSText.react","Link.react","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=b("AdsLWIStockImageUtils").getIsStockImageFromCreativeSpec;function j(a){a=a.hasInstagramAccount?h._("Your Instagram account will represent your business in this promotion."):h._("Your Facebook Page will represent your business in this promotion. {learn more link}",[h._param("learn more link",b("React").createElement(b("Link.react"),{href:"/business/help/910175409024706",target:"_blank"},h._("Learn more about adding an Instagram account.")))]);return b("React").createElement("div",{className:"_6u6z"},b("React").createElement(b("FDSText.react"),{color:"secondary",size:"body1"},a))}function a(a){__p&&__p();var c=a.adPreviewFormat,d=a.creativeSpec,e=a.instagramIneligibleMessage;if(a.instagramOptedOut){var f=h._("Instagram has been disabled for this promotion. {click to enable instagram ads}.",[h._param("click to enable instagram ads",b("React").createElement(b("Link.react"),{onClick:a.onInstagramOptInCallback},h._("Turn Instagram back on")))]);return b("React").createElement(b("AdsLWIAdPreviewTextPlaceholder.react"),{alternateText:f})}else if(e!=null&&e!==""){f=h._("Your promotion will show on Facebook. It won't show on Instagram because the image, video or call-to-action doesn't meet the guidelines. {learn more link}.",[h._param("learn more link",b("React").createElement(b("Link.react"),{href:"/business/help/430958953753149",target:"_blank"},h._("Learn more")))]);return b("React").createElement(b("AdsLWIAdPreviewTextPlaceholder.react"),{alternateText:f})}return b("React").createElement(b("React").Fragment,null,b("React").createElement("div",{className:"_6u6_"},b("React").createElement(b("AdsLWIAdPreviewBaseUnit.react"),{adAccountID:a.adAccountID,adPreviewFormat:c,creativeSpec:d,instanceID:a.instanceID,onMeasureHeight:a.onMeasureHeight})),i(d)?b("React").createElement(b("AdsLWIStockImageWatermarkNotice.react"),null):null,b("React").createElement(j,{hasInstagramAccount:a.hasInstagramAccount}))}e.exports=a}),null);
__d("adsLWIInstagramValidationExceptionSelector",["AdsPageTypes","adsCreateSelector","adsLWICreativeValidationExceptionsSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateSelector")([b("adsLWICreativeValidationExceptionsSelector")],function(a){a=a.get(b("AdsPageTypes").INSTAGRAM_STREAM);return!a||!a.hasValue()?null:a.getValueEnforcing()},{name:e.id+".selector"});e.exports=a}),null);
__d("AdsLWIInstagramAdPreviewContainer.react",["AdsAPIPublisherPlatform","AdsFluxContainer","AdsLWIDeliveryPlacementActions","AdsLWIInstagramAdPreview.react","AdsSelectorUtils","React","adsLWIContextStoreDataSelector","adsLWIInstagramOptOutSelector","adsLWIInstagramValidationExceptionSelector"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(){return b("AdsSelectorUtils").getStores([b("adsLWIContextStoreDataSelector"),b("adsLWIInstagramOptOutSelector"),b("adsLWIInstagramValidationExceptionSelector")])};var d=c.prototype;d.$1=function(){b("AdsLWIDeliveryPlacementActions").togglePublisherPlatform(b("AdsAPIPublisherPlatform").INSTAGRAM,!0)};c.calculateState=function(){var a=b("adsLWIContextStoreDataSelector")();return{hasInstagramAccount:!!a.getNullableInstagramAccountID(),instagramOptedOut:b("adsLWIInstagramOptOutSelector")(),instagramIneligibleMessage:b("adsLWIInstagramValidationExceptionSelector")()}};d.render=function(){return b("React").createElement(b("AdsLWIInstagramAdPreview.react"),{adAccountID:this.props.adAccountID,adPreviewFormat:this.props.adPreviewFormat,creativeSpec:this.props.creativeSpec,hasInstagramAccount:this.state.hasInstagramAccount,instagramIneligibleMessage:this.state.instagramIneligibleMessage,instagramOptedOut:this.state.instagramOptedOut,instanceID:this.props.instanceID,onInstagramOptInCallback:this.$1,onMeasureHeight:this.props.onMeasureHeight})};return c}(b("React").PureComponent);e.exports=b("AdsFluxContainer").create(a,{name:e.id})}),null);
__d("AdsLWIInstreamVideoAdPreview.react",["cx","fbt","AdsLWIAdPreviewBaseUnit.react","FDSText.react","InstreamVideoLWIDemo.react","Link.react","React","URI"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=new(b("URI"))("/business/help/175741192481247");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={shouldShowInstreamDemo:!1},c.$1=function(){c.setState({shouldShowInstreamDemo:!0})},c.$2=function(){c.setState({shouldShowInstreamDemo:!1})},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.render=function(){return b("React").createElement(b("React").Fragment,null,b("React").createElement("div",{className:"_6u6_"},b("React").createElement(b("AdsLWIAdPreviewBaseUnit.react"),{adAccountID:this.props.adAccountID,adPreviewFormat:this.props.adPreviewFormat,creativeSpec:this.props.creativeSpec,instanceID:this.props.instanceID,onMeasureHeight:this.props.onMeasureHeight}),this.state.shouldShowInstreamDemo?b("React").createElement(b("InstreamVideoLWIDemo.react"),null):null),b("React").createElement("div",{className:"_6u6z"},b("React").createElement(b("FDSText.react"),{color:"primary",size:"body3"},h._("Your promotion will play during eligible Facebook Shows and News Feed videos. To see what your viewers will experience, {instream videos demo} You can use Ads Manager to control where your promotion plays. {instream videos link}",[h._param("instream videos demo",b("React").createElement("a",{onMouseEnter:this.$1,onMouseLeave:this.$2},h._("watch this demo video."))),h._param("instream videos link",b("React").createElement(b("Link.react"),{href:i,target:"_blank"},h._("Learn more.")))]))))};return c}(b("React").PureComponent);e.exports=a}),null);
__d("AdsLWIMessengerWelcomeMessagePreviewMacrosContainer",["AdsLWIMessengerConstants","FluxContainer","MessengerAdPreviewConversation.react","PagesReplyComposerStore","PagesReplyComposerTextUtilities","React","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsLWIMessengerConstants").LWI_MESSENGER_COMPOSER_KEY;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}c.getStores=function(a){return[b("PagesReplyComposerStore").getByKey(g)]};c.calculateState=function(a,c){a=b("PagesReplyComposerStore").getByKey(g).getState();return{macros:a?a.supportedMacros:b("immutable").List()}};var d=c.prototype;d.render=function(){var a=b("PagesReplyComposerTextUtilities").processMessage(this.props.message||"",this.state.macros);return b("React").createElement(b("MessengerAdPreviewConversation.react"),{callToAction:this.props.callToAction,className:this.props.className,clickable:this.props.clickable,description:this.props.description,iceBreakers:this.props.iceBreakers,imageURL:this.props.imageURL,isNewDesign:this.props.isNewDesign,isTextWithQR:this.props.isTextWithQR,isVisualEditorRedesign:this.props.isVisualEditorRedesign,jsonImageURL:this.props.jsonImageURL,message:a,name:this.props.name,pageID:this.props.pageID,pageName:this.props.pageName,payload:this.props.payload,platformXMD:this.props.platformXMD,surface:this.props.surface,textSecondMessage:this.props.textSecondMessage,type:this.props.type,videoURL:this.props.videoURL})};return c}(b("React").PureComponent);e.exports=b("FluxContainer").create(a,{withProps:!0,pure:!0})}),null);
__d("AdsCommonAdvertisablePagesVideosStoreDataTypes",["LoadObject","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}return b}(b("immutable").Record({id:void 0,name:void 0,picture:{data:{url:void 0}},business:void 0,global_brand_page_name:void 0,perms:void 0,userpermissions:void 0}));c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getData=function(){return b("immutable").Map({has_whatsapp_business_number:this.has_whatsapp_business_number,has_whatsapp_number:this.has_whatsapp_number,id:this.id,name:this.name,picture:this.picture,business:this.business,global_brand_page_name:this.global_brand_page_name,videosLoadObject:this.videosLoadObject,videoGroupsLoadObjects:this.videoGroupsLoadObjects,nextPageCursor:this.nextPageCursor,userpermissions:this.userpermissions})};return c}(b("immutable").Record({has_whatsapp_business_number:void 0,has_whatsapp_number:void 0,id:void 0,name:void 0,picture:{data:{url:void 0}},business:void 0,global_brand_page_name:void 0,videosLoadObject:b("LoadObject").empty(),videoGroupsLoadObjects:b("immutable").Map(),nextPageCursor:"",userpermissions:void 0}));d=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getData=function(){return b("immutable").Map({id:this.id,videoGroups:this.videoGroups})};return c}(b("immutable").Record({id:void 0,videoGroups:b("immutable").Map()}));f=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.getData=function(){return b("immutable").Map({createdTime:this.createdTime,description:this.description,duration:this.duration,id:this.id,pageID:this.pageID,preferredThumbnail:{uri:this.preferredThumbnail.uri},updatedTime:this.updatedTime,views:this.views})};return c}(b("immutable").Record({createdTime:void 0,description:void 0,duration:void 0,id:void 0,pageID:void 0,preferredThumbnail:{uri:void 0},updatedTime:void 0,views:void 0}));var g=function(c){babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.getData=function(){return b("immutable").Map({createdTime:this.createdTime,lastUsedTime:this.lastUsedTime,description:this.description,duration:this.duration,id:this.id,pageID:this.pageID,pageIDs:this.pageIDs,IGProfileIDs:this.IGProfileIDs,pageInfosLoadObject:this.pageInfos,IGProfileInfosLoadObject:this.IGProfileInfos,preferredThumbnail:{uri:this.preferredThumbnail.uri},updatedTime:this.updatedTime,views:this.views,videos:this.videos,placements:this.placements,videoGroupTypes:this.videoGroupTypes,isDisabled:this.isDisabled,error:this.error})};return a}(b("immutable").Record({createdTime:void 0,lastUsedTime:void 0,description:void 0,duration:void 0,id:void 0,pageID:void 0,pageIDs:void 0,IGProfileIDs:void 0,pageInfosLoadObject:void 0,IGProfileInfosLoadObject:void 0,preferredThumbnail:{uri:void 0},updatedTime:void 0,views:void 0,videos:void 0,placements:void 0,videoGroupTypes:void 0,isDisabled:void 0,error:void 0}));e.exports={AccountData:a,PageInfo:c,CampaignInfo:d,VideoData:f,VideoGroupData:g}}),null);
__d("BoostedComponentPromotablePageActions",["BoostedComponentPromotablePageLoadPromotablePageOneFailAction","BoostedComponentPromotablePageLoadPromotablePageOneSuccessAction","BoostedComponentPromotablePageLoadPromotablePagesFailAction","BoostedComponentPromotablePageLoadPromotablePagesSuccessAction","BoostedComponentPromotablePageSelectPageAction","immutable"],(function(a,b,c,d,e,f){"use strict";a={loadPromotablePage:function(a,c){b("BoostedComponentPromotablePageLoadPromotablePageOneSuccessAction").dispatch({id:a,data:c},{line:"22",module:"BoostedComponentPromotablePageActions.js"})},failToLoadPromotablePage:function(a,c){b("BoostedComponentPromotablePageLoadPromotablePageOneFailAction").dispatch({id:a,error:c},{line:"29",module:"BoostedComponentPromotablePageActions.js"})},loadPromotablePages:function(a){b("BoostedComponentPromotablePageLoadPromotablePagesSuccessAction").dispatch({data:b("immutable").Map(a)},{line:"36",module:"BoostedComponentPromotablePageActions.js"})},failToLoadPromotablePages:function(a){b("BoostedComponentPromotablePageLoadPromotablePagesFailAction").dispatch({error:a},{line:"42",module:"BoostedComponentPromotablePageActions.js"})},selectPage:function(a){b("BoostedComponentPromotablePageSelectPageAction").dispatch({pageID:a},{line:"48",module:"BoostedComponentPromotablePageActions.js"})}};e.exports=a}),null);
__d("BoostedComponentPromotablePageDataLoader",["BoostedComponentGraphAPI","BoostedComponentPromotablePageActions","CurrentUser","promiseDone"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(){var a=b("CurrentUser").getAccountID();return["id","name","picture","business{business_users.user("+a+"), name}"]};a=function(a){b("promiseDone")(b("BoostedComponentGraphAPI").get(e.id).object("page",a).get({fields:g()}),function(c){return b("BoostedComponentPromotablePageActions").loadPromotablePage(a,c)},function(c){return b("BoostedComponentPromotablePageActions").failToLoadPromotablePage(a,c)})};c=function(a){b("promiseDone")(b("BoostedComponentGraphAPI").get(e.id).objects("pages",Array.from(a)).get({fields:g()}),function(a){return b("BoostedComponentPromotablePageActions").loadPromotablePages(a)},function(a){return b("BoostedComponentPromotablePageActions").failToLoadPromotablePages(a)})};e.exports={loadPromotablePage:a,loadPromotablePages:c}}),null);
__d("BoostedComponentPromotablePageStore",["AdsBoostedComponentEmbeddedFlowInitFlowDataActionFlux","AdsCommonAdvertisablePagesVideosStoreDataTypes","AdsDataAtom","BoostedComponentEmbeddedFlowActionTypes","BoostedComponentPromotablePageActionTypes","BoostedComponentPromotablePageDataLoader","FluxLoadObjectStore","gkx","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsCommonAdvertisablePagesVideosStoreDataTypes").PageInfo,h=b("BoostedComponentPromotablePageDataLoader").loadPromotablePage,i=b("BoostedComponentPromotablePageDataLoader").loadPromotablePages,j=50,k=b("gkx")("779516");a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.__getActionTypes=function(){return k?[this.getActionTypeStartLoad(),b("AdsBoostedComponentEmbeddedFlowInitFlowDataActionFlux").actionType,b("BoostedComponentEmbeddedFlowActionTypes").PAGE_CREATE_SUCCESS,b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGES_FAIL,b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGES_SUCCESS,b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGE_ONE_FAIL,b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGE_ONE_SUCCESS]:null};d.reduce=function(a,c){__p&&__p();c=c.action;switch(c.type){case b("AdsBoostedComponentEmbeddedFlowInitFlowDataActionFlux").actionType:var d=c.pageIDs;this.getAll(d);return a;case b("BoostedComponentEmbeddedFlowActionTypes").PAGE_CREATE_SUCCESS:d=c.data.page;this.get(d.id);return a;case b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGES_SUCCESS:return this.__handleMap(a,c.data);case b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGES_FAIL:return this.__handleMap(a,c.error);case b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGE_ONE_SUCCESS:return this.__handleOne(a,c.id,c.data);case b("BoostedComponentPromotablePageActionTypes").LOAD_PROMOTABLE_PAGE_ONE_FAIL:return this.__handleOne(a,c.id,c.error);default:return a}};d.__load=function(a){h(a)};d.__loadAll=function(a){__p&&__p();var b=[];for(var a=a,c=Array.isArray(a),d=0,a=c?a:a[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var e;if(c){if(d>=a.length)break;e=a[d++]}else{d=a.next();if(d.done)break;e=d.value}e=e;b.push(e);b.length==j&&(i(b),b.length=0)}b.length>0&&i(b)};d.__convertToPageInfoFormat=function(a){return new g({id:a.id,name:a.name,picture:a.picture,business:a.business,userpermissions:{data:[{business:a.business}]}})};d.getPagesInPageInfoFormat=function(a){var b=this;a=this.getPromotablePageRecords(a);var c=a.hasError,d=a.isDataLoaded;a=a.pages;return{hasError:c,isDataLoaded:d,pages:a.map(function(a){return b.__convertToPageInfoFormat(a)})}};d.convertToPageDetailsFormat=function(a){return{capabilities:b("immutable").Set(),id:a.id,name:a.name,pictureURL:a.picture.data.url}};d.getPromotablePageRecord=function(a){a=this.get(a);var b=!a.isEmpty()&&!a.isLoading(),c=a.hasError();a=b&&!c?a.getValue():null;return{hasError:c,isDataLoaded:b,page:a}};d.getPromotablePageRecords=function(a){var c=this,d=!1,e=!1,f={};a.forEach(function(a){var b=c.getPromotablePageRecord(a);b.isDataLoaded&&(d=!0);b.hasError&&(e=!0);b.page&&(f[a]=b.page);return b.page});return{isDataLoaded:d,hasError:e,pages:b("immutable").Map(f)}};return c}(b("FluxLoadObjectStore"));a.__moduleID=e.id;e.exports=new a(b("AdsDataAtom"))}),null);
__d("adsLWIPageInfoSelector",["AdsStoreUtils","BoostedComponentPromotablePageStore","LoadObject","adsCreateSelector","adsLWICurrentInstanceDataSelector","immutable"],(function(a,b,c,d,e,f){"use strict";a=b("AdsStoreUtils").toSelector(b("BoostedComponentPromotablePageStore"));c=b("adsCreateSelector")([b("adsLWICurrentInstanceDataSelector"),a],function(a,c){return a?b("BoostedComponentPromotablePageStore").get(a.pageID):b("LoadObject").empty()},{name:e.id+".adsLWIPageInfoSelector"});e.exports=c}),null);
__d("adsLWICurrentPageNameSelector",["adsCreateSelector","adsLWIPageInfoSelector"],(function(a,b,c,d,e,f){"use strict";a=b("adsCreateSelector")([b("adsLWIPageInfoSelector")],function(a){a=a.getValue();return a&&a.name},{name:e.id+".selector"});e.exports=a}),null);
__d("AdsLWIMessengerAdPreviewConversationContainer.react",["cx","AdsLWIMessengerWelcomeMessagePreviewMacrosContainer","AdsSelectorUtils","FluxContainer","React","adsLWICommonStoreStateKeySelector","adsLWICurrentMessengerWelcomeMessageSelector","adsLWICurrentPageNameSelector"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(){return b("AdsSelectorUtils").getStores([b("adsLWICurrentMessengerWelcomeMessageSelector"),b("adsLWICommonStoreStateKeySelector"),b("adsLWICurrentPageNameSelector")])}function c(a,c){a=b("adsLWICommonStoreStateKeySelector")();return{selectorIsDropdown:c.selectorIsDropdown,welcomeMessageRecord:b("adsLWICurrentMessengerWelcomeMessageSelector")(),pageID:a&&a.pageID,pageName:b("adsLWICurrentPageNameSelector")()}}function d(a){var c=a.welcomeMessageRecord,d=a.pageID,e=a.pageName;a=a.selectorIsDropdown;if(c==null)return null;var f=c.messengerIcebreakersEnabled?c.messengerIcebreakers.toJS():null;return b("React").createElement(b("AdsLWIMessengerWelcomeMessagePreviewMacrosContainer"),{className:"_6wxb"+(a?"":" _4aws"),iceBreakers:f,isVisualEditorRedesign:!0,message:c.messengerGreeting,pageID:d,pageName:e})}e.exports=b("FluxContainer").createFunctional(d,a,c,{withProps:!0})}),null);
__d("AdsLWIVideoUploadingAdPreview.react",["errorCode","fbt","AdsError","AdsLWIAdPreviewTextPlaceholder.react","AdsPreviewV2ErrorUtils","React"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){a=b("AdsPreviewV2ErrorUtils").renderPreviewErrorMessage(b("AdsError").createError(1815279,h._("Your video is processing. You'll see a preview here once it's finished.")));return b("React").createElement(b("AdsLWIAdPreviewTextPlaceholder.react"),{alternateText:a})}e.exports=a}),null);
__d("AdsLWIStandardAndAlternateAdPreview.react",["AdsLWIAdPreviewBaseUnit.react","AdsLWIInstagramAdPreviewContainer.react","AdsLWIInstreamVideoAdPreview.react","AdsLWIMessengerAdPreviewConversationContainer.react","AdsLWIMessengerConstants","AdsLWIVideoUploadingAdPreview.react","AdsPreviewApiFormats","CenteredContainer.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("AdsLWIMessengerConstants").LWI_PREVIEW_TYPE_MESSENGER;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){__p&&__p();var a=this.props,c=a.adAccountID,d=a.creativeSpec,e=a.onMeasureHeight;a=a.previewType;if(this.props.videoUploading)return b("React").createElement(b("AdsLWIVideoUploadingAdPreview.react"),null);if(a===g)return b("React").createElement(b("CenteredContainer.react"),{fullHeight:!0},b("React").createElement(b("AdsLWIMessengerAdPreviewConversationContainer.react"),{selectorIsDropdown:!0}));a=b("AdsPreviewApiFormats")[a];switch(a){case b("AdsPreviewApiFormats").INSTREAM_VIDEO_MOBILE:return b("React").createElement(b("AdsLWIInstreamVideoAdPreview.react"),{adAccountID:c,adPreviewFormat:a,creativeSpec:d,instanceID:this.props.instanceID,onMeasureHeight:e});case b("AdsPreviewApiFormats").INSTAGRAM_STANDARD:case b("AdsPreviewApiFormats").INSTAGRAM_STORY:return b("React").createElement(b("AdsLWIInstagramAdPreviewContainer.react"),{adAccountID:this.props.adAccountID,adPreviewFormat:a,creativeSpec:this.props.creativeSpec,instanceID:this.props.instanceID,onMeasureHeight:this.props.onMeasureHeight});default:return b("React").createElement(b("AdsLWIAdPreviewBaseUnit.react"),{adAccountID:c,adPreviewFormat:a,creativeSpec:this.props.creativeSpec,instanceID:this.props.instanceID,onMeasureHeight:this.props.onMeasureHeight})}};return c}(b("React").PureComponent);e.exports=a}),null);
__d("AdsLWIAdPreviewFrame.react",["cx","AdsLWIAdPreviewDropdownSelector.react","AdsLWIStandardAndAlternateAdPreview.react","BoostedComponentAdPreviewActionsV2","LatchBoundary.react","React","XUICarousel.react","XUICarouselItem.react","immutable"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=1,i=504,j=560;a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={viewportHeight:j},d.$2=function(a){b("BoostedComponentAdPreviewActionsV2").onAdFormatSelect(a,null,d.props.instanceID)},d.$4=function(a){d.$1=a},d.$5=function(a){a>d.state.viewportHeight&&d.setState({viewportHeight:a})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.$2(this.props.defaultSelectedAdPreviewFormat)};d.componentDidUpdate=function(a){a.creativeSpec!==this.props.creativeSpec&&this.setState({viewportHeight:j}),this.$1!=null&&this.$1.setIndex(this.$3().indexOf(this.props.adPreviewType))};d.$3=function(){return this.props.adPreviewFormats.toJS().concat(this.props.additionalPreviewTypes.toJS())};d.render=function(){var a=this,c=this.props.adPreviewType;if(c==null)return null;var d=this.$3(),e=d.indexOf(c),f=d.map(function(c,d){var f=Math.abs(d-e)<=h;return b("React").createElement(b("XUICarouselItem.react"),{index:d,key:c,style:{width:i}},b("React").createElement(b("LatchBoundary.react"),{shouldRender:f},b("React").createElement(b("AdsLWIStandardAndAlternateAdPreview.react"),{adAccountID:a.props.adAccountID,creativeSpec:a.props.creativeSpec,instanceID:a.props.instanceID,previewType:c,videoUploading:a.props.videoUploading,onMeasureHeight:a.$5})))});d=d.join(",");d=b("React").createElement(b("XUICarousel.react"),{initialAutoplay:!1,initialIndex:e,key:d,ref:this.$4,resizeViewport:"disabled",viewportHeight:this.state.viewportHeight,viewportWidth:i,wrapAround:!1},f);return b("React").createElement("div",{className:"_72_4"},b("React").createElement(b("AdsLWIAdPreviewDropdownSelector.react"),{adPreviewFormats:this.props.adPreviewFormats,adPreviewType:c,additionalPreviewTypes:this.props.additionalPreviewTypes,onAdPreviewFormatSelect:this.$2}),b("React").createElement("div",null,d))};return c}(b("React").PureComponent);e.exports=a}),null);