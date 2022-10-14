import React from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { FaCode, FaGraduationCap, FaLaptopCode  } from 'react-icons/fa';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const Experience = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    return (
      <div className="experience-container" id="experience">
        <span
          className="experience-vl"
          data-aos="fade-left"
          data-aos-duration="2000"
        />
        <p className="experience-header">Experience</p>
        <div className="experience-tabs">
        <Box
      sx={{ flexGrow: 1, display: 'flex', height: 224 }}
    >
          <Tabs
            orientation="vertical"
            value={value}
            onChange={handleChange}
            sx={{ borderLeftWidth: 1, borderColor: "#ffffff36", '& .MuiButtonBase-root': {
                color: '#ffffff78;',
                fontFamily: 'Barlow',
                fontSize: 23,
                textTransform: 'initial',
              }, '& .MuiTabs-indicator': {
                backgroundColor: "#fff",
                left: 0
              },
            '& .MuiButtonBase-root.Mui-selected': {
                color: '#fff'
            }}}
          >
            <Tab label="Qualifications" {...a11yProps(0)} />
            <Tab sx={{marginTop: 2}} label="Work" {...a11yProps(1)}/>
          </Tabs>
          <TabPanel value={value} index={0}>
          <FaGraduationCap /> MSc in Big Data Analytics, 2020 - 2021 <br />
          <FaGraduationCap /> BSc in Computer Science for Games, 2016 - 2020
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FaLaptopCode /> Web Developer <br />
        Twinkl Educational Publishing, Sheffield<br />
        Jun 2018 - Jul 2019 <br />
        <ul>
            <li>Self-taught Reactjs</li>
            <li>Refactored an existing PHP product to utilise Reactjs as a front end</li>  
            <li>Used Redux for state management</li>
            <li>Gained knowledge of version control (Sourcetree) and the deployment process when working on a larger scale project</li>
            <li>Worked to company deadlines with an Agile approach</li>
        </ul>
      </TabPanel>
          </Box>
        </div>
        <button className="experience-button">
        <a href="https://laura-nias.github.io/src/files/LauraBooth-NiasCV.pdf" target="_blank">My CV</a></button>
      </div>
    );
}

export default Experience;