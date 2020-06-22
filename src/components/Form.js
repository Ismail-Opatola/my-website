import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import MuiLink from "@material-ui/core/Link"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import SendIcon from "@material-ui/icons/Send"
import Dialog from "@material-ui/core/Dialog"
import DialogActions from "@material-ui/core/DialogActions"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogTitle from "@material-ui/core/DialogTitle"
import Slide from "@material-ui/core/Slide"

const Transition = React.forwardRef(function Transition(props, ref) {
 return <Slide direction="up" ref={ref} {...props} />
})

const useStyles = makeStyles(theme => ({
 root: {
  maxWidth: 620,
  color: "#c5c1b9",
  margin: "auto",

  "& .form_text": {
   maxWidth: 620,
   margin: "0 auto",
   textAlign: "center",
   paddingBottom: theme.spacing(6),
   "& h4": {
    fontSize: "30px",
    lineHeight: 1.1,
    fontWeight: 600,
    paddingBottom: theme.spacing(4),
   },
  },
 },
 dialogTile: {
  fontSize: "inherit",
  fontWeight: 900,
 },
 frame: {
  width: "100%",
  height: "52.5rem",
  border: "none",
  margin: "auto",
  overflow: "visible",
  fontSize: "19",
 },
}))

// TODO: replace google_form with custom form
const Form = () => {
 const classes = useStyles()

 const [state, setState] = React.useReducer(
  (state, newState) => ({ ...state, ...newState }),
  {
   open: false,
   values: {
    email: "",
    name: "",
    message: "",
    tel: "",
   },
  }
 )

 const ContactForm = React.useRef()

 //  React.useEffect(() => {
 //   ContactForm.current = React.createRef()
 //  })

 const handleChange = event => {
  const id = event.target.id
  setState({
   values: {
    ...state.values,
    [id]: event.target.value,
   },
  })
 }

 const clearState = () => {
  setState({
   values: {
    email: "",
    name: "",
    message: "",
    tel: "",
   },
  })
 }
 const handleClickOpen = () => {
  setState({ open: true })
 }

 const handleClose = () => {
  setState({ open: false })
 }

 const handleSubmit = event => {
  event.preventDefault()

  console.log("state: ", state)

  const form = ContactForm.current

  fetch("/", {
   method: "POST",
   headers: { "Content-Type": "application/x-www-form-urlencoded" },
   body: encode({
    "form-name": form.getAttribute("name"),
    ...state.values,
   }),
  })
   .then(clearState)
   .then(handleClickOpen)
   .catch(error => console.log(error))
 }

 const encode = data => {
  return Object.keys(data)
   .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
   .join("&")
 }

 return (
  <Box className={classes.root}>
   <Box className="form_text">
    <Typography variant="h4" align="center">
     Thank you for your time!
    </Typography>
    <Typography paragraph>
     Are you looking to hire or need a website, mobile application for your
     businnes? <b>what are you&apos;r business requirement?</b> Please let me
     know how I could help
    </Typography>
   </Box>
   <Box>
    <Dialog
     open={state.open}
     TransitionComponent={Transition}
     keepMounted
     onClose={handleClose}
     aria-labelledby="alert-dialog-slide-title"
     aria-describedby="alert-dialog-slide-description"
    >
     <DialogTitle
      disableTypography
      id="alert-dialog-slide-title"
      className={classes.dialogTitle}
     >
      Successfully Sent
     </DialogTitle>
     <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
       I have received your message and would like to thank you for writing to
       me. If your inquiry is urgent, please use the telephone number listed
       below to talk to me. Otherwise, I will reply by email as soon as
       possible.
      </DialogContentText>
      <DialogContentText>Talk to you soon,</DialogContentText>
      <DialogContentText>Ismail Opatola</DialogContentText>
      <DialogContentText gutterBottom color="textPrimary">
       <MuiLink
        href="tel:+234-813-917-8642"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Make a direct call to Ismail"
        underline="always"
        style={{ color: "#c5c1b9" }}
       >
        +234-813-917-8642
       </MuiLink>
      </DialogContentText>
      <DialogContentText>Email</DialogContentText>
      <DialogContentText color="textPrimary">
       <MuiLink
        href="mailto:opatolamails@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Send mail"
        underline="always"
        style={{ color: "#c5c1b9" }}
       >
        opatolamails@gmail.com
       </MuiLink>
      </DialogContentText>
     </DialogContent>
     <DialogActions>
      <Button onClick={handleClose} fullWidth>
       close
      </Button>
     </DialogActions>
    </Dialog>

    <form
     ref={ContactForm}
     name="Contact Form"
     method="POST"
     data-netlify="true"
     data-netlify-honeypot="bot-field"
     onSubmit={event => handleSubmit(event)}
     //  action="/sucess"
    >
     <input type="hidden" name="bot-field" />
     <input type="hidden" name="form-name" value="Contact Form" />
     <Box p={3}>
      <TextField
       required
       fullWidth
       onChange={event => handleChange(event)}
       id="email"
       name="email"
       label="Business email"
       type="email"
       placeholder="enter your prefered email"
       variant="filled"
       value={state.values["email"]}
      />
     </Box>
     <Box p={3}>
      <TextField
       fullWidth
       required
       onChange={event => handleChange(event)}
       id="name"
       name="name"
       label="Business name"
       placeholder="enter your business name"
       variant="filled"
       value={state.values["name"]}
      />
     </Box>
     <Box p={3}>
      <TextField
       fullWidth
       required
       onChange={event => handleChange(event)}
       id="message"
       name="message"
       label="Description"
       multiline
       variant="filled"
       placeholder="describe your business requirements"
       value={state.values["message"]}
      />
     </Box>
     <Box p={3}>
      <TextField
       fullWidth
       onChange={event => handleChange(event)}
       id="tel"
       name="tel"
       label="Phone number (optional)"
       placeholder="+234 000 000 0000"
       variant="filled"
       value={state.values["tel"]}
      />
     </Box>
     <Box p={3}>
      <Button
       variant="contained"
       //  color="primary"
       className={classes.button}
       endIcon={<SendIcon />}
       fullWidth
       type="submit"
      >
       Send
      </Button>
     </Box>
    </form>
   </Box>
  </Box>
 )
}

export default Form
