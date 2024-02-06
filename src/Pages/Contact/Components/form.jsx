export default function ContactForm() {
  return (
    <>
      <h2>Let's Chat!</h2>
      <form
        action="mailto:tyler.cavanaugh24@gmail.com"
        method="post"
        enctype="text/plain"
      >
        Name:<br></br>
        <input type="text" name="name" />
        <br></br>
        E-mail:<br></br>
        <input type="text" name="mail" />
        <br></br>
        Comment:<br></br>
        <input type="text" name="comment" size="50" />
        <br></br>
        <br></br>
        <input type="submit" value="Send" />
        <input type="reset" value="Reset" />
      </form>
    </>
  );
}
