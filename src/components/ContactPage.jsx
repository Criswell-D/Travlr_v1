
export default function ContactPage() {
  return (
<div className="page contact">
      <h2>Contact Us</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
                <input
                  type="text"
                  value=""
                  className="txtfield"
                />
              </td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>
                <input
                  type="text"
                  value=""
                  className="txtfield"
                />
              </td>
            </tr>
            <tr>
              <td>Message:</td>
              <td>
                <textarea
                  value=""
                  className="txtarea"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  value="Send"
                  className="btn"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}