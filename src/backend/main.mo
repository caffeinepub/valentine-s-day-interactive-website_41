import Runtime "mo:core/Runtime";

actor {
  public shared ({ caller }) func updateLetter(newContent : Text) : async () {
    Runtime.trap("Currently you cannot update the love letter content at this stage of our relationship, please try again later.");
  };

  public shared ({ caller }) func uploadPhoto(photo : Blob) : async () {
    Runtime.trap("Cannot upload new photos at the moment, we are working on this feature, please try again later.");
  };

  public shared ({ caller }) func addGift(giftName : Text, description : Text) : async () {
    Runtime.trap("Cannot add gifts at the moment, this feature will be available soon, please try again later.");
  };

  // Add more stubs for future features as needed
};
