// -----------------   Send Mail Loging  Logics ----------------//
const sendmassage = () => {
  const message = {};
  message.name = $("#name").val();
  message.mail = $("#mail").val();
  message.phone = $("#Phone").val();
  message.subject = $("#Subject").find(":selected").text();
  message.regarding = $("textarea#message").val();

  Email.send({
    SecureToken: "8faf388a-8aac-4e12-8171-dc4942e38dfa",
    To: "dev.gvnarendra@gmail.com",
    From: "dev.gvnarendra@gmail.com",
    Subject: message.subject,
    Body: `This ${message.mail} This My Requirement ${message.regarding}`,
  }).then((message) => alert(message));
  clear();
};
const clear = () => {
  message.name = $("#name").val("");
  message.mail = $("#mail").val("");
  message.phone = $("#Phone").val("");
  message.subject = $("#Subject").find(":selected").text("");
  message.regarding = $("#message").val("");
};

const sendmail = () => {
  const message1 = {};
  message1.mail1 = $("#usermailid").val();
  Email.send({
    SecureToken: "8faf388a-8aac-4e12-8171-dc4942e38dfa",
    To: "dev.gvnarendra@gmail.com",
    From: "dev.gvnarendra@gmail.com",
    Subject:
      "one User Is Send The Her/Him mail Id For talk To you Send the your Responce to him/her",
    Body: `This ${message1.mail1}  my Mail Id I need talk to you I'm wait for your respones`,
  }).then((message) => alert(message));
  clearsendmail();
};
const clearsendmail = () => {
  message1.mail1 = $("#usermailid").val("");
};
// -----------------   Send Mail Loging  Logics ----------------//
