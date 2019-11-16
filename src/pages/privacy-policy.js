import React from 'react';
// MUI
import { makeStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// component
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const useStyles = makeStyles(theme => ({
  root: {
    color: '#c5c1b9',
    maxWidth: 620,
    margin: "auto",
  }
}))
export default function PrivacyPolicy() {
  const classes = useStyles()
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        slug="https://ismailopatola.io/privacy-policy"
        description="Information about copyrights, terms & conditions of my website, mobile developer services"
      />

      <Box component="section" className={classes.root}>
        <Box component="article">
          <Typography variant="h1">Privacy Policy</Typography>

          <Typography component="small">Effective date: November 15, 2019</Typography>

          <Typography paragraph>Ismail Opatola operates the ismailopatola.io website.</Typography>

          <Typography paragraph>
            This page informs you of my policies regarding the collection, use, and disclosure of
            personal data when you use my Service and the choices you have associated with that
            data. My Privacy Policy for ISMAILOPATOLA.IO is created with the help of the
            {' '}
            <MuiLink href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php">
              Free Privacy Policy Generator
            </MuiLink>
            .
          </Typography>

          <Typography paragraph>
            I use your data to provide and improve the Service. By using the Service, you agree to
            the collection and use of information in accordance with this policy. Unless otherwise
            defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings
            as in my Terms and Conditions, accessible from ismailopatola.io
          </Typography>
          <Box component="article">
            <Typography variant="h2">Information Collection And Use</Typography>

            <Typography paragraph>
              I collect several different types of information for various purposes to provide and
              improve my Service to you.
            </Typography>

            <Box component="article">
              <Typography variant="h3">Types of Data Collected</Typography>

              <Typography variant="h4">Personal Data</Typography>

              <Typography paragraph>
                While using my Service, I may ask you to provide me with certain personally
                identifiable information that can be used to contact or identify you ("Personal
                Data"). Personally identifiable information may include, but is not limited to:
              </Typography>

              <List>
                <ListItem>Email address</ListItem>
                <ListItem>First name and last name</ListItem>
                <ListItem>Phone number</ListItem>
                <ListItem>Cookies and Usage Data</ListItem>
              </List>

              <Typography variant="h4">Usage Data</Typography>

              <Typography paragraph>
                I may also collect information how the Service is accessed and used ("Usage Data").
                This Usage Data may include information such as your computer's Internet Protocol
                address (e.g. IP address), browser type, browser version, the pages of my Service
                that you visit, the time and date of your visit, the time spent on those pages,
                unique device identifiers and other diagnostic data.
              </Typography>

              <Typography variant="h4">Tracking & Cookies Data</Typography>
              <Typography paragraph>
                I use cookies and similar tracking technologies to track the activity on my Service
                and hold certain information.
              </Typography>
              <Typography paragraph>
                Cookies are files with small amount of data which may include an anonymous unique
                identifier. Cookies are sent to your browser from a website and stored on your
                device. Tracking technologies also used are beacons, tags, and scripts to collect
                and track information and to improve and analyze my Service.
              </Typography>
              <Typography paragraph>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is
                being sent. However, if you do not accept cookies, you may not be able to use some
                portions of my Service.
              </Typography>
              <Typography paragraph>Examples of Cookies I use:</Typography>
              <List>
                <ListItem>
                  <strong>Session Cookies.</strong>
                  {' '}
We use Session Cookies to operate my Service.
                </ListItem>
                <ListItem>
                  <strong>Preference Cookies.</strong>
                  {' '}
We use Preference Cookies to remember your
                  preferences and various settings.
                </ListItem>
                <ListItem>
                  <strong>Security Cookies.</strong>
                  {' '}
We use Security Cookies for security purposes.
                </ListItem>
              </List>
            </Box>
          </Box>

          <Box component="article">
            <Typography variant="h2">Use of Data</Typography>

            <Typography paragraph>
              Ismail Opatola uses the collected data for various purposes:
            </Typography>
            <List>
              <ListItem>To provide and maintain the Service</ListItem>
              <ListItem>To notify you about changes to my Service</ListItem>
              <ListItem>
                To allow you to participate in interactive features of my Service when you choose to
                do so
              </ListItem>
              <ListItem>To provide customer care and support</ListItem>
              <ListItem>
                To provide analysis or valuable information so that I can improve the Service
              </ListItem>
              <ListItem>To monitor the usage of the Service</ListItem>
              <ListItem>To detect, prevent and address technical issues</ListItem>
            </List>
          </Box>

          <Box component="article">
            <Typography variant="h2">Transfer Of Data</Typography>
            <Typography paragraph>
              Your information, including Personal Data, may be transferred to — and maintained on —
              computers located outside of your state, province, country or other governmental
              jurisdiction where the data protection laws may differ than those from your
              jurisdiction.
            </Typography>
            <Typography paragraph>
              If you are located outside Nigeria and choose to provide information to us, please
              note that I transfer the data, including Personal Data, to Nigeria and process it
              there.
            </Typography>
            <Typography paragraph>
              Your consent to this Privacy Policy followed by your submission of such information
              represents your agreement to that transfer.
            </Typography>
            <Typography paragraph>
              Ismail Opatola will take all steps reasonably necessary to ensure that your data is
              treated securely and in accordance with this Privacy Policy and no transfer of your
              Personal Data will take place to an organization or a country unless there are
              adequate controls in place including the security of your data and other personal
              information.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Disclosure Of Data</Typography>

            <Typography variant="h3">Legal Requirements</Typography>
            <Typography paragraph>
              Ismail Opatola may disclose your Personal Data in the good faith belief that such
              action is necessary to:
            </Typography>
            <List>
              <ListItem>To comply with a legal obligation</ListItem>
              <ListItem>To protect and defend the rights or property of Ismail Opatola</ListItem>
              <ListItem>
                To prevent or investigate possible wrongdoing in connection with the Service
              </ListItem>
              <ListItem>
                To protect the personal safety of users of the Service or the public
              </ListItem>
              <ListItem>To protect against legal liability</ListItem>
            </List>
          </Box>

          <Box component="article">
            <Typography variant="h2">Security Of Data</Typography>
            <Typography paragraph>
              The security of your data is important to us, but remember that no method of
              transmission over the Internet, or method of electronic storage is 100% secure. While
              we strive to use commercially acceptable means to protect your Personal Data, I cannot
              guarantee its absolute security.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Service Providers</Typography>
            <Typography paragraph>
              I may employ third party companies and individuals to facilitate my Service ("Service
              Providers"), to provide the Service on my behalf, to perform Service-related services
              or to assist me in analyzing how my Service is used.
            </Typography>
            <Typography paragraph>
              These third parties have access to your Personal Data only to perform these tasks on
              our behalf and are obligated not to disclose or use it for any other purpose.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Links To Other Sites</Typography>
            <Typography paragraph>
              my Service may contain links to other sites that are not operated by us. If you click
              on a third party link, you will be directed to that third party's site. I strongly
              advise you to review the Privacy Policy of every site you visit.
            </Typography>
            <Typography paragraph>
              I have no control over and assume no responsibility for the content, privacy policies
              or practices of any third party sites or services.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Children's Privacy</Typography>
            <Typography paragraph>
              my Service does not address anyone under the age of 18 ("Children").
            </Typography>
            <Typography paragraph>
              I do not knowingly collect personally identifiable information from anyone under the
              age of 18. If you are a parent or guardian and you are aware that your Children has
              provided me with Personal Data, please contact us. If I become aware that I have
              collected Personal Data from children without verification of parental consent, I take
              steps to remove that information from my servers.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Changes To This Privacy Policy</Typography>
            <Typography paragraph>
              I may update my Privacy Policy from time to time. I will notify you of any changes by
              posting the new Privacy Policy on this page.
            </Typography>
            <Typography paragraph>
              I will let you know via email and/or a prominent notice on my Service, prior to the
              change becoming effective and update the "effective date" at the top of this Privacy
              Policy.
            </Typography>
            <Typography paragraph>
              You are advised to review this Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this page.
            </Typography>
          </Box>
        </Box>
        <Box component="aside">
          <Typography variant="h2">Contact Us</Typography>
          <Typography paragraph>
            If you have any questions about this Privacy Policy, please contact us:
          </Typography>
          <List>
            <ListItem>By email: opatolamails@gmail.com</ListItem>
            <ListItem>By visiting this page on my website: ismailopatola.io</ListItem>

            <ListItem>By phone number: +234 8139178642</ListItem>
          </List>
        </Box>
      </Box>
    </Layout>
  );
}
