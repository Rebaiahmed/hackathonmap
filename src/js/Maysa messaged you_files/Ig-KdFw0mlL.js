if (self.CavalryLogger) { CavalryLogger.start_js(["mwZpw"]); }

__d("FBStoriesLiveVideoActions",["FBStoriesDispatcher","FBStoriesLiveVideoActionTypes"],(function(a,b,c,d,e,f){"use strict";var g=b("FBStoriesDispatcher").dispatch;a={setUIComponents:function(a,c,d,e,f){g({type:b("FBStoriesLiveVideoActionTypes").SET_UI_COMPONENTS,videoID:a,uiComponents:{ufi:c,reactionsMenu:d,topSection:e,ufiScrollableArea:f}})},removeUIComponents:function(){g({type:b("FBStoriesLiveVideoActionTypes").REMOVE_UI_COMPONENTS})},loadUIComponentsFailed:function(a){g({type:b("FBStoriesLiveVideoActionTypes").LOAD_UI_COMPONENTS_FAILED,videoID:a})}};e.exports=a}),null);
__d("FBStoriesLiveVideoUIHelper",["FBStoriesLiveVideoActions"],(function(a,b,c,d,e,f){"use strict";a={setUIComponents:function(a,c,d,e,f){b("FBStoriesLiveVideoActions").setUIComponents(a,c,d,e,f)},loadUIComponentsFailed:function(a){b("FBStoriesLiveVideoActions").loadUIComponentsFailed(a)}};e.exports=a}),null);