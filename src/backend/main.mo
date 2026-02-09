import Map "mo:core/Map";
import List "mo:core/List";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Migration "migration";

(with migration = Migration.run)
actor {
  type FaqEntry = {
    question : Text;
    answer : Text;
    isActive : Bool;
    lastUpdated : Int;
  };

  type TeamMember = {
    name : Text;
    position : Text;
    bio : Text;
    photoUrl : Text;
  };

  type PricingDetail = {
    description : Text;
    price : Text;
    isActive : Bool;
    lastUpdated : Int;
  };

  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  type UserRegistration = {
    name : Text;
    email : Text;
    phone : Text;
    timestamp : Int;
    hasConsented : Bool;
  };

  let faqEntries = Map.empty<Text, FaqEntry>();
  let teamMembers = Map.empty<Text, TeamMember>();
  let contactMessages = List.empty<ContactMessage>();
  let userRegistrations = List.empty<UserRegistration>();
  var pricingDetail : ?PricingDetail = null;

  public shared ({ caller }) func addFaqEntry(question : Text, answer : Text) : async () {
    let now = Time.now();
    let entry : FaqEntry = {
      question;
      answer;
      isActive = true;
      lastUpdated = now;
    };
    faqEntries.add(question, entry);
  };

  public shared ({ caller }) func updateFaqEntry(question : Text, answer : Text, isActive : Bool) : async () {
    let now = Time.now();
    let entry : FaqEntry = {
      question;
      answer;
      isActive;
      lastUpdated = now;
    };
    faqEntries.add(question, entry);
  };

  public shared ({ caller }) func addTeamMember(name : Text, position : Text, bio : Text, photoUrl : Text) : async () {
    let member : TeamMember = {
      name;
      position;
      bio;
      photoUrl;
    };
    teamMembers.add(name, member);
  };

  public shared ({ caller }) func submitContactMessage(name : Text, email : Text, message : Text) : async () {
    let now = Time.now();
    let contact : ContactMessage = {
      name;
      email;
      message;
      timestamp = now;
    };
    contactMessages.add(contact);
  };

  public shared ({ caller }) func registerUser(name : Text, email : Text, phone : Text, hasConsented : Bool) : async () {
    let now = Time.now();
    let registration : UserRegistration = {
      name;
      email;
      phone;
      timestamp = now;
      hasConsented;
    };
    userRegistrations.add(registration);
  };

  public shared ({ caller }) func setPricingDetails(description : Text, price : Text) : async () {
    let now = Time.now();
    let detail : PricingDetail = {
      description;
      price;
      isActive = true;
      lastUpdated = now;
    };
    pricingDetail := ?detail;
  };

  public query ({ caller }) func getAllActiveFaqEntries() : async [FaqEntry] {
    let activeEntries = List.empty<FaqEntry>();
    for ((_, entry) in faqEntries.entries()) {
      if (entry.isActive) {
        activeEntries.add(entry);
      };
    };
    activeEntries.toArray();
  };

  public query ({ caller }) func getTeamMembers() : async [TeamMember] {
    teamMembers.values().toArray();
  };

  public query ({ caller }) func getPricingDetails() : async ?PricingDetail {
    pricingDetail;
  };
};
