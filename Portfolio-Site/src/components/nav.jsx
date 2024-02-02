import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Nav() {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <Grid item xs={8}>
      <nav className="main-header-menu">
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <div style={linkStyle}>
            <button variant="contained">Home</button>
          </div>
          <div style={linkStyle}>
            <button variant="contained">Login</button>
          </div>
          <div style={linkStyle}>
            <button variant="contained">Register</button>
          </div>
          <div style={linkStyle}>
            <button variant="contained">About</button>
          </div>
          <div style={linkStyle}>
            <button variant="contained">Contact</button>
          </div>
        </section>
      </nav>
    </Grid>
  );
}
