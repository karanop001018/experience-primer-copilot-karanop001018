function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'app/member/skills-member.html',
    controller: 'SkillsMemberCtrl',
    controllerAs: 'skillsMemberCtrl',
    bindToController: true
  };
}