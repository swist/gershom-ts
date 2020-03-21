import {  When, And, Then } from "./support";

When("PreMerge", () => {
  When("Receives msg:PRApproved", () => {
    And("state:AllPrChecksDone", () => {
      Then("emits msg:PREnqueued");
    });
    And("state:SomePRChecksPending", () => {
      Then("emits msg:PRPendingEnqueued ");
    });
    And("state:SomePRChecksFailed", () => {
      Then("emits msg:ApprovalRejected");
    });
  });

  When("msg:RequiredPRCheckFailed Comes in ", () => {
    Then("emits msg:PRNotMergeable");
    And("state:PRPendingEnqueued", () => {
      Then("emits: msg:GithubReRequestReview");
    });
  });

  When("aggregate:PendingPRQueue", () => {
    When("receives: msg:PRNotMergeable", () => {
      Then("removes PR from aggregate:PendingPRQueue");
    });
  });
  When("aggregate:UnmergablePRS", () => {
    When("receives: msg:PRNotMergeable", () => {
      Then("adds PR to aggregate:PendingPRQueue");
      Then("yields state:SomePRChecksFailed");
    });
  });
});

