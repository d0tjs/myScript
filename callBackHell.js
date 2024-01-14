function displayMessage(message) {
  console.log(message);
}

function handleInterval(intervalMessage) {
  let intervalId = setInterval(() => {
    displayMessage(intervalMessage);
  }, 500);

  return intervalId;
}

function handleTimeout(e, s, f, n, id) {
  setTimeout(() => {
    if (!e) {
      s();
      clearInterval(id);
      if (n) {
        n();
      }
    } else {
      f();
      clearInterval(id);
    }
  }, 2000);
}

function success() {
  displayMessage("<<<<<<<<<SUCCESS>>>>>>>>>>");
}

function failure() {
  displayMessage("*******FAILURE********");
}

function goingToSchool(errorStatus, successCall, failureCall, nextTask) {
  displayMessage("Leaving home for school");
  const intervalId = handleInterval("On the way to school");
  handleTimeout(errorStatus, successCall, failureCall, nextTask, intervalId);
}

function takingClass(errorStatus, successCall, failureCall, nextTask) {
  displayMessage("Now time for class");
  const intervalId = handleInterval("Boring class is happening");
  handleTimeout(errorStatus, successCall, failureCall, nextTask, intervalId);
}

function backToHome(errorStatus, successCall, failureCall, nextTask) {
  displayMessage("Going back to home");
  const intervalId = handleInterval("On the way back");
  handleTimeout(errorStatus, successCall, failureCall, nextTask, intervalId);
}

function takeRest(errorStatus, successCall, failureCall, nextTask) {
  displayMessage("Taking rest");
  const intervalId = handleInterval("Having rest time");
  handleTimeout(errorStatus, successCall, failureCall, nextTask, intervalId);
}

goingToSchool(false, success, failure, function () {
  takingClass(false, success, failure, function () {
    backToHome(true, success, failure, function () {
      takeRest(false, success, failure, function () {
        displayMessage("Finished");
      });
    });
  });
});
