if (self.CavalryLogger) { CavalryLogger.start_js(["D1MKs"]); }

__d("MuteMemberHelper",["Arbiter","PopoverAsyncMenu"],(function(a,b,c,d,e,f){"use strict";var g="group_member_muted";a={emitMemberMuted:function(a){b("Arbiter").inform(g,{groupID:a})},refetchOnGroupMemberMuted:function(a,c){b("Arbiter").subscribe(g,function(b,d){d.groupID===c&&a._refetchMenu()})}};e.exports=a}),null);
__d("RemoveGroupAppCTAHelper",["Arbiter"],(function(a,b,c,d,e,f){"use strict";var g="group_app_cta_removed";a={emitGroupAppCTARemoved:function(a){b("Arbiter").inform(g,{groupPostID:a})},refetchOnGroupAppCTARemoved:function(a,c){b("Arbiter").subscribe(g,function(b,d){d.groupPostID===c&&a._refetchMenu()})}};e.exports=a}),null);
__d("TurnOnMemberPostApprovalHelper",["Arbiter"],(function(a,b,c,d,e,f){"use strict";var g="group_member_post_approval";a={emitMemberPostApproval:function(a){b("Arbiter").inform(g,{groupID:a})},refetchOnGroupMemberPostApproval:function(a,c){b("Arbiter").subscribe(g,function(b,d){d.groupID===c&&a._refetchMenu()})}};e.exports=a}),null);
__d("LinkedGroupsTooltipHandler",["BasicFBNux","EventEmitter","Run"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g="XOUT_LINKED_GROUPS_NUX";a=function(a){__p&&__p();babelHelpers.inheritsLoose(c,a);function c(){return a.apply(this,arguments)||this}var d=c.prototype;d.register=function(a,b){var c=this;this.addListener(g,function(){c.showNUX(a,b)})};d.showNUX=function(a,c){b("Run").onAfterLoad(function(){a.show(),b("BasicFBNux").onView(c),b("BasicFBNux").subscribeHide(a,c)})};d.emitXoutLinkedGroupsUpsell=function(){this.emit(g)};return c}(b("EventEmitter"));e.exports=new a()}),null);
__d("GroupView",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ADMINS:"admins",ADMINIFCAN:"_admin_if_can_",ADMIN_ACTIVITIES:"admin_activities",ANNOUNCEMENTS:"announcements",BADGE_MEMBER_LIST:"badge_member_list",BLOCKED:"blocked",BROWSE_CATEGORIES:"browsecategories",WORK_CHAT:"work_chat",CREATEDOC:"createdoc",DRAFT_POSTS:"draft_posts",FIND_PLAYERS:"find_players",FRIENDS:"friends",FOLLOWEES:"followees",INSIGHTS:"insights",MULTI_COMPANY_COMPANIES:"companies",BROWSE_MEMBER_BADGES:"browse_member_badges",MANAGE_MEMBER_BADGES:"manage_member_badges",MEMBER_BADGE:"member_badge",SETUP_RULES:"setup_rules",MEMBERS:"members",MEMBERS_WITH_THINGS_IN_COMMON:"members_with_things_in_common",MEMBERSHIP_CRITERIA_ANSWER:"membership_criteria_answer",DOC:"doc",EDIT:"edit",EVENTS:"events",FILES:"files",INTEGRATIONS:"integrations",FOR_SALE_SEARCH:"for_sale_search",GAMES:"games",GROUP:"group",JOIN:"_join_",SUBGROUPS:"groups",MY_GROUPS:"my_groups",CHATS:"chats",INFO:"info",LEARNING_CONTENT:"learning_content",LEAVE:"leave",LINKED_GROUP_REQUESTS:"linked_group_requests",LIVING_ROOM:"living_room",LOCAL_MEMBERS:"local_members",NOTIFICATIONS:"notifications",PENDING:"pending",PENDING_STORIES:"pending_stories",PERMALINK:"permalink",PHOTOS:"photos",PINNED:"pinned",RECENTLY_JOINED:"recently_joined",RECOMMENDED:"suggestions",RECOMMENDATIONS:"recommendations",REPORTED:"reported",REPORTED_FACEBOOK:"reported_facebook",REQUESTS:"requests",REQUIRE_POST_APPROVAL_MEMBERS:"require_post_approval_members",SAVED:"saved",SEARCH:"search",SCHEDULED:"scheduled",SUPPORT:"support",TASKS:"tasks",TOPICS:"topics",TRUSTED_MEMBERS:"trusted_members",POST_TAGS:"post_tags",POST_TAGS_LIST:"post_tags_list",INVITED:"invited",YOUR_POSTS:"yourposts",FORSALE_POSTS:"forsaleposts",VIDEOS:"videos",WALL:"",COMMUNITY_TRENDING:"community_trending",ABOUT:"about",RULES:"rules",PAGE_MEMBERS:"page_members",OFFERS:"offers",MENTORSHIP:"mentorship",MENTORSHIP_APPLICATION:"mentorship_application",ACTIVE_MEMBERS:"active_members",UNAVAILABLE_ACCOUNTS:"unavailable_accounts",MOST_ACTIVE:"most_active",GROUPVERSARY:"groupversary",GROUPVERSARIES:"groupversaries",MEETUPS:"meetups",APP_INSTALLS:"app_installs",FLAGGED:"flagged",ALERTED:"alerted",SAFETY_HUB:"safety_hub",BUY_SELL_GROUP_DISCUSSIONS:"buy_sell_group_discussions",JOBS:"jobs",GROUP_QUALITY:"group_quality",WORK_RECENTLY_DEACTIVATED:"work_recently_deactivated",BUY_SELL_GROUP_INVENTORY:"buy_sell_group_inventory",WATCH_PARTIES:"watch_parties",COLLECTIONS:"collections"})}),null);
__d("GroupSubNavigationLogger",["cx","CSS","Event","FunnelLogger","GroupView"],(function(a,b,c,d,e,f,g){__p&&__p();var h=null,i=0,j,k=null,l="GROUP_MALL_NAVIGATION_FUNNEL",m="_2yap",n="_8ue";a=function(){"use strict";__p&&__p();function a(){}var c=a.prototype;c.construct=function(){};a.$1=function(){if(b("FunnelLogger").getFunnelInstance(l))return;b("FunnelLogger").startFunnel(l)};a.$2=function(a,c){c===void 0&&(c={}),this.$1(),b("FunnelLogger").appendActionWithPayload(l,a,c)};a.register=function(c,d,e,f){j=e,h=d,i=c,k=f,b("Event").listen(j,"click",a.onClickSelector.bind(this)),a.$3(!0)};a.onClickSelector=function(){a.$1(),a.$3(!1)};a.$3=function(a){__p&&__p();if(j===null)return;var c,d,e=j.children;for(var f=0;f<e.length;f++){var g=e[f];b("CSS").hasClass(g,m)?d=g:b("CSS").hasClass(g,n)&&(c=g)}a&&(c=d);if(c&&d){g=c.getAttribute("data-key");g===b("GroupView").WALL&&(g="wall");e=d.getAttribute("data-key");e===b("GroupView").WALL&&(e="wall");k==null&&(k=!1);g&&this.$2(g,{group_id:h,account_id:i,is_logged_in:k,tab_name:g,previous_tab_name:e})}};return a}();e.exports=a}),null);
__d("GroupViewportDurationTracking",["csx","Banzai","StreamViewportTracking","ge","viewportTrackingBuilder"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,c){var d=a.root_element_id||"pagelet_group_mall";d=b("ge")(d);return b("StreamViewportTracking").getBehavior(a,d,c)}var i=function(c){__p&&__p();babelHelpers.inheritsLoose(a,c);function a(){return c.apply(this,arguments)||this}var d=a.prototype;d.init=function(a){c.prototype.init.call(this,a)};d.getAllStoriesFromCache=function(){return this.behavior.getAllStories()};d.getSessionID=function(){return null};d.cleanup=function(){j.clearSingleton(),c.prototype.cleanup.call(this)};d.sendDataToLog=function(a,c){this.useBanzai&&b("Banzai").post("group_feed_tracking",c)};return a}(b("StreamViewportTracking")),j=b("viewportTrackingBuilder")(function(a){var b=new i(h(a,"._5pat"));b.init(a);return b});j.init=j.factory.bind(j);e.exports=j}),null);
__d("XUISubNavigationAccessoryClearableBadge",["Event","SubscriptionsHandler","XUISubNavigationLoader"],(function(a,b,c,d,e,f){"use strict";var g=null;a={init:function(a,c){g||(g=new(b("SubscriptionsHandler"))(),g.addSubscriptions(b("XUISubNavigationLoader").onLeave(function(){g&&g.release(),g=null}))),g.addSubscriptions(b("Event").listen(a,"click",function(){return c.setCount(0)}))}};e.exports=a}),null);