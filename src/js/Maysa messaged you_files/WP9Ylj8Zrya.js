if (self.CavalryLogger) { CavalryLogger.start_js(["sdyS4"]); }

__d("SUISplitButtonUniform.fds",["ix","cssVar","React","SUIGlyphIcon.react","asset"],(function(a,b,c,d,e,f,g,h){"use strict";a={chevronPadding:"4px",use:{confirm:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254")}),dividerColor:"#FFFFFF"},"default":{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("481883"),srcDisabled:g("482773")}),dividerColor:"#CCD0D5"},special:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254")}),dividerColor:"#FFFFFF"},flat:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("481883"),srcDisabled:g("482773")}),dividerColor:"#DADDE1"},flatWhite:{chevron:b("React").createElement(b("SUIGlyphIcon.react"),{srcDefault:g("483254")}),dividerColor:"#FFFFFF"}}};e.exports=a}),null);
__d("FDSPrivateSplitButtonTheme.fds18",["SUIActionMenuUniform.fds","SUIButtonUniform.fds","SUIDropdownMenuUniform.fds","SUISplitButtonUniform.fds","makeSUIFDSPrivateTheme"],(function(a,b,c,d,e,f){"use strict";a=b("makeSUIFDSPrivateTheme")("FDSSplitButton",{SUIActionMenu:b("SUIActionMenuUniform.fds"),SUIButton:b("SUIButtonUniform.fds"),SUIDropdownMenu:b("SUIDropdownMenuUniform.fds"),SUISplitButton:b("SUISplitButtonUniform.fds")});e.exports=a}),null);
__d("FDSPrivateSplitButtonThemeContext",["FDSPrivateSplitButtonTheme.fds18","React"],(function(a,b,c,d,e,f){"use strict";e.exports=b("React").createContext(b("FDSPrivateSplitButtonTheme.fds18"))}),null);
__d("SUISplitButton.react",["cx","fbt","React","SUIButton.react","SUIComponent","SUIDropdownMenu.react","SUIDropdownMenuContext","SUISelectorOption.react","SUISelectorSeparator.react","SUITheme","emptyFunction","intersectArrays","joinClasses","mergeDeep","shallowEqual"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={menu:c.$SUISplitButton1(c.props),context:{menuAlignment:"right",renderButton:c.$SUISplitButton2.bind(babelHelpers.assertThisInitialized(c))}},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidUpdate=function(a,c){(a.children!==this.props.children||a.menu!==this.props.menu||!b("shallowEqual")(this.$SUISplitButton3(a),this.$SUISplitButton3()))&&this.setState({menu:this.$SUISplitButton1()})};d.$SUISplitButton3=function(a){a===void 0&&(a=this.props);return{children:a.children,contextualLayerBehaviors_DEPRECATED:a.contextualLayerBehaviors_DEPRECATED,dropdownMaxHeight_DEPRECATED:a.dropdownMaxHeight_DEPRECATED,dropdownWidth_DEPRECATED:a.dropdownWidth_DEPRECATED,menuAlignment_DEPRECATED:a.menuAlignment_DEPRECATED,menuPosition_DEPRECATED:a.menuPosition_DEPRECATED,shouldHideOnMouseLeave_DEPRECATED:a.shouldHideOnMouseLeave_DEPRECATED,onChange_DEPRECATED:a.onChange_DEPRECATED}};d.$SUISplitButton1=function(a){a===void 0&&(a=this.props);return(a=a.menu)!=null?a:i(this.$SUISplitButton3())};d.$SUISplitButton4=function(){return this.props.uniformOverride?b("mergeDeep")(b("SUITheme").get(this).SUISplitButton,this.props.uniformOverride):b("SUITheme").get(this).SUISplitButton};d.$SUISplitButton2=function(a){var c,d=this.$SUISplitButton4();return b("React").createElement(b("SUIButton.react"),{borderedSides:b("intersectArrays")(["top","right","bottom"],this.props.borderedSides),className_DEPRECATED:"_764l",disabled:this.props.disabled,height:this.props.height,icon:d.use[this.props.use].chevron,label:(c=a.label)!=null?c:h._("Open Dropdown"),labelIsHidden:!0,onClick:a.onMenuButtonClick,roundedCorners:b("intersectArrays")(["topRight","bottomRight"],this.props.roundedCorners),theme:this.props.theme,uniformOverride:{padding:{normal:{button:"0",icon:"0",onlyIcon:d.chevronPadding},"short":{button:"0",icon:"0",onlyIcon:d.chevronPadding},tall:{button:"0",icon:"0",onlyIcon:d.chevronPadding}}},use:this.props.use})};d.render=function(){__p&&__p();var a=this.props;a.children;var c=a.className_DEPRECATED,d=a.disabled,e=a.height,f=a.margin,g=a.maxWidth;a.menu;var h=a.minWidth,i=a.style;a.theme;a.uniformOverride;var j=a.use,k=a.width;a.contextualLayerBehaviors_DEPRECATED;a.dropdownMaxHeight_DEPRECATED;a.dropdownWidth_DEPRECATED;a.menuAlignment_DEPRECATED;a.menuPosition_DEPRECATED;a.shouldHideOnMouseLeave_DEPRECATED;a.onChange_DEPRECATED;a=babelHelpers.objectWithoutPropertiesLoose(a,["children","className_DEPRECATED","disabled","height","margin","maxWidth","menu","minWidth","style","theme","uniformOverride","use","width","contextualLayerBehaviors_DEPRECATED","dropdownMaxHeight_DEPRECATED","dropdownWidth_DEPRECATED","menuAlignment_DEPRECATED","menuPosition_DEPRECATED","shouldHideOnMouseLeave_DEPRECATED","onChange_DEPRECATED"]);var l=this.$SUISplitButton4(),m=g!==void 0||h!==void 0||k!==void 0;g=m?babelHelpers["extends"]({},i,{maxWidth:g,minWidth:h,width:k}):i;h=b("joinClasses")(c,f,"_4nka"+(m?" _3hk3":""));return b("React").createElement("div",{className:h,style:g},b("React").createElement(b("SUIButton.react"),babelHelpers["extends"]({},a,{borderedSides:b("intersectArrays")(["top","bottom","left"],this.props.borderedSides),className_DEPRECATED:"_2a2d",disabled:d,height:e,roundedCorners:b("intersectArrays")(["topLeft","bottomLeft"],this.props.roundedCorners),use:j})),b("React").createElement("div",{className:"_449i",style:{background:l.use[j].dividerColor,height:b("SUITheme").get(this).SUIButton.height[e]}}),b("React").createElement(b("SUIDropdownMenuContext").Provider,{value:this.state.context},this.state.menu))};return c}(b("SUIComponent"));a.defaultProps=b("SUIButton.react").defaultProps;function i(a){var c=b("React").Children.toArray(a.children).map(function(c){var d=c.type,e=c.props;switch(d){case b("SUISelectorOption.react"):return{type:"item","data-testid":e["data-testid"],isDisabled:e.disabled,icon:e.icon,label:e.children,description:(d=e.tooltip)!=null?d:void 0,onClick:function(){typeof a.onChange_DEPRECATED==="function"&&a.onChange_DEPRECATED(e.value)}};case b("SUISelectorSeparator.react"):return{type:"separator"};default:return{type:"item",isDisabled:!0,label:c,onClick:b("emptyFunction")}}});return b("React").createElement(b("SUIDropdownMenu.react"),{contextualLayerBehaviors:a.contextualLayerBehaviors_DEPRECATED,dropdownWidth:a.dropdownWidth_DEPRECATED,items:c,maxHeight:a.dropdownMaxHeight_DEPRECATED,menuAlignment:a.menuAlignment_DEPRECATED,menuPosition:a.menuPosition_DEPRECATED,shouldHideOnMouseLeave:a.shouldHideOnMouseLeave_DEPRECATED})}e.exports=a}),null);
__d("FDSSplitButton.react",["cx","fbt","FDSDropdownMenu.react","FDSDropdownSelectorOption.react","FDSDropdownSelectorSeparator.react","FDSPrivateSplitButtonThemeContext","React","SUIBorderUtils","SUIButton.react","SUIDropdownMenuContext","SUISplitButton.react","intersectArrays","makeFDSStandardComponent","shallowEqual"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){var b,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return(b=c=a.call.apply(a,[this].concat(e))||this,c.state={menu:c.$1(c.props),context:{menuAlignment:"right",renderButton:c.$2.bind(babelHelpers.assertThisInitialized(c))}},b)||babelHelpers.assertThisInitialized(c)}var d=c.prototype;d.componentDidUpdate=function(a,c){(a.children!==this.props.children||a.menu!==this.props.menu||!b("shallowEqual")(this.$3(a),this.$3()))&&this.setState({menu:this.$1()})};d.$3=function(a){a===void 0&&(a=this.props);return{children:a.children,contextualLayerBehaviors_DEPRECATED:a.contextualLayerBehaviors_DEPRECATED,dropdownMaxHeight_DEPRECATED:a.dropdownMaxHeight_DEPRECATED,dropdownWidth_DEPRECATED:a.dropdownWidth_DEPRECATED,menuAlignment_DEPRECATED:a.menuAlignment_DEPRECATED,menuPosition_DEPRECATED:a.menuPosition_DEPRECATED,shouldHideOnMouseLeave_DEPRECATED:a.shouldHideOnMouseLeave_DEPRECATED,onChange_DEPRECATED:a.onChange_DEPRECATED}};d.$1=function(a){a===void 0&&(a=this.props);return(a=a.menu)!=null?a:k(this.$3())};d.$2=function(a){var c,d=this.context.SUISplitButton,e=j(this.props.use);return b("React").createElement(b("SUIButton.react"),{borderedSides:b("intersectArrays")(["top","right","bottom"],this.props.borderedSides),className_DEPRECATED:"_764l",disabled:this.props.isDisabled,height:i(this.props.size),icon:d.use[e].chevron,label:(c=a.label)!=null?c:h._("Open Dropdown"),labelIsHidden:!0,onClick:a.onMenuButtonClick,roundedCorners:b("intersectArrays")(["topRight","bottomRight"],this.props.roundedCorners),theme:this.context,uniformOverride:{padding:{normal:{button:"0",icon:"0",onlyIcon:d.chevronPadding},"short":{button:"0",icon:"0",onlyIcon:d.chevronPadding},tall:{button:"0",icon:"0",onlyIcon:d.chevronPadding}}},use:e})};d.render=function(){var a=this.props;return b("React").createElement(b("SUISplitButton.react"),{"aria-haspopup":a["aria-haspopup"],borderedSides:a.borderedSides,"data-testid":a["data-testid"],"data-tooltip-position":a.tooltipPosition,disabled:a.isDisabled,height:i(a.size),href:a.href,icon:a.icon,id:a.id,isDepressed:a.isDepressed,label:a.label,labelIsHidden:a.labelIsHidden,layerAction:a.layerAction,margin:a.margin,maxWidth:a.maxWidth,menu:b("React").createElement(b("SUIDropdownMenuContext").Provider,{value:this.state.context},this.state.menu),minWidth:a.minWidth,onBlur:a.onBlur,onClick:a.onClick,onFocus:a.onFocus,onKeyDown:a.onKeyDown,onKeyUp:a.onKeyUp,onMouseDown:a.onMouseDown,onMouseEnter:a.onMouseEnter,onMouseLeave:a.onMouseLeave,onMouseUp:a.onMouseUp,rel:a.rel,roundedCorners:a.roundedCorners,style:a.style,target:a.target,theme:this.context,tooltip:a.tooltip,tooltipDelay:a.tooltipDelay,type:a.type,use:j(a.use),width:a.width})};return c}(b("React").Component);a.contextType=b("FDSPrivateSplitButtonThemeContext");a.defaultProps={borderedSides:b("SUIBorderUtils").ALL_SIDES,isDisabled:!1,labelIsHidden:!1,roundedCorners:b("SUIBorderUtils").ALL_CORNERS,size:"medium",type:"button",use:"default"};function i(a){if(a==="small")return"short";return a==="large"?"tall":"normal"}function j(a){return a==="primary"?"confirm":a}function k(a){__p&&__p();var c=function(b){return function(){typeof a.onChange_DEPRECATED==="function"&&a.onChange_DEPRECATED(b)}},d=b("React").Children.toArray(a.children).map(function(a){var d=a.type;a=a.props;switch(d){case b("FDSDropdownSelectorOption.react"):return{type:"item","data-testid":a["data-testid"],isDisabled:a.isDisabled,icon:a.icon,label:a.children,description:typeof a.tooltip==="string"?a.tooltip:void 0,onClick:c(a.value)};case b("FDSDropdownSelectorSeparator.react"):return{type:"separator"};default:return null}}).filter(Boolean);return b("React").createElement(b("FDSDropdownMenu.react"),{contextualLayerBehaviors:a.contextualLayerBehaviors_DEPRECATED,dropdownWidth:a.dropdownWidth_DEPRECATED,items:d,maxHeight:a.dropdownMaxHeight_DEPRECATED,menuAlignment:a.menuAlignment_DEPRECATED,menuPosition:a.menuPosition_DEPRECATED,shouldHideOnMouseLeave:a.shouldHideOnMouseLeave_DEPRECATED})}e.exports=b("makeFDSStandardComponent")("FDSSplitButton",a)}),null);
__d("XUIDialogDoneButton.react",["fbt","React","XUIDialogButton.react"],(function(a,b,c,d,e,f,g){__p&&__p();a=function(a){"use strict";babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.render=function(){return b("React").createElement(b("XUIDialogButton.react"),babelHelpers["extends"]({},this.props,{use:"confirm",label:g._("Done")}))};return c}(b("React").Component);e.exports=a}),null);
__d("LivingRoomUFIDispatcher",["ExplicitRegistrationReactDispatcher"],(function(a,b,c,d,e,f){"use strict";a=function(a){babelHelpers.inheritsLoose(b,a);function b(b){b=a.call(this,b)||this;babelHelpers.assertThisInitialized(b).dispatch=b.dispatch.bind(babelHelpers.assertThisInitialized(b));return b}return b}(b("ExplicitRegistrationReactDispatcher"));e.exports=new a({strict:!0})}),null);
__d("LivingRoomUFIActions",["LivingRoomUFIDispatcher"],(function(a,b,c,d,e,f){"use strict";a={clearUFIParams:function(a){a={type:"CLEAR_UFI",instanceKey:a};b("LivingRoomUFIDispatcher").dispatch(a)},setUFIParams:function(a,c,d){a={type:"SET_UFI",instanceKey:a,ufiMarkup:c,config:d};b("LivingRoomUFIDispatcher").dispatch(a)}};e.exports=a}),null);
__d("LivingRoomUFIStore",["FluxReduceStore","LivingRoomUFIDispatcher","immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=function(b){babelHelpers.inheritsLoose(a,b);function a(a){return b.call(this,a)||this}return a}(b("immutable").Record({markup:null,config:null})),h=function(b){babelHelpers.inheritsLoose(a,b);function a(){return b.apply(this,arguments)||this}var c=a.prototype;c.clearUFIParams=function(a){return this.set("ufiState",this.ufiState.set(a,null))};c.setUFIParams=function(a,b,c){return this.set("ufiState",this.ufiState.set(a,new g({markup:b,config:c})))};return a}(b("immutable").Record({ufiState:b("immutable").Map()}));a=function(a){__p&&__p();babelHelpers.inheritsLoose(b,a);function b(){return a.apply(this,arguments)||this}var c=b.prototype;c.getInitialState=function(){return new h()};c.getConfig=function(a){a=this.getState().ufiState.get(a);return a&&a.config};c.getUFIMarkup=function(a){a=this.getState().ufiState.get(a);return a&&a.markup};c.reduce=function(a,b){switch(b.type){case"CLEAR_UFI":return a.clearUFIParams(b.instanceKey);case"SET_UFI":return a.setUFIParams(b.instanceKey,b.ufiMarkup,b.config);default:b.type;return a}};return b}(b("FluxReduceStore"));a.__moduleID=e.id;e.exports=new a(b("LivingRoomUFIDispatcher"))}),null);
__d("XLivingRoomUFIController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/async/watchparty/{living_room_id}/",{living_room_id:{type:"FBID",required:!0}})}),null);
__d("LivingRoomUFIHelper",["ActorURI","AsyncRequest","LivingRoomStore","LivingRoomUFIActions","LivingRoomUFIDispatcher","LivingRoomUFIStore","XLivingRoomUFIController"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=1e3;a={loadUFI:function(a,c){__p&&__p();var d=this;if(b("LivingRoomUFIStore").getConfig(a))return;c=c;c==null&&(c=b("LivingRoomStore").getNullableActorID(a));var e=b("XLivingRoomUFIController").getURIBuilder().setFBID("living_room_id",a).getURI();c=c!=null?b("ActorURI").create(e,c):e;new(b("AsyncRequest"))().setURI(c).setAllowCrossPageTransition(!0).setErrorHandler(function(){setTimeout(function(){return d.loadUFI(a)},g)}).send()},updateUFI:function(a,c,d,e){b("LivingRoomUFIDispatcher").explicitlyRegisterStores([b("LivingRoomUFIStore")]),b("LivingRoomUFIActions").setUFIParams(a,c,d)}};e.exports=a}),null);