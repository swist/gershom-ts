import { When, Then } from './support';

When("state:EmptyQueue", () => {
  When("receives msg:PREnqueued", () => {
    Then("emits: msg:NewBatchInFlight");
  });
});

When("state:NonEmptyQueue", () => {
  When("Receives msg:PREnqueued");
});
