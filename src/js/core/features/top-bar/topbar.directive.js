angular.module('linuxDash').directive('topBar', ['$rootScope', function($rootScope) {
  return {
    scope: {
      heading: '=',
      refresh: '&',
      lastUpdated: '=',
      toggleVisibility: '&',
      isHidden: '=',
      info: '=', // not being used; needs a good ui solution
    },
    template: '\
      <div class="top-bar"> \
        <span class="heading"> &#9776; {{ heading }}</span> \
        <button \
          class="ld-top-bar-btn minimize-btn" \
          ng-click="toggleVisibility()" \
          ng-class="{ active: isHidden }">-</button> \
        <button ng-if="!isHidden" class="ld-top-bar-btn" ng-click="refresh()">↺</button> \
      </div> \
    ',
    link: function(scope, element, attrs) {
      var $refreshBtn = element.find('refresh-btn').eq(0)

      if (typeof attrs.noRefreshBtn !== 'undefined') {
        $refreshBtn.remove()
      }
    }
  }
}])
