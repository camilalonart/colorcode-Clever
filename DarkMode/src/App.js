import React from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { SwatchesPicker, ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import ColorPicker from "react-color-picker-text";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import FormatColorFillIcon from "@material-ui/icons/FormatColorFill";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft";
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter";
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight";
import FormatAlignJustifyIcon from "@material-ui/icons/FormatAlignJustify";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import FontPicker from "font-picker-react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
const cleverTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#1D2C41"
    },
    secondary: {
      main: "#02F7BF"
    },
    disabled: {
      main: "#929292"
    }
  }
});

export default function ContinuousSlider() {
  const [opacity, setOpacity] = React.useState(30);
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);
  const [alignment, setAlignment] = React.useState("left");
  const [fontFamily, setFontFamily] = React.useState("Robot");
  const [titleStyleColor, setTitleStyleColor] = React.useState("#777777");
  const [bannerColor, setBannerColor] = React.useState("#f1bd24");
  const [cardColor, setCardColor] = React.useState("#0ccd74");
  const [thirdBackgroundColor, setThirdBackgroundColor] = React.useState(
    "#b81941"
  );
  const [secondBackgroundColor, setSecondBackgroundColor] = React.useState(
    "#a81241"
  );

  const [expanded, setExpanded] = React.useState(false);
  const changeopacity = (event, newValue) => {
    setOpacity(newValue);
  };
  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  const handleChangeAligment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handlePanelChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper
      elevation={3}
      style={{
        backgorund: "#1D2C41",
        backgroundColor: "#1D2C41",
        width: 250,
        widisplay: "flex",
        flexWrap: "wrap",
        padding: 4
      }}
    >
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <ThemeProvider theme={cleverTheme}>
          <ExpansionPanel
            style={{ width: "100%", background: "#1D2C41" }}
            expanded={expanded === "panel1"}
            onChange={handlePanelChange("panel1")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
            >
              <Typography
                color="secondary"
                style={{ margin: 5 }}
                id="continuous-slider"
                gutterBottom
              >
                TITULOS
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ flexDirection: "column" }}>
              <Grid item xs>
                <FontPicker
                  styles={{ margin: 20 }}
                  id="font_family"
                  apiKey="AIzaSyBUZOIquuSOLG35yLjlwIUGz1064pJTKVY"
                  activeFontFamily={fontFamily}
                  style={{ minwidth: 250, padding: 15 }}
                  onChange={Font => setFontFamily({ fontFamily: Font.family })}
                />
              </Grid>
              <Divider style={{ margin: 10, width: 200 }} />
              <Grid item xs>
                <ToggleButtonGroup
                  style={{ minwidth: 250, borderColor: "#02F7BF" }}
                  value={alignment}
                  exclusive
                  onChange={handleChangeAligment}
                >
                  <ToggleButton style={{ borderColor: "#02F7BF" }} value="left">
                    <FormatAlignLeftIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="center"
                  >
                    <FormatAlignCenterIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="right"
                  >
                    <FormatAlignRightIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="justify"
                  >
                    <FormatAlignJustifyIcon color="secondary" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item xs>
                <Divider style={{ margin: 10, width: 200 }} />
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="bold"
                    aria-label="bold"
                  >
                    <FormatBoldIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="italic"
                    aria-label="italic"
                  >
                    <FormatItalicIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="underlined"
                    aria-label="underlined"
                  >
                    <FormatUnderlinedIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="color"
                    aria-label="color"
                  >
                    <FormatColorTextIcon color="secondary" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            style={{ width: "100%", background: "#1D2C41" }}
            expanded={expanded === "panel2"}
            onChange={handlePanelChange("panel2")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
            >
              <Typography
                color="secondary"
                style={{ margin: 5 }}
                id="continuous-slider"
                gutterBottom
              >
                TEXTO EN ITEMS
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ flexDirection: "column" }}>
              <Grid item xs>
                <FontPicker
                  styles={{ margin: 20 }}
                  id="font_family"
                  apiKey="AIzaSyBUZOIquuSOLG35yLjlwIUGz1064pJTKVY"
                  activeFontFamily={fontFamily}
                  style={{ minwidth: 250, padding: 15 }}
                  onChange={Font => setFontFamily({ fontFamily: Font.family })}
                />
              </Grid>
              <Divider style={{ margin: 10, width: 200 }} />
              <Grid item xs>
                <ToggleButtonGroup
                  style={{ minwidth: 250, borderColor: "#02F7BF" }}
                  value={alignment}
                  exclusive
                  onChange={handleChangeAligment}
                >
                  <ToggleButton style={{ borderColor: "#02F7BF" }} value="left">
                    <FormatAlignLeftIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="center"
                  >
                    <FormatAlignCenterIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="right"
                  >
                    <FormatAlignRightIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="justify"
                  >
                    <FormatAlignJustifyIcon color="secondary" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>

              <Grid item xs>
                <Divider style={{ margin: 10, width: 200 }} />
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="bold"
                    aria-label="bold"
                  >
                    <FormatBoldIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="italic"
                    aria-label="italic"
                  >
                    <FormatItalicIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="underlined"
                    aria-label="underlined"
                  >
                    <FormatUnderlinedIcon color="secondary" />
                  </ToggleButton>
                  <ToggleButton
                    style={{ borderColor: "#02F7BF" }}
                    value="color"
                    aria-label="color"
                  >
                    <FormatColorTextIcon color="secondary" />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            style={{ width: "100%", background: "#1D2C41" }}
            expanded={expanded === "panel3"}
            onChange={handlePanelChange("panel3")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
            >
              <Typography
                style={{ margin: 5 }}
                id="continuous-slider"
                gutterBottom
                color="secondary"
              >
                BORDE
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ flexDirection: "column" }}>
              <Grid item xs>
                <Paper style={{ backgroundColor: "#334463", padding: 10 }}>
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs>
                      <Button color="secondary">
                        <FormatColorFillIcon />
                      </Button>
                    </Grid>
                    <Grid item xs>
                      <Slider
                        color="secondary"
                        style={{ width: 130 }}
                        value={opacity}
                        onChange={changeopacity}
                        aria-labelledby="continuous-slider"
                      />
                      <Typography
                        style={{ fontSize: 10 }}
                        id="continuous-slider"
                        gutterBottom
                        color="secondary"
                      >
                        Grosor
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            style={{ width: "100%", background: "#1D2C41" }}
            expanded={expanded === "panel4"}
            onChange={handlePanelChange("panel4")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
            >
              <Typography
                color="secondary"
                style={{ margin: 5 }}
                id="continuous-slider"
                gutterBottom
              >
                TARJETAS
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ flexDirection: "column" }}>
              <Grid item xs style={{ margin: 10 }}>
                <Paper style={{ backgroundColor: "#334463", padding: 10 }}>
                  <Slider
                    color="secondary"
                    style={{ width: 190 }}
                    value={opacity}
                    onChange={changeopacity}
                    aria-labelledby="continuous-slider"
                  />
                  <Typography
                    color="secondary"
                    style={{ fontSize: 10 }}
                    id="continuous-slider"
                    gutterBottom
                  >
                    Sombra
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs style={{ margin: 10 }}>
                <Paper style={{ padding: 10, backgroundColor: "#334463" }}>
                  <Slider
                    color="secondary"
                    style={{ width: 190 }}
                    value={opacity}
                    onChange={changeopacity}
                    aria-labelledby="continuous-slider"
                  />
                  <Typography
                    color="secondary"
                    style={{ fontSize: 10 }}
                    id="continuous-slider"
                    gutterBottom
                  >
                    Puntas redondas
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs style={{ margin: 10 }}>
                <Paper style={{ backgroundColor: "#334463", padding: 10 }}>
                  <Grid
                    container
                    spacing={2}
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item xs style={{ margin: 0 }}>
                      <input
                        type="color"
                        className="cc-colorpicker"
                        style={{
                          background: "none",
                          borderColor: titleStyleColor
                        }}
                        value={bannerColor}
                        onChange={e => setBannerColor(e.target.value)}
                      />

                      <Typography
                        color="secondary"
                        style={{ fontSize: 10 }}
                        id="continuous-slider"
                        gutterBottom
                      >
                        Banner
                      </Typography>
                    </Grid>
                    <Grid item xs style={{ margin: 0 }}>
                      <input
                        type="color"
                        className="cc-colorpicker"
                        style={{
                          background: "none",
                          borderColor: titleStyleColor
                        }}
                        value={cardColor}
                        onChange={e => setCardColor(e.target.value)}
                      />
                      <Typography
                        style={{ fontSize: 10 }}
                        id="continuous-slider"
                        gutterBottom
                        color="secondary"
                      >
                        Tarjeta
                      </Typography>
                    </Grid>
                    <Grid item xs style={{ margin: 0 }}>
                      <input
                        type="color"
                        className="cc-colorpicker"
                        style={{
                          background: "none",
                          borderColor: titleStyleColor
                        }}
                        value={thirdBackgroundColor}
                        onChange={e => setThirdBackgroundColor(e.target.value)}
                      />
                      <Typography
                        color="secondary"
                        style={{ fontSize: 10 }}
                        id="continuous-slider"
                        gutterBottom
                        color="secondary"
                      >
                        Sombra 1
                      </Typography>
                    </Grid>
                    <Grid item xs style={{ margin: 0 }}>
                      <input
                        type="color"
                        className="cc-colorpicker"
                        style={{
                          background: "none",
                          borderColor: titleStyleColor
                        }}
                        value={secondBackgroundColor}
                        onChange={e => setSecondBackgroundColor(e.target.value)}
                      />
                      <Typography
                        color="secondary"
                        style={{ fontSize: 10 }}
                        id="continuous-slider"
                        gutterBottom
                      >
                        Sombra 2
                      </Typography>
                    </Grid>
                    <Grid item xs style={{ margin: 0 }}>
                      <input
                        type="color"
                        className="cc-colorpicker"
                        style={{
                          background: "none",
                          borderColor: titleStyleColor
                        }}
                        value={secondBackgroundColor}
                        onChange={e => setSecondBackgroundColor(e.target.value)}
                      />
                      <Typography
                        color="secondary"
                        style={{ fontSize: 10 }}
                        id="continuous-slider"
                        gutterBottom
                      >
                        Otro 1
                      </Typography>
                    </Grid>
                    <Grid item xs style={{ margin: 0 }}>
                      <input
                        type="color"
                        className="cc-colorpicker"
                        style={{
                          background: "none",
                          borderColor: titleStyleColor
                        }}
                        value={secondBackgroundColor}
                        onChange={e => setSecondBackgroundColor(e.target.value)}
                      />
                      <Typography
                        color="secondary"
                        style={{ fontSize: 10 }}
                        id="continuous-slider"
                        gutterBottom
                      >
                        Otro 2
                      </Typography>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel
            style={{ width: "100%", background: "#1D2C41" }}
            expanded={expanded === "panel5"}
            onChange={handlePanelChange("panel5")}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
            >
              <Typography
                color="secondary"
                style={{ margin: 5 }}
                id="continuous-slider"
                gutterBottom
              >
                FONDO
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ flexDirection: "column" }}>
              <Grid item xs>
                <Paper style={{ backgroundColor: "#334463", padding: 10 }}>
                  <Button color="secondary">
                    <FormatColorFillIcon />
                  </Button>
                  <Button style={{ fontSize: 10 }} color="secondary">
                    Tamaño
                  </Button>
                  <Button style={{ fontSize: 10 }} color="secondary">
                    Repeticion
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs style={{ margin: 10 }}>
                <Paper style={{ padding: 10, backgroundColor: "#334463" }}>
                  <Typography
                    color="secondary"
                    style={{ fontSize: 10 }}
                    id="continuous-slider"
                    gutterBottom
                  >
                    LO DE ELEGIR FOTO Y TEXTURA PONERLO IGUAL A COMO YA ESTA
                  </Typography>
                </Paper>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </ThemeProvider>
      </Grid>
    </Paper>
  );
}
