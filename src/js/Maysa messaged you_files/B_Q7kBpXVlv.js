if (self.CavalryLogger) { CavalryLogger.start_js(["xTdjx"]); }

__d("MercuryAttachmentError.react",["fbt","React","XUINotice.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("XUINotice.react"),{use:"warn"},b("React").createElement(b("XUIText.react"),{size:"meta1"},g._("This attachment could not be loaded.")))};return c}(b("React").Component);e.exports=a}),null);
__d("MercuryAttachmentFile.react",["cx","fbt","ix","Image.react","LeftRight.react","Link.react","MercuryAttachment","React","URI","gkx","isLinkshimURI","joinClasses"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad()};d.$1=function(){if(b("isLinkshimURI")(new(b("URI"))(this.props.url)))return this.props.url;else return{url:(this.props.url||"").toString(),shimhash:this.props.shimhash}};d.$2=function(){return this.props.open_url?b("React").createElement("div",{className:"_59gs"},b("React").createElement(b("Link.react"),{target:"_blank",href:this.props.open_url},h._("open"))," ","\xb7"," ",b("React").createElement(b("Link.react"),{href:this.$1(),s:this.props.isSafeToSkipShim?"1":""},h._("download"))):b("React").createElement("div",null)};d.render=function(){var a=b("joinClasses")(b("MercuryAttachment").getAttachIconClass(this.props.type),"_59go _59gq");return this.props.url?b("React").createElement(b("LeftRight.react"),{className:a},b("React").createElement(b("Link.react"),babelHelpers["extends"]({href:this.$1(),s:this.props.isSafeToSkipShim?"1":""},this.$3()),b("React").createElement(b("LeftRight.react"),null,b("React").createElement(b("Image.react"),{src:i("86988")}),b("React").createElement("span",{className:"_59gp"},this.props.name))),this.$2()):b("React").createElement(b("LeftRight.react"),{className:a},b("React").createElement(b("Image.react"),{src:i("86988")}),b("React").createElement("span",{className:"_59gp"},this.props.name))};d.$3=function(){return b("isLinkshimURI")(new(b("URI"))(this.props.url))&&b("gkx")("678280")?{target:"_blank"}:{}};return c}(b("React").PureComponent);c.propTypes={isSafeToSkipShim:a.bool,name:a.string.isRequired,onAttachmentLoad:a.func,open_url:a.string,rel:a.string,shimhash:a.string,type:a.string.isRequired,url:a.string};e.exports=c}),null);
__d("MercuryAttachmentMalicious.react",["fbt","React","XUINotice.react","XUIText.react"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("XUINotice.react"),{use:"warn"},b("React").createElement(b("XUIText.react"),{size:"meta1"},g._("This attachment has been marked as malicious.")))};return c}(b("React").Component);e.exports=a}),null);
__d("XMBIBlurredImageController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/messenger/business/integrity/hideimage/",{message_id:{type:"String",required:!0},image_id:{type:"String",required:!0},reveal_image:{type:"Bool",defaultValue:!1}})}),null);
__d("MercuryAttachmentPhoto.react",["AsyncRequest","ChatImageArrowDirection","ChatImageWithArrow.react","MercuryAttachmentViewer","MercuryIDs","MessagesViewerSetID","MessengerMessage.bs","React","SphericalPhotoUtils","SpotlightMercurySharedMediaViewer.react","URI","XMBIBlurredImageController","getPageIDFromThreadID","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("SphericalPhotoUtils").getThumbnailsFromPhotoEncodings;a=b("React").PropTypes;var h=160;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={newSharedPhotosView:!1},d.$1=function(a){__p&&__p();var c;a=d.props.image;var e=!0;!d.props.hasAttribution&&d.props.count&&(e=d.props.count===1);var f=d.props.message;f=f.thread_fbid?f.thread_fbid:b("MercuryIDs").getThreadFBIDFromThreadID(f.thread_id);f=new(b("URI"))("/ajax/messaging/attachments/sharedphotos.php").setQueryData({thread_id:f,image_id:a.metadata.fbid});var g=b("MessagesViewerSetID").MESSAGES_VIEW_ALL_IN_THREAD;c=(c=a.large_preview_url)!=null?c:a.preview_url;b("MercuryAttachmentViewer").bootstrapWithConfig({dimensions:a.metadata.dimensions,disablePaging:e,endpoint:f,fbid:a.metadata.fbid,setID:g,src:c},null)},d.$2=function(){var a=b("XMBIBlurredImageController").getURIBuilder().setBool("reveal_image",!0).setString("message_id",d.props.message.message_id).setString("image_id",d.props.image.metadata.fbid).getURI();new(b("AsyncRequest"))(a).setHandler(function(){}).setErrorHandler(function(a){}).send()},d.$3=function(){var a=d.props.image;a&&a.metadata&&d.setState({newSharedPhotosView:a.metadata.fbid})},d.$4=function(){d.setState({newSharedPhotosView:null})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){b("MercuryAttachmentViewer").preload(),this.props.onAttachmentLoad&&this.props.onAttachmentLoad(this.props.height)};d.$5=function(){var a=this.props.message.thread_fbid||this.props.message.thread_id&&b("MercuryIDs").getThreadFBIDFromThreadID(this.props.message.thread_id);return b("React").createElement(b("SpotlightMercurySharedMediaViewer.react"),{onClosePhotoView:this.$4,photoID:String(this.state.newSharedPhotosView),rootClassName:"",threadID:a,disableForward:!1,enableShareToFB:!0})};d.render=function(){__p&&__p();var a=b("MessengerMessage.bs").isInbound(this.props.message),c=!!b("getPageIDFromThreadID")(this.props.message.thread_id);c=!this.props.hasAttribution&&!c?this.$3:this.$1;var d=this.state.newSharedPhotosView?this.$5():null,e=this.props.photoEncodings?this.props.photoEncodings.length!==0:!1,f=this.props.image.preview_url;if(e){var i=g(this.props.photoEncodings);i=i.smallThumbnail;f=i||this.props.image.preview_url}b("gkx")("871037")&&!!b("getPageIDFromThreadID")(this.props.message.thread_id)&&this.props.image.blurred_image_uri!==null&&this.props.image.blurred_image_uri!==void 0&&(f=this.props.image.blurred_image_uri,c=this.$2);return b("React").createElement("div",{onFocus:this.$6},d,b("React").createElement(b("ChatImageWithArrow.react"),{arrowDirection:a?b("ChatImageArrowDirection").LEFT:b("ChatImageArrowDirection").RIGHT,source:f,height:e?h:this.props.height,width:e?h:this.props.width,onClick:c,round:!!this.props.round,isLoading:!!this.props.image.preview_uploading,isSpherical:e}))};d.$6=function(a){a.stopPropagation()};return c}(b("React").Component);c.propTypes={hasAttribution:a.bool,height:a.number,image:a.object.isRequired,photoEncodings:a.array,message:a.object.isRequired,onAttachmentLoad:a.func,round:a.bool,width:a.number};e.exports=c}),null);
__d("ChatGridImageReact.bs",["cx","bs_curry","React","LinkReact.bs","bs_belt_Option","ReasonReact.bs","bs_js_primitive","CssBackgroundImageReact.bs"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ReasonReact.bs").statelessComponent("ChatGridImageReact");function a(a,c,d,e,f,g,i){__p&&__p();return[h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],function(){__p&&__p();var h=String(e)+"px";h={height:h,width:h};var i=b("bs_belt_Option").getWithDefault(a,!1);i=i||f===void 0;if(i)return b("React").createElement("div",{className:"_4ypb",style:h});else{i=b("bs_belt_Option").getWithDefault(f,"");var j=function(){var a=d!==void 0?b("bs_js_primitive").valFromOption(d).fbid:"";if(g!==void 0)return b("bs_curry")._1(g,a);else return 0},k=b("bs_belt_Option").getWithDefault(c,!1),l=k?b("React").createElement("div",{className:"_64ks"}):null;return b("ReasonReact.bs").element(void 0,void 0,b("LinkReact.bs").make(void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,j,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,[b("ReasonReact.bs").element(void 0,void 0,b("CssBackgroundImageReact.bs").make("_332l"+(k?" _3603":""),i,"center",void 0,void 0,b("bs_js_primitive").some(h))([l]))]))}},h[9],h[10],h[11],h[12]]}f.component=h;f.make=a}),null);
__d("ChatGridImageReact.re",["bs_curry","ChatGridImageReact.bs","ReasonReact.bs"],(function(a,b,c,d,e,f){a=b("ReasonReact.bs").wrapReasonForJs(b("ChatGridImageReact.bs").component,function(a){return b("bs_curry")._7(b("ChatGridImageReact.bs").make,a.isLoading,a.isSpherical,a.metadata,a.size,a.source,a.onClick,a.children)});f.component=a;f["default"]=a}),null);
__d("MercuryAttachmentPhotoGrid.react",["cx","ChatGridImageReact.re","Grid.react","MercuryAttachmentType","MercuryAttachmentViewer","MercuryIDs","MessagesViewerSetID","React","SpotlightMercurySharedMediaViewer.react","SphericalPhotoUtils","URI","getPageIDFromThreadID"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=b("ChatGridImageReact.re").component,i=b("Grid.react").GridItem,j=b("SphericalPhotoUtils").getThumbnailsFromPhotoEncodings;a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={newSharedPhotosView:null},d.$1=function(a,c){var e=d.props.count,f=d.props.message;f=f.thread_fbid?f.thread_fbid:b("MercuryIDs").getThreadFBIDFromThreadID(f.thread_id);var g=new(b("URI"))("/ajax/messaging/attachments/sharedphotos.php").setQueryData({thread_id:f,image_id:a.metadata&&a.metadata.fbid}),h=b("MessagesViewerSetID").MESSAGES_VIEW_ALL_IN_THREAD;return function(d){b("MercuryAttachmentViewer").bootstrapWithConfig({dimensions:a.metadata.dimensions,disablePaging:c||e===1,endpoint:g,fbid:a.metadata.fbid,setID:h,src:a.preview_url},null)}},d.$2=function(a){a&&d.setState({newSharedPhotosView:a})},d.$3=function(){d.setState({newSharedPhotosView:null})},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){b("MercuryAttachmentViewer").preload()};d.$4=function(){var a=this.props.message.thread_fbid||this.props.message.thread_id&&b("MercuryIDs").getThreadFBIDFromThreadID(this.props.message.thread_id);return b("React").createElement(b("SpotlightMercurySharedMediaViewer.react"),{onClosePhotoView:this.$3,photoID:String(this.state.newSharedPhotosView),rootClassName:"",threadID:a,disableForward:!1})};d.render=function(){__p&&__p();var a=this.props.images,c=a.length;c=c==2||c==4?2:3;var d=Math.floor(this.props.size/c),e=[],f=a.some(function(a){return a.attach_type===b("MercuryAttachmentType").ANIMATED_IMAGE}),g=this.state.newSharedPhotosView?this.$4():null,k=!!b("getPageIDFromThreadID")(this.props.message.thread_id);for(var l=0;l<a.length;l++){var m=k?this.$1(a[l],f):this.$2,n=a[l].photo_encodings?a[l].photo_encodings.length!==0:!1,o=a[l].preview_url;if(n){var p=j(a[l].photo_encodings);p=p.smallThumbnail;o=p||o}e.push(b("React").createElement(i,{key:l},b("React").createElement(h,{isLoading:!!a[l].preview_uploading,onClick:m,metadata:a[l].metadata,size:d,source:o,isSpherical:n})))}return b("React").createElement("div",null,g,b("React").createElement(b("Grid.react"),{cols:c,className:"_5b2w",spacing:"_5b2x",alignh:"right"},e))};return c}(b("React").Component);c.propTypes={images:a.arrayOf(a.object).isRequired,size:a.number.isRequired,message:a.object.isRequired};e.exports=c}),null);
__d("ChatAttachmentAttribution.react",["cx","ImmutableObject","MercuryAttachmentAttribution.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad()};d.render=function(){return b("React").createElement(b("MercuryAttachmentAttribution.react"),{attachment:this.props.attachment,className:"_1ekr _4i_6"})};return c}(b("React").Component);c.propTypes={attachment:a.instanceOf(b("ImmutableObject")),onAttachmentLoad:a.func};e.exports=c}),null);
__d("MercuryAttachmentVideo.react",["cx","ix","CenteredContainer.react","ChatAttachmentAttribution.react","ChatImageWithArrow.react","ChatSpeakingSticker.react","FBOverlayBase.react","FBOverlayContainer.react","FBOverlayElement.react","Image.react","ImmutableObject","MercuryAttachment","MercuryAttachmentViewer","MessengerVideoPlayer.react","React","SpotlightMercurySharedMediaViewer.react","Vector","getPageIDFromThreadID","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();a=b("React").PropTypes;c=function(a){"use strict";__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){__p&&__p();var c,d;for(var e=arguments.length,f=new Array(e),g=0;g<e;g++)f[g]=arguments[g];return(c=d=a.call.apply(a,[this].concat(f))||this,d.state={newSharedPhotosView:null},d.$1=function(){var a=d.props.duration,b=Math.floor(a/60);a=a%60;return a<10?b+":0"+a:b+":"+a},d.openViewer=function(){var a=d.props,c=a.pageID,e=a.videoID,f=a.videoSize;a=a.videoURI;f=new(b("Vector"))(f.width,f.height);b("MercuryAttachmentViewer").renderVideo({pageID:c,videoID:e,videoSize:f,videoURI:a})},d.$2=function(){d.props.videoID&&d.setState({newSharedPhotosView:d.props.videoID})},d.$3=function(){d.setState({newSharedPhotosView:null})},d.$5=function(){if(d.props.isChat)return b("React").createElement("div",null,b("React").createElement(b("ChatImageWithArrow.react"),{height:d.props.thumbSize.height,key:"previewImage",round:!0,source:d.props.thumbnail,width:d.props.thumbSize.width}),b("React").createElement(b("ChatAttachmentAttribution.react"),{attachment:d.props.attachment,key:"chatAttribution"}));else return b("React").createElement(b("Image.react"),{height:d.props.thumbSize.height,width:d.props.thumbSize.width,src:d.props.thumbnail})},d.$6=function(){return d.props.isChat?{}:d.props.thumbSize},c)||babelHelpers.assertThisInitialized(d)}var d=c.prototype;d.componentDidMount=function(){this.props.onAttachmentLoad&&this.props.onAttachmentLoad(),b("MercuryAttachmentViewer").preload()};d.$4=function(){return b("React").createElement(b("SpotlightMercurySharedMediaViewer.react"),{onClosePhotoView:this.$3,photoID:this.state.newSharedPhotosView,rootClassName:"",threadID:this.props.threadFBID,disableForward:!1})};d.$7=function(a,c){return!a.legacy_attachment_id?null:b("React").createElement(b("MessengerVideoPlayer.react"),{attachment:this.props.attachment,videoData:a,isInThread:!0,isVisible:this.props.isVisible,onClick:c,className:b("joinClasses")(this.props.className,"_n4o _3_om _1wno")})};d.$8=function(a){a=this.props.thumbSize;a={x:a.width,y:a.height};return{legacy_attachment_id:this.props.videoID,original_dimensions:a,start_muted:!0,no_fullscreen:!0,hide_controls_on_finish:!0,url:this.props.videoURI}};d.render=function(){if(this.props.attachment.metadata&&this.props.attachment.metadata.render_as_sticker&&this.props.isChat)return b("React").createElement(b("ChatSpeakingSticker.react"),{videoURI:this.props.videoURI,videoSize:this.props.videoSize});var a=!!b("getPageIDFromThreadID")(this.props.threadID);a=a?this.openViewer:this.$2;var c=this.state.newSharedPhotosView&&this.props.threadFBID?this.$4():null,d=b("MercuryAttachment").hasAttribution(this.props.attachment),e="clearfix _zow _59go"+(d?" _4yjw":"")+(this.props.isChat?" _3ds5":""),f=this.$8(this.props.attachment);f=this.$7(f,a);f=f?f:b("React").createElement(b("FBOverlayContainer.react"),{className:e,key:"overlayContainer",onClick:a,style:this.$6()},b("React").createElement(b("FBOverlayBase.react"),null,this.$5()),b("React").createElement(b("FBOverlayElement.react"),null,b("React").createElement("div",{className:(this.props.isChat?"":"_zox")+(d?" _jt3":"")},b("React").createElement("span",{className:"_zoz"},this.$1()))),b("React").createElement(b("FBOverlayElement.react"),null,b("React").createElement(b("CenteredContainer.react"),{className:d?"_jt3":"",vertical:!0},b("React").createElement(b("Image.react"),{src:h("27983")}))));return this.props.isChat?b("React").createElement("div",null,c,f):b("React").createElement("div",null,c,f,b("React").createElement(b("ChatAttachmentAttribution.react"),{attachment:this.props.attachment,key:"inboxAttribution"}))};return c}(b("React").Component);c.propTypes={attachment:a.instanceOf(b("ImmutableObject")),duration:a.number.isRequired,isChat:a.bool,isVisible:a.bool,threadID:a.string,threadFBID:a.string,name:a.string.isRequired,onAttachmentLoad:a.func,pageID:a.string,thumbSize:a.shape({height:a.number,width:a.number}).isRequired,thumbnail:a.string.isRequired,videoSize:a.shape({height:a.number,width:a.number}).isRequired,videoID:a.string.isRequired,videoURI:a.string.isRequired};e.exports=c}),null);
__d("MercuryAttachmentRenderer",["cx","ChatAttachmentAttribution.react","EmojiSticker.react","ImmutableObject","MercuryAttachment","MercuryAttachmentAudioClip.react","MercuryAttachmentFile.react","MercuryAttachmentLayoutTypeHelper","MercuryAttachmentPhoto.react","MercuryAttachmentPhotoGrid.react","MercuryAttachmentVideo.react","MercuryIDs","MercuryShareAttachment.react","MercuryShareAttachmentRenderLocations","MessengerFromViewerUtils","MessengerHotLikeUtils","MessengerSupportedEmojiUtils","MessengerWebDriverTestIDs","React","Sticker.react","StickerAssetType","StickerConstants","StoryAttachmentStyle","XStickerAssetController"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=12;a={renderFile:function(a,c,d){return b("React").createElement(b("MercuryAttachmentFile.react"),{isSafeToSkipShim:a.url_skipshim,name:a.name,onAttachmentLoad:d,open_url:c?null:a.open_url,rel:a.rel,shimhash:a.url_shimhash,type:a.icon_type,url:a.url})},renderAudioClip:function(a,c,d,e,f){var g=a.metadata.duration/1e3,h=b("MercuryShareAttachmentRenderLocations").CHAT,i=100,j=c?160:400,k=100;g>=5&&(k=(1-Math.pow(10,(g-5)/-30))*(j-i)+i);return[b("React").createElement(b("MercuryAttachmentAudioClip.react"),{customColor:d,duration:a.metadata.duration/1e3,isChat:c,isFromViewer:b("MessengerFromViewerUtils").isFromViewer(e),location:h,key:"audioClip",onAttachmentLoad:f,rootClassName:b("MercuryAttachment").hasAttribution(a)?"_4yjw":"",showHelp:!1,src:a.url,width:k}),b("React").createElement(b("ChatAttachmentAttribution.react"),{attachment:new(b("ImmutableObject"))(a),key:"audioAttribution",onAttachmentLoad:f})]},renderVideo:function(a,c,d,e,f){var g=c?a.metadata.chat_size:a.metadata.inbox_size,h=c?a.metadata.chat_preview:a.metadata.inbox_preview;if(!g||!h)return null;var i=d&&(d.thread_fbid||d.thread_id&&b("MercuryIDs").getThreadFBIDFromThreadID(d.thread_id));return b("React").createElement("div",null,b("React").createElement(b("MercuryAttachmentVideo.react"),{attachment:new(b("ImmutableObject"))(a),duration:a.metadata.duration,isChat:c,isVisible:f,threadID:d&&d.thread_id,threadFBID:i,name:a.name,onAttachmentLoad:e,pageID:a.metadata.pageid,thumbSize:g,thumbnail:h,videoSize:a.metadata.dimensions,videoID:a.metadata.fbid,videoURI:a.url}))},constructStickerComponent:function(a,c,d,e,f,g){__p&&__p();e=e?"chatScrolled/":"messengerScrolled/";e+=a.thread_id;if(!c){c=b("MessengerHotLikeUtils").getMetadataForHotLike(a.sticker_id);if(!c){var h={},i={height:b("StickerConstants").THREAD_SIZE,width:b("StickerConstants").THREAD_SIZE},j=i.height;i=i.width;h.height=j;h.width=i;h.stickerID=a.sticker_id;h.spriteURI="";h.spriteURI2x="";h.paddedSpriteURI="";h.paddedSpriteURI2x="";c=h}}j=null;c.stickerID?j=c.stickerID.toString():a.sticker_id&&(j=a.sticker_id.toString());i=null;c.packID&&(i=c.packID.toString());h=b("XStickerAssetController").getURIBuilder().setInt("sticker_id",j);a=null;var k=null;window.devicePixelRatio&&window.devicePixelRatio>1?(k=c.paddedSpriteURI2x,a=c.spriteURI2x):(k=c.paddedSpriteURI,a=c.spriteURI);return b("React").createElement(b("Sticker.react"),{accessibilityLabel:c.accessibilityLabel,animationTrigger:"hover",customColor:g,frameCount:c.frameCount||1,frameRate:c.frameRate||83,framesPerCol:c.framesPerCol||1,framesPerRow:c.framesPerRow||1,onAttachmentLoad:f,onStickerClick:d,packID:i,paddedSpriteURI:k,sourceHeight:c.height,sourceURI:h.setEnum("image_type",b("StickerAssetType").IMAGE).getURI().toString(),sourceWidth:c.width,spriteURI:a,stickerID:j,subscribedThreadID:e,testID:b("MessengerWebDriverTestIDs").STICKER})},constructEmojiLikeAttachment:function(a,c,d){a=b("MessengerSupportedEmojiUtils").getHotLikeEmojiData(c.body,a.size)||b("MessengerSupportedEmojiUtils").getHotLikeEmojiDataTransition(c.body,a.size);if(!a)return null;a=a.emoji;return b("React").createElement(b("EmojiSticker.react"),{className:"_2poz _ui9",key:"sticker:"+c.message_id,emoji:c.body,emojiImage:a,sourceURI:"",onAttachmentLoad:d})},renderPhotoAttachments:function(a,c,d,e){__p&&__p();var f=a.length;if(!f)return null;var g=c&&c.thread_fbid;c&&!g&&(b("MercuryIDs").isLocalThread(c.thread_id)?null:b("MercuryIDs").getThreadFBIDFromThreadID(c.thread_id));if(f===1){g=a[0];f=b("MercuryAttachment").resizeContain({width:d-h,height:d},{width:g.preview_width,height:g.preview_height});return b("React").createElement("div",{className:"_55pk _59go"+(b("MercuryAttachment").hasAttribution(g)?" _4yjw":"")},b("React").createElement(b("MercuryAttachmentPhoto.react"),{image:g,width:f.width,hasAttribution:b("MercuryAttachment").hasAttribution(g),height:f.height,photoEncodings:g.photo_encodings,message:c,onAttachmentLoad:e,round:!0}),b("React").createElement(b("ChatAttachmentAttribution.react"),{attachment:new(b("ImmutableObject"))(a[0])}))}return b("React").createElement("div",{className:"_55pk"},b("React").createElement(b("MercuryAttachmentPhotoGrid.react"),{images:a,size:d-h,message:c}))},sortAttachmentsStablyByType:function(a){__p&&__p();var c=[b("MercuryAttachment").isEmojiLikeAttachment,b("MercuryAttachment").isPhotoAttachment,b("MercuryAttachment").isShareAttachment,b("MercuryAttachment").isFileAttachment,b("MercuryAttachment").isErrorAttachment];c.push(function(a){return!0});var d=c.map(function(a){return[]});a.forEach(function(a){for(var b=0;b<c.length;b++)if(c[b](a)){d[b].push(a);break}});return Array.prototype.concat.apply([],d)},constructStoryBasedShareAttachment:function(a,c,d,e,f,g){var h,i,j,k=b("MercuryShareAttachmentRenderLocations").CHAT,l=c.share&&c.share.style_list&&c.share.style_list[0]===b("StoryAttachmentStyle").CULTURAL_MOMENT_HOLIDAY_CARD,m=b("MercuryAttachmentLayoutTypeHelper").isAdminType(c)?{maxWidth:260}:{maxWidth:e},n=null;a&&a.platform_xmd&&(n=JSON.parse(a.platform_xmd));j=(j=c)!=null?(j=j.share)!=null?(j=j.messenger_ctas)!=null?(j=j[0])!=null?j.page_id:j:j:j:j;i=(i=c)!=null?(i=i.share)!=null?(i=i.target)!=null?(i=i.items)!=null?(i=i[0])!=null?(i=i.call_to_actions)!=null?(i=i[0])!=null?i.page_id:i:i:i:i:i:i:i;j=j||i;i=j?b("MercuryIDs").getParticipantIDFromUserID(j):a.author;j=b("MessengerFromViewerUtils").isFromViewer(a);h=((h=c)!=null?(h=h.share)!=null?(h=h.style_list)!=null?h[0]:h:h:h)===b("StoryAttachmentStyle").MONTAGE_DIRECT;return b("React").createElement("div",{className:"_3_om"+(d&&!l&&!h?" _3cpq":""),style:m},b("React").createElement(b("MercuryShareAttachment.react"),{attachment:c.share,isFromViewer:j,isSponsored:a.is_sponsored,isVisible:g,location:k,maxWidth:e,messageID:a.message_id,mnMessageType:n&&n.template_type,onComponentLoaded:f,pageID:i,threadID:a.thread_id,timestamp:a.timestamp,author:a.author}))}};e.exports=a}),null);
__d("MercuryAttachments.react",["cx","MercuryAttachment","MercuryAttachmentError.react","MercuryAttachmentMalicious.react","MercuryAttachmentRenderer","MessengerHotLikePreview.react","MessengerWebDriverTestIDs","MNCommerceMessageType","React","SubscriptionsHandler","emptyFunction","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();a=b("React").PropTypes;c=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.$1=function(a){c.props.onAttachmentLoad&&c.props.onAttachmentLoad(a)},c.$2=null,b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidMount=function(){this.$2=new(b("SubscriptionsHandler"))()};d.componentWillUnmount=function(){this.$2&&this.$2.release()};d.$3=function(a){__p&&__p();if(b("MercuryAttachment").isStickerAttachment(a))return b("MercuryAttachmentRenderer").constructStickerComponent(this.props.message,this.props.attachments[0].metadata,this.props.onStickerClick,this.props.isChat,this.$1,this.props.customColor);else if(b("MercuryAttachment").isEmojiLikeAttachment(a)){var c=b("MercuryAttachmentRenderer").constructEmojiLikeAttachment(a,this.props.message,this.$1);return c?c:b("React").createElement(b("MercuryAttachmentError.react"),null)}else if(b("MercuryAttachment").isVoiceAttachment(a))return b("MercuryAttachmentRenderer").renderAudioClip(this.props.attachments[0],this.props.isChat,this.props.customColor,this.props.message,this.$1);else if(b("MercuryAttachment").isVideoAttachment(a))return b("MercuryAttachmentRenderer").renderVideo(a,this.props.isChat,this.props.message,this.$1,this.props.isVisible);else if(b("MercuryAttachment").isShareAttachment(a))return b("MercuryAttachmentRenderer").constructStoryBasedShareAttachment(this.props.message,a,this.props.isChat,this.props.maxWidth,this.$1,this.props.isVisible);else if(b("MercuryAttachment").isFileAttachment(a))return b("MercuryAttachmentRenderer").renderFile(a,this.props.isChat,this.$1);else if(b("MercuryAttachment").isErrorAttachment(a))return b("React").createElement(b("MercuryAttachmentError.react"),null);return b("React").createElement(b("MercuryAttachmentMalicious.react"),null)};d.render=function(){__p&&__p();var a=this;if(this.props.message.is_like_preview)return b("React").createElement(b("MessengerHotLikePreview.react"),{forGameChat:this.props.forGameChat,isChat:this.props.isChat,key:"hlp:"+this.props.message.like_preview_since,since:this.props.message.like_preview_since,customLike:this.props.message.customLike,customColor:this.props.customColor});if(this.props.attachments.length===0)return b("React").createElement("div",this.props);if(this.props.message.commerce_message_type===b("MNCommerceMessageType").RIDE_INTENT)return b("React").createElement("div",this.props);var c=b("MercuryAttachmentRenderer").renderPhotoAttachments(this.props.attachments.filter(b("MercuryAttachment").isPhotoAttachment),this.props.message,this.props.maxWidth,this.$1),d=b("MercuryAttachmentRenderer").sortAttachmentsStablyByType(this.props.attachments.filter(function(a){return!b("MercuryAttachment").isPhotoAttachment(a)})).map(function(c,d){return b("React").createElement("span",{key:d},a.$3(c))});return b("React").createElement("div",babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,d.length>0?"_6dm2":""),"data-testid":b("MessengerWebDriverTestIDs").ATTACHMENT_ROOT}),c,d,this.props.afterDecorators,this.props.renderProgressBar&&this.props.renderProgressBar(),this.props.attachments.every(function(a){return!b("MercuryAttachment").isShareAttachment(a)})?this.props.innerDecorators:null)};return c}(b("React").Component);c.propTypes={afterDecorators:a.arrayOf(a.element),attachments:a.array.isRequired,className:a.string,customColor:a.string,customLike:a.object,forGameChat:a.bool,maxWidth:a.number.isRequired,message:a.object.isRequired,isChat:a.bool,isVisible:a.bool,onAttachmentLoad:a.func,onStickerClick:a.func,onUnwrap:a.func,innerDecorators:a.element};c.defaultProps={isChat:!1,onAttachmentLoad:b("emptyFunction"),onStickerClick:b("emptyFunction")};e.exports=c}),null);