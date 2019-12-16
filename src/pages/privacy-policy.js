import React from 'react';
import clsx from 'clsx';
import { useStaticQuery, graphql } from "gatsby"

// MUI
import { makeStyles } from '@material-ui/core/styles';
import MuiLink from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Security from '@material-ui/icons/Security';
import LocalPhone from '@material-ui/icons/LocalPhone';
import Language from '@material-ui/icons/Language';
import Email from '@material-ui/icons/Email';

// component
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#c5c1b9',
    maxWidth: 620,
    margin: 'auto',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
    padding: theme.spacing(2),
    textAlign: 'center',
    '& h1, h2, h3, h4, h5, h6': {
      margin: theme.spacing(4, 0),
    },
    '& p': {
      marginBottom: theme.spacing(2),
    },
    '& > article': {
      margin: theme.spacing(10, 0),
      '& > article': {
        margin: theme.spacing(8, 0),
        '& > article': {
          margin: theme.spacing(8, 0),
        },
      },
    },
    '& ul': {
      margin: 'auto',
      textAlign: 'center',
      '&  li': {},
    },
  },
  listItemIcon: {
    color: '#ef6474',
  },
  mb1: {
    marginBottom: 5,
  },
  mt: {
    marginTop: 15,
  },
  block: {
    display: 'block',
  },
}));
export default function PrivacyPolicy() {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `
  )
  const classes = useStyles();
  const mb_block = clsx(classes.mb1, classes.block);
  return (
    <Layout>
      <SEO
        title="Privacy Policy"
        slug={`privacy-policy`}
        description="Information about copyrights, terms & conditions of my website, mobile developer services"
      />

      <Box component="section" className={classes.root}>
        <Box component="article">
          <Typography variant="h1">Privacy Policy</Typography>

          <Box component="small" className={mb_block}>
            Effective date: November 15, 2019
          </Box>

          <Typography paragraph className={clsx(mb_block, classes.mt)}>
            Ismail Opatola operates the ismailopatola.io website.
          </Typography>

          <Typography paragraph className={mb_block}>
            This page informs you of my policies regarding the collection, use, and disclosure of
            personal data when you use my service and the choices you have associated with that
            data. My Privacy Policy for ISMAILOPATOLA.IO is created with the help of the
            {' '}
            <MuiLink
              color="textSecondary"
              href="https://www.freeprivacypolicy.com/free-privacy-policy-generator.php"
            >
              Free Privacy Policy Generator
            </MuiLink>
            .
          </Typography>

          <Typography paragraph className={mb_block}>
            I use your data to provide and improve the service. By using the service, you agree to
            the collection and use of information in accordance with this policy. Unless otherwise
            defined in this privacy policy, terms used in this privacy policy have the same meanings
            as in my Terms and Conditions, accessible from ismailopatola.io
          </Typography>
          <Box component="article">
            <Typography variant="h2" gutterBottom>
              Information Collection And Use
            </Typography>

            <Typography paragraph gutterBottom>
              I collect several different types of information for various purposes to provide and
              improve my service to you.
            </Typography>

            <Box component="article">
              <Typography variant="h3">Types of Data Collected</Typography>

              <Typography variant="h4">Personal Data</Typography>

              <Typography paragraph>
                While using my service, I may ask you to provide me with certain personally
                identifiable information that can be used to contact or identify you (&quot;Personal
                Data&quot;). Personally identifiable information may include, but is not limited to:
              </Typography>

              <List dense className={classes.mb1}>
                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>
                    <Security />
                  </ListItemIcon>
                  <ListItemText>Email address</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>
                    <Security />
                  </ListItemIcon>
                  <ListItemText>First name and last name</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>
                    <Security />
                  </ListItemIcon>
                  <ListItemText>Phone number</ListItemText>
                </ListItem>
                <ListItem>
                  <ListItemIcon className={classes.listItemIcon}>
                    <Security />
                  </ListItemIcon>
                  <ListItemText>Cookies and Usage Data</ListItemText>
                </ListItem>
              </List>

              <Box component="article">
                <Typography variant="h4">Usage Data</Typography>

                <Typography paragraph>
                  I may also collect information how the service is accessed and used (&quot;Usage
                  Data&quot;). This Usage Data may include information such as your computer&apos;s Internet
                  Protocol address (e.g. IP address), browser type, browser version, the pages of my
                  service that you visit, the time and date of your visit, the time spent on those
                  pages, unique device identifiers and other diagnostic data.
                </Typography>
              </Box>
              <Box component="article">
                <Typography variant="h4">Tracking & Cookies Data</Typography>
                <Typography paragraph>
                  I use cookies and similar tracking technologies to track the activity on my
                  service and hold certain information.
                </Typography>
                <Typography paragraph>
                  Cookies are files with small amount of data which may include an anonymous unique
                  identifier. Cookies are sent to your browser from a website and stored on your
                  device. Tracking technologies also used are beacons, tags, and scripts to collect
                  and track information and to improve and analyze my service.
                </Typography>
                <Typography paragraph>
                  You can instruct your browser to refuse all cookies or to indicate when a cookie
                  is being sent. However, if you do not accept cookies, you may not be able to use
                  some portions of my service.
                </Typography>
                <Typography component="h5">Examples of Cookies I use:</Typography>
                <List dense>
                  <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>
                      <Security />
                    </ListItemIcon>
                    <ListItemText>
                      <strong>Session Cookies.</strong>
                      {' '}
We use Session Cookies to operate my
                      service.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>
                      <Security />
                    </ListItemIcon>
                    <ListItemText>
                      <strong>Preference Cookies.</strong>
                      {' '}
We use Preference Cookies to remember
                      your preferences and various settings.
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon className={classes.listItemIcon}>
                      <Security />
                    </ListItemIcon>
                    <ListItemText>
                      <strong>Security Cookies.</strong>
                      I use Security Cookies for security purposes.
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Box>
          </Box>

          <Box component="article">
            <Typography variant="h2">Use of Data</Typography>

            <Typography paragraph>
              Ismail Opatola uses the collected data for various purposes:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>To provide and maintain the service</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>To notify you about changes to my service</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>
                  To allow you to participate in interactive features of my service when you choose
                  to do so
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>To provide customer care and support</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>
                  To provide analysis or valuable information so that I can improve the service
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>To monitor the usage of the service</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>To detect, prevent and address technical issues</ListItemText>
              </ListItem>
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

            <Typography variant="h3" className={classes.mt}>
              Legal Requirements
            </Typography>
            <Typography paragraph>
              Ismail Opatola may disclose your Personal Data in the good faith belief that such
              action is necessary to:
            </Typography>
            <List dense>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>To comply with a legal obligation</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>
                  To protect and defend the rights or property of Ismail Opatola
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>
                  To prevent or investigate possible wrongdoing in connection with the service
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>
                  To protect the personal safety of users of the service or the public
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon className={classes.listItemIcon}>
                  <Security />
                </ListItemIcon>
                <ListItemText>To protect against legal liability</ListItemText>
              </ListItem>
            </List>
          </Box>

          <Box component="article">
            <Typography variant="h2">Security Of Data</Typography>
            <Typography paragraph>
              The security of your data is important to me, but remember that no method of
              transmission over the Internet, or method of electronic storage is 100% secure. While
              I strive to use commercially acceptable means to protect your Personal Data, I cannot
              guarantee its absolute security.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Service Providers</Typography>
            <Typography paragraph>
              I may employ third party companies and individuals to facilitate my service (&quot;service
              Providers&quot;), to provide the service on my behalf, to perform service-related services
              or to assist me in analyzing how my service is used.
            </Typography>
            <Typography paragraph>
              These third parties have access to your Personal Data only to perform these tasks on
              my behalf and are obligated not to disclose or use it for any other purpose.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Links To Other Sites</Typography>
            <Typography paragraph>
              My service may contain links to other sites that are not operated by me. If you click
              on a third party link, you will be directed to that third party&apos;s site. I strongly
              advise you to review the Privacy Policy of every site you visit.
            </Typography>
            <Typography paragraph>
              I have no control over and assume no responsibility for the content, privacy policies
              or practices of any third party sites or services.
            </Typography>
          </Box>

          <Box component="article">
            <Typography variant="h2">Children&apos;s Privacy</Typography>
            <Typography paragraph>
              my service does not address anyone under the age of 18 (&quot;Children&quot;).
            </Typography>
            <Typography paragraph>
              I do not knowingly collect personally identifiable information from anyone under the
              age of 18. If you are a parent or guardian and you are aware that your Children has
              provided me with Personal Data, please contact me. If I become aware that I have
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
              I will let you know via email and/or a prominent notice on my service, prior to the
              change becoming effective and update the &quot;effective date&quot; at the top of this privacy
              policy.
            </Typography>
            <Typography paragraph>
              You are advised to review this Privacy Policy periodically for any changes. Changes to
              this Privacy Policy are effective when they are posted on this page.
            </Typography>
          </Box>
        </Box>

        <Box component="aside">
          <Typography variant="h2">Contact Me</Typography>
          <Typography paragraph>
            If you have any questions about this privacy policy, please contact me:
          </Typography>
          <List dense>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                <Email />
              </ListItemIcon>
              <ListItemText>By email: opatolamails@gmail.com</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                <Language />
              </ListItemIcon>
              <ListItemText>By visiting this page on my website: ismailopatola.io</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon className={classes.listItemIcon}>
                <LocalPhone />
              </ListItemIcon>
              <ListItemText>By phone number: +234 8139178642</ListItemText>
            </ListItem>
          </List>
        </Box>
      </Box>
    </Layout>
  );
}
