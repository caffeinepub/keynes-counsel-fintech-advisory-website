import Map "mo:core/Map";
import List "mo:core/List";
import Set "mo:core/Set";

module {
  type OldFaqEntry = {
    question : Text;
    answer : Text;
    isActive : Bool;
  };

  type OldTeamMember = {
    name : Text;
    position : Text;
    bio : Text;
    photoUrl : Text;
  };

  type OldPricingDetail = {
    description : Text;
    price : Text;
    isActive : Bool;
  };

  type OldUserRegistration = {
    name : Text;
    email : Text;
    phone : Text;
    timestamp : Int;
  };

  type OldActor = {
    faqEntries : Map.Map<Text, OldFaqEntry>;
    teamMembers : Set.Set<OldTeamMember>;
    contactMessages : List.List<{
      name : Text;
      email : Text;
      message : Text;
      timestamp : Int;
    }>;
    userRegistrations : List.List<OldUserRegistration>;
    pricingDetail : ?OldPricingDetail;
  };

  type NewFaqEntry = {
    question : Text;
    answer : Text;
    isActive : Bool;
    lastUpdated : Int;
  };

  type NewTeamMember = {
    name : Text;
    position : Text;
    bio : Text;
    photoUrl : Text;
  };

  type NewPricingDetail = {
    description : Text;
    price : Text;
    isActive : Bool;
    lastUpdated : Int;
  };

  type NewUserRegistration = {
    name : Text;
    email : Text;
    phone : Text;
    timestamp : Int;
    hasConsented : Bool;
  };

  type NewActor = {
    faqEntries : Map.Map<Text, NewFaqEntry>;
    teamMembers : Map.Map<Text, NewTeamMember>;
    contactMessages : List.List<{
      name : Text;
      email : Text;
      message : Text;
      timestamp : Int;
    }>;
    userRegistrations : List.List<NewUserRegistration>;
    pricingDetail : ?NewPricingDetail;
  };

  public func run(old : OldActor) : NewActor {
    let newFaqEntries = old.faqEntries.map<Text, OldFaqEntry, NewFaqEntry>(
      func(_question, oldFaqEntry) {
        { oldFaqEntry with lastUpdated = 0 };
      }
    );

    let newTeamMembers = Map.empty<Text, NewTeamMember>();

    for (oldTeamMember in old.teamMembers.values()) {
      newTeamMembers.add(oldTeamMember.name, oldTeamMember);
    };

    let newUserRegistrations = old.userRegistrations.map<OldUserRegistration, NewUserRegistration>(
      func(oldRegistration) {
        { oldRegistration with hasConsented = false };
      }
    );

    let newPricingDetail = switch (old.pricingDetail) {
      case (null) { null };
      case (?oldDetail) {
        ?{ oldDetail with lastUpdated = 0 };
      };
    };

    {
      faqEntries = newFaqEntries;
      teamMembers = newTeamMembers;
      contactMessages = old.contactMessages;
      userRegistrations = newUserRegistrations;
      pricingDetail = newPricingDetail;
    };
  };
};
