// -----------------   Send Mail Loging  Logics ----------------//
const sendmassage = () => {
  const message = {};
  message.name = $("#name").val();
  message.mail = $("#mail").val();
  message.phone = $("#Phone").val();
  message.subject = $("#Subject").find(":selected").text();
  message.regarding = $("textarea#message").val();
  clear();
};
const clear = () => {
  message.name = $("#name").val("");
  message.mail = $("#mail").val("");
  message.phone = $("#Phone").val("");
  message.subject = $("#Subject").find(":selected").text("");
  message.regarding = $("#message").val("");
};
