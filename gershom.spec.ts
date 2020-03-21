import { it, describe } from "mocha";

const When = describe;
const And = describe;
const Then = it;

When("PR is approved msg:PRApproved", () => {
  And("all the required checks have passed state:AllPrChecksDone", () => {
    Then("it enqueues PR with msg:PREnqueued");
  });
  And(
    "asome of the required checks are pending state:SomePRChecksPending",
    () => {
      Then("it enqueues pr with msg:PRPendingEnqueued ");
    }
  );
  And("asome of the checks are failed state:SomePRChecksFailed", () => {
    Then("it emits an msg:ApprovalRejected");
  });
});

When("msg:PRStatusUpdated Comes in ", () => {
  And("state:PRStatusRequired", () => {
    And("state:PRPendingEnqueued", () => {
      Then("emits msg:PRNotMergeable");
      Then("emits: msg:GithubReRequestReview");
    });
    Then("updates state:PRChecksFailed");
  });
});
