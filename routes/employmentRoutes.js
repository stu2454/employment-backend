const express = require('express');
const Employment = require('../models/Employment');
const Participant = require('../models/Participants'); // Add Participants model
const Provider = require('../models/Providers'); // Add Providers model
const router = express.Router();

/*
// POST route to add new employment data
router.post('/employment', async (req, res) => {
  console.log('Received employment data:', req.body); // Log the incoming data from the request

  try {
    const employmentData = new Employment(req.body);
    const savedData = await employmentData.save();
    console.log('Employment data saved to MongoDB:', savedData); // Log the data that was saved

    res.status(201).json(savedData);
  } catch (error) {
    console.error('Error saving employment data to MongoDB:', error); // Log any errors
    res.status(400).json({ message: error.message });
  }
});

// GET route to retrieve all employment data
router.get('/employment', async (req, res) => {
  try {
    const employmentData = await Employment.find();
    console.log('Retrieved employment data:', employmentData); // Log retrieved data
    res.json(employmentData);
  } catch (error) {
    console.error('Error retrieving employment data from MongoDB:', error); // Log any retrieval errors
    res.status(500).json({ message: error.message });
  }
});
*/

// POST route to add new participant data
router.post('/participants', async (req, res) => {
  console.log('Received participant data:', req.body); // Log the incoming data from the request

  try {
    // Extract participant data and convert date fields
    const participantData = req.body;
    participantData.dateOfBirth = new Date(participantData.dateOfBirth);
    participantData.employmentServiceStartDate = new Date(participantData.employmentServiceStartDate);
    participantData.reportingPeriod_periodStart = new Date(participantData.reportingPeriod_periodStart);
    participantData.reportingPeriod_periodEnd = new Date(participantData.reportingPeriod_periodEnd);
    participantData.finalOutcome_exitDate = new Date(participantData.finalOutcome_exitDate);
    participantData.employmentDetails_startDate = new Date(participantData.employmentDetails_startDate);

    // Convert boolean fields if necessary
    participantData.finalOutcome_continueSupportNextPeriod = participantData.finalOutcome_continueSupportNextPeriod === 'yes';
    participantData.finalOutcome_outcomeAtExit = participantData.finalOutcome_outcomeAtExit === 'yes';
    participantData.employmentDetails_usingNDISSupportsInEmployment = participantData.employmentDetails_usingNDISSupportsInEmployment === 'yes';
    participantData.employmentDetails_supportedWages = participantData.employmentDetails_supportedWages === 'yes';

    // Create and save the participant document
    const newParticipant = new Participant(participantData);
    const savedData = await newParticipant.save();
    console.log('Participant data saved to MongoDB:', savedData); // Log the data that was saved

    res.status(201).json(savedData);
  } catch (error) {
    console.error('Error saving participant data to MongoDB:', error); // Log the general error

    // Log specific validation error details if it's a validation error
    if (error.code === 121) { 
      console.log("Validation error details:", JSON.stringify(error.errInfo.details, null, 2));
    }

    res.status(400).json({ message: error.message });
  }
});


// GET route to retrieve all participant data
router.get('/participants', async (req, res) => {
  try {
    const participantData = await Participant.find();
    console.log('Retrieved participant data:', participantData); // Log retrieved data
    res.json(participantData);
  } catch (error) {
    console.error('Error retrieving participant data from MongoDB:', error); // Log any retrieval errors
    res.status(500).json({ message: error.message });
  }
});

// POST route to add new provider data
router.post('/providers', async (req, res) => {
  console.log('Received provider data:', req.body); // Log the incoming data from the request

  try {
    const providerData = new Provider(req.body);
    const savedData = await providerData.save();
    console.log('Provider data saved to MongoDB:', savedData); // Log the data that was saved

    res.status(201).json(savedData);
  } catch (error) {
    console.error('Error saving provider data to MongoDB:', error); // Log any errors
    res.status(400).json({ message: error.message });
  }
});

// GET route to retrieve all provider data
router.get('/providers', async (req, res) => {
  try {
    const providerData = await Provider.find();
    console.log('Retrieved provider data:', providerData); // Log retrieved data
    res.json(providerData);
  } catch (error) {
    console.error('Error retrieving provider data from MongoDB:', error); // Log any retrieval errors
    res.status(500).json({ message: error.message });
  }
});

// Test route to check connection
router.get('/test', (req, res) => {
  console.log('Test route accessed');
  res.status(200).json({ message: "Connection to backend is working!" });
});

module.exports = router;
