
// Stuff to do when page loads
$(function () {

  $("#logout").on("click", logout);
  loadInfo();
});

const logout = function () {
  $.post("/api/logout")
    .then(res => {
      window.location.replace("/login");
    });
};

const loadInfo = function () {
  $.get("https://bcsc-service-a3c641-dev.apps.silver.devops.gov.bc.ca/api/userinfo")
    .then(res => {
      if (res.error) {
        return window.location.replace("/login");
      }
      console.log(res.display_name);
      console.log(res.birthdate);
      $("#name").text(res.display_name);
      $("#dob").text(res.birthdate);
    })
    .catch(err => {
      console.log("Error Reading UserInfo", err);
    });
};
